import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openDb } from '../src/db.js';
import { build } from '../src/server.js';
import { youtubeEmbed, safePdfUrl, renderMarkdown } from '../src/content.js';

const BASE = 'http://localhost:3100';
const form = (o) => new URLSearchParams(o).toString();
const H = { 'content-type': 'application/x-www-form-urlencoded', origin: BASE };

async function setup() {
  const db = openDb(':memory:');
  db.prepare("INSERT INTO courses (slug,title_id,title_en,published) VALUES ('c','K','C',1)").run();
  db.prepare("INSERT INTO lessons (course_id,position,title_id,title_en,body_id) VALUES (1,1,'L1','L1','# hi')").run();
  db.prepare("INSERT INTO lessons (course_id,position,title_id,title_en) VALUES (1,2,'L2','L2')").run();
  return build({ db });
}
const sid = (res) => res.cookies.find((c) => c.name === 'sid')?.value;

test('alur: daftar → ikut kursus → selesai semua pelajaran', async () => {
  const app = await setup();
  const r = await app.inject({ method: 'POST', url: '/register', headers: H,
    payload: form({ name: 'Budi', email: 'b@x.id', password: 'katasandi123' }) });
  assert.equal(r.statusCode, 302);
  const cookies = { sid: sid(r) };
  const go = (method, url) => app.inject({ method, url, headers: H, cookies });

  assert.equal((await go('GET', '/courses/c/lessons/1')).statusCode, 302, 'belum enroll → redirect');
  await go('POST', '/courses/c/enroll');
  assert.equal((await go('GET', '/courses/c/lessons/1')).statusCode, 200);
  await go('POST', '/courses/c/lessons/1/complete');
  await go('POST', '/courses/c/lessons/2/complete');
  const e = app.db.prepare('SELECT completed_at FROM enrollments').get();
  assert.ok(e.completed_at);
});

test('login salah ditolak, POST lintas-origin ditolak', async () => {
  const app = await setup();
  const bad = await app.inject({ method: 'POST', url: '/login', headers: H, payload: form({ email: 'a@b.c', password: 'x' }) });
  assert.equal(bad.statusCode, 401);
  const xo = await app.inject({ method: 'POST', url: '/login', headers: { ...H, origin: 'https://evil.example' }, payload: form({ email: 'a', password: 'b' }) });
  assert.equal(xo.statusCode, 403);
});

test('sanitasi konten', () => {
  assert.equal(youtubeEmbed('https://youtu.be/dQw4w9WgXcQ'), 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');
  assert.equal(youtubeEmbed('https://evil.com/x'), null);
  assert.equal(safePdfUrl('javascript:alert(1)'), null);
  assert.equal(safePdfUrl('/files/a.pdf'), '/files/a.pdf');
  assert.ok(!renderMarkdown('<script>alert(1)</script>hi').includes('<script'));
});

// ---- admin, sertifikat, slide ----
import { hashPassword } from '../src/auth.js';

async function login(app, email, password) {
  const r = await app.inject({ method: 'POST', url: '/login', headers: H, payload: form({ email, password }) });
  return { sid: r.cookies.find((c) => c.name === 'sid')?.value };
}

test('admin: hanya admin; buat kursus, pelajaran, urutan, validasi URL', async () => {
  const app = await setup();
  app.db.prepare("INSERT INTO users (email,name,password_hash,role) VALUES ('a@x.id','Admin',?, 'admin')").run(hashPassword('adminpass123'));
  app.db.prepare("INSERT INTO users (email,name,password_hash) VALUES ('s@x.id','Siswa',?)").run(hashPassword('siswapass123'));
  const stu = await login(app, 's@x.id', 'siswapass123');
  assert.equal((await app.inject({ url: '/admin', cookies: stu })).statusCode, 403);
  assert.equal((await app.inject({ url: '/admin' })).statusCode, 302);

  const adm = await login(app, 'a@x.id', 'adminpass123');
  const post = (url, o, h = H) => app.inject({ method: 'POST', url, headers: h, cookies: adm, payload: form(o) });
  assert.equal((await app.inject({ url: '/admin', cookies: adm })).statusCode, 200);
  assert.equal((await post('/admin/courses', { slug: 'k2', title_id: 'K2', title_en: 'C2' }, { ...H, origin: 'https://evil.example' })).statusCode, 403);
  assert.equal((await post('/admin/courses', { slug: 'BAD SLUG', title_id: 'K', title_en: 'C' })).statusCode, 400);
  const c = await post('/admin/courses', { slug: 'k2', title_id: 'K2', title_en: 'C2', published: '1' });
  assert.equal(c.statusCode, 302);
  const cid = Number(c.headers.location.split('/').pop());

  const bad = await post(`/admin/courses/${cid}/lessons`, { title_id: 'V', title_en: 'V', kind: 'youtube', url: 'https://evil.com/x' });
  assert.equal(bad.statusCode, 400);
  for (const t of ['A', 'B', 'C'])
    await post(`/admin/courses/${cid}/lessons`, { title_id: t, title_en: t, kind: 'youtube', url: 'https://youtu.be/dQw4w9WgXcQ' });
  const order = () => app.db.prepare('SELECT title_id FROM lessons WHERE course_id=? ORDER BY position').all(cid).map((r) => r.title_id).join('');
  assert.equal(order(), 'ABC');
  const idB = app.db.prepare("SELECT id FROM lessons WHERE course_id=? AND title_id='B'").get(cid).id;
  await post(`/admin/lessons/${idB}/move`, { dir: 'up' });
  assert.equal(order(), 'BAC');
  await post(`/admin/lessons/${idB}/delete`, {});
  assert.equal(order(), 'AC');
  assert.deepEqual(app.db.prepare('SELECT position FROM lessons WHERE course_id=? ORDER BY position').all(cid).map((r) => r.position), [1, 2]);
});

test('sertifikat: terbit saat selesai, halaman verifikasi dan PDF', async () => {
  const app = await setup();
  const r = await app.inject({ method: 'POST', url: '/register', headers: H, payload: form({ name: 'Siti Aminah', email: 'siti@x.id', password: 'katasandi123' }) });
  const cookies = { sid: sid(r) };
  const go = (m, u) => app.inject({ method: m, url: u, headers: H, cookies });
  await go('POST', '/courses/c/enroll');
  await go('POST', '/courses/c/lessons/1/complete');
  assert.equal(app.db.prepare('SELECT cert_code FROM enrollments').get().cert_code, null, 'belum selesai semua');
  await go('POST', '/courses/c/lessons/2/complete');
  const { cert_code: code, cert_name } = app.db.prepare('SELECT cert_code, cert_name FROM enrollments').get();
  assert.match(code, /^MRI-[A-Z2-9]{10}$/);
  assert.equal(cert_name, 'Siti Aminah');
  await go('POST', '/courses/c/lessons/2/complete');
  assert.equal(app.db.prepare('SELECT cert_code FROM enrollments').get().cert_code, code, 'kode tidak berubah');

  const v = await app.inject({ url: `/certificate/${code}` });
  assert.equal(v.statusCode, 200);
  assert.ok(v.body.includes('Siti Aminah'));
  const pdf = await app.inject({ url: `/certificate/${code}/pdf` });
  assert.equal(pdf.statusCode, 200);
  assert.equal(pdf.headers['content-type'], 'application/pdf');
  assert.equal(pdf.rawPayload.subarray(0, 4).toString(), '%PDF');
  const en = await app.inject({ url: `/certificate/${code}/pdf?lang=en` });
  assert.equal(en.statusCode, 200);
  assert.equal(en.rawPayload.subarray(0, 4).toString(), '%PDF');
  assert.notDeepEqual(en.rawPayload.length, 0);
  assert.equal((await app.inject({ url: '/certificate/MRI-TIDAKADA/pdf' })).statusCode, 404);
});

test('slide disajikan dengan sandbox', async () => {
  const app = await setup();
  const r = await app.inject({ url: '/slides/r/modul-01.html' });
  assert.equal(r.statusCode, 200);
  assert.match(r.headers['content-security-policy'], /^sandbox allow-scripts/);
  assert.ok(!r.body.includes('<aside class="notes"'));
});

test('halaman depan: pengantar tampil sebelum daftar kursus, dua bahasa', async () => {
  const app = await setup();
  const id = (await app.inject({ url: '/' })).body;
  assert.ok(id.indexOf('Belajar riset ekologi') > -1 && id.indexOf('Cara belajarnya') > -1);
  assert.ok(id.indexOf('Belajar riset ekologi') < id.indexOf('id="kursus"'), 'pengantar sebelum kursus');
  assert.ok(id.includes('/courses/c'));
  const en = (await app.inject({ url: '/?lang=en' })).body;
  assert.ok(en.includes('Learn ecological and blue carbon research') && en.includes('How it works'));
});

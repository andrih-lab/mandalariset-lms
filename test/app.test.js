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

// Impor materi tertulis ke satu kursus dari folder berisi file Markdown per modul.
//   node src/cli/import-markdown.js <slug-kursus> <folder> [--bagian "Materi"] [--judul "..."] [--judul-en "..."]
//                                   [--deskripsi "..."] [--deskripsi-en "..."]  (metadata hanya dipakai saat kursus dibuat)
// - Urutan mengikuti nama berkas (01-xxx.md, 02-xxx.md, ... atau modul-01.md).
// - Judul pelajaran = baris "# Judul" pertama; sisanya jadi isi (Markdown, tabel ikut tampil).
// - Idempoten per judul: menjalankan ulang memperbarui teks pelajaran bertajuk sama; yang baru ditaruh di akhir.
//   Urutan yang sudah Anda atur di /admin (termasuk video yang disisipkan) tidak diubah.
// - Kursus dibuat (draf) bila slug belum ada.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { openDb } from '../db.js';

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : ''; };
const section = opt('--bagian');
const meta = { judul: opt('--judul'), judulEn: opt('--judul-en'), desk: opt('--deskripsi'), deskEn: opt('--deskripsi-en') };
const [slug, dir] = args;
if (!slug || !dir) { console.error('Pemakaian: import-markdown.js <slug> <folder> [--bagian "Nama"]'); process.exit(1); }

const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.md')).sort((a, b) => a.localeCompare(b, 'id', { numeric: true }));
if (!files.length) { console.error('Tidak ada berkas .md di', dir); process.exit(1); }

const db = openDb();
let course = db.prepare('SELECT id FROM courses WHERE slug=?').get(slug);
if (!course) {
  db.prepare('INSERT INTO courses (slug,title_id,title_en,desc_id,desc_en,published) VALUES (?,?,?,?,?,0)')
    .run(slug, meta.judul || slug, meta.judulEn || '', meta.desk, meta.deskEn);
  course = db.prepare('SELECT id FROM courses WHERE slug=?').get(slug);
  console.log('Kursus baru (draf):', slug, '- ubah judulnya di /admin');
}
const find = db.prepare("SELECT id FROM lessons WHERE course_id=? AND kind='text' AND title_id=?");
const upd = db.prepare('UPDATE lessons SET body_id=?, section=? WHERE id=?');
const ins = db.prepare(
  `INSERT INTO lessons (course_id, position, section, title_id, title_en, kind, body_id)
   VALUES (?, (SELECT COALESCE(MAX(position),0)+1 FROM lessons WHERE course_id=?), ?, ?, '', 'text', ?)`
);
db.transaction(() => {
  for (const f of files) {
    const md = readFileSync(join(dir, f), 'utf8');
    const m = md.match(/^#\s+(.+)$/m);
    const title = (m ? m[1] : f.replace(/\.md$/i, '')).trim();
    const body = m ? md.replace(m[0], '').trim() : md.trim();
    const old = find.get(course.id, title);
    if (old) upd.run(body, section, old.id); else ins.run(course.id, course.id, section, title, body);
    console.log(old ? 'diperbarui' : 'baru      ', title, `(${body.length} karakter)`);
  }
})();
console.log('Selesai. Tambahkan video YouTube lewat /admin; atur urutan dengan tombol ▲▼.');

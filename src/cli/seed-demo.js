// Membuat satu kursus contoh (idempoten) untuk uji coba lokal.
import { openDb } from '../db.js';

const db = openDb();
db.prepare(
  `INSERT OR IGNORE INTO courses (slug, title_id, title_en, desc_id, desc_en, published)
   VALUES ('contoh', 'Kursus Contoh', 'Sample Course',
           'Kursus contoh untuk menguji LMS.', 'A sample course to test the LMS.', 1)`
).run();
const { id } = db.prepare("SELECT id FROM courses WHERE slug='contoh'").get();
const ins = db.prepare(
  `INSERT OR IGNORE INTO lessons (course_id, position, section, title_id, title_en, kind, body_id, body_en, url)
   VALUES (?,?,?,?,?,?,?,?,?)`
);
ins.run(id, 1, 'Pengantar', 'Selamat datang', 'Welcome', 'text', '# Halo\n\nIni pelajaran **teks**.', '# Hello\n\nThis is a **text** lesson.', '');
ins.run(id, 2, 'Pengantar', 'Video', 'Video', 'youtube', '', '', 'https://youtu.be/dQw4w9WgXcQ');
console.log('Kursus contoh siap: /courses/contoh');

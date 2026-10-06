// Mengisi kursus "R untuk Peneliti di Era AI" dari slide di slides/r/ (idempoten; aman dijalankan ulang).
// Video YouTube ditambahkan sendiri lewat panel admin.
import { openDb } from '../db.js';

const MODULES = [
  ['Modul 0. Orientasi dan persiapan', 'Module 0. Orientation and setup'],
  ['Modul 1. Dasar R untuk membaca kode', 'Module 1. R basics for reading code'],
  ['Modul 2. Data: impor dan merapikan', 'Module 2. Data: import and tidy'],
  ['Modul 3. Visualisasi', 'Module 3. Visualization'],
  ['Modul 4. Statistik dasar', 'Module 4. Basic statistics'],
  ['Modul 5. Model lanjutan: GLM dan model campuran', 'Module 5. Advanced models: GLM and mixed models'],
  ['Modul 6. Jalur bidang', 'Module 6. Field tracks'],
  ['Modul 7. AI sebagai rekan analisis', 'Module 7. AI as an analysis partner'],
  ['Modul 8. Reprodusibilitas dan pelaporan', 'Module 8. Reproducibility and reporting'],
];

const db = openDb();
db.prepare(
  `INSERT OR IGNORE INTO courses (slug, title_id, title_en, desc_id, desc_en, published)
   VALUES ('r-untuk-peneliti', 'R untuk Peneliti di Era AI', 'R for Researchers in the AI Era',
           'Kursus daring R untuk peneliti: dari membaca kode, merapikan data, visualisasi, statistik, hingga pelaporan yang reprodusibel, dengan AI sebagai rekan analisis.',
           'An online R course for researchers: from reading code, tidying data, visualization and statistics to reproducible reporting, with AI as an analysis partner.', 0)`
).run();
const { id } = db.prepare("SELECT id FROM courses WHERE slug='r-untuk-peneliti'").get();
const up = db.prepare(
  `INSERT INTO lessons (course_id, position, section, title_id, title_en, kind, url)
   VALUES (?,?,?,?,?,'slides',?)
   ON CONFLICT(course_id, position) DO UPDATE SET title_id=excluded.title_id, title_en=excluded.title_en, url=excluded.url`
);
MODULES.forEach(([tid, ten], i) => up.run(id, i + 1, `Minggu ${i + 1}`, `Slide ${tid}`, `Slides ${ten}`, `/slides/r/modul-0${i}.html`));
console.log('Kursus R siap (status: draf). Atur "Tayang" di /admin.');

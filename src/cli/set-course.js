// Pemakaian: node src/cli/set-course.js <slug> [--harga 250000] [--tayang | --draf]
// Setara dengan mengubah kursus di /admin; berguna saat tidak bisa login lewat browser.
import { openDb } from '../db.js';

const [slug, ...rest] = process.argv.slice(2);
const flag = (n) => rest.includes(n);
const val = (n) => { const i = rest.indexOf(n); return i >= 0 ? rest[i + 1] : undefined; };
if (!slug) { console.error('Isi slug kursus.'); process.exit(1); }

const db = openDb();
const c = db.prepare('SELECT * FROM courses WHERE slug=?').get(slug);
if (!c) { console.error('Kursus tidak ditemukan:', slug); process.exit(1); }
if (val('--harga') !== undefined) {
  const p = Number(val('--harga'));
  if (!Number.isInteger(p) || p < 0 || p > 100000000) { console.error('Harga tidak valid.'); process.exit(1); }
  db.prepare('UPDATE courses SET price_idr=? WHERE id=?').run(p, c.id);
}
if (flag('--tayang')) db.prepare('UPDATE courses SET published=1 WHERE id=?').run(c.id);
if (flag('--draf')) db.prepare('UPDATE courses SET published=0 WHERE id=?').run(c.id);
const r = db.prepare('SELECT slug, published, price_idr FROM courses WHERE id=?').get(c.id);
console.log(r);

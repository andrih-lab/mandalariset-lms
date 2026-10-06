// Cadangan SQLite yang konsisten (aman saat server berjalan). Pemakaian: node src/cli/backup.js <folder> [simpan_hari]
import Database from 'better-sqlite3';
import { mkdirSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { config } from '../config.js';

const [dir, keep = '14'] = process.argv.slice(2);
if (!dir) { console.error('Pemakaian: backup.js <folder> [hari]'); process.exit(1); }
mkdirSync(dir, { recursive: true });
const out = join(dir, `lms-${new Date().toISOString().slice(0, 10)}.db`);
const db = new Database(config.dbPath, { readonly: true });
await db.backup(out);
db.close();
const cutoff = Date.now() - Number(keep) * 864e5;
for (const f of readdirSync(dir)) {
  const p = join(dir, f);
  if (/^lms-.*\.db$/.test(f) && statSync(p).mtimeMs < cutoff) unlinkSync(p);
}
console.log('Cadangan:', out);

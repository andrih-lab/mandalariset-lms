// Pemakaian: ADMIN_PASSWORD='...' node src/cli/create-admin.js email@contoh.com "Nama"
import { openDb } from '../db.js';
import { hashPassword } from '../auth.js';

const [email, name = 'Admin'] = process.argv.slice(2);
const pw = process.env.ADMIN_PASSWORD;
if (!email || !pw || pw.length < 10) {
  console.error('Isi email (argumen) dan ADMIN_PASSWORD (min. 10 karakter, lewat env).');
  process.exit(1);
}
const db = openDb();
db.prepare(
  `INSERT INTO users (email, name, password_hash, role) VALUES (?,?,?, 'admin')
   ON CONFLICT(email) DO UPDATE SET password_hash = excluded.password_hash, role = 'admin'`
).run(email, name, hashPassword(pw));
console.log('Admin siap:', email);

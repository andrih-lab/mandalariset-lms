import { randomBytes, createHash, scryptSync, timingSafeEqual } from 'node:crypto';
import { config } from './config.js';

export function hashPassword(pw) {
  const salt = randomBytes(16);
  const key = scryptSync(pw, salt, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt$${salt.toString('hex')}$${key.toString('hex')}`;
}

export function verifyPassword(pw, stored) {
  const [alg, saltHex, keyHex] = String(stored).split('$');
  if (alg !== 'scrypt' || !saltHex || !keyHex) return false;
  const key = scryptSync(pw, Buffer.from(saltHex, 'hex'), 64, { N: 16384, r: 8, p: 1 });
  const want = Buffer.from(keyHex, 'hex');
  return key.length === want.length && timingSafeEqual(key, want);
}

const sha = (s) => createHash('sha256').update(s).digest('hex');

export function createSession(db, userId) {
  const token = randomBytes(32).toString('base64url');
  const exp = new Date(Date.now() + config.sessionDays * 864e5).toISOString();
  db.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?,?,?)').run(sha(token), userId, exp);
  return token;
}

export function userFromToken(db, token) {
  if (!token) return null;
  return db.prepare(
    `SELECT u.id, u.email, u.name, u.role FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > ?`
  ).get(sha(token), new Date().toISOString()) || null;
}

export function destroySession(db, token) {
  if (token) db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha(token));
}

export const cookieOpts = () => ({
  path: '/', httpOnly: true, sameSite: 'lax', secure: config.prod,
  maxAge: config.sessionDays * 86400,
});

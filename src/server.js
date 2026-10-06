import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import formbody from '@fastify/formbody';
import rateLimit from '@fastify/rate-limit';
import fstatic from '@fastify/static';
import view from '@fastify/view';
import ejs from 'ejs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { config } from './config.js';
import { openDb } from './db.js';
import { pickLang, makeT } from './i18n.js';
import { hashPassword, verifyPassword, createSession, userFromToken, destroySession, cookieOpts } from './auth.js';
import { renderMarkdown, youtubeEmbed, safePdfUrl } from './content.js';

const here = dirname(fileURLToPath(import.meta.url));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function build({ db = openDb(), logger = false } = {}) {
  const app = Fastify({ logger, trustProxy: true });
  app.decorate('db', db);

  await app.register(cookie);
  await app.register(formbody);
  await app.register(rateLimit, { global: false });
  await app.register(fstatic, { root: join(here, 'public'), prefix: '/static/' });
  await app.register(view, { engine: { ejs }, root: join(here, 'views'), layout: 'layout.ejs' });

  app.addHook('onSend', async (req, reply) => {
    reply.header('X-Content-Type-Options', 'nosniff');
    reply.header('X-Frame-Options', 'DENY');
    reply.header('Referrer-Policy', 'strict-origin-when-cross-origin');
    reply.header('Content-Security-Policy',
      "default-src 'self'; frame-src https://www.youtube-nocookie.com; img-src 'self' data: https:; style-src 'self'; object-src 'self'");
  });

  // Perlindungan CSRF: tolak POST lintas-origin (ditambah cookie SameSite=Lax).
  app.addHook('onRequest', async (req, reply) => {
    if (req.method === 'POST') {
      const origin = req.headers.origin;
      if (origin && origin !== config.baseUrl) return reply.code(403).send('Forbidden');
    }
  });

  app.addHook('preHandler', async (req, reply) => {
    req.lang = pickLang(req);
    if (req.query?.lang && req.query.lang === req.lang) {
      reply.setCookie('lang', req.lang, { path: '/', maxAge: 31536000, sameSite: 'lax', secure: config.prod });
    }
    req.user = userFromToken(db, req.cookies?.sid);
  });

  const page = (req, reply, tpl, data = {}, code = 200) =>
    reply.code(code).view(tpl, { t: makeT(req.lang), lang: req.lang, user: req.user, error: null, ...data });

  const requireUser = async (req, reply) => {
    if (!req.user) return reply.redirect('/login');
  };

  const title = (row, lang) => row[`title_${lang}`] || row.title_id;
  const L = (row, f, lang) => row[`${f}_${lang}`] || row[`${f}_id`];

  app.get('/', async (req, reply) => {
    const courses = db.prepare('SELECT * FROM courses WHERE published = 1 ORDER BY id').all();
    return page(req, reply, 'index.ejs', { courses, title, L });
  });

  // ---- auth ----
  app.get('/register', async (req, reply) => page(req, reply, 'register.ejs'));
  app.post('/register', { config: { rateLimit: { max: 10, timeWindow: '1 hour' } } }, async (req, reply) => {
    const { name = '', email = '', password = '' } = req.body || {};
    const ok = name.trim().length >= 2 && name.length <= 100 && EMAIL_RE.test(email) && email.length <= 200 &&
      password.length >= 10 && password.length <= 200;
    if (!ok) return page(req, reply, 'register.ejs', { error: 'badInput' }, 400);
    try {
      const r = db.prepare('INSERT INTO users (email, name, password_hash) VALUES (?,?,?)')
        .run(email.trim(), name.trim(), hashPassword(password));
      reply.setCookie('sid', createSession(db, r.lastInsertRowid), cookieOpts());
      return reply.redirect('/');
    } catch {
      return page(req, reply, 'register.ejs', { error: 'badInput' }, 400);
    }
  });

  app.get('/login', async (req, reply) => page(req, reply, 'login.ejs'));
  app.post('/login', { config: { rateLimit: { max: 10, timeWindow: '15 minutes' } } }, async (req, reply) => {
    const { email = '', password = '' } = req.body || {};
    const u = db.prepare('SELECT * FROM users WHERE email = ?').get(String(email).trim());
    // Hash tetap dihitung agar waktu respons tidak membocorkan keberadaan akun.
    const good = verifyPassword(String(password), u?.password_hash ?? 'scrypt$00$00') && u;
    if (!good) return page(req, reply, 'login.ejs', { error: 'badLogin' }, 401);
    reply.setCookie('sid', createSession(db, u.id), cookieOpts());
    return reply.redirect('/');
  });

  app.post('/logout', async (req, reply) => {
    destroySession(db, req.cookies?.sid);
    reply.clearCookie('sid', { path: '/' });
    return reply.redirect('/');
  });

  // ---- kursus ----
  const getCourse = (slug) => db.prepare('SELECT * FROM courses WHERE slug = ? AND published = 1').get(slug);
  const lessonsOf = (cid) => db.prepare('SELECT * FROM lessons WHERE course_id = ? ORDER BY position').all(cid);

  app.get('/courses/:slug', async (req, reply) => {
    const course = getCourse(req.params.slug);
    if (!course) return page(req, reply, '404.ejs', {}, 404);
    const lessons = lessonsOf(course.id);
    const enrolled = req.user && db.prepare('SELECT 1 FROM enrollments WHERE user_id=? AND course_id=?').get(req.user.id, course.id);
    const done = new Set(req.user ? db.prepare('SELECT lesson_id FROM progress WHERE user_id=?').all(req.user.id).map((r) => r.lesson_id) : []);
    return page(req, reply, 'course.ejs', { course, lessons, enrolled: !!enrolled, done, title, L });
  });

  app.post('/courses/:slug/enroll', { preHandler: requireUser }, async (req, reply) => {
    const course = getCourse(req.params.slug);
    if (!course) return page(req, reply, '404.ejs', {}, 404);
    db.prepare('INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?,?)').run(req.user.id, course.id);
    return reply.redirect(`/courses/${course.slug}`);
  });

  app.get('/courses/:slug/lessons/:pos', { preHandler: requireUser }, async (req, reply) => {
    const course = getCourse(req.params.slug);
    if (!course) return page(req, reply, '404.ejs', {}, 404);
    const enrolled = db.prepare('SELECT 1 FROM enrollments WHERE user_id=? AND course_id=?').get(req.user.id, course.id);
    if (!enrolled) return reply.redirect(`/courses/${course.slug}`);
    const lesson = db.prepare('SELECT * FROM lessons WHERE course_id=? AND position=?').get(course.id, Number(req.params.pos));
    if (!lesson) return page(req, reply, '404.ejs', {}, 404);
    const done = !!db.prepare('SELECT 1 FROM progress WHERE user_id=? AND lesson_id=?').get(req.user.id, lesson.id);
    const html = lesson.kind === 'text' ? renderMarkdown(L(lesson, 'body', req.lang)) : '';
    const embed = lesson.kind === 'youtube' ? youtubeEmbed(lesson.url) : null;
    const pdf = lesson.kind === 'pdf' ? safePdfUrl(lesson.url) : null;
    const next = db.prepare('SELECT position FROM lessons WHERE course_id=? AND position>? ORDER BY position LIMIT 1').get(course.id, lesson.position);
    return page(req, reply, 'lesson.ejs', { course, lesson, html, embed, pdf, done, next, title, L });
  });

  app.post('/courses/:slug/lessons/:pos/complete', { preHandler: requireUser }, async (req, reply) => {
    const course = getCourse(req.params.slug);
    if (!course) return page(req, reply, '404.ejs', {}, 404);
    const enrolled = db.prepare('SELECT 1 FROM enrollments WHERE user_id=? AND course_id=?').get(req.user.id, course.id);
    const lesson = db.prepare('SELECT id, position FROM lessons WHERE course_id=? AND position=?').get(course.id, Number(req.params.pos));
    if (!enrolled || !lesson) return reply.redirect(`/courses/${course.slug}`);
    db.prepare('INSERT OR IGNORE INTO progress (user_id, lesson_id) VALUES (?,?)').run(req.user.id, lesson.id);
    const left = db.prepare(
      `SELECT COUNT(*) n FROM lessons l WHERE l.course_id=? AND NOT EXISTS
       (SELECT 1 FROM progress p WHERE p.lesson_id=l.id AND p.user_id=?)`).get(course.id, req.user.id).n;
    if (left === 0) {
      db.prepare('UPDATE enrollments SET completed_at = COALESCE(completed_at, datetime(\'now\')) WHERE user_id=? AND course_id=?').run(req.user.id, course.id);
    }
    return reply.redirect(`/courses/${course.slug}`);
  });

  app.setNotFoundHandler((req, reply) => page(req, reply, '404.ejs', {}, 404));
  return app;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = await build({ logger: true });
  await app.listen({ port: config.port, host: config.host });
}

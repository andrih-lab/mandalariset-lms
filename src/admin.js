import { config } from './config.js';
import { randomBytes } from 'node:crypto';
import { validateLessonUrl } from './content.js';
import { hashPassword } from './auth.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SLUG_RE = /^[a-z0-9][a-z0-9-]{1,59}$/;
const KINDS = ['text', 'youtube', 'pdf', 'slides'];

export function registerAdmin(app, { page }) {
  const { db } = app;

  // Semua rute admin: wajib admin, dan POST harus membawa Origin yang persis sama dengan situs.
  app.register(async (admin) => {
    admin.addHook('preHandler', async (req, reply) => {
      if (!req.user) return reply.redirect('/login');
      if (req.user.role !== 'admin') return reply.code(403).send('Forbidden');
      if (req.method === 'POST' && req.headers.origin !== config.baseUrl) return reply.code(403).send('Forbidden');
    });

    const view = (req, reply, tpl, data = {}, code = 200) => page(req, reply, tpl, { flash: null, ...data }, code);
    const str = (v, max) => String(v ?? '').trim().slice(0, max);

    admin.get('/admin', async (req, reply) => {
      const courses = db.prepare(
        `SELECT c.*, (SELECT COUNT(*) FROM lessons l WHERE l.course_id=c.id) lessons,
                (SELECT COUNT(*) FROM enrollments e WHERE e.course_id=c.id) students,
                (SELECT COUNT(*) FROM enrollments e WHERE e.course_id=c.id AND e.completed_at IS NOT NULL) finished
         FROM courses c ORDER BY c.id`).all();
      return view(req, reply, 'admin/index.ejs', { courses });
    });

    // ---- kursus ----
    const courseFields = (b) => ({
      slug: str(b.slug, 60), title_id: str(b.title_id, 200), title_en: str(b.title_en, 200),
      desc_id: str(b.desc_id, 2000), desc_en: str(b.desc_en, 2000), published: b.published ? 1 : 0,
      price_idr: Math.min(Math.max(Math.trunc(Number(String(b.price_idr ?? '').replace(/\D/g, ''))) || 0, 0), 100000000),
    });
    const courseError = (c) => (!SLUG_RE.test(c.slug) ? 'Slug: huruf kecil, angka, tanda minus (2–60 karakter).'
      : !c.title_id ? 'Judul (ID) wajib diisi.' : null);

    admin.get('/admin/courses/new', async (req, reply) =>
      view(req, reply, 'admin/course.ejs', { course: null, lessons: [], form: {}, error: null }));

    admin.post('/admin/courses', async (req, reply) => {
      const c = courseFields(req.body || {});
      const error = courseError(c);
      if (!error) {
        try {
          const r = db.prepare(
            `INSERT INTO courses (slug,title_id,title_en,desc_id,desc_en,published,price_idr) VALUES (@slug,@title_id,@title_en,@desc_id,@desc_en,@published,@price_idr)`).run(c);
          return reply.redirect(`/admin/courses/${r.lastInsertRowid}`);
        } catch { return view(req, reply, 'admin/course.ejs', { course: null, lessons: [], form: c, error: 'Slug sudah dipakai.' }, 400); }
      }
      return view(req, reply, 'admin/course.ejs', { course: null, lessons: [], form: c, error }, 400);
    });

    const getCourse = (id) => db.prepare('SELECT * FROM courses WHERE id=?').get(Number(id));
    const lessonsOf = (cid) => db.prepare('SELECT * FROM lessons WHERE course_id=? ORDER BY position').all(cid);
    const notFound = (req, reply) => page(req, reply, '404.ejs', {}, 404);

    admin.get('/admin/courses/:id', async (req, reply) => {
      const course = getCourse(req.params.id);
      if (!course) return notFound(req, reply);
      return view(req, reply, 'admin/course.ejs', { course, lessons: lessonsOf(course.id), form: course, error: null });
    });

    admin.post('/admin/courses/:id', async (req, reply) => {
      const course = getCourse(req.params.id);
      if (!course) return notFound(req, reply);
      const c = courseFields(req.body || {});
      const error = courseError(c);
      if (error) return view(req, reply, 'admin/course.ejs', { course, lessons: lessonsOf(course.id), form: c, error }, 400);
      try {
        db.prepare(`UPDATE courses SET slug=@slug,title_id=@title_id,title_en=@title_en,desc_id=@desc_id,desc_en=@desc_en,published=@published,price_idr=@price_idr WHERE id=@id`)
          .run({ ...c, id: course.id });
      } catch {
        return view(req, reply, 'admin/course.ejs', { course, lessons: lessonsOf(course.id), form: c, error: 'Slug sudah dipakai.' }, 400);
      }
      return reply.redirect(`/admin/courses/${course.id}`);
    });

    admin.post('/admin/courses/:id/delete', async (req, reply) => {
      const course = getCourse(req.params.id);
      if (course && (req.body || {}).confirm === course.slug) db.prepare('DELETE FROM courses WHERE id=?').run(course.id);
      return reply.redirect(course && (req.body || {}).confirm !== course.slug ? `/admin/courses/${course.id}` : '/admin');
    });

    // ---- pelajaran ----
    const lessonFields = (b) => ({
      section: str(b.section, 100), title_id: str(b.title_id, 200), title_en: str(b.title_en, 200),
      kind: KINDS.includes(b.kind) ? b.kind : 'text',
      body_id: String(b.body_id ?? '').slice(0, 100000), body_en: String(b.body_en ?? '').slice(0, 100000),
      url: str(b.url, 500),
    });
    const lessonError = (l) => (!l.title_id ? 'Judul (ID) wajib diisi.' : validateLessonUrl(l.kind, l.url));

    admin.get('/admin/courses/:id/lessons/new', async (req, reply) => {
      const course = getCourse(req.params.id);
      if (!course) return notFound(req, reply);
      return view(req, reply, 'admin/lesson.ejs', { course, lesson: null, form: { kind: 'youtube' }, error: null });
    });

    admin.post('/admin/courses/:id/lessons', async (req, reply) => {
      const course = getCourse(req.params.id);
      if (!course) return notFound(req, reply);
      const l = lessonFields(req.body || {});
      const error = lessonError(l);
      if (error) return view(req, reply, 'admin/lesson.ejs', { course, lesson: null, form: l, error }, 400);
      const pos = db.prepare('SELECT COALESCE(MAX(position),0)+1 p FROM lessons WHERE course_id=?').get(course.id).p;
      db.prepare(`INSERT INTO lessons (course_id,position,section,title_id,title_en,kind,body_id,body_en,url)
                  VALUES (@course_id,@position,@section,@title_id,@title_en,@kind,@body_id,@body_en,@url)`)
        .run({ ...l, course_id: course.id, position: pos });
      return reply.redirect(`/admin/courses/${course.id}`);
    });

    const getLesson = (id) => db.prepare('SELECT * FROM lessons WHERE id=?').get(Number(id));

    admin.get('/admin/lessons/:id', async (req, reply) => {
      const lesson = getLesson(req.params.id);
      if (!lesson) return notFound(req, reply);
      return view(req, reply, 'admin/lesson.ejs', { course: getCourse(lesson.course_id), lesson, form: lesson, error: null });
    });

    admin.post('/admin/lessons/:id', async (req, reply) => {
      const lesson = getLesson(req.params.id);
      if (!lesson) return notFound(req, reply);
      const l = lessonFields(req.body || {});
      const error = lessonError(l);
      if (error) return view(req, reply, 'admin/lesson.ejs', { course: getCourse(lesson.course_id), lesson, form: l, error }, 400);
      db.prepare(`UPDATE lessons SET section=@section,title_id=@title_id,title_en=@title_en,kind=@kind,body_id=@body_id,body_en=@body_en,url=@url WHERE id=@id`)
        .run({ ...l, id: lesson.id });
      return reply.redirect(`/admin/courses/${lesson.course_id}`);
    });

    admin.post('/admin/lessons/:id/delete', async (req, reply) => {
      const lesson = getLesson(req.params.id);
      if (!lesson) return notFound(req, reply);
      db.transaction(() => {
        db.prepare('DELETE FROM lessons WHERE id=?').run(lesson.id);
        resequence(lesson.course_id, lessonsOf(lesson.course_id).map((x) => x.id));
      })();
      return reply.redirect(`/admin/courses/${lesson.course_id}`);
    });

    // Urutan 1..n tanpa bentrok UNIQUE: geser dulu ke angka negatif.
    function resequence(courseId, ids) {
      db.prepare('UPDATE lessons SET position = -id WHERE course_id=?').run(courseId);
      const up = db.prepare('UPDATE lessons SET position=? WHERE id=?');
      ids.forEach((id, i) => up.run(i + 1, id));
    }

    admin.post('/admin/lessons/:id/move', async (req, reply) => {
      const lesson = getLesson(req.params.id);
      if (!lesson) return notFound(req, reply);
      const dir = (req.body || {}).dir === 'up' ? -1 : 1;
      db.transaction(() => {
        const ids = lessonsOf(lesson.course_id).map((x) => x.id);
        const i = ids.indexOf(lesson.id), j = i + dir;
        if (j >= 0 && j < ids.length) { [ids[i], ids[j]] = [ids[j], ids[i]]; resequence(lesson.course_id, ids); }
      })();
      return reply.redirect(`/admin/courses/${lesson.course_id}`);
    });

    // ---- peserta ----
    const studentsData = () => {
      const users = db.prepare(
        `SELECT u.id, u.name, u.email, u.role, u.created_at FROM users u ORDER BY u.id DESC`).all();
      const enr = db.prepare(
        `SELECT e.user_id, c.title_id, e.completed_at, e.cert_code,
                (SELECT COUNT(*) FROM progress p JOIN lessons l ON l.id=p.lesson_id WHERE p.user_id=e.user_id AND l.course_id=e.course_id) done,
                (SELECT COUNT(*) FROM lessons l WHERE l.course_id=e.course_id) total
         FROM enrollments e JOIN courses c ON c.id=e.course_id`).all();
      const byUser = new Map();
      for (const e of enr) (byUser.get(e.user_id) ?? byUser.set(e.user_id, []).get(e.user_id)).push(e);
      const courses = db.prepare('SELECT id, title_id FROM courses ORDER BY id').all();
      return { users, byUser, courses };
    };

    admin.get('/admin/students', async (req, reply) => {
      return view(req, reply, 'admin/students.ejs', { ...studentsData(), flash: req.query.ok ? 'Peserta didaftarkan.' : (req.query.err ? 'Email atau kursus tidak ditemukan.' : null) });
    });

    // Buat akun peserta (atau atur ulang kata sandinya) setelah pembayaran dikonfirmasi, opsional langsung daftarkan ke kursus.
    // Kata sandi sementara dibuat acak dan hanya tampil sekali di respons ini (bukan lewat URL), agar admin menyampaikannya ke peserta.
    admin.post('/admin/students/create', async (req, reply) => {
      const { name = '', email = '', course_id = '' } = req.body || {};
      const nm = str(name, 100), em = str(email, 200);
      const fail = (msg) => view(req, reply, 'admin/students.ejs', { ...studentsData(), flash: msg }, 400);
      if (nm.length < 2 || !EMAIL_RE.test(em)) return fail('Nama (min. 2 huruf) dan email yang valid wajib diisi.');
      const course = course_id ? getCourse(course_id) : null;
      if (course_id && !course) return fail('Kursus tidak ditemukan.');
      const existing = db.prepare('SELECT id, role FROM users WHERE email=?').get(em);
      if (existing?.role === 'admin') return fail('Akun admin tidak bisa diatur lewat form ini.');
      const pw = randomBytes(12).toString('base64url');
      let uid;
      db.transaction(() => {
        if (existing) {
          db.prepare('UPDATE users SET password_hash=?, name=? WHERE id=?').run(hashPassword(pw), nm, existing.id);
          db.prepare('DELETE FROM sessions WHERE user_id=?').run(existing.id);
          uid = existing.id;
        } else {
          uid = db.prepare('INSERT INTO users (email, name, password_hash) VALUES (?,?,?)').run(em, nm, hashPassword(pw)).lastInsertRowid;
        }
        if (course) db.prepare('INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?,?)').run(uid, course.id);
      })();
      reply.header('Cache-Control', 'no-store');
      return view(req, reply, 'admin/students.ejs', { ...studentsData(),
        flash: `${existing ? 'Kata sandi diatur ulang' : 'Akun dibuat'}${course ? ' dan didaftarkan ke ' + course.title_id : ''}. Email: ${em} | Kata sandi sementara: ${pw} | Tampil sekali ini saja; sampaikan ke peserta (peserta bisa menggantinya di menu "Ganti kata sandi").` });
    });

    // Pendaftaran manual (mis. peserta yang sudah bayar di luar sistem).
    admin.post('/admin/enroll', async (req, reply) => {
      const { email = '', course_id = 0 } = req.body || {};
      const u = db.prepare('SELECT id FROM users WHERE email=?').get(str(email, 200));
      const c = getCourse(course_id);
      if (!u || !c) return reply.redirect('/admin/students?err=1');
      db.prepare('INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?,?)').run(u.id, c.id);
      return reply.redirect('/admin/students?ok=1');
    });
  });
}

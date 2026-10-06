import { randomBytes } from 'node:crypto';
import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import { config } from './config.js';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function newCode() {
  const b = randomBytes(10);
  return 'MRI-' + [...b].map((x) => ALPHABET[x % ALPHABET.length]).join('');
}

// Dipanggil saat semua pelajaran selesai. Idempoten: kode dan nama tidak berubah sesudah terbit.
export function issueCertificate(db, userId, courseId) {
  const row = db.prepare('SELECT cert_code FROM enrollments WHERE user_id=? AND course_id=?').get(userId, courseId);
  if (!row || row.cert_code) return row?.cert_code ?? null;
  const user = db.prepare('SELECT name FROM users WHERE id=?').get(userId);
  const code = newCode();
  db.prepare(
    `UPDATE enrollments SET cert_code=?, cert_name=?, completed_at=COALESCE(completed_at, datetime('now'))
     WHERE user_id=? AND course_id=?`
  ).run(code, user.name, userId, courseId);
  return code;
}

const findCert = (db, code) => db.prepare(
  `SELECT e.cert_code, e.cert_name, e.completed_at, c.title_id, c.title_en
   FROM enrollments e JOIN courses c ON c.id = e.course_id WHERE e.cert_code = ?`
).get(String(code));

const DATES = { id: 'id-ID', en: 'en-GB' };
const fmtDate = (iso, lang) => new Date(iso.replace(' ', 'T') + 'Z')
  .toLocaleDateString(DATES[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export async function certificatePdf(cert, lang) {
  const id = lang !== 'en';
  const title = (id ? cert.title_id : cert.title_en) || cert.title_id;
  const url = `${config.baseUrl}/certificate/${cert.cert_code}`;
  const qr = await QRCode.toBuffer(url, { margin: 1, width: 220 });
  const doc = new PDFDocument({ size: 'A4', layout: 'landscape', margin: 0, info: { Title: `Sertifikat ${cert.cert_code}` } });
  const chunks = [];
  doc.on('data', (c) => chunks.push(c));
  const done = new Promise((r) => doc.on('end', r));
  const W = doc.page.width, H = doc.page.height, teal = '#0f766e';

  doc.rect(24, 24, W - 48, H - 48).lineWidth(3).stroke(teal);
  doc.rect(34, 34, W - 68, H - 68).lineWidth(0.8).stroke(teal);
  doc.fillColor(teal).font('Times-Bold').fontSize(14).text('PT MANDALA RISET INDONESIA', 0, 70, { align: 'center', characterSpacing: 3 });
  doc.fillColor('#10231f').font('Times-Bold').fontSize(36)
    .text(id ? 'Sertifikat Penyelesaian' : 'Certificate of Completion', 0, 110, { align: 'center' });
  doc.font('Times-Roman').fontSize(15).text(id ? 'Diberikan kepada' : 'This is to certify that', 0, 175, { align: 'center' });
  doc.fillColor(teal).font('Times-BoldItalic').fontSize(34).text(cert.cert_name, 60, 205, { align: 'center', width: W - 120 });
  doc.fillColor('#10231f').font('Times-Roman').fontSize(15)
    .text(id ? 'yang telah menyelesaikan seluruh materi kursus' : 'has completed all lessons of the course', 0, 270, { align: 'center' });
  doc.font('Times-Bold').fontSize(24).text(title, 60, 298, { align: 'center', width: W - 120 });
  doc.font('Times-Roman').fontSize(13).text(fmtDate(cert.completed_at, lang), 0, 360, { align: 'center' });

  doc.image(qr, 70, H - 170, { width: 90 });
  doc.fontSize(9).fillColor('#444').text(id ? 'Verifikasi:' : 'Verify:', 168, H - 140)
    .text(url, 168, H - 127, { width: 330 }).text(cert.cert_code, 168, H - 108);
  doc.moveTo(W - 300, H - 120).lineTo(W - 80, H - 120).lineWidth(0.8).stroke('#10231f');
  doc.fillColor('#10231f').fontSize(12).text('Andri Hendrizal', W - 300, H - 112, { width: 220, align: 'center' })
    .fontSize(10).text(id ? 'Instruktur' : 'Instructor', W - 300, H - 96, { width: 220, align: 'center' });
  doc.end();
  await done;
  return Buffer.concat(chunks);
}

export function registerCertificates(app, { page }) {
  const { db } = app;
  app.get('/certificate/:code', async (req, reply) => {
    const cert = findCert(db, req.params.code);
    if (!cert) return page(req, reply, 'certificate.ejs', { cert: null, fmtDate }, 404);
    return page(req, reply, 'certificate.ejs', { cert, fmtDate });
  });
  app.get('/certificate/:code/pdf', async (req, reply) => {
    const cert = findCert(db, req.params.code);
    if (!cert) return page(req, reply, 'certificate.ejs', { cert: null, fmtDate }, 404);
    const pdf = await certificatePdf(cert, req.lang);
    return reply.header('Content-Type', 'application/pdf')
      .header('Content-Disposition', `inline; filename="sertifikat-${cert.cert_code}.pdf"`).send(pdf);
  });
}

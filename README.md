# LMS Mandala Riset

LMS ringan untuk lms.mandalariset.com: Fastify + SQLite (better-sqlite3), tampilan EJS, dwibahasa ID/EN.

## Jalankan lokal
```bash
npm install
cp .env.example .env   # lalu: export $(grep -v '^#' .env | xargs)
npm run migrate && node src/cli/seed-demo.js
npm run dev            # http://localhost:3100
npm test
```

## Status
- [x] Daftar/login (scrypt, sesi di DB, rate limit, cek Origin)
- [x] Kursus → pelajaran (teks Markdown, PDF, YouTube), pendaftaran, progres
- [x] Penanda kursus selesai (`enrollments.completed_at`)
- [ ] Sertifikat PDF + halaman verifikasi publik
- [ ] Panel admin (kursus, pelajaran, peserta)
- [ ] Reset password via email (SMTP Gmail, App Password di env VPS)
- [ ] Kuis (tahap 2), pembayaran (tahap 2)
- [ ] Backup SQLite terjadwal (cron `sqlite3 .backup`)

## Deploy (VPS, setelah ada izin)
Lihat `deploy/`: service systemd (user `lms`, data di `/var/lib/mandalariset-lms`) dan vhost nginx.
Rahasia (SMTP dsb.) hanya di `/etc/mandalariset-lms.env`, jangan di repo.
Admin pertama: `ADMIN_PASSWORD='...' node src/cli/create-admin.js email "Nama"`.

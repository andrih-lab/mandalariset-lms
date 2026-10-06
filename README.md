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
- [x] Kursus → pelajaran: teks Markdown, PDF, YouTube, slide Quarto (disajikan sandbox)
- [x] Pendaftaran, progres, penanda selesai
- [x] Panel admin `/admin`: kursus, pelajaran (urut ▲▼), peserta, pendaftaran manual
- [x] Sertifikat PDF (nomor `MRI-…`, QR) + halaman verifikasi publik `/certificate/<kode>`
- [x] Skrip deploy dan backup harian SQLite (belum dijalankan di VPS)
- [ ] Reset password via email (SMTP Gmail, App Password di `/etc/mandalariset-lms.env`)
- [ ] Kuis dan pembayaran (tahap 2)

## Mengisi materi
- **Blue Carbon (sudah ada di repo, `content/blue-carbon/`, 15 berkas):** `npm run seed:blue-carbon`
  (Panduan, Modul 1–13, Proyek akhir; idempoten per judul). Kursus dibuat berstatus draf.
- **Slide R:** `node scripts/import-slides.mjs <folder _output Quarto> slides/r` lalu `node src/cli/seed-r-course.js`
  (catatan pembicara dibuang otomatis agar naskah narasi tidak terbaca peserta).
- **Materi tertulis (Markdown, satu berkas per modul):** `node src/cli/import-markdown.js <slug-kursus> <folder> --bagian "Materi"`.
  Idempoten per judul. Tabel dan daftar centang ikut tampil.
- **Video YouTube:** `/admin` → kursus → "+ Pelajaran baru" → jenis "Video YouTube", tempel tautan. Atur urutan dengan ▲▼.
- Kursus baru berstatus draf; centang "Tayang" di admin bila siap.

## Deploy langsung di VPS (disarankan)
Sebagai root di VPS (butuh token GitHub fine-grained, izin baca Contents untuk `mandalariset-web` dan `mandalariset-lms`):
```bash
read -rsp "GitHub token: " T; echo
curl -fsSL -H "Authorization: Bearer $T" -H "Accept: application/vnd.github.raw" \
  https://api.github.com/repos/andrih-lab/mandalariset-lms/contents/deploy/vps-deploy.sh -o vps-deploy.sh
GH_TOKEN="$T" bash vps-deploy.sh      # jangan di-pipe ke bash: skrip bertanya konfirmasi
```
Skrip memeriksa server dulu, meminta konfirmasi, lalu memasang situs + LMS + SSL + backup dan menguji hasilnya.
Ulangi perintah yang sama untuk update.

## Deploy dari Mac
Dari Mac: `bash deploy/deploy-lms.sh` (rsync ke `plasa-claude`, lalu minta konfirmasi sebelum menjalankan `setup-lms.sh` sebagai root).
Skrip hanya menyentuh: user `lms`, `/opt/mandalariset-lms`, `/var/lib/mandalariset-lms`, satu unit systemd, satu vhost nginx,
satu cron backup, dan boolean SELinux `httpd_can_network_connect` bila perlu. SSL dilewati sampai DNS `lms` mengarah ke VPS.
Rahasia hanya di `/etc/mandalariset-lms.env`. Admin pertama: lihat keluaran skrip.

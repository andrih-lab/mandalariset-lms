import 'node:process';

export const config = {
  port: Number(process.env.PORT || 3100),
  host: process.env.HOST || '127.0.0.1',
  dbPath: process.env.DB_PATH || './data/lms.db',
  baseUrl: process.env.BASE_URL || 'http://localhost:3100',
  prod: process.env.NODE_ENV === 'production',
  sessionDays: 14,
  contactEmail: process.env.CONTACT_EMAIL || 'mandalarisetindonesia@gmail.com',
  siteUrl: process.env.SITE_URL || 'https://mandalariset.com',
  // Pendaftaran akun mandiri ditutup secara bawaan: akun peserta dibuat admin setelah pembayaran dikonfirmasi.
  selfSignup: process.env.SELF_SIGNUP === '1',
  // Tujuan tautan "hubungi admin" (situs utama; halaman kontak ditambahkan per bahasa).
  contactBase: process.env.CONTACT_BASE || 'https://mandalariset.com',
};

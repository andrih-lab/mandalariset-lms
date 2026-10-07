const D = {
  site: { id: 'Akademi Mandala Riset', en: 'Mandala Riset Academy' },
  courses: { id: 'Kursus', en: 'Courses' },
  login: { id: 'Masuk', en: 'Log in' },
  logout: { id: 'Keluar', en: 'Log out' },
  register: { id: 'Daftar', en: 'Sign up' },
  name: { id: 'Nama', en: 'Name' },
  email: { id: 'Email', en: 'Email' },
  password: { id: 'Kata sandi (min. 10 karakter)', en: 'Password (min. 10 characters)' },
  enroll: { id: 'Ikuti kursus', en: 'Enroll' },
  start: { id: 'Mulai belajar', en: 'Start learning' },
  complete: { id: 'Tandai selesai', en: 'Mark as complete' },
  done: { id: 'Selesai', en: 'Completed' },
  progress: { id: 'Progres', en: 'Progress' },
  next: { id: 'Berikutnya', en: 'Next' },
  noCourses: { id: 'Belum ada kursus.', en: 'No courses yet.' },
  badLogin: { id: 'Email atau kata sandi salah.', en: 'Wrong email or password.' },
  badInput: { id: 'Data tidak valid atau email sudah terdaftar.', en: 'Invalid data or email already registered.' },
  notFound: { id: 'Halaman tidak ditemukan.', en: 'Page not found.' },
  price: { id: 'Biaya', en: 'Fee' },
  free: { id: 'Gratis', en: 'Free' },
  howToJoin: { id: 'Cara mengikuti: hubungi admin untuk pembayaran. Setelah pembayaran dikonfirmasi, admin membuatkan akun peserta dan mengirimkan data masuknya kepada Anda.', en: 'How to join: contact the admin to arrange payment. Once payment is confirmed, the admin creates your participant account and sends you the login details.' },
  contactAdmin: { id: 'Hubungi admin', en: 'Contact admin' },
  signupClosed: { id: 'Pendaftaran mandiri ditutup. Akun peserta dibuat oleh admin setelah pembayaran dikonfirmasi.', en: 'Self-registration is closed. Participant accounts are created by the admin once payment is confirmed.' },
  changePassword: { id: 'Ganti kata sandi', en: 'Change password' },
  currentPassword: { id: 'Kata sandi saat ini', en: 'Current password' },
  newPassword: { id: 'Kata sandi baru (min. 10 karakter)', en: 'New password (min. 10 characters)' },
  save: { id: 'Simpan', en: 'Save' },
  passwordChanged: { id: 'Kata sandi diganti.', en: 'Password changed.' },
  badPassword: { id: 'Kata sandi saat ini salah atau kata sandi baru kurang dari 10 karakter.', en: 'Current password is wrong or the new password is shorter than 10 characters.' },
  mustEnroll: { id: 'Ikuti kursus ini untuk membuka pelajaran.', en: 'Enroll to open the lessons.' },
};

export function pickLang(req) {
  const q = req.query?.lang;
  if (q === 'id' || q === 'en') return q;
  const c = req.cookies?.lang;
  return c === 'en' ? 'en' : 'id';
}

export const makeT = (lang) => (k) => D[k]?.[lang] ?? k;

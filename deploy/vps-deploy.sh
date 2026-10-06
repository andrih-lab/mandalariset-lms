#!/usr/bin/env bash
# DEPLOY LENGKAP, dijalankan LANGSUNG DI VPS sebagai root (AlmaLinux + nginx):
#   situs utama (mandalariset.com) + LMS (lms.mandalariset.com).
# Mengambil kode dari GitHub (repo privat) dengan token baca-saja, membangun situs,
# lalu memanggil setup-staging.sh (situs) dan setup-lms.sh (LMS). Aman diulang untuk update.
# Tidak menyentuh vhost/layanan lain. Token tidak disimpan di disk.
#
# Variabel opsional: GH_TOKEN, WEB_BRANCH (default claude/situs-final), LMS_BRANCH (default main),
#   YES=1 (lewati konfirmasi), NOINDEX=1 (tahan indeks Google), SEED=0 (jangan isi kursus), SKIP_SITE=1, SKIP_LMS=1
set -euo pipefail

WEB_REPO=andrih-lab/mandalariset-web
LMS_REPO=andrih-lab/mandalariset-lms
WEB_BRANCH="${WEB_BRANCH:-claude/situs-final}"
LMS_BRANCH="${LMS_BRANCH:-main}"
BASE=/opt/src
say() { printf '\n\033[1m== %s\033[0m\n' "$*"; }
die() { echo "GAGAL: $*" >&2; exit 1; }

[ "$(id -u)" = 0 ] || die "Jalankan sebagai root."
command -v nginx >/dev/null || die "nginx tidak ditemukan."
command -v certbot >/dev/null || echo "Peringatan: certbot tidak ditemukan; SSL akan gagal."

say "Pemeriksaan awal (hanya membaca)"
echo "Server    : $(hostname) / IP publik $(curl -fsS4 https://api.ipify.org 2>/dev/null || echo '?')"
echo "OS        : $(. /etc/os-release; echo "$PRETTY_NAME")"
echo "Node      : $(node -v 2>/dev/null || echo 'belum ada')"
echo "SELinux   : $(getenforce 2>/dev/null || echo 'n/a')"
echo "Disk bebas: $(df -h / | awk 'NR==2{print $4}')   RAM bebas: $(free -h | awk '/Mem:/{print $7}')"
for d in mandalariset.com www.mandalariset.com lms.mandalariset.com; do
  echo "DNS $d -> $(getent hosts "$d" | awk '{print $1; exit}')"
done
[ -f /etc/nginx/conf.d/lms.mandalariset.com.conf ] && echo "vhost LMS sudah ada (tidak ditimpa)."
ss -ltn '( sport = :3100 )' | grep -q LISTEN && ! systemctl is-active --quiet mandalariset-lms \
  && die "Port 3100 dipakai layanan lain. Jalankan ulang dengan PORT=3101."
cat <<TXT

Yang akan dilakukan:
  - memasang paket yang kurang (git, rsync; Node >= 20 bila belum ada)
  - mengambil kode ($WEB_REPO@$WEB_BRANCH, $LMS_REPO@$LMS_BRANCH) ke $BASE
  - membangun situs lalu menyalin ke /var/www/mandalariset (cadangan lama di /var/backups)
  - memasang LMS: user 'lms', /opt/mandalariset-lms, /var/lib/mandalariset-lms, 1 unit systemd, 1 vhost nginx, 1 cron backup
  - bila SELinux Enforcing: mengaktifkan httpd_can_network_connect (pengaturan seluruh server)
  - certbot untuk domain yang DNS-nya sudah mengarah ke server ini
TXT
if [ "${YES:-0}" != 1 ]; then read -r -p "Lanjut? [y/N] " a; [ "$a" = y ] || { echo "Dibatalkan."; exit 0; }; fi

say "Paket dasar"
need=(); for p in git rsync curl; do command -v $p >/dev/null || need+=($p); done
[ ${#need[@]} -gt 0 ] && dnf install -y "${need[@]}"
if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 20 ]; then
  dnf install -y nodejs npm
fi
[ "$(node -p 'process.versions.node.split(".")[0]')" -ge 20 ] || die "Node >= 20 diperlukan (ada $(node -v))."

say "Mengambil kode dari GitHub"
if [ -z "${GH_TOKEN:-}" ]; then
  echo "Perlu token GitHub fine-grained (izin baca 'Contents' untuk dua repo ini). Ketik tidak akan terlihat."
  read -r -s -p "GitHub token: " GH_TOKEN; echo
fi
export GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=http.extraheader
export GIT_CONFIG_VALUE_0="Authorization: basic $(printf 'x-access-token:%s' "$GH_TOKEN" | base64 -w0)"
unset GH_TOKEN
mkdir -p "$BASE"
fetch() { # repo branch dir
  if [ -d "$3/.git" ]; then
    git -C "$3" fetch --depth 1 origin "$2" && git -C "$3" reset --hard FETCH_HEAD
  else
    git clone --depth 1 --branch "$2" "https://github.com/$1.git" "$3"
  fi
  echo "$1@$2 -> $(git -C "$3" rev-parse --short HEAD)"
}
[ "${SKIP_SITE:-0}" = 1 ] || fetch "$WEB_REPO" "$WEB_BRANCH" "$BASE/mandalariset-web"
[ "${SKIP_LMS:-0}" = 1 ] || fetch "$LMS_REPO" "$LMS_BRANCH" "$BASE/mandalariset-lms"
unset GIT_CONFIG_COUNT GIT_CONFIG_KEY_0 GIT_CONFIG_VALUE_0

if [ "${SKIP_SITE:-0}" != 1 ]; then
  say "Membangun situs utama"
  ( cd "$BASE/mandalariset-web" && npm ci --no-audit --no-fund && npm run build )
  [ -f "$BASE/mandalariset-web/dist/id/index.html" ] || die "Build situs tidak menghasilkan dist/id/index.html"
  if [ -d /var/www/mandalariset ]; then
    mkdir -p /var/backups
    tar -czf "/var/backups/mandalariset-site-$(date +%F-%H%M).tgz" -C /var/www mandalariset
    echo "Cadangan situs lama disimpan di /var/backups"
  fi
  say "Memasang situs (nginx + SSL)"
  SRC="$BASE/mandalariset-web/dist" NOINDEX="${NOINDEX:-0}" \
    bash "$BASE/mandalariset-web/deploy/setup-staging.sh" mandalariset.com www.mandalariset.com
fi

if [ "${SKIP_LMS:-0}" != 1 ]; then
  say "Memasang LMS"
  SRC="$BASE/mandalariset-lms" SEED="${SEED:-1}" bash "$BASE/mandalariset-lms/deploy/setup-lms.sh"

  say "Admin LMS"
  if [ "${YES:-0}" != 1 ]; then
    read -r -p "Buat atau ubah akun admin sekarang? [y/N] " a
    if [ "$a" = y ]; then
      read -r -p "Email admin: " AE
      read -r -p "Nama [Admin]: " AN; AN="${AN:-Admin}"
      read -r -s -p "Kata sandi (min. 10 karakter): " AP; echo
      ADMIN_PASSWORD="$AP" runuser -u lms -- env ADMIN_PASSWORD="$AP" bash -c \
        'set -a; . /etc/mandalariset-lms.env; set +a; cd /opt/mandalariset-lms && node src/cli/create-admin.js "$1" "$2"' _ "$AE" "$AN"
      unset AP
    fi
  fi
fi

say "Pemeriksaan akhir"
chk() { printf '%-45s' "$1"; curl -sS -o /dev/null -w '%{http_code}\n' --max-time 15 "$1" || echo gagal; }
chk https://mandalariset.com/id/
chk https://mandalariset.com/sitemap-index.xml
chk https://lms.mandalariset.com/login
echo "Header robots situs: $(curl -sI https://mandalariset.com/id/ | grep -i x-robots-tag || echo 'tidak ada (boleh diindeks)')"
systemctl is-active mandalariset-lms >/dev/null 2>&1 && echo "Layanan LMS: aktif" || echo "Layanan LMS: TIDAK aktif (cek: journalctl -u mandalariset-lms -n 50)"
echo; echo "Selesai. Berikutnya: login ke https://lms.mandalariset.com/admin, centang 'Tayang' pada kursus yang siap."

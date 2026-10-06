#!/usr/bin/env bash
# Dijalankan SEBAGAI ROOT di VPS (AlmaLinux + nginx). Idempoten; aman diulang untuk update.
# Memakai kode dari $SRC (default /home/claude/lms-src, hasil rsync dari deploy-lms.sh).
# Tidak menyentuh vhost/layanan lain. Yang diubah: user `lms`, /opt/mandalariset-lms,
# /var/lib/mandalariset-lms, 1 unit systemd, 1 vhost nginx, 1 cron backup, dan (bila SELinux Enforcing)
# boolean httpd_can_network_connect agar nginx boleh proxy ke 127.0.0.1.
set -euo pipefail

DOMAIN="${DOMAIN:-lms.mandalariset.com}"
SRC="${SRC:-/home/claude/lms-src}"
APP=/opt/mandalariset-lms
DATA=/var/lib/mandalariset-lms
ENVF=/etc/mandalariset-lms.env
PORT="${PORT:-3100}"

[ "$(id -u)" = 0 ] || { echo "Jalankan sebagai root"; exit 1; }
[ -f "$SRC/package.json" ] || { echo "Kode tidak ditemukan di $SRC"; exit 1; }
command -v node >/dev/null || { echo "Node.js belum terpasang"; exit 1; }
NODE_MAJOR=$(node -p 'process.versions.node.split(".")[0]')
[ "$NODE_MAJOR" -ge 20 ] || { echo "Butuh Node >= 20 (ada: $(node -v))"; exit 1; }
if ss -ltn "( sport = :$PORT )" | grep -q LISTEN && ! systemctl is-active --quiet mandalariset-lms; then
  echo "Port $PORT dipakai layanan lain. Set PORT=... lalu ulangi."; exit 1
fi

id lms >/dev/null 2>&1 || useradd --system --home-dir "$DATA" --shell /sbin/nologin lms
install -d -o lms -g lms -m 750 "$DATA" "$DATA/backup"
install -d -m 755 "$APP"

# Salin kode (data & node_modules tidak ikut), lalu pasang dependensi produksi.
rsync -a --delete --exclude node_modules --exclude data --exclude .git "$SRC"/ "$APP"/
chown -R root:lms "$APP"; chmod -R g+rX,o-rwx "$APP"
( cd "$APP" && npm ci --omit=dev --no-audit --no-fund )

if [ ! -f "$ENVF" ]; then
  cat > "$ENVF" <<ENV
NODE_ENV=production
PORT=$PORT
HOST=127.0.0.1
DB_PATH=$DATA/lms.db
BASE_URL=https://$DOMAIN
ENV
  chmod 640 "$ENVF"; chown root:lms "$ENVF"
  echo "Dibuat $ENVF (rahasia SMTP dsb. isi di sini kelak; jangan di repo)."
fi

install -m 644 "$APP/deploy/mandalariset-lms.service" /etc/systemd/system/mandalariset-lms.service
systemctl daemon-reload
systemctl enable mandalariset-lms >/dev/null
systemctl restart mandalariset-lms
sleep 2
curl -fsS "http://127.0.0.1:$PORT/login" >/dev/null && echo "Aplikasi berjalan di 127.0.0.1:$PORT"

# SELinux: izinkan nginx proxy ke localhost (hanya bila Enforcing dan belum aktif).
if command -v getenforce >/dev/null && [ "$(getenforce)" = Enforcing ] \
   && [ "$(getsebool httpd_can_network_connect | awk '{print $3}')" = off ]; then
  echo "SELinux Enforcing: mengaktifkan httpd_can_network_connect"
  setsebool -P httpd_can_network_connect 1
fi

# Isi kursus (draf) dari materi di repo. Aman diulang; SEED=0 untuk melewati.
if [ "${SEED:-1}" = 1 ]; then
  sudo -u lms bash -c "set -a; . $ENVF; set +a; cd $APP && npm run -s seed:blue-carbon >/dev/null && npm run -s seed:r" \
    && echo "Kursus Blue Carbon dan R terisi (draf; atur 'Tayang' di /admin)."
fi

VHOST=/etc/nginx/conf.d/$DOMAIN.conf
if [ ! -f "$VHOST" ]; then
  sed "s/lms.mandalariset.com/$DOMAIN/; s/127.0.0.1:3100/127.0.0.1:$PORT/" "$APP/deploy/nginx-lms.conf" > "$VHOST"
fi
nginx -t
systemctl reload nginx

# SSL: hanya bila DNS sudah mengarah ke server ini.
MYIP=$(curl -fsS https://api.ipify.org || true)
DNSIP=$(getent hosts "$DOMAIN" | awk '{print $1; exit}')
if [ -n "$MYIP" ] && [ "$MYIP" = "$DNSIP" ]; then
  certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --redirect -m "${CERT_EMAIL:-mandalarisetindonesia@gmail.com}" || echo "certbot gagal; coba manual"
else
  echo "DNS $DOMAIN ($DNSIP) belum sama dengan IP server ($MYIP): SSL dilewati. Ulangi setelah DNS siap."
fi

# Backup harian (14 hari terakhir).
cat > /etc/cron.d/mandalariset-lms-backup <<CRON
17 3 * * * lms cd $APP && set -a && . $ENVF && set +a && /usr/bin/node src/cli/backup.js $DATA/backup 14 >> $DATA/backup/backup.log 2>&1
CRON
chmod 644 /etc/cron.d/mandalariset-lms-backup

echo "Selesai. Buat admin pertama:"
echo "  sudo -u lms bash -c 'set -a; . $ENVF; set +a; cd $APP && ADMIN_PASSWORD=... node src/cli/create-admin.js email \"Nama\"'"

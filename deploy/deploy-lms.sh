#!/usr/bin/env bash
# Dijalankan dari Mac pemilik, di folder repo ini. Meniru pola deploy situs utama:
#   1) rsync kode ke plasa-claude (user biasa)   2) jalankan setup-lms.sh sebagai root lewat plasa-vps.
# Langkah 2 mengubah server bersama; skrip meminta konfirmasi dulu.
set -euo pipefail
cd "$(dirname "$0")/.."
rsync -a --delete --exclude node_modules --exclude data --exclude .git --exclude .env ./ plasa-claude:lms-src/
rsync -a deploy/setup-lms.sh plasa-claude:lms-src/deploy/setup-lms.sh
read -r -p "Jalankan setup di VPS sebagai root (menyentuh nginx/systemd)? [y/N] " a
[ "$a" = y ] || { echo "Dibatalkan; kode sudah ada di ~/lms-src pada server."; exit 0; }
ssh plasa-vps 'SRC=/home/claude/lms-src bash /home/claude/lms-src/deploy/setup-lms.sh'

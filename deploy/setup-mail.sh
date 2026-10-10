#!/usr/bin/env bash
# Server email sendiri (Postfix + Dovecot + OpenDKIM) untuk AlmaLinux 10.
# Jalankan sebagai root di VPS. Aman diulang: akun yang sudah ada dilewati.
# Ubah daftar akun lewat variabel di bawah sebelum menjalankan.
set -euo pipefail

MAIL_HOST="${MAIL_HOST:-mail.mandalariset.com}"
SERVER_IP="${SERVER_IP:-103.151.140.152}"
CERT_EMAIL="${CERT_EMAIL:-mandalarisetindonesia@gmail.com}"
# domain:alamat1,alamat2,...
ACCOUNTS=(
  "mandalariset.com:admin,info,editor,research,contact"
  "alamzamrud.com:admin,info"
)

[ "$(id -u)" = 0 ] || { echo "Jalankan sebagai root."; exit 1; }

echo "== 1. Pemeriksaan awal =="
if ! timeout 8 bash -c 'echo > /dev/tcp/gmail-smtp-in.l.google.com/25' 2>/dev/null; then
  echo "GAGAL: port 25 keluar diblokir penyedia VPS. Minta plasa.web.id membukanya, lalu ulangi."
  exit 1
fi
echo "port 25 keluar: OK"
RESOLVED="$(getent hosts "$MAIL_HOST" | awk '{print $1}' | head -1 || true)"
if [ "$RESOLVED" != "$SERVER_IP" ]; then
  echo "GAGAL: $MAIL_HOST belum mengarah ke $SERVER_IP (sekarang: ${RESOLVED:-kosong})."
  echo "Tambahkan rekaman A 'mail' di Hostinger, tunggu beberapa menit, ulangi."
  exit 1
fi
echo "A $MAIL_HOST -> $SERVER_IP: OK"
PTR="$(getent hosts "$SERVER_IP" | awk '{print $2}' | head -1 || true)"
[ "$PTR" = "$MAIL_HOST" ] || echo "PERINGATAN: PTR/reverse DNS sekarang '${PTR:-kosong}', bukan $MAIL_HOST. Atur di panel penyedia VPS, kalau tidak email keluar mudah masuk spam."

echo "== 2. Paket =="
dnf install -y epel-release >/dev/null
dnf install -y postfix dovecot opendkim opendkim-tools certbot bind-utils policycoreutils-python-utils >/dev/null
DOVEVER="$(dovecot --version | cut -d. -f1,2)"
if [ "$DOVEVER" != "2.3" ]; then
  echo "GAGAL: Dovecot $DOVEVER memakai format konfigurasi berbeda; skrip ini untuk 2.3."
  exit 1
fi

echo "== 3. Sertifikat TLS =="
if [ ! -d "/etc/letsencrypt/live/$MAIL_HOST" ]; then
  certbot certonly --standalone -d "$MAIL_HOST" -m "$CERT_EMAIL" --agree-tos -n \
    --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"
fi
mkdir -p /etc/letsencrypt/renewal-hooks/deploy
printf '#!/bin/sh\nsystemctl reload postfix dovecot\n' > /etc/letsencrypt/renewal-hooks/deploy/mail.sh
chmod +x /etc/letsencrypt/renewal-hooks/deploy/mail.sh
CERT="/etc/letsencrypt/live/$MAIL_HOST/fullchain.pem"
KEY="/etc/letsencrypt/live/$MAIL_HOST/privkey.pem"

echo "== 4. Pengguna vmail dan folder surat =="
getent group vmail >/dev/null || groupadd -g 5000 vmail
id vmail >/dev/null 2>&1 || useradd -g vmail -u 5000 -d /var/mail/vhosts -s /sbin/nologin vmail
mkdir -p /var/mail/vhosts
chown -R vmail:vmail /var/mail/vhosts
chmod 770 /var/mail/vhosts
semanage fcontext -a -t mail_spool_t '/var/mail/vhosts(/.*)?' 2>/dev/null || true
restorecon -R /var/mail/vhosts 2>/dev/null || true

echo "== 5. Dovecot =="
[ -f /etc/dovecot/dovecot.conf.orig ] || cp /etc/dovecot/dovecot.conf /etc/dovecot/dovecot.conf.orig
cat > /etc/dovecot/dovecot.conf <<DOVE
protocols = imap lmtp
listen = *
ssl = required
ssl_cert = <$CERT
ssl_key = <$KEY
ssl_min_protocol = TLSv1.2
disable_plaintext_auth = yes
auth_mechanisms = plain login
mail_location = maildir:/var/mail/vhosts/%d/%n/Maildir
mail_uid = vmail
mail_gid = vmail
first_valid_uid = 5000
passdb {
  driver = passwd-file
  args = scheme=SHA512-CRYPT username_format=%u /etc/dovecot/users
}
userdb {
  driver = static
  args = uid=vmail gid=vmail home=/var/mail/vhosts/%d/%n
}
service auth {
  unix_listener /var/spool/postfix/private/auth {
    mode = 0660
    user = postfix
    group = postfix
  }
}
service lmtp {
  unix_listener /var/spool/postfix/private/dovecot-lmtp {
    mode = 0600
    user = postfix
    group = postfix
  }
}
namespace inbox {
  inbox = yes
  mailbox Drafts { special_use = \Drafts
    auto = subscribe }
  mailbox Sent { special_use = \Sent
    auto = subscribe }
  mailbox Junk { special_use = \Junk
    auto = subscribe }
  mailbox Trash { special_use = \Trash
    auto = subscribe }
}
DOVE
touch /etc/dovecot/users
chown root:dovecot /etc/dovecot/users
chmod 640 /etc/dovecot/users

echo "== 6. Akun surat =="
: > /etc/postfix/vmailbox
DOMAINS=""
NEWPASS=""
for entry in "${ACCOUNTS[@]}"; do
  dom="${entry%%:*}"; names="${entry#*:}"
  DOMAINS="$DOMAINS $dom"
  for n in ${names//,/ }; do
    addr="$n@$dom"
    echo "$addr $dom/$n/Maildir/" >> /etc/postfix/vmailbox
    if ! grep -q "^$addr:" /etc/dovecot/users; then
      pw="$(openssl rand -base64 18 | tr -d '/+=' | cut -c1-20)"
      echo "$addr:$(doveadm pw -s SHA512-CRYPT -p "$pw")" >> /etc/dovecot/users
      NEWPASS="$NEWPASS$addr  $pw"$'\n'
    fi
  done
done
postmap /etc/postfix/vmailbox

echo "== 7. OpenDKIM =="
mkdir -p /etc/opendkim/keys
: > /etc/opendkim/KeyTable; : > /etc/opendkim/SigningTable
printf '127.0.0.1\nlocalhost\n' > /etc/opendkim/TrustedHosts
for d in $DOMAINS; do
  if [ ! -f "/etc/opendkim/keys/$d/mail.private" ]; then
    mkdir -p "/etc/opendkim/keys/$d"
    opendkim-genkey -b 2048 -d "$d" -s mail -D "/etc/opendkim/keys/$d"
  fi
  echo "mail._domainkey.$d $d:mail:/etc/opendkim/keys/$d/mail.private" >> /etc/opendkim/KeyTable
  echo "*@$d mail._domainkey.$d" >> /etc/opendkim/SigningTable
  echo "*.$d" >> /etc/opendkim/TrustedHosts
done
chown -R opendkim:opendkim /etc/opendkim
chmod 600 /etc/opendkim/keys/*/mail.private
cat > /etc/opendkim.conf <<'OD'
Syslog yes
UMask 007
Mode sv
Canonicalization relaxed/simple
KeyTable /etc/opendkim/KeyTable
SigningTable refile:/etc/opendkim/SigningTable
InternalHosts refile:/etc/opendkim/TrustedHosts
ExternalIgnoreList refile:/etc/opendkim/TrustedHosts
Socket inet:8891@127.0.0.1
PidFile /run/opendkim/opendkim.pid
UserID opendkim
OD

echo "== 8. Postfix =="
postconf -e "myhostname = $MAIL_HOST"
postconf -e "mydestination = localhost"
postconf -e "inet_interfaces = all"
postconf -e "smtpd_tls_cert_file = $CERT"
postconf -e "smtpd_tls_key_file = $KEY"
postconf -e "smtpd_tls_security_level = may"
postconf -e "smtpd_tls_auth_only = yes"
postconf -e "smtpd_tls_protocols = >=TLSv1.2"
postconf -e "smtp_tls_security_level = may"
postconf -e "smtpd_sasl_type = dovecot"
postconf -e "smtpd_sasl_path = private/auth"
postconf -e "smtpd_sasl_auth_enable = yes"
postconf -e "smtpd_recipient_restrictions = permit_sasl_authenticated, reject_unauth_destination"
postconf -e "virtual_mailbox_domains = $(echo $DOMAINS | tr ' ' ',')"
postconf -e "virtual_mailbox_maps = hash:/etc/postfix/vmailbox"
postconf -e "virtual_transport = lmtp:unix:private/dovecot-lmtp"
postconf -e "milter_default_action = accept"
postconf -e "smtpd_milters = inet:127.0.0.1:8891"
postconf -e "non_smtpd_milters = inet:127.0.0.1:8891"
postconf -e "disable_vrfy_command = yes"
# port 587 (submission) wajib login + TLS
if ! grep -q '^submission ' /etc/postfix/master.cf; then
cat >> /etc/postfix/master.cf <<'MC'
submission inet n - n - - smtpd
  -o syslog_name=postfix/submission
  -o smtpd_tls_security_level=encrypt
  -o smtpd_sasl_auth_enable=yes
  -o smtpd_recipient_restrictions=permit_sasl_authenticated,reject
MC
fi
setsebool -P httpd_can_network_connect 1 2>/dev/null || true

echo "== 9. Firewall dan layanan =="
if systemctl is-active --quiet firewalld; then
  firewall-cmd --permanent --add-service=smtp --add-service=smtp-submission --add-service=imaps >/dev/null
  firewall-cmd --reload >/dev/null
fi
systemctl enable --now opendkim dovecot postfix
systemctl restart opendkim dovecot postfix
postfix check

echo
echo "================ SELESAI ================"
if [ -n "$NEWPASS" ]; then
  echo "KATA SANDI AKUN BARU (catat sekarang, tidak disimpan di server dalam bentuk asli):"
  printf '%s' "$NEWPASS"
fi
echo
echo "Pengaturan aplikasi email: IMAP $MAIL_HOST port 993 (SSL/TLS); SMTP $MAIL_HOST port 587 (STARTTLS); username = alamat lengkap."
echo
echo "REKAMAN DNS YANG HARUS ANDA TAMBAHKAN DI HOSTINGER:"
echo "  A    mail   $SERVER_IP    (untuk mandalariset.com)"
for d in $DOMAINS; do
  echo
  echo "--- $d ---"
  echo "  MX   @   $MAIL_HOST  prioritas 10"
  echo "  TXT  @   v=spf1 mx -all"
  echo "  TXT  _dmarc   v=DMARC1; p=none; rua=mailto:admin@$d"
  echo "  TXT  mail._domainkey   $(tr -d '\n\t"' < "/etc/opendkim/keys/$d/mail.txt" | sed -E 's/.*\(//; s/\).*//; s/ +//g')"
done
echo
echo "Catatan: jika sudah ada MX atau SPF lama di domain itu, hapus/gabungkan; hanya boleh satu SPF per domain."

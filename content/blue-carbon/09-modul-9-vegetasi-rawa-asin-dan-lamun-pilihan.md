# Modul 9. Vegetasi rawa asin dan lamun (pilihan)

## Gambaran modul

Modul 9 mengajarkan cara menghitung karbon vegetasi hidup di rawa asin dan padang lamun: tumbuhannya dipanen dari petak atau inti kecil, dikeringkan, ditimbang, dikali faktor karbon, lalu diubah ke Mg C/ha. Modul ini jalur pilihan. Peserta yang proyek akhirnya hanya menyangkut mangrove boleh melewatinya tanpa kehilangan prasyarat modul berikutnya.

| Aspek | Keterangan |
| --- | --- |
| Status | PILIHAN. Tidak ada tugas wajib dan tidak dinilai untuk sertifikat. |
| Disarankan untuk | Peserta yang bekerja atau meneliti di pesisir berlamun atau berawa asin (konsultan, LSM, pemerintah daerah, mahasiswa dengan skripsi atau tesis lamun), dan peserta yang ingin membandingkan tiga ekosistem blue carbon dengan data sendiri. |
| Boleh dilewati oleh | Peserta yang proyek akhirnya hanya menghitung mangrove. Modul 10 sampai 13 tetap bisa diikuti. |
| Minggu | 5 (bersama Modul 8) |
| Waktu belajar | Video 22 menit (2 video), latihan dan lembar pilihan sekitar 30 menit, sesi langsung 60 menit bila dijadwalkan (lihat bagian terakhir) |
| Prasyarat | Modul 7 (faktor koreksi karbonat dan satuan tanah), Modul 8 (alur biomassa ke karbon), Excel atau Google Sheets dasar, rata-rata dan galat baku |
| Alat | Excel atau Google Sheets, kalkulator |
| Luaran | Latihan pilihan: satu perhitungan lamun lengkap (biomassa atas dan bawah substrat, karbon, per hektare) di buku kerja |
| Rujukan utama | BC bab 4 (bagian rawa asin dan lamun), BC Tabel 4.8, BC bab 2 (kolam karbon lamun) |

## Tujuan pembelajaran

Setelah modul ini, peserta mampu:

1. Menjelaskan mengapa rawa asin dan lamun diukur saat biomassa puncak dan diulang pada musim yang sama.
2. Memilih ukuran petak dan cara pengambilan contoh yang sesuai untuk rumput rawa asin, semak, akar-rimpang, dan lamun.
3. Menghitung biomassa per m2 dari berat kering dan luas petak atau penampang pipa.
4. Mengubah biomassa kering menjadi karbon dengan faktor yang benar (0,45 untuk rumput rawa asin; 0,34 untuk lamun dan akar-rimpang) dan menyatakannya dalam Mg C/ha.
5. Menghitung rata-rata, galat baku, dan selang kepercayaan 95% karbon vegetasi lamun dari beberapa pipa, serta jumlah pipa yang diperlukan.
6. Membandingkan karbon vegetasi lamun dengan karbon tanahnya dan dengan stok mangrove, lalu menyimpulkan tampungan mana yang layak diukur.

## Rencana video

| No. | Judul | Durasi (menit) | Isi |
| --- | --- | --- | --- |
| 9.1 | Rawa asin: strata, petak, panen, dan inti akar | 10 | Waktu ukur, jalur dan plot, petak 30 x 30 cm, persamaan tinggi-berat, inti akar 10 cm, faktor 0,45 dan 0,34, contoh hitung rumput dan akar-rimpang |
| 9.2 | Lamun: pipa, pemisahan, dan perhitungan per hektare | 12 | Strata kedalaman, pipa 10-25 cm, pemisahan daun dan akar-rimpang, epifit, perhitungan lengkap enam pipa, selang kepercayaan, jumlah pipa |
|  | Total | 22 |  |

## Materi

### 9.1 Rawa asin: strata, petak, panen, dan inti akar

Biomassa rawa asin berubah menurut musim, sehingga pengukuran dilakukan saat biomassa puncak, biasanya pertengahan sampai akhir musim panas di iklim sedang, dan diulang pada musim yang sama (BC bab 4). Di daerah dingin, bagian atas tanah dapat mati seluruhnya pada musim dingin. Salinitas, hara, penggembalaan, dan tinggi muka air tanah juga mempengaruhi biomassa. Menurut BC bab 4, rawa asin pasang surut lebih banyak ditemukan di iklim sedang daripada di tropika. Karena itu bagian ini singkat dan dipakai terutama untuk membandingkan metode.

**Strata dan plot.** Strata rawa asin umumnya berupa jalur yang sejajar garis pantai atau alur pasang surut, sehingga jalur pengamatan dibuat memotong jalur itu. BC bab 4 menyarankan plot sekitar 20 x 50 m per stratum dengan paling sedikit lima sampai enam petak kecil yang ditempatkan acak di dalamnya.

**Komponen yang diukur.** Tiap komponen punya cara dan faktor karbon sendiri.

| Komponen | Cara ukur | Faktor karbon |
| --- | --- | --- |
| Rumput, teki, herba | Petak 30 x 30 cm; hitung batang dan ukur tinggi per jenis; persamaan tinggi-berat dari paling sedikit 50 batang per jenis, dikeringkan 60 C sekitar 72 jam | 0,45 |
| Semak | Seperti mangrove kerdil: diameter pada 30 cm, ukuran tajuk, tinggi; persamaan dari 15-25 semak per jenis | 0,46-0,50 |
| Akar dan rimpang | Inti 10 cm sampai 1 m, dicuci di saringan 1 mm, bagian hidup dipisah menurut warna dan tekstur, dikeringkan 60 C | 0,34 |
| Serasah | Kuadrat (BC contoh 50 x 50 cm), dikeringkan sampai berat tetap | 0,45 |
| Kayu mati rebah | Garis potong seperti mangrove, bila ada | 0,50 |

Akar dan rimpang dapat mencakup 50 sampai 95% biomassa vegetasi rawa asin (BC bab 4). Menghitung hanya bagian atas tanah karena lebih mudah akan meremehkan stok vegetasi. Pengambilan inti sampai 1 m dianjurkan karena sejalan dengan pengambilan contoh tanah di Modul 7 dan karena akar rawa asin dapat mencapai air tawar pada kedalaman itu.

**Rumus.** Biomassa per m2 dibagi menjadi dua langkah: berat kering dibagi luas contoh, lalu hasilnya dikali faktor karbon.

```latex
C\ (\mathrm{kg\,C/m^2}) = \frac{B\ (\mathrm{kg})}{A\ (\mathrm{m^2})} \times f_C
```

```latex
C\ (\mathrm{Mg\,C/ha}) = C\ (\mathrm{kg\,C/m^2}) \times 10
```

Faktor 10 berasal dari 1 Mg = 1.000 kg dan 1 ha = 10.000 m2. Rumus ini dipakai untuk semua komponen di modul ini.

**Contoh hitung 9.1 (angka ilustrasi).** Satu petak rumput 30 x 30 cm menghasilkan 45 g berat kering. Satu inti akar-rimpang berdiameter 10 cm menghasilkan 18,5 g berat kering bagian hidup (kedalaman 0-100 cm, digabung).

1. Luas petak = 0,30 x 0,30 = 0,09 m2. Biomassa rumput = 45 / 0,09 = 500 g/m2 = 0,500 kg/m2.
2. Karbon rumput = 0,500 x 0,45 = 0,225 kg C/m2 = 2,25 Mg C/ha.
3. Luas inti = 3,1416 x 5^2 = 78,54 cm2 = 0,007854 m2. Biomassa akar-rimpang = 18,5 / 0,007854 = 2.355 g/m2 = 2,355 kg/m2.
4. Karbon akar-rimpang = 2,355 x 0,34 = 0,801 kg C/m2 = 8,01 Mg C/ha.
5. Karbon vegetasi hidup = 2,25 + 8,01 = 10,26 Mg C/ha.

Akar-rimpang menyumbang sekitar 78% dari 10,26 Mg C/ha, sesuai pola BC bab 4 bahwa bagian bawah tanah mendominasi. Satu petak tidak cukup untuk satu stratum: angka di atas harus dihitung per petak, lalu dirata-rata dari lima sampai enam petak atau lebih.

**Catatan selisih buku.** Faktor 0,34 di BC bab 4 untuk bagian bawah tanah rumput rawa asin ditulis "conversion factor of 0.34 for belowground biomass of seagrasses" (Duarte 1990), yaitu faktor lamun yang dipinjam. Bila Anda punya hasil analisis unsur sendiri, pakai itu dan tuliskan sumber faktornya di metode. Rumus inti akar rawa asin di BC juga janggal: "biomassa segmen (g) = berat kering contoh (g) / berat basah contoh (g)" sebenarnya rasio kadar bahan kering (tanpa satuan), bukan biomassa. Biomassa diperoleh dengan mengalikan rasio itu dengan berat basah seluruh segmen. Periksa satuan hasil sebelum memakainya.

### 9.2 Lamun: pipa, pemisahan, dan perhitungan per hektare

Biomassa hidup lamun diambil dengan pipa berdiameter besar, dipisah menjadi bagian atas substrat (daun) dan bawah substrat (akar dan rimpang), dikeringkan, ditimbang, dan dikali 0,34 (BC bab 4). Padang lamun ada yang tergenang terus dan ada yang muncul saat surut. Yang muncul saat surut dikerjakan dengan berjalan kaki pada air surut (BC menyebut sekitar 3 sampai 4 jam), sedangkan yang tergenang terus memerlukan snorkel atau alat selam. Plot kecil, 0,25 sampai 1 m2, sudah memadai karena tumbuhannya kecil.

**Strata.** Susunan padang lamun berubah menurut kedalaman, hidrodinamika, cahaya, dan salinitas, sehingga strata biasanya dibuat menurut selang kedalaman, dan di tiap selang contoh diambil pada posisi acak (BC bab 4).

**Pengambilan contoh.**

1. Tekan pipa berdiameter 10-25 cm ke sedimen melewati daun, tanpa memotong daun, sampai menembus lapisan berakar (rizosfer), biasanya sekitar 40 cm.
2. Tutup pipa, cabut, pindahkan isinya ke saringan atau kantong jaring, dan cuci sampai bersih dari sedimen.
3. Pisahkan daun hijau (atas substrat) dari akar dan rimpang hidup (bawah substrat). Rimpang hidup umumnya pucat dan padat. Rimpang tua yang gelap sulit dibedakan hidup atau mati, sehingga pemisahnya perlu orang yang berpengalaman dan konsisten dari satu pipa ke pipa lain.
4. Keringkan pada 60 C selama sekitar 72 jam sampai berat tetap, lalu timbang.
5. Epifit dikerok dari daun dan dihitung sendiri bila tampungannya mau dilaporkan. Mengerok lebih dianjurkan daripada cuci asam bila epifit ingin dihitung, karena asam melarutkan sebagian bahan organik. Epifit berkapur memerlukan koreksi karbon anorganik seperti tanah di Modul 7. Catat apakah epifit dipisahkan, supaya hasil antarlokasi sebanding (BC bab 4).

Serasah lamun sedikit karena daun cepat terurai atau terbawa arus, dan BC bab 2 menyebut biomassa mati di atas substrat biasanya dapat diabaikan. Kolam karbon lamun menurut BC bab 2 ada tiga: biomassa hidup atas substrat, biomassa hidup bawah substrat, dan tanah.

**Rumus.** Rumusnya sama dengan 9.1, dengan luas penampang pipa sebagai A.

```latex
A\ (\mathrm{m^2}) = \frac{\pi\,(D/2)^2}{10.000}\qquad D\ \text{dalam cm}
```

```latex
C\ (\mathrm{Mg\,C/ha}) = \frac{B\ (\mathrm{g})}{A\ (\mathrm{m^2})} \times \frac{0{,}34}{1.000} \times 10
```

Langkah kedua memuat dua konversi: gram ke kilogram (bagi 1.000) dan kg C/m2 ke Mg C/ha (kali 10). Bersama-sama keduanya sama dengan mengalikan g C/m2 dengan 0,01. Satu gram per meter persegi sama dengan 0,01 Mg per hektare.

**Contoh hitung 9.2 (angka ilustrasi, satu pipa).** Satu pipa berdiameter 15 cm menghasilkan daun 8,5 g dan akar-rimpang 14,3 g (berat kering).

1. Luas penampang = 3,1416 x 7,5^2 = 176,71 cm2 = 0,017671 m2.
2. Biomassa atas = 8,5 / 0,017671 = 481,0 g/m2. Biomassa bawah = 14,3 / 0,017671 = 809,2 g/m2.
3. Karbon atas = 0,4810 x 0,34 = 0,1635 kg C/m2. Karbon bawah = 0,8092 x 0,34 = 0,2751 kg C/m2.
4. Per hektare: atas = 1,64 Mg C/ha; bawah = 2,75 Mg C/ha.
5. Total vegetasi hidup pipa ini = 0,4387 kg C/m2 = 4,39 Mg C/ha.

(Buku mencantumkan contoh daun saja dengan pembulatan 3,14, yang hasilnya 1,6 Mg C/ha. Hasil di sini sama bila dibulatkan.)

### Data ilustrasi: padang lamun contoh (di luar Hutan Contoh)

Padang lamun contoh adalah lokasi fiktif seluas 25 ha di depan pantai. Seluruhnya dianggap satu stratum (kedalaman 0,5 sampai 1,5 m saat surut terendah). Enam pipa diambil acak, diameter 15 cm, kedalaman 40 cm. Luas padang dianggap tanpa ketidakpastian, seperti luas Hutan Contoh. Data ini ilustrasi dan bukan dari buku. Lembar buku kerja untuk modul ini memakai data ini; modul lain tidak bergantung padanya.

```csv
pipa,diameter_cm,daun_g,akar_rimpang_g
1,15,8.5,14.3
2,15,7.2,11.8
3,15,9.8,16.9
4,15,6.4,10.2
5,15,8.9,15.1
6,15,7.7,12.6
```

**Perhitungan lengkap per pipa** (A = 0,017671 m2, faktor 0,34, kali 10 ke Mg C/ha):

| Pipa | Biomassa atas (g/m2) | Biomassa bawah (g/m2) | Karbon atas (Mg C/ha) | Karbon bawah (Mg C/ha) | Karbon total (Mg C/ha) |
| --- | --- | --- | --- | --- | --- |
| 1 | 481,0 | 809,2 | 1,64 | 2,75 | 4,39 |
| 2 | 407,4 | 667,7 | 1,39 | 2,27 | 3,66 |
| 3 | 554,6 | 956,3 | 1,89 | 3,25 | 5,14 |
| 4 | 362,2 | 577,2 | 1,23 | 1,96 | 3,19 |
| 5 | 503,6 | 854,5 | 1,71 | 2,91 | 4,62 |
| 6 | 435,7 | 713,0 | 1,48 | 2,42 | 3,91 |
| Rata-rata | 457,4 | 763,0 | 1,56 | 2,59 | 4,15 |

**Statistik dan hasil untuk kawasan** (n = 6, derajat bebas 5, t tabel dua sisi 95% = 2,571):

| Besaran | Atas substrat | Bawah substrat | Total |
| --- | --- | --- | --- |
| Rata-rata (Mg C/ha) | 1,56 | 2,59 | 4,15 |
| Simpangan baku | 0,24 | 0,47 | 0,70 |
| Galat baku (SD / akar 6) | 0,097 | 0,190 | 0,287 |
| Setengah lebar selang 95% (t x galat baku) | 0,25 | 0,49 | 0,74 |
| Dalam persen rata-rata | 16% | 19% | 18% |

Karbon vegetasi hidup padang lamun contoh adalah 4,15 +/- 0,74 Mg C/ha (95%). Untuk 25 ha: 4,15 x 25 = 103,7 Mg C, dengan ketidakpastian 0,74 x 25 = +/- 18,4 Mg C (17,8%). Setara CO2e = 103,7 x 3,67 = 380,7 Mg CO2e. Bagian bawah substrat adalah sekitar 62% dari karbon vegetasi (2,59 / 4,15), rasio bawah banding atas 1,67.

**Berapa pipa yang diperlukan.** Koefisien variasi total = 0,70 / 4,15 = 0,169. Untuk ketelitian +/- 10% pada 95%, n = (t x CV / 0,10)^2, dengan t sesuai derajat bebas n - 1 dan dihitung berulang. Hasilnya 14 pipa (t dengan 13 derajat bebas = 2,160; 2,160 x 0,169 / 0,10 = 3,65; 3,65^2 = 13,3; dibulatkan ke atas 14). Dengan cadangan 10%, 14 x 1,1 = 15,4, jadi 16 pipa. Pilot enam pipa belum cukup untuk target 10%.

**Perbandingan dengan tanah.** Tier 1 untuk tanah lamun sampai 1 m adalah 108 Mg C/ha (BC Tabel 1.2). Karbon vegetasi 4,15 Mg C/ha adalah 3,8% dari angka itu, atau 3,7% dari jumlah vegetasi dan tanah (4,15 / 112,15). Angka ini di bawah ambang 5% yang dipakai BC bab 2 sebagai batas tampungan yang dianggap berarti, sehingga pada proyek lamun biasanya tanah yang diprioritaskan. BC bab 2 juga menyebut biomassa bawah substrat hanya sekitar 0,3% dari karbon organik di bawah permukaan secara global, sehingga sering digabung ke karbon tanah.

**Selisih antarbuku dan angka ilustrasi.** BC Tabel 4.8 memberi rata-rata biomassa hidup lamun Indo-Pasifik 0,61 +/- 0,26 Mg C/ha (n = 47) dan karbon tanah 23,6 +/- 8,3 Mg C/ha (n = 8). Karbon tanah itu jauh lebih kecil daripada angka Tier 1 sebesar 108 Mg C/ha di BC Tabel 1.2, dan biomassa ilustrasi di atas (4,15) sekitar tujuh kali rata-rata Indo-Pasifik. Data ilustrasi sengaja dibuat rapat agar angkanya mudah diikuti; padang nyata di wilayah Indo-Pasifik umumnya lebih rendah. Pada lembar buku kerja, tuliskan angka pembanding mana yang Anda pakai (Tier 1 atau Tabel 4.8 Indo-Pasifik) dan alasannya.

## Latihan mandiri

Semua angka dalam latihan 1 sampai 3 adalah ilustrasi. Soal 4 memakai data Hutan Contoh dan hasil 9.2. Tulis faktor karbon dan sumber angka pembanding yang Anda pakai.

1. **Satu pipa lamun.** Pipa berdiameter 20 cm menghasilkan daun 14,2 g dan akar-rimpang 25,6 g (berat kering). Hitung biomassa atas dan bawah (g/m2), karbon atas, bawah, dan total (Mg C/ha), serta rasio bawah banding atas.
2. **Rawa asin.** Petak rumput 30 x 30 cm menghasilkan 52 g berat kering. Inti akar-rimpang berdiameter 10 cm menghasilkan 21,3 g bagian hidup. Hitung karbon vegetasi hidup (Mg C/ha) dan porsi akar-rimpang.
3. **Selang kepercayaan.** Lima pipa dari satu padang lamun memberi karbon total (Mg C/ha): 3,1; 3,6; 2,8; 4,0; 3,5. Hitung rata-rata, simpangan baku, galat baku, dan setengah lebar selang 95%. Berapa persen dari rata-rata?
4. **Perbandingan.** Bandingkan karbon vegetasi padang lamun contoh (4,15 Mg C/ha) dengan karbon pohon hidup di atas tanah ditambah akar di stratum B Hutan Contoh (120 + 40 Mg C/ha), dan dengan karbon tanah lamun Tier 1 (108 Mg C/ha). Tampungan mana yang layak diukur lebih dahulu di padang lamun, dan mengapa?

**Kunci jawaban**

1. Luas = 3,1416 x 10^2 = 314,16 cm2 = 0,031416 m2. Atas = 14,2 / 0,031416 = 452,0 g/m2; bawah = 25,6 / 0,031416 = 814,9 g/m2. Karbon atas = 0,4520 x 0,34 = 0,1537 kg C/m2 = 1,54 Mg C/ha. Karbon bawah = 0,8149 x 0,34 = 0,2771 kg C/m2 = 2,77 Mg C/ha. Total 4,31 Mg C/ha. Rasio bawah banding atas = 814,9 / 452,0 = 1,80.
2. Rumput: 52 / 0,09 = 577,8 g/m2; x 0,45 = 260,0 g C/m2 = 0,260 kg C/m2 = 2,60 Mg C/ha. Akar-rimpang: luas inti 0,007854 m2; 21,3 / 0,007854 = 2.712 g/m2; x 0,34 = 922,1 g C/m2 = 0,922 kg C/m2 = 9,22 Mg C/ha. Total 11,82 Mg C/ha; akar-rimpang = 9,22 / 11,82 = 78%.
3. Rata-rata = 3,40. Simpangan baku = 0,46. Galat baku = 0,46 / akar 5 = 0,21. t (4 derajat bebas, dua sisi 95%) = 2,776; setengah lebar = 2,776 x 0,207 = 0,58 Mg C/ha, atau 16,9% dari rata-rata. Ditulis 3,40 +/- 0,58 Mg C/ha.
4. Pohon + akar stratum B = 160 Mg C/ha; lamun 4,15 / 160 = 2,6% (atau 160 / 4,15 = 38,6 kali lebih besar). Terhadap tanah lamun 108: 4,15 / 108 = 3,8%. Di padang lamun, tanah adalah tampungan terbesar dan layak diukur lebih dahulu; biomassa hidup di bawah ambang 5% tampungan berarti (BC bab 2), tetapi karbon vegetasi tetap dilaporkan bila sampelnya sudah ada. Catat angka pembanding yang dipakai (lihat catatan selisih di 9.2).

## Temukan kesalahan

**Laporan A.** "Satu pipa lamun berdiameter 15 cm menghasilkan daun 8,5 g (kering). Luas pipa = 3,14 x 15^2 = 706,5 cm2 = 0,07065 m2. Biomassa = 8,5 / 0,07065 = 120,3 g/m2 = 0,1203 kg/m2. Karbon = 0,1203 x 0,45 = 0,0541 kg C/m2. Per hektare = 0,0541 x 100 = 5,4 Mg C/ha."

**Laporan B.** "Enam pipa memberi karbon total 4,15 Mg C/ha dengan galat baku 0,287. Selang kepercayaan 95% = 1,96 x 0,287 = +/- 0,56 Mg C/ha."

**Kunci**

- Laporan A memuat tiga kesalahan. (1) Diameter 15 cm dipakai sebagai jari-jari, sehingga luas menjadi empat kali terlalu besar (706,5 cm2, seharusnya 176,7 cm2). (2) Faktor 0,45 adalah faktor rumput rawa asin dan serasah; daun lamun memakai 0,34. (3) Faktor satuan kg C/m2 ke Mg C/ha adalah 10, bukan 100. Angka benar: 8,5 / 0,017671 = 481,0 g/m2; x 0,34 = 0,1635 kg C/m2; x 10 = 1,64 Mg C/ha (hanya bagian atas substrat). Angka 5,4 lebih dari tiga kali terlalu besar. Cara mendeteksi: bandingkan dengan contoh buku (1,6 Mg C/ha untuk daun saja) dan periksa luas pipa: pipa berdiameter 15 cm luasnya sekitar 177 cm2, bukan 706 cm2.
- Laporan B memakai z (1,96) untuk n = 6. Dengan 5 derajat bebas, t tabel adalah 2,571, sehingga setengah lebar = 2,571 x 0,287 = +/- 0,74 Mg C/ha, bukan 0,56. Selang yang dilaporkan terlalu sempit sekitar 24% dan memberi kesan ketelitian lebih baik daripada kenyataannya. Cara mendeteksi: pada contoh kecil pakai T.INV.2T dengan derajat bebas n - 1, bukan 1,96.

## Peran AI dan contoh prompt

AI berguna untuk menyusun rumus Excel dan menjelaskan istilah, tetapi hitungan satuan harus Anda periksa sendiri dengan satu pipa yang dihitung tangan.

**Prompt 1: menyusun rumus.** "Di Excel, sel B1 berisi diameter pipa (cm) dan B2 berisi berat kering daun lamun (gram). Buatkan rumus karbon dalam Mg C/ha dengan faktor karbon 0,34. Jelaskan tiap konversi satuannya."

**Prompt 2: menjelaskan istilah.** "Jelaskan dalam tiga kalimat perbedaan biomassa atas substrat dan bawah substrat pada lamun, dan komponen apa yang masuk ke masing-masing."

**Prompt 3: memeriksa hitungan.** "Berikut hitungan saya [tempel langkah dan angka]. Periksa satuan dan konversinya satu per satu. Jangan memperbaiki angka kalau Anda tidak yakin; tandai bagian yang meragukan."

**Langkah pemeriksaan oleh peserta.**

1. Hitung satu pipa dengan kalkulator (contoh 9.2: 8,5 g, 15 cm menghasilkan 1,64 Mg C/ha).
2. Masukkan rumus AI ke Excel dengan data yang sama dan bandingkan hasilnya.
3. Bila selisih lebih dari pembulatan, uraikan rumus AI per konversi sampai ketemu langkah yang berbeda.
4. Bandingkan tingkat besaran dengan BC Tabel 4.8 (Indo-Pasifik 0,61 Mg C/ha); hasil ratusan Mg C/ha pasti salah.

**Contoh jawaban AI yang bisa salah.** Atas Prompt 1, AI menjawab:

```text
=B2/(PI()*B1^2/10000)*0.34*10
Penjelasan: luas pipa dalam m2 adalah PI x D^2 / 10000;
biomassa dalam g/m2, dikali 0,34 untuk karbon, dikali 10 untuk Mg C/ha.
```

Rumus ini menghasilkan 408,9 Mg C/ha untuk 8,5 g dan 15 cm, padahal jawaban yang benar 1,64. Ada dua kesalahan: B1^2 seharusnya (B1/2)^2 karena B1 adalah diameter, dan g/m2 harus dibagi 1.000 dahulu menjadi kg/m2 sebelum dikali 10 (gabungannya dikali 0,01). Cara menangkapnya: hitung tangan satu pipa (1,64), lalu bandingkan dengan hasil rumus yang 250 kali lebih besar dan jauh di atas 0,61 Mg C/ha rata-rata Indo-Pasifik. Rumus yang benar:

```text
=B2/(PI()*(B1/2)^2/10000)*0.34/1000*10
```

## Catatan Excel: Mac dan Windows

Semua rumus di bawah ditulis dengan koma sebagai pemisah argumen dan titik sebagai desimal. Pada Excel berbahasa Indonesia atau pengaturan wilayah Indonesia, pemisah argumen menjadi titik koma, desimal menjadi koma (ketik 0,34), dan nama fungsi dapat berbeda (misalnya SUM menjadi JUMLAH dan AVERAGE menjadi RATA2). Untuk fungsi lain, cari nama lokalnya lewat kotak Insert Function (fx) sebelum mengetik. Contoh di bawah mengandaikan diameter di kolom B, daun di C, akar-rimpang di D, dan luas di E.

| Langkah | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Memasukkan data CSV dari blok di atas | Tempel ke kolom A, lalu Data > Text to Columns, pilih Delimited, koma | Sama: Data > Text to Columns, Delimited, koma | Tempel, lalu Data > Split text to columns |
| Luas pipa (m2) di E2 | `=PI()*(B2/2)^2/10000` | Sama | Sama |
| Biomassa atas (g/m2) di F2 | `=C2/E2` | Sama | Sama |
| Karbon atas (Mg C/ha) di G2 | `=F2*0.34/1000*10` | Sama | Sama |
| Mengunci sel yang berisi faktor | Pilih sel dalam rumus, tekan Cmd+T; atau ketik tanda dolar di depan huruf kolom dan angka baris | Pilih sel dalam rumus, tekan F4; atau ketik tanda dolar di depan huruf kolom dan angka baris | Ketik tanda dolar langsung |
| Menyalin rumus ke bawah | Pilih sel dan baris di bawahnya, Cmd+D | Ctrl+D | Ctrl+D (Windows) atau Cmd+D (Mac) |
| Rata-rata kolom karbon total (H2 sampai H7) | `=AVERAGE(H2:H7)` | Sama | Sama |
| Simpangan baku contoh | `=STDEV.S(H2:H7)` | Sama | Sama |
| Galat baku | `=STDEV.S(H2:H7)/SQRT(COUNT(H2:H7))` | Sama | Sama |
| t tabel dua sisi 95% (n = 6) | `=T.INV.2T(0.05,5)` | Sama | Sama |
| Setengah lebar selang 95% | t dikali galat baku, masing-masing dari sel hasilnya | Sama | Sama |
| Jumlah pipa (dibulatkan ke atas) | `=ROUNDUP((t_sel*CV_sel/0.1)^2,0)` | Sama | Sama |

Fungsi T.INV.2T mengembalikan nilai t dua sisi dan memakai derajat bebas n - 1, bukan n. Untuk jumlah pipa, ulangi dengan t baru sampai n tidak berubah, seperti di 9.2.

## Tugas mingguan

Tugas ini pilihan. Peserta yang mengerjakannya menyerahkan lembar "Lamun" (pilihan) di buku kerja Minggu 5. Kriteria lulus:

- [ ] Data enam pipa (atau data milik sendiri) tertera di lembar, dengan diameter pipa dan satuan di tiap kolom.
- [ ] Luas penampang pipa dihitung dengan jari-jari (D/2), dan satuannya jelas (cm2 lalu m2).
- [ ] Biomassa atas dan bawah substrat dihitung per pipa dalam g/m2.
- [ ] Faktor karbon 0,34 dipakai dan sumbernya (BC bab 4) ditulis.
- [ ] Karbon per pipa dikonversi ke Mg C/ha dengan faktor 0,01 (atau 0,34 / 1.000 x 10) dan hasil pipa 1 sesuai 4,39 Mg C/ha pada data contoh.
- [ ] Rata-rata, simpangan baku, galat baku, dan setengah lebar selang 95% dihitung dengan t (bukan 1,96), dan hasil total sesuai 4,15 +/- 0,74 Mg C/ha pada data contoh.
- [ ] Hasil untuk luas padang (25 ha pada data contoh) dan setara CO2e dicantumkan.
- [ ] Satu paragraf pendek membandingkan karbon vegetasi dengan karbon tanah dan menyebut angka pembanding yang dipakai (Tier 1 atau BC Tabel 4.8).

## Rencana sesi langsung 60 menit

Sesi ini disediakan bagi peserta yang mengambil modul pilihan. Bila jadwal Minggu 5 hanya memberi satu segmen kecil untuk Modul 9, pakai baris bertanda (inti) saja, sekitar 20 menit.

| Menit | Kegiatan | Bahan |
| --- | --- | --- |
| 0-5 | Pembukaan: alasan mengukur vegetasi lamun dan rawa asin, dan perbedaannya dengan mangrove | Tabel faktor karbon, Lembar rumus |
| 5-15 | (inti) Demonstrasi satu pipa: luas, biomassa, karbon, Mg C/ha | Data pipa 1, kalkulator |
| 15-30 | (inti) Peserta menghitung pipa 2 sampai 6 di Excel dan mencocokkan dengan tabel | Buku kerja, blok CSV |
| 30-40 | Statistik: galat baku, t, setengah lebar selang, jumlah pipa | Rumus di 9.2 |
| 40-50 | Temukan kesalahan (Laporan A dan B) dan jawaban AI yang salah | Bagian Temukan kesalahan |
| 50-55 | Perbandingan dengan tanah dan Hutan Contoh; angka pembanding mana yang dipakai | Soal latihan 4 |
| 55-60 | Tanya jawab dan pengantar Modul 10 | Daftar pertanyaan peserta |

Sumber: Howard dkk. (2014) Coastal Blue Carbon (BC) bab 2, bab 4 (bagian rawa asin dan lamun), Tabel 1.2 dan Tabel 4.8; Lembar rumus dan tabel faktor karbon kursus (0,45; 0,34; 60 C sekitar 72 jam). Angka bertanda ilustrasi dibuat untuk kursus ini dan diverifikasi dengan perhitungan ulang.

---

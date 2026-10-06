# Modul 10. Stok total dan ketidakpastian

## Gambaran modul

Modul ini menjumlahkan semua tampungan karbon menjadi stok total per hektare dan stok seluruh kawasan, lalu menghitung selang kepercayaan 95% untuk keduanya. Hasilnya satu lembar "Total" di buku kerja untuk tiga strata Hutan Contoh. Modul ini memakai hitungan murni (akar, kuadrat, perkalian); tidak ada materi baru tentang pengukuran lapangan.

| Aspek | Keterangan |
| --- | --- |
| Minggu | 6 |
| Waktu belajar | Video 42 menit (3 video), latihan dan tugas sekitar 60 menit, sesi langsung 60 menit |
| Prasyarat | Lembar "Tanah" (Modul 7) dan lembar "Vegetasi" (Modul 8); statistika dasar (rata-rata, simpangan baku, selang kepercayaan) |
| Alat | Excel atau Google Sheets, kalkulator dengan tombol akar kuadrat |
| Luaran minggu ini | Lembar "Total": stok total per hektare dan stok kawasan, dengan selang kepercayaan 95% |
| Rujukan utama | KD 3.2, 3.3 dan bab 4 (Tabel 8); BC bab 3 dan 4 |

## Tujuan pembelajaran

Setelah modul ini peserta dapat:

1. Menjumlahkan rata-rata semua tampungan menjadi stok total per hektare, lalu mengalikannya dengan luas untuk mendapat stok kawasan.
2. Mengubah stok karbon menjadi setara CO2 (CO2e) dengan faktor 3,67.
3. Membedakan simpangan baku, galat baku, dan setengah lebar selang kepercayaan 95%, serta menghitung ketiganya dari data inti tanah.
4. Menggabungkan ketidakpastian beberapa tampungan dengan akar jumlah kuadrat, dan menjelaskan mengapa ketidakpastian tidak dijumlahkan langsung.
5. Menghitung stok dan ketidakpastian kawasan dari tiga strata dengan pembobotan luas, serta menggabungkan ketidakpastian luas dan stok dengan ketidakpastian relatif.
6. Membangun lembar "Total" yang dapat dihitung ulang dan menyusun laporan satu baris dengan kedalaman tanah tercantum.

## Rencana video

| No. | Judul | Durasi (menit) | Isi |
| --- | --- | --- | --- |
| 10.1 | Menjumlahkan tampungan dan setara CO2 | 12 | Dua tahap penjumlahan, stok per hektare ke stok kawasan, faktor 3,67, contoh stratum B |
| 10.2 | Ketidakpastian satu tampungan dan stok total per hektare | 15 | Simpangan baku, galat baku, setengah lebar selang 95%, akar jumlah kuadrat, kesalahan menjumlahkan langsung |
| 10.3 | Ketidakpastian kawasan dan laporan | 15 | Tiga strata Hutan Contoh, pembobotan luas, ketidakpastian luas (contoh buku), Monte Carlo disebut saja, Tabel 8 KD |
|  | Total | 42 |  |

## Materi

### 10.1 Menjumlahkan tampungan dan setara CO2

Stok total per hektare diperoleh dalam dua tahap: setiap tampungan dirata-ratakan dari semua plot atau inti, lalu rata-rata semua tampungan dijumlahkan. Stok seluruh kawasan adalah stok total per hektare dikalikan luas. KD 3.2 mendaftar sembilan tampungan (pohon hidup, akar, pohon mati, anakan dan semai, akar anakan, anakan mati, tumbuhan bukan pohon, kayu mati rebah, tanah); Hutan Contoh memakai empat kelompok, dan hanya tampungan yang benar-benar diukur yang dijumlahkan.

```latex
S_{ha} = \sum_{i} S_i \qquad S_{kawasan} = S_{ha} \times L
```

S_i = rata-rata tampungan ke-i (Mg C/ha), L = luas (ha). Laporan gas rumah kaca memakai CO2e: stok karbon dikalikan 3,67, yaitu 44 (berat molekul CO2) dibagi 12 (berat atom C) (KD 3.2.1).

```latex
CO_2e = C \times 3{,}67
```

**Contoh 10.1 (angka ilustrasi, stratum B Hutan Contoh, 264 ha).**

| Tampungan | Rata-rata (Mg C/ha) |
| --- | --- |
| Pohon hidup di atas tanah | 120 |
| Akar | 40 |
| Pohon mati + kayu mati rebah + serasah | 15 |
| Tanah sampai 1 m | 495 |

1. Stok total per hektare = 120 + 40 + 15 + 495 = 670 Mg C/ha.
2. Stok stratum = 670 × 264 = 176.880 Mg C.
3. CO2e per hektare = 670 × 3,67 = 2.458,9, dibulatkan 2.459 Mg CO2e/ha.
4. Tanah menyumbang 495 ÷ 670 = 73,9% dari stok. Bagian ini penting diingat pada bagian 10.2.

Kedalaman tanah harus ikut ditulis (di sini 1 m); angka tanpa kedalaman tidak dapat dibandingkan (BC bab 3).

### 10.2 Ketidakpastian satu tampungan dan stok total per hektare

Ketidakpastian menyatakan seberapa lebar sebaran hasil ukur di sekitar rata-ratanya. Laporan karbon memakainya sebagai selang kepercayaan 95%, dalam persen terhadap rata-rata (KD 3.3.1). Tiga besaran sering tertukar:

| Besaran | Rumus | Arti |
| --- | --- | --- |
| Simpangan baku (SD) | akar dari jumlah kuadrat selisih terhadap rata-rata dibagi (n - 1) | Sebaran antarunit (inti, plot) |
| Galat baku (SE) | SD ÷ akar n | Ketelitian rata-rata |
| Setengah lebar selang 95% (CI) | t × SE, kira-kira 2 × SE | Dipakai di laporan |

```latex
SE = \frac{SD}{\sqrt{n}} \qquad CI_{95} = t_{0{,}975;\,n-1} \times SE \qquad U(\%) = 100 \times \frac{CI_{95}}{\bar{x}}
```

Buku menyebut CI kira-kira 2 × SE. Untuk n besar itu cukup. Untuk n kecil, pakai nilai t dua sisi dengan derajat bebas n - 1 (di luar buku; t untuk 7 derajat bebas = 2,365, bukan 2). Pada n = 8, memakai 2 menghasilkan selang yang terlalu sempit.

### Data Hutan Contoh: delapan inti tanah stratum B

Data ilustrasi, karbon tanah sampai 1 m (Mg C/ha). Inti B-07 adalah titik contoh Modul 7. Rata-rata tepat 495, dan CI yang dihasilkan tepat 70 (setelah pembulatan), sama dengan angka kanonik tanah stratum B.

```csv
inti,stok_tanah_MgC_ha
B-01,528
B-02,408
B-03,591
B-04,418
B-05,625
B-06,491
B-07,495
B-08,404
```

**Contoh 10.2a: satu tampungan (angka ilustrasi).**

1. n = 8; rata-rata = 3.960 ÷ 8 = 495 Mg C/ha.
2. Jumlah kuadrat selisih = 49.000; SD = √(49.000 ÷ 7) = √7.000 = 83,67 Mg C/ha.
3. SE = 83,67 ÷ √8 = 29,58 Mg C/ha.
4. t (95%, 7 derajat bebas) = 2,365; CI = 2,365 × 29,58 = 69,95, dibulatkan 70 Mg C/ha.
5. U = 100 × 70 ÷ 495 = 14,1%. Hasil: tanah stratum B = 495 ± 70 Mg C/ha.

**Contoh 10.2b: stok total per hektare, stratum B (angka ilustrasi).** Stok total adalah jumlah beberapa tampungan yang masing-masing punya CI sendiri. CI-nya tidak dijumlahkan langsung, karena kecil kemungkinannya semua tampungan meleset ke arah yang sama sekaligus. Yang dijumlahkan adalah kuadratnya, lalu ditarik akarnya (KD 3.3.2). Cara ini mengandaikan galat antartampungan saling bebas.

```latex
CI_{total} = \sqrt{CI_1^2 + CI_2^2 + \dots + CI_n^2}
```

| Tampungan | Rata-rata (Mg C/ha) | CI 95% | CI kuadrat |
| --- | --- | --- | --- |
| Pohon hidup di atas tanah | 120 | 18 | 324 |
| Akar | 40 | 8 | 64 |
| Pohon mati + kayu mati rebah + serasah | 15 | 6 | 36 |
| Tanah sampai 1 m | 495 | 70 | 4.900 |
| Total | 670 | 73 | 5.324 |

1. Jumlah kuadrat = 324 + 64 + 36 + 4.900 = 5.324.
2. CI total = √5.324 = 72,97, dibulatkan 73 Mg C/ha.
3. U = 100 × 72,97 ÷ 670 = 10,9%. Hasil: 670 ± 73 Mg C/ha (KD 3.3.2 memberi contoh dengan cara yang sama).
4. Bila CI dijumlahkan langsung: 18 + 8 + 6 + 70 = 102, jauh lebih besar dari 73.
5. Tanah menyumbang 4.900 ÷ 5.324 = 92,0% dari jumlah kuadrat. Menambah inti tanah lebih berguna daripada menambah plot pohon.

**Gambaran stratum A dan C (hasil dengan cara yang sama).** A: √(12² + 6² + 4² + 58²) = √3.560 = 59,67, dibulatkan 60, jadi 483 ± 60 (12,4%). C: √(14² + 7² + 5² + 62²) = √4.114 = 64,14, dibulatkan 64, jadi 565 ± 64 (11,4%).

Buku juga menyebut simulasi Monte Carlo sebagai cara kedua. Cara ini dipakai bila data antartampungan berkaitan erat, ketidakpastiannya sangat besar (lebih dari 100%), atau sebarannya jauh dari normal. Modul ini tidak menghitungnya; untuk kasus biasa hasilnya hampir sama dengan akar jumlah kuadrat (KD 3.3.2).

### 10.3 Ketidakpastian kawasan dan laporan

Stok kawasan menggabungkan beberapa strata. Setiap stratum dikalikan luasnya sendiri, sehingga ketidakpastiannya ikut dikalikan luas. Setelah itu ketidakpastian antarstratum digabung dengan akar jumlah kuadrat, sama seperti antartampungan. Mengambil rata-rata CI per hektare tanpa bobot luas adalah kesalahan, karena stratum B (264 ha) jauh lebih berpengaruh daripada stratum C (120 ha).

```latex
CI_{kawasan} = \sqrt{\sum_{h} (L_h \times CI_h)^2} \qquad CI_{ha} = \frac{CI_{kawasan}}{\sum_h L_h}
```

L_h = luas stratum h; CI_h = CI total per hektare stratum h (hasil 10.2). Luas dianggap tanpa ketidakpastian, seperti pada seluruh modul lain.

**Contoh 10.3a: Hutan Contoh, 564 ha (angka ilustrasi).** CI memakai nilai belum dibulatkan dari 10.2 (59,67; 72,97; 64,14).

| Stratum | Luas (ha) | Stok (Mg C/ha) | CI (Mg C/ha) | Stok stratum (Mg C) | CI stratum (Mg C) |
| --- | --- | --- | --- | --- | --- |
| A | 180 | 483 | 60 | 86.940 | 10.740 |
| B | 264 | 670 | 73 | 176.880 | 19.263 |
| C | 120 | 565 | 64 | 67.800 | 7.697 |
| Kawasan | 564 | 588 | 41,4 | 331.620 | 23.359 |

1. Stok kawasan = 86.940 + 176.880 + 67.800 = 331.620 Mg C.
2. Rata-rata terbobot = 331.620 ÷ 564 = 587,98, dibulatkan 588 Mg C/ha. Rata-rata biasa (483 + 670 + 565) ÷ 3 = 572,7, tidak dipakai.
3. CI kawasan = √(10.740² + 19.263² + 7.697²) = 23.359 Mg C.
4. U = 100 × 23.359 ÷ 331.620 = 7,0%. Per hektare: 23.359 ÷ 564 = 41,4 Mg C/ha.
5. CO2e = 331.620 × 3,67 = 1.217.045 Mg CO2e, dengan CI 23.359 × 3,67 = 85.728 Mg CO2e.
6. Bila CI stratum dijumlahkan langsung: 10.740 + 19.263 + 7.697 = 37.700 (11,4%), terlalu besar. Ketidakpastian kawasan (7,0%) lebih kecil daripada ketidakpastian tiap stratum (11 sampai 12%) karena galat antarstratum saling meniadakan sebagian.

Bila CI per hektare yang sudah dibulatkan (60, 73, 64) dipakai, hasilnya 23.389. Selisih 30 Mg C itu hanya akibat pembulatan; tulis di lembar angka mana yang dipakai. Laporan memakai nilai yang tidak dibulatkan di sel dan membulatkan hanya pada tampilan.

**Contoh 10.3b: ketidakpastian luas (contoh buku).** Buku memberi kasus ketika luas dari citra satelit juga mengandung ketidakpastian: luas mangrove 400.000 ± 30.000 ha, stok 300 ± 30 Mg C/ha (KD 3.3.2). Untuk perkalian, yang digabung adalah ketidakpastian relatif.

```latex
CI = L \times S \times \sqrt{\left(\frac{CI_L}{L}\right)^2 + \left(\frac{CI_S}{S}\right)^2}
```

1. Stok kawasan = 400.000 × 300 = 120.000.000 Mg C.
2. Relatif luas = 30.000 ÷ 400.000 = 0,075; relatif stok = 30 ÷ 300 = 0,10.
3. Gabungan = √(0,075² + 0,10²) = 0,125 (12,5%).
4. CI = 120.000.000 × 0,125 = 15.000.000 Mg C. Hasil: 120 juta ± 15 juta Mg C.

Untuk Hutan Contoh, luas dianggap tanpa ketidakpastian; bentuk ini dipakai di Latihan 4 sebagai latihan terpisah.

**Menyusun laporan.** Laporan paling sederhana memuat susunan jenis, biomassa, serta stok karbon di atas dan di bawah tanah. Untuk data dasar jangka panjang, rincian per komponen (pohon per kelas diameter, kayu mati per kelas ukuran, tanah per lapisan) membuat pergeseran stok mudah dibaca (KD bab 4). Laporan peserta minimal memuat: stok per hektare dan kawasan, CI 95%, jumlah plot dan inti, kedalaman tanah, faktor konversi, dan satuan.

**Tabel 8 KD sebagai contoh laporan (Mg C/ha).**

| Komponen | Yap | Palau | Sundarbans | Kalimantan |
| --- | --- | --- | --- | --- |
| Pohon (hidup dan mati) | 169,3 | 105,3 | 79,7 | 121,0 |
| Kayu mati rebah | 20,0 | 17,4 | 3,2 | 18,6 |
| Jumlah di atas tanah | 189,3 | 122,7 | 83,7 | 139,6 |
| Akar | 145,2 | 80,0 | 43,0 | 60,2 |
| Jumlah di bawah tanah (akar + tanah) | 877,0 | 600,1 | 481,8 | 1.119,4 |
| Stok ekosistem | 1.066,3 | 723,3 | 565,5 | 1.259,0 |
| Setara CO2 (tertulis di buku) | 3.912 | 2.653 | 2.074 | 4.621 |

Perhatikan dua hal di Tabel 8 (KD Tabel 8). Pertama, jumlah komponen tidak selalu tepat sama dengan total yang tertulis: pada Sundarbans, 79,7 + 3,2 = 82,9, sedangkan jumlah di atas tanah tertulis 83,7 (selisih 0,8; serasah dan semai ditulis "trace"). Kedua, stok ekosistem × 3,67 memberi 3.913; 2.655; 2.075; 4.621, berselisih 1 sampai 2 Mg dari angka CO2e di buku pada tiga lokasi (pembulatan; Kalimantan sama). Peserta menuliskan di lembar angka mana yang dipakai: total yang tertulis, atau jumlah komponen yang dihitung ulang.

### Lembar "Total" di buku kerja

Lembar "Total" dibangun dari data kanonik Hutan Contoh. Salin blok csv berikut ke sel A1 sampai G5 (kolom B, D, F = rata-rata; C, E, G = CI 95%, Mg C/ha; angka ilustrasi).

```csv
Tampungan,A rata-rata,A CI,B rata-rata,B CI,C rata-rata,C CI
Pohon hidup di atas tanah,70,12,120,18,95,14
Akar,25,6,40,8,30,7
Pohon mati + kayu mati rebah + serasah,8,4,15,6,10,5
Tanah sampai 1 m,380,58,495,70,430,62
```

| Sel | Isi (Mac/Windows, titik koma bila Excel berbahasa Indonesia) | Hasil |
| --- | --- | --- |
| B6 | =SUM(B2:B5) | 483 |
| C6 | =SQRT(SUMSQ(C2:C5)) | 59,67 |
| D6, F6 | disalin dari B6 ke D6 dan F6 | 670; 565 |
| E6, G6 | disalin dari C6 ke E6 dan G6 | 72,97; 64,14 |
| B7 | =C6/B6 (format persen), disalin ke D7 dan F7 | 12,4%; 10,9%; 11,4% |
| A10:A12 | A, B, C (nama stratum) |  |
| B10:B12 | 180; 264; 120 (luas, ha) |  |
| C10 | =B6 ; C11 =D6 ; C12 =F6 | 483; 670; 565 |
| D10 | =C6 ; D11 =E6 ; D12 =G6 | 59,67; 72,97; 64,14 |
| E10 | =B10*C10, disalin ke E11:E12 | 86.940; 176.880; 67.800 |
| F10 | =B10*D10, disalin ke F11:F12 | 10.740; 19.263; 7.697 |
| B13 | =SUM(B10:B12) | 564 |
| E13 | =SUM(E10:E12) | 331.620 |
| C13 | =E13/B13 | 588 |
| F13 | =SQRT(SUMSQ(F10:F12)) | 23.359 |
| D13 | =F13/B13 | 41,4 |
| F14 | =F13/E13 (format persen) | 7,0% |
| E15, F15 | =E13*3,67 ; =F13*3,67 (ketik 3.67 bila pemisah desimal titik) | 1.217.045; 85.728 |

Periksa lembar dengan tiga uji: C13 harus 588 (bukan 572,7), F14 harus kurang dari tiap U stratum, dan E13 sama dengan SUMPRODUCT(B10:B12;C10:C12).

## Latihan mandiri

Semua soal memakai data Hutan Contoh (ilustrasi) di atas. Kerjakan di lembar "Total", lalu cocokkan dengan kunci.

1. Stratum A (180 ha): hitung stok total per hektare, CI 95% dengan akar jumlah kuadrat, ketidakpastian dalam persen, dan CO2e per hektare.
2. Stratum C (120 ha): hitung stok total per hektare, CI, stok stratum (Mg C), dan CI stratum (Mg C).
3. Dari delapan inti tanah stratum B, hitung SD, SE, dan CI 95% dengan t. Bandingkan dengan CI bila memakai 2 × SE; mana yang lebih sempit dan seberapa besar selisihnya?
4. Hitung stok kawasan, CI kawasan, dan ketidakpastian relatif untuk tiga strata. Lalu anggap luas kawasan 564 ± 28 ha (soal terpisah, ilustrasi) dan hitung CI gabungan luas dan stok per hektare.
5. Hitung persen sumbangan tanah terhadap jumlah kuadrat CI untuk stratum A, B, dan C. Strategi apa yang masuk akal untuk menurunkan ketidakpastian, dan mengapa?

### Kunci jawaban

1. Stok = 70 + 25 + 8 + 380 = 483 Mg C/ha. Jumlah kuadrat = 12² + 6² + 4² + 58² = 144 + 36 + 16 + 3.364 = 3.560; CI = √3.560 = 59,67, dibulatkan 60. U = 100 × 59,67 ÷ 483 = 12,4%. CO2e = 483 × 3,67 = 1.772,6 Mg CO2e/ha.
2. Stok = 95 + 30 + 10 + 430 = 565 Mg C/ha. Jumlah kuadrat = 196 + 49 + 25 + 3.844 = 4.114; CI = 64,14, U = 11,4%. Stok stratum = 565 × 120 = 67.800 Mg C; CI stratum = 120 × 64,14 = 7.697 Mg C.
3. SD = 83,67; SE = 29,58; CI dengan t (2,365) = 69,95 (U = 14,1%). Dengan 2 × SE: 59,16 (U = 12,0%). Cara 2 × SE lebih sempit sekitar 10,8 Mg C/ha (15%), jadi terlalu optimistis pada n = 8.
4. Stok kawasan = 331.620 Mg C; CI = √(10.740² + 19.263² + 7.697²) = 23.359 (7,0%). Dengan luas 564 ± 28 ha: relatif luas = 28 ÷ 564 = 0,0496; relatif stok = 41,4 ÷ 588 = 0,0704; gabungan = √(0,0496² + 0,0704²) = 0,0862 (8,6%); CI = 331.620 × 0,0862 = 28.578 Mg C.
5. Sumbangan tanah: A = 3.364 ÷ 3.560 = 94,5%; B = 4.900 ÷ 5.324 = 92,0%; C = 3.844 ÷ 4.114 = 93,4%. Di ketiga stratum, menambah inti tanah menurunkan CI paling besar karena tanah mendominasi jumlah kuadrat; menambah plot pohon hampir tidak mengubah CI total.

## Temukan kesalahan

Empat potongan laporan di bawah tampak wajar tetapi keliru. Temukan salahnya sebelum membuka kunci.

**Laporan 1 (stratum B).** "Tanah B: 495 ± 84 Mg C/ha (n = 8 inti). Stok total B: 670 ± 86,5 Mg C/ha (√(18² + 8² + 6² + 84²))."

**Laporan 2 (stratum B).** "Stok total B: 670 Mg C/ha. Ketidakpastian: 18 + 8 + 6 + 70 = ±102 Mg C/ha (15,2%)."

**Laporan 3 (kawasan).** "Rata-rata kawasan: (483 + 670 + 565) ÷ 3 = 572,7 Mg C/ha. CI: √(60² + 73² + 64²) = ±114,1 Mg C/ha. Stok kawasan: 572,7 × 564 = 322.984 ± 64.368 Mg C."

**Laporan 4 (kawasan, 564 ha).** "Stok total A, B, C berturut-turut 86.940, 176.880, 67.800 Mg C, jadi stok kawasan 331.620 Mg C. CI = 10.740 + 19.263 + 7.697 = ±37.700 Mg C (11,4%)."

### Kunci

1. **SD dipakai sebagai CI.** 84 adalah simpangan baku inti (83,67), bukan setengah lebar selang. Yang benar: SE = 83,67 ÷ √8 = 29,58; CI = 2,365 × 29,58 = 70. Total B yang benar = 670 ± 73 (bukan 86,5), jadi ketidakpastian tampak 18% terlalu besar. Cara mendeteksi: bandingkan dengan rumus; bila angka ± sama dengan SD, tanyakan apakah sudah dibagi akar n dan dikali t.
2. **CI dijumlahkan langsung.** Yang benar √5.324 = 73 (10,9%), bukan 102 (15,2%). Selisih 29 Mg C/ha. Cara mendeteksi: hasil penjumlahan langsung selalu ≥ akar jumlah kuadrat; bila ketidakpastian total hampir sama dengan jumlah komponen, dugaan ada kesalahan.
3. **CI tidak dibobot luas.** Rata-rata biasa memberi 572,7, padahal rata-rata terbobot luas = 588 Mg C/ha; stok kawasan yang benar 331.620 Mg C, bukan 322.984 (selisih 8.636 Mg C). Gabungan CI per hektare 114,1 tidak bermakna: yang benar √(Σ (L × CI)²) = 23.359 Mg C, atau 41,4 Mg C/ha, ketidakpastian 7,0% (bukan 19,9%). Cara mendeteksi: CI kawasan harus lebih kecil dari CI stratum terbesar per hektare (73); angka 114 melanggarnya.
4. **CI antarstratum dijumlahkan langsung.** Yang benar 23.359 Mg C (7,0%), bukan 37.700 (11,4%). Pemeriksaan: CI kawasan per hektare (41,4) harus lebih kecil dari CI stratum mana pun (60, 73, 64), karena galat antarstratum saling meniadakan sebagian.

## Peran AI dan contoh prompt

AI membantu menyusun rumus lembar dan menjelaskan istilah. AI tidak menggantikan hitungan: setiap angka yang dihasilkan diperiksa dengan hitungan tangan dan dibandingkan dengan angka di modul ini.

**Prompt 1: menyusun rumus.** "Saya punya tabel di Excel: kolom B berisi rata-rata empat tampungan karbon (B2:B5) dan kolom C berisi setengah lebar selang kepercayaan 95% masing-masing. Tuliskan rumus untuk stok total di B6 dan ketidakpastian gabungannya di C6 dengan akar jumlah kuadrat. Sebutkan juga nama fungsi dalam Excel berbahasa Indonesia." Pemeriksaan: isi dengan angka stratum B (120, 40, 15, 495 dan 18, 8, 6, 70); B6 harus 670 dan C6 harus 72,97. Bila C6 menghasilkan 102, rumusnya menjumlahkan langsung.

**Prompt 2: menjelaskan istilah.** "Jelaskan beda simpangan baku, galat baku, dan setengah lebar selang kepercayaan 95% dengan contoh delapan nilai: 528, 408, 591, 418, 625, 491, 495, 404." Pemeriksaan: hitung ulang SD (83,67), SE (29,58), dan CI (69,95); bila angkanya berbeda, minta AI menunjukkan langkahnya dan periksa tiap langkah.

**Prompt 3: memeriksa hitungan.** "Saya menghitung stok kawasan dari tiga strata: 180 ha × 483, 264 ha × 670, 120 ha × 565 Mg C/ha, dan CI per stratum 60, 73, 64 Mg C/ha. Periksa langkah saya dan beri tahu bila ada yang keliru." Pemeriksaan: stok kawasan harus 331.620; CI kawasan sekitar 23.389 (dengan nilai bulat) atau 23.359 (tidak bulat).

**Contoh jawaban AI yang bisa salah.** Untuk Prompt 2, AI dapat menjawab: "CI 95% = SE × T.INV.2T(0,95; 7) = 29,58 × 0,065 = 1,92 Mg C/ha." Angkanya keliru karena argumen pertama T.INV.2T adalah tingkat signifikansi (0,05), bukan tingkat kepercayaan. Cara menangkapnya: CI tidak mungkin jauh lebih kecil dari SE (nilai t untuk 95% selalu lebih dari 1,96). Hasil benarnya 29,58 × 2,365 = 69,95. Pada jawaban AI lain, "SD sudah cukup sebagai ketidakpastian" juga salah (lihat Temukan kesalahan, Laporan 1).

## Catatan Excel: Mac dan Windows

| Langkah | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Menjumlahkan rata-rata tampungan | =SUM(B2:B5) | =SUM(B2:B5) | =SUM(B2:B5) |
| Rata-rata inti | =AVERAGE(B2:B9) | =AVERAGE(B2:B9) | =AVERAGE(B2:B9) |
| Simpangan baku sampel | =STDEV.S(B2:B9) | =STDEV.S(B2:B9) | =STDEV.S(B2:B9) |
| Galat baku | =STDEV.S(B2:B9)/SQRT(COUNT(B2:B9)) | sama | sama |
| Nilai t dua sisi | =T.INV.2T(0,05; n-1) | =T.INV.2T(0,05; n-1) | =T.INV.2T(0,05; n-1) |
| Akar jumlah kuadrat CI | =SQRT(SUMSQ(C2:C5)) | =SQRT(SUMSQ(C2:C5)) | =SQRT(SUMSQ(C2:C5)) |
| Luas × stok semua strata sekaligus | =SUMPRODUCT(B10:B12; C10:C12) | =SUMPRODUCT(B10:B12; C10:C12) | =SUMPRODUCT(B10:B12; C10:C12) |
| Mengunci sel (mengubah B6 menjadi `$B$6`) | Cmd+T atau Fn+F4 | F4 | F4 (Windows) atau Cmd+T (Mac) |
| Format persen | Cmd+Shift+5 | Ctrl+Shift+5 | Format > Number > Percent |
| Menyalin rumus ke bawah | Seret gagang isi di sudut sel, atau Cmd+D | Seret gagang isi, atau Ctrl+D | Seret gagang isi, atau Cmd/Ctrl+D |

Pada Excel berbahasa Indonesia, nama fungsi dan pemisah argumen berbeda: SUM menjadi JUMLAH, AVERAGE menjadi RATA2, SQRT menjadi AKAR, SUMSQ menjadi JUMLAH.KUADRAT, SUMPRODUCT menjadi SUMPRODUK, dan pemisah argumen titik koma (;) menggantikan koma. Nama fungsi lain (STDEV.S, T.INV.2T) tidak dihafal: cari lewat Formulas > Insert Function dan salin hasilnya. Pemisah desimal mengikuti pengaturan wilayah; angka 0,05 menjadi 0.05 bila pemisah desimal titik. Argumen pada tabel ditulis dengan titik koma sesuai Excel Indonesia; bila tidak dikenali, ganti dengan koma.

## Tugas mingguan

Serahkan lembar "Total" di buku kerja, lengkap dengan lembar "Tanah" dan "Vegetasi" sebagai sumber angka, ditambah catatan satu paragraf berisi angka yang dipakai bila ada selisih antarbuku. Kriteria lulus:

- [ ] Tabel CI per tampungan (Mg C/ha) untuk tiga strata terisi, dengan rata-rata dan CI yang berasal dari lembar "Tanah" dan "Vegetasi" (atau data kanonik bila lembar belum lengkap).
- [ ] Stok total per hektare tiap stratum = 483, 670, 565 Mg C/ha (toleransi pembulatan).
- [ ] CI total per hektare tiap stratum memakai SQRT(SUMSQ(...)) = 59,67; 72,97; 64,14 (bukan jumlah langsung).
- [ ] Stok tiap stratum = luas × stok per hektare, dan stok kawasan = 331.620 Mg C.
- [ ] Rata-rata terbobot luas = 588 Mg C/ha.
- [ ] CI kawasan dihitung dari L × CI per stratum = 23.359 Mg C (7,0%), dengan 41,4 Mg C/ha.
- [ ] CO2e dihitung dengan 3,67: 1.217.045 Mg CO2e.
- [ ] SD, SE, dan CI (dengan t) untuk delapan inti B dihitung dan dibandingkan dengan 2 × SE.
- [ ] Kedalaman tanah (1 m) dan satuan tertulis pada laporan satu baris.
- [ ] Catatan satu paragraf menyebutkan angka mana yang dipakai bila ada selisih antarbuku (mis. Tabel 8 KD).

## Rencana sesi langsung 60 menit

| Menit | Kegiatan | Bahan |
| --- | --- | --- |
| 0-5 | Pembukaan: pertanyaan dari video 10.1 sampai 10.3 | Daftar pertanyaan peserta |
| 5-15 | Peragaan: stratum B di Excel, dari tabel tampungan sampai 670 ± 73 | Lembar "Total" kosong |
| 15-30 | Kerja berpasangan: stratum A dan C di lembar sendiri (Latihan 1 dan 2) | Data kanonik, kalkulator |
| 30-40 | Delapan inti tanah B: SD, SE, CI dengan t dan 2 × SE | Blok csv 10.2 |
| 40-50 | Kawasan: pembobotan luas dan CI kawasan; diskusi Laporan 3 dan 4 | Contoh 10.3, Temukan kesalahan |
| 50-55 | Ketidakpastian luas (contoh buku 400.000 ± 30.000 ha) | Contoh 10.3b |
| 55-60 | Penutup: pemeriksaan hasil dengan 588; 23.359; 1.217.045 dan tugas | Daftar centang tugas |

Sumber: KD 3.2 (tampungan dan CO2e), 3.3 (ketidakpastian, akar jumlah kuadrat, ketidakpastian luas) dan bab 4 (laporan, Tabel 8); BC bab 3 dan 4. Data Hutan Contoh adalah ilustrasi.

---

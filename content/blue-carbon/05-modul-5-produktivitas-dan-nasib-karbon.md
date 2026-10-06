# Modul 5. Produktivitas dan nasib karbon

Modul ini menelusuri karbon sesudah diserap pohon: berapa yang menjadi biomassa, berapa yang gugur sebagai serasah, dan ke mana bahan mati itu pergi (terurai, terbawa keluar, atau tertimbun). Hasil akhirnya adalah diagram aliran karbon sederhana yang berisi angka dari buku, lengkap dengan catatan angka mana yang berselisih antarbuku.

| Aspek | Keterangan |
| --- | --- |
| Minggu | 2 (bersama Modul 3 dan 4) |
| Video | 3 video pendek, total 27 menit (dari sekitar 60 menit video minggu 2) |
| Latihan dan tugas | sekitar 20 menit dari 60 menit latihan minggu 2 |
| Sesi langsung | 60 menit, dipakai bersama modul lain minggu 2 (lihat bagian terakhir) |
| Prasyarat | Modul 1 sampai 4; Excel atau Google Sheets dasar (rumus, perkalian, jumlah); pangkat dan logaritma natural pada tingkat kalkulator |
| Alat | Excel atau Google Sheets, kalkulator, buku kerja e-course |
| Bahan bacaan | H bab 8 (8.1.2 sampai 8.1.5) dan bab 9 (9.4 sampai 9.6); BC bab 5 untuk catatan arus karbon mendatar |
| Luaran minggu itu | Lembar "Aliran" di buku kerja: diagram aliran karbon sederhana berupa tabel masukan, penyimpanan, dan keluaran |

## Tujuan pembelajaran

Setelah modul ini peserta mampu:

1. Menyebutkan rentang biomassa hutan mangrove dan pembagiannya di atas dan di bawah tanah, lalu mengubah biomassa berat kering menjadi karbon dengan faktor yang dinyatakan.
2. Menghitung produksi primer bersih (NPP) dari tiga komponennya, dan mengubah hasil jaring serasah dari g/m² ke ton/ha.
3. Membedakan empat nasib bahan mati (dihancurkan hewan, diuraikan mikroba, terbawa keluar, tertimbun) dan menghitung sisa bahan pada waktu tertentu dari waktu paruh penguraian.
4. Menyusun neraca karbon sederhana (masukan, penyimpanan, keluaran) dari angka buku, menghitung selisih yang belum terjelaskan, dan menyebut apa saja yang belum terukur.
5. Menemukan angka buku yang tidak konsisten (laju penimbunan 22,6 dan 13,8 t/ha/tahun di H) dan menuliskan angka mana yang dipakai beserta alasannya.
6. Menjelaskan mengapa karbon yang keluar mendatar bersama air tidak tertangkap oleh pengukuran stok pada Modul 7 sampai 10.

## Rencana video

| No. | Judul | Durasi (menit) | Isi |
| --- | --- | --- | --- |
| 5.1 | Biomassa dan karbon di dalam pohon | 9 | Rentang biomassa menurut lintang; pembagian atas dan bawah tanah; faktor konversi ke karbon; contoh Hutan Contoh stratum B |
| 5.2 | Produksi primer bersih dan serasah | 9 | GPP, respirasi, NPP; rumus tiga komponen; jaring serasah dan konversi g/m² ke t/ha; rentang angka H |
| 5.3 | Nasib karbon: terurai, tertimbun, terbawa keluar | 9 | Empat nasib bahan mati; waktu paruh daun dan akar; peran kepiting; neraca sederhana; outwelling; selisih 10 kali pada laju penimbunan |

Total 27 menit.

## Materi

### 5.1 Biomassa dan karbon di dalam pohon

Biomassa hutan mangrove paling besar di dekat khatulistiwa dan mengecil ke arah lintang tinggi. Hutan Rhizophora yang belum terganggu di Australia utara dapat mencapai 700 ton berat kering per hektare; pada hutan tua, 300 sampai 500 ton per hektare lebih umum. Mangrove kerdil di Florida hanya sekitar 7,9 ton per hektare (H 8.1.2). Buku menyebut 300 sampai 500 ton berat kering setara dengan 150 sampai 250 ton karbon per hektare, yang berarti faktor 0,50.

Biomassa di atas tanah terbagi atas daun 3 sampai 5%, cabang 10 sampai 20%, batang utama 60 sampai 90%, dan akar udara 8 sampai 25% (H 8.1.2). Mangrove menaruh lebih banyak biomassa di bawah tanah daripada pohon tropis darat: 30 sampai 50% dari seluruh biomassa pada Rhizophora dan 50 sampai 60% pada Avicennia (H 8.1.2). Sebagian besar akar halus di dalam tanah sudah mati dan terurai sangat lambat (0,06 sampai 0,34% per hari), sehingga menumpuk dan menjadi bahan gambut mangrove (H 8.1.3).

**Selisih antarbuku yang perlu dicatat.** Faktor karbon biomassa tidak sama di ketiga buku. KD dan BC memakai 0,46 sampai 0,50 untuk kayu, dan 0,39 untuk akar (lembar rumus). H menyebut 40 sampai 45% dari berat kering jaringan. Selain itu, lembar rumus mencantumkan perbandingan biomassa atas : bawah tanah 2,0 sampai 3,0 untuk mangrove (BC), yang berarti 25 sampai 33% di bawah tanah, sedangkan H menulis 30 sampai 50% untuk Rhizophora. Tuliskan faktor dan rentang yang Anda pakai di bagian metode, dan jangan diganti di tengah pekerjaan.

**Contoh hitung 1: biomassa kering setara karbon tegakan (angka dari buku)**

Biomassa tegakan tua 400 ton berat kering per hektare diubah menjadi karbon dengan empat faktor:

| Faktor | Sumber | Karbon (ton C/ha) |
| --- | --- | --- |
| 0,40 | batas bawah H | 160 |
| 0,45 | batas atas H | 180 |
| 0,46 | batas bawah KD dan BC | 184 |
| 0,50 | batas atas KD dan BC | 200 |

Rumusnya:

```latex
C = B \times f_C
```

dengan B biomassa berat kering (ton/ha) dan f_C faktor karbon. Pilihan faktor mengubah hasil sampai 40 ton C/ha (25%) pada biomassa yang sama, sehingga faktor harus dinyatakan.

**Contoh hitung 2: Hutan Contoh stratum B (ilustrasi)**

Stratum B memiliki pohon hidup di atas tanah 120 Mg C/ha dan akar 40 Mg C/ha. Langkahnya:

1. Karbon hidup total = 120 + 40 = 160 Mg C/ha.
2. Rasio atas : bawah tanah = 120 ÷ 40 = 3,0, tepat di batas atas rentang 2,0 sampai 3,0 (BC). Bagian di bawah tanah = 40 ÷ 160 = 25%.
3. Biomassa kering setara: 120 ÷ 0,50 = 240 ton, dan 40 ÷ 0,39 = 102,6 ton, jumlahnya 342,6 ton/ha. Dengan faktor 0,46 untuk bagian atas, 120 ÷ 0,46 = 260,9 ton, jumlahnya 363,4 ton/ha.
4. Kedua angka (343 sampai 363 ton/ha) berada di dalam rentang 300 sampai 500 ton/ha untuk hutan tua (H 8.1.2).

Karbon pohon dan akar stratum B (160 Mg C/ha) hanya sebagian kecil dari stok totalnya (670 Mg C/ha); sisanya terutama tanah (495 Mg C/ha). Karena itu bahan yang mati dan tertimbun, yang dibahas pada 5.3, menentukan stok jangka panjang.

### 5.2 Produksi primer bersih dan serasah

Produksi primer bersih (NPP) adalah hasil fotosintesis bruto dikurangi napas pohon, dan NPP inilah yang menjadi bahan bagi seluruh makhluk lain di ekosistem (H 8.1.3). Napas akar hampir mustahil diukur, sehingga NPP dihitung dari penambahan biomassa, ditambah bahan yang gugur, ditambah bagian yang dimakan hewan (H 8.1.3):

```latex
NPP = \Delta B + L + H
```

dengan ΔB pertambahan biomassa pohon, L serasah (daun, ranting, cabang, bunga, buah, propagul, dan pohon yang mati bila dihitung per area), dan H bagian yang dimakan hewan. Pada hutan yang berada dalam keseimbangan, ΔB mendekati nol dan kehilangan dari pohon mati serta bahan yang gugur menyeimbangkan produksi, sehingga serasah menjadi komponen yang paling menentukan (H 8.1.3).

Serasah diukur dengan jaring penampung di bawah tajuk. Jaring harus cukup tinggi agar tidak tersapu pasang atau dimakan kepiting, dikosongkan sering supaya tidak banyak yang terurai, dan dipasang cukup lama untuk menangkap musim. Angka dari buku:

| Besaran | Nilai | Rujukan |
| --- | --- | --- |
| Serasah umum | 5 sampai 15 ton/ha/tahun | H 8.1.3 |
| Serasah mangrove kerdil | sekitar 2,9 ton/ha/tahun | H 8.1.3 |
| NPP di atas tanah, Rhizophora | 8,1 sampai 26,7 ton/ha/tahun | H 8.1.3 (Komiyama dkk. 2008) |
| NPP di atas tanah, Avicennia | 3,99 sampai 24,6 ton/ha/tahun | H 8.1.3 |
| NPP bila bagian bawah tanah ikut dihitung | mungkin dua kali lipat | H 8.1.3 |
| Kayu | 20 sampai 50% NPP | H 8.1.4.3 |

NPP dan biomassa sama-sama menurun ke arah lintang tinggi, tetapi tidak sebanding: rasio serasah terhadap biomassa justru naik dengan lintang dan lebih besar pada pohon kecil (H 8.1.3).

**Satuan.** Hasil jaring biasanya dalam g/m², sedangkan buku memakai ton/ha. Satu hektare = 10.000 m² dan satu ton = 1.000.000 g, sehingga:

```latex
1\ \mathrm{g/m^2} = 0{,}01\ \mathrm{ton/ha}
```

**Contoh hitung 3: dari jaring serasah ke ton C/ha/tahun (ilustrasi)**

Enam jaring seluas 0,5 m² dikosongkan tiap 14 hari. Rata-rata isi kering per jaring 16,8 g.

1. Per m² per pengambilan: 16,8 ÷ 0,5 = 33,6 g/m².
2. Per hari: 33,6 ÷ 14 = 2,4 g/m²/hari.
3. Per tahun: 2,4 × 365 = 876 g/m²/tahun.
4. Ke ton/ha: 876 × 0,01 = 8,76 ton berat kering/ha/tahun. Nilai ini berada di dalam rentang 5 sampai 15 ton/ha/tahun (H 8.1.3).
5. Ke karbon dengan faktor serasah 0,45 (lembar rumus): 8,76 × 0,45 = 3,94 ton C/ha/tahun.

**Contoh hitung 4: NPP dari tiga komponen (ilustrasi)**

Sebuah tegakan Rhizophora rekaan memiliki ΔB = 8,0, serasah = 9,0, dan bagian yang dimakan hewan = 0,7 (semuanya ton berat kering/ha/tahun).

1. NPP = 8,0 + 9,0 + 0,7 = 17,7 ton/ha/tahun. Nilai ini di dalam rentang 8,1 sampai 26,7 untuk Rhizophora (H 8.1.3).
2. Serasah = 9,0 ÷ 17,7 = 50,8% dari NPP.
3. Dalam karbon dengan faktor 0,46: 17,7 × 0,46 = 8,14 ton C/ha/tahun.

Catatan: serasah dari jaring hanya mewakili bagian di atas tanah. Gugurnya akar tidak tertangkap, dan NPP total dapat mencapai dua kali lipat (H 8.1.3).

### 5.3 Nasib karbon: terurai, tertimbun, terbawa keluar

Bahan mati yang dilepas pohon (daun, ranting, kayu, akar, propagul; disebut nekromassa) mempunyai empat nasib: dihancurkan hewan seperti kepiting, diuraikan mikroba, terbawa keluar oleh pasang atau arus sungai, atau tertimbun di lumpur (H 8.1.4). Porsi masing-masing bergantung pada letak hutan. Di bagian pantai yang rendah, pasang cepat membawa serasah keluar; di bagian yang lebih tinggi, kepiting dan mikroba lebih berperan.

**Daun.** Pada 10 sampai 14 hari pertama, berat daun berkurang terutama karena zat mudah larut tercuci air, bukan karena dimakan mikroba; sekitar 30 sampai 50% bahan organik daun bisa hilang dengan cara ini. Waktu sampai berat daun tinggal separuh (waktu paruh) di hutan Matang, Malaysia: 15 hari untuk Sonneratia alba, 34 hari untuk Rhizophora mucronata, 43 hari untuk R. apiculata, dan 70 hari untuk Bruguiera parviflora (H 8.1.4.1).

**Kepiting.** Kepiting sesarmid memakan 19 sampai 100% serasah yang ada di lantai hutan. Kepiting menyeret daun ke liang sehingga tidak tersapu pasang, dan mencacah daun liat menjadi butiran halus yang lebih mudah diuraikan mikroba. Kehadiran kepiting mempercepat penguraian serasah sampai dua orde besaran, yaitu sampai 100 kali (H 8.1.4.2).

**Kayu dan akar.** Batang tumbang kehilangan separuh beratnya dalam 2 tahun bila ada kerang pengebor (teredinid), dan hanya sekitar 5% bila tidak ada (H 8.1.4.3). Dalam 270 hari, akar serabut Avicennia kehilangan 15% beratnya dan akar utamanya 60% (H 8.1.4.3). Akar mati menumpuk lebih cepat daripada penguraiannya, dan itulah asal gambut mangrove.

**Contoh hitung 5: sisa daun setelah 30 hari (angka waktu paruh dari buku; anggapan peluruhan eksponensial di luar buku)**

Bila penguraian dianggap berlangsung dengan laju tetap per hari, bagian yang tersisa setelah waktu t adalah:

```latex
S(t) = 0{,}5^{\,t / t_{1/2}}
```

Untuk t = 30 hari:

| Jenis | Waktu paruh (hari) | Sisa setelah 30 hari | Hilang |
| --- | --- | --- | --- |
| Sonneratia alba | 15 | 0,5^(30/15) = 0,250 | 75,0% |
| Rhizophora mucronata | 34 | 0,5^(30/34) = 0,542 | 45,8% |
| Rhizophora apiculata | 43 | 0,5^(30/43) = 0,617 | 38,3% |
| Bruguiera parviflora | 70 | 0,5^(30/70) = 0,743 | 25,7% |

Anggapan ini hanya perkiraan kasar, karena penurunan 10 sampai 14 hari pertama didominasi pencucian dan bukan laju tetap. Sebagai pembanding, akar mati terurai 0,06 sampai 0,34% per hari (H 8.1.3). Bila angka itu dibaca sebagai laju eksponensial per hari, waktu paruhnya ln 2 ÷ 0,0034 = 204 hari sampai ln 2 ÷ 0,0006 = 1.155 hari (3,2 tahun), jauh lebih lambat daripada daun yang 15 sampai 70 hari. Perbedaan ini menjelaskan mengapa karbon akar tertimbun dan karbon daun tidak.

**Karbon yang terbawa keluar.** Hipotesis lama (outwelling) menyatakan mangrove mengirim banyak bahan organik ke laut sebagai makanan perikanan lepas pantai. Pengukuran menunjukkan gambaran yang lebih terbatas (H 8.1.5, 9.5):

- Pertukaran karbon organik (POC + DOC) antara mangrove dan sekitarnya berkisar dari seimbang sampai ekspor bersih; rata-rata global sekitar 6,8 kg C/ha/hari, kira-kira separuh POC dan separuh DOC (Bouillon dan Connolly 2009). Angka ini hanya 20% NPP.
- Karbon anorganik terlarut (DIC, terutama CO₂ terlarut di air dan air tanah) mungkin sepuluh kali lebih besar dan jarang diukur. Contoh dari Australia: DIC sekitar 3 g C/m²/hari, DOC sekitar 0,3 g C/m²/hari (Maher dkk. 2013, dikutip H 8.1.5). Angka 3 g C/m²/hari sama dengan 30 kg C/ha/hari atau 10,95 t C/ha/tahun, yaitu 10 kali DOC contoh itu tetapi hanya 4,4 kali rata-rata global POC + DOC (6,8 kg C/ha/hari). Kalimat "sepuluh kali" di H bergantung pada pembandingnya.
- Respirasi mikroba tanah sekitar 5,56 ton C/ha/tahun (Komiyama dkk. 2008, H 8.1.5).
- Bahan yang terbawa keluar umumnya hanya sampai beberapa ratus meter atau beberapa kilometer dari hutan (H 9.4).

Sebagai pelacak, nilai δ¹³C bahan mangrove berkisar −24 sampai −30‰, jauh lebih rendah daripada lamun (H 9.6).

BC bab 5 mencatat bahwa arus karbon mendatar tidak tertangkap oleh pengukuran gas di permukaan, sehingga aliran karbon antara atmosfer dan permukaan tanah belum tentu sama dengan perubahan stok karbon lahan basah.

**Diagram aliran karbon sederhana: tabel masukan, penyimpanan, keluaran**

Tabel berikut menyatukan angka H untuk hutan mangrove tropis. Angka stok dan laju berasal dari Gambar 8.6 (Robertson dkk. 1992, dikutip H) kecuali dinyatakan lain. Gambar 8.6 sengaja mengabaikan biomassa dan arus di bawah tanah serta DIC (H 8.1.5), sehingga neraca ini tidak tertutup.

| Kelompok | Komponen | Nilai | Satuan | Rujukan |
| --- | --- | --- | --- | --- |
| Masukan | NPP di atas tanah | 14 | t C/ha/tahun | H Gambar 8.6 |
| Penyimpanan (stok) | Biomassa di atas tanah | 190 | t C/ha | H Gambar 8.6 |
| Penyimpanan (stok) | Kayu rebah | 1,9 | t C/ha | H Gambar 8.6 |
| Penyimpanan (stok) | Biomassa bakteri | 2,1 | t C/ha | H Gambar 8.6 |
| Penyimpanan (stok) | Partikel organik (POC) | 102,5 | t C/ha | H Gambar 8.6 |
| Penyimpanan (laju) | Tertimbun di sedimen | 1,5 | t C/ha/tahun | H 8.1.4.4 (hutan Malaysia; sekitar 10% produksi) |
| Keluaran | Serasah terbawa keluar | 2,7 | t C/ha/tahun | H Gambar 8.6 |
| Keluaran | POC terbawa keluar | 0,6 | t C/ha/tahun | H Gambar 8.6 |
| Keluaran | Respirasi tanah | 5,56 | t C/ha/tahun | H 8.1.5 (Komiyama dkk. 2008) |
| Keluaran | DIC | tidak ada di Gambar 8.6 |  | H 8.1.5 |

Salin data berikut ke Excel atau Google Sheets (pisahkan kolom dengan Data > Text to Columns bila perlu):

```csv
kelompok,komponen,nilai,satuan,rujukan
masukan,NPP di atas tanah,14,t C/ha/tahun,H Gambar 8.6
stok,biomassa di atas tanah,190,t C/ha,H Gambar 8.6
stok,kayu rebah,1.9,t C/ha,H Gambar 8.6
stok,biomassa bakteri,2.1,t C/ha,H Gambar 8.6
stok,POC,102.5,t C/ha,H Gambar 8.6
laju simpan,tertimbun di sedimen,1.5,t C/ha/tahun,H 8.1.4.4
keluar,serasah terbawa keluar,2.7,t C/ha/tahun,H Gambar 8.6
keluar,POC terbawa keluar,0.6,t C/ha/tahun,H Gambar 8.6
keluar,respirasi tanah,5.56,t C/ha/tahun,H 8.1.5
```

**Contoh hitung 6: neraca sederhana dan selisihnya (angka dari buku)**

1. Serasah jatuh = 3,4 t C/ha/tahun (Gambar 8.6). Serasah terbawa keluar 2,7 ditambah yang diseret kepiting 0,7 = 3,4; jumlahnya cocok.
2. Ekspor organik = serasah 2,7 + POC 0,6 = 3,3 t C/ha/tahun, atau 3,3 × 1.000 ÷ 365 = 9,04 kg C/ha/hari. Porsinya 3,3 ÷ 14 = 23,6% NPP, dekat dengan 20% dan rata-rata global 6,8 kg C/ha/hari.
3. Rata-rata global 6,8 kg C/ha/hari × 365 ÷ 1.000 = 2,482 t C/ha/tahun. Bila ini 20% NPP, NPP-nya 2,482 ÷ 0,20 = 12,4 t C/ha/tahun, tidak jauh dari 14.
4. Penimbunan di sedimen = 1,5 ÷ 14 = 10,7% NPP, sesuai dengan "sekitar 10%" (H 8.1.4.4).
5. Keluaran dan penimbunan yang terukur = 2,7 + 0,6 + 5,56 + 1,5 = 10,36 t C/ha/tahun.
6. Selisih yang belum terjelaskan = 14 − 10,36 = 3,64 t C/ha/tahun (26% NPP).

Selisih 3,64 bukan galat hitung. Neraca ini memadukan angka dari studi yang berbeda (Gambar 8.6, hutan Malaysia, dan Komiyama dkk.), dan DIC, napas pohon, serta arus bawah tanah tidak termasuk. Peserta menuliskan keterbatasan ini pada lembar Aliran.

**Selisih 10 kali pada laju penimbunan karbon.** Pada bab 12, H menulis bahwa laju akumulasi karbon rata-rata "22,6 t/ha/tahun" pada mangrove dan 13,8 pada lamun (McLeod dkk. 2011). Angka itu tampaknya sepuluh kali terlalu besar (lembar rumus). Pemeriksaannya dengan angka buku sendiri:

1. Bandingkan dengan NPP: 22,6 ÷ 14 = 1,61, yaitu penimbunan 161% NPP pada Gambar 8.6. Penimbunan tidak mungkin melebihi produksi.
2. Bandingkan dengan penimbunan Malaysia: 1,5 t C/ha/tahun (H 8.1.4.4). Angka 22,6 adalah 15 kali lipatnya.
3. Hitung lama pengisian tanah Hutan Contoh stratum B (ilustrasi, laju dianggap tetap): 495 ÷ 22,6 = 21,9 tahun, terlalu cepat untuk tanah yang menurut H menumpuk selama ribuan tahun pada banyak hutan (H bab 12); dengan 1,5 hasilnya 495 ÷ 1,5 = 330 tahun.
4. Di luar buku: nilai McLeod dkk. (2011) yang biasa dikutip adalah 226 g C/m²/tahun untuk mangrove dan 138 untuk lamun. Dengan 1 g/m² = 0,01 ton/ha, itu 2,26 dan 1,38 t C/ha/tahun, tepat sepersepuluh angka H. Periksa ke makalah aslinya sebelum dikutip.

Peserta menuliskan pada lembar Aliran angka laju penimbunan mana yang dipakai dan alasannya. Catat juga bahwa H tidak menyebut satuan angka itu (ton karbon atau ton CO₂e).

## Latihan mandiri

Kerjakan di Excel atau Google Sheets, lalu cocokkan dengan kunci. Angka bertanda "ilustrasi" dibuat untuk latihan.

1. **Jaring serasah (dasar, ilustrasi).** Rata-rata serasah kering pada jaring adalah 3,0 g/m²/hari. Hitung ton berat kering/ha/tahun dan ton C/ha/tahun (faktor serasah 0,45). Apakah hasilnya berada di dalam rentang serasah umum di H?
2. **NPP (dasar, ilustrasi).** Pertambahan biomassa 5,5, serasah 6,2, dan bagian yang dimakan hewan 0,4 (ton berat kering/ha/tahun). Hitung NPP, porsi serasah, dan NPP dalam karbon dengan faktor 0,46.
3. **Hutan Contoh (menengah).** Dari tabel stok Hutan Contoh, hitung untuk tiap stratum karbon hidup (pohon di atas tanah + akar), rasio atas : bawah tanah, dan bagian di bawah tanah (%). Hitung juga karbon hidup tiap stratum dan seluruh kawasan (Mg C), dan persen terhadap total kawasan 331.620 Mg C. Apakah rasio tiap stratum berada di rentang 2,0 sampai 3,0 (BC)?
4. **Penguraian daun (menengah).** Waktu paruh daun R. apiculata adalah 43 hari (H 8.1.4.1). Dengan anggapan peluruhan eksponensial, hitung sisa daun setelah 60 hari dan lama sampai tinggal 10%.
5. **Neraca dan selisih angka (lebih sulit).** (a) Ubah 6,8 kg C/ha/hari menjadi t C/ha/tahun. (b) Bila ini 20% NPP, berapa NPP tersiratnya? (c) Berapa tahun diperlukan untuk menimbun 495 Mg C/ha (tanah stratum B, ilustrasi) pada laju 1,5 t C/ha/tahun? (d) Tuliskan satu kalimat: angka laju penimbunan mana yang Anda pakai (1,5 atau 22,6), dan mengapa.

**Kunci jawaban**

1. 3,0 × 365 = 1.095 g/m²/tahun; × 0,01 = 10,95 ton berat kering/ha/tahun; × 0,45 = 4,93 ton C/ha/tahun. Nilai 10,95 berada di dalam rentang 5 sampai 15 ton/ha/tahun (H 8.1.3).
2. NPP = 5,5 + 6,2 + 0,4 = 12,1 ton/ha/tahun. Serasah = 6,2 ÷ 12,1 = 51,2%. Karbon = 12,1 × 0,46 = 5,57 ton C/ha/tahun.
3. Karbon hidup: A = 70 + 25 = 95; B = 120 + 40 = 160; C = 95 + 30 = 125 Mg C/ha. Rasio: A 70 ÷ 25 = 2,8; B 120 ÷ 40 = 3,0; C 95 ÷ 30 = 3,17. Bagian bawah tanah: A 26,3%; B 25,0%; C 24,0%. Kawasan: A 95 × 180 = 17.100; B 160 × 264 = 42.240; C 125 × 120 = 15.000; jumlah 74.340 Mg C = 22,4% dari 331.620. Rasio A dan B berada dalam rentang; C sedikit di atas 3,0, sehingga catat dan periksa data lapangnya, bukan langsung dianggap salah. Bagian bawah tanah (24 sampai 26%) juga di bawah rentang 30 sampai 50% untuk Rhizophora di H; ini contoh selisih antarbuku yang harus dinyatakan.
4. Sisa = 0,5^(60/43) = 0,380 (38,0%). Lama sampai 10%: 43 × log₂(10) = 43 × 3,32 = 142,8, jadi sekitar 143 hari.
5. (a) 6,8 × 365 ÷ 1.000 = 2,482 t C/ha/tahun. (b) 2,482 ÷ 0,20 = 12,4 t C/ha/tahun. (c) 495 ÷ 1,5 = 330 tahun. (d) Jawaban yang baik memakai 1,5 (H 8.1.4.4) dan menyebut bahwa 22,6 melebihi NPP 14 pada Gambar 8.6 serta tampak sepuluh kali terlalu besar; di luar buku, nilai McLeod dkk. 2011 adalah 2,26 t C/ha/tahun, yang perlu dicek ke sumber aslinya.

## Temukan kesalahan

Dua laporan pendek berikut tampak rapi tetapi mengandung kesalahan. Temukan dan perbaiki sebelum membuka kunci.

**Laporan A.** "Memakai angka H, NPP di atas tanah hutan mangrove tropis adalah 14 t C/ha/tahun. Ekspor karbon organik sekitar 20% NPP, yaitu 2,8 t C/ha/tahun. Sisanya, 80% atau 11,2 t C/ha/tahun, tertimbun di tanah. Dalam CO₂e, 11,2 × 3,67 = 41,1 Mg CO₂e/ha/tahun. Dengan laju ini, tanah stratum B yang berisi 495 Mg C/ha terbentuk dalam 495 ÷ 11,2 = 44 tahun."

**Laporan B.** "Rata-rata serasah dari jaring adalah 2,4 g/m²/hari. Dalam setahun 2,4 × 365 = 876 g/m², atau 876 × 0,1 = 87,6 ton berat kering/ha. Karbon serasah = 87,6 × 0,50 = 43,8 ton C/ha/tahun."

**Kunci**

- Laporan A, kesalahan: seluruh sisa NPP dianggap tertimbun. Sisa NPP juga lenyap sebagai respirasi (tanah saja sekitar 5,56 t C/ha/tahun, H 8.1.5), sebagian terbawa keluar sebagai DIC yang belum diukur, dan penimbunan sedimen hanya 1,5 t C/ha/tahun atau sekitar 10% produksi (H 8.1.4.4). Angka yang benar mengikuti H: 1,5 × 3,67 = 5,5 Mg CO₂e/ha/tahun, bukan 41,1; dan 495 ÷ 1,5 = 330 tahun, bukan 44. Cara mendeteksi: neraca yang tidak mencantumkan respirasi dan DIC tidak tertutup, dan 80% jauh dari 10% yang tertulis di H. Faktor 3,67 sudah benar.
- Laporan B, kesalahan pertama: konversi g/m² ke ton/ha memakai 0,1, padahal 1 g/m² = 0,01 ton/ha; angka yang benar 8,76 ton berat kering/ha/tahun. Kesalahan kedua: faktor karbon serasah 0,45 (lembar rumus), bukan 0,50 yang untuk kayu mati; karbon yang benar 8,76 × 0,45 = 3,94 ton C/ha/tahun, bukan 43,8. Cara mendeteksi: 87,6 ton/ha/tahun jauh di atas rentang 5 sampai 15 ton/ha/tahun (H 8.1.3); hitung ulang dengan satuan: 10.000 m²/ha ÷ 1.000.000 g/ton = 0,01.

## Peran AI dan contoh prompt

AI berguna untuk menyusun rumus spreadsheet, menjelaskan istilah, dan memeriksa urutan hitungan. AI tidak boleh menjadi sumber angka: setiap angka karbon harus ditemukan di buku atau dihitung sendiri.

**Prompt 1: menyusun rumus Excel**

```markdown
Saya memakai Excel Mac berbahasa Indonesia. Kolom B berisi isi kering (gram) dari jaring serasah seluas 0,5 m2 yang dikosongkan tiap 14 hari. Buatkan rumus untuk mengubah rata-rata kolom B menjadi ton berat kering per hektare per tahun, lalu menjadi ton C per hektare per tahun dengan faktor 0,45. Tulis satuan di setiap langkah dan tulis nama fungsi dalam bahasa Indonesia.
```

Pemeriksaan: (1) hitung dengan tangan memakai angka contoh 3 (rata-rata 16,8 g harus menghasilkan 8,76 ton/ha/tahun dan 3,94 ton C/ha/tahun); (2) pastikan hasil berada di rentang 5 sampai 15 ton/ha/tahun (H 8.1.3); (3) periksa bahwa faktor 0,01 muncul, bukan 0,1 atau 10.

**Prompt 2: menjelaskan istilah**

```markdown
Jelaskan beda POC, DOC, dan DIC dalam karbon mangrove dengan lima kalimat. Beri satu contoh angka dari buku Hogarth (The Biology of Mangroves and Seagrasses, edisi 3) dan sebutkan bab atau bagiannya. Katakan bila Anda tidak yakin.
```

Pemeriksaan: buka bagian yang disebut (misalnya H 8.1.5 atau 9.5) dan cari angkanya. Angka yang tidak ditemukan di buku dicoret, dan bagian yang disebut harus benar-benar memuat angka itu.

**Prompt 3: memeriksa hitungan neraca**

```markdown
Berikut langkah neraca karbon saya, dalam t C/ha/tahun: NPP 14; ekspor serasah 2,7; ekspor POC 0,6; respirasi tanah 5,56; penimbunan sedimen 1,5. Periksa penjumlahan dan satuan, sebutkan komponen yang mungkin belum terhitung, dan jangan mengubah angka sumber.
```

Pemeriksaan: jumlahkan sendiri (2,7 + 0,6 + 5,56 + 1,5 = 10,36; selisih 3,64). Bila AI memberi angka lain, cari langkah yang berbeda dan ikuti hitungan tangan.

**Contoh jawaban AI yang bisa salah**

> "Menurut Hogarth, mangrove menimbun rata-rata 22,6 t C/ha/tahun. Dengan laju ini, tanah stratum B yang berisi 495 Mg C/ha terbentuk dalam sekitar 22 tahun."

Jawaban ini mengutip angka buku dengan benar tetapi mengulang angka yang tampaknya sepuluh kali terlalu besar, dan menyebutnya "t C" padahal buku tidak menyebut satuannya. Cara menangkapnya: bandingkan dengan NPP 14 t C/ha/tahun pada Gambar 8.6 (22,6 melebihi NPP), bandingkan dengan 1,5 t C/ha/tahun di H 8.1.4.4, dan baca catatan selisih antarbuku pada bagian 5.3. Peserta meminta AI menunjukkan kalimat aslinya di buku, lalu membandingkannya dengan lembar rumus.

## Catatan Excel: Mac dan Windows

| Langkah | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Menjumlahkan sel | =SUM(B2:B7), atau Cmd+Shift+T (AutoSum) | =SUM(B2:B7), atau Alt+= (AutoSum) | =SUM(B2:B7) |
| Rata-rata | =AVERAGE(B2:B7) | =AVERAGE(B2:B7) | =AVERAGE(B2:B7) |
| g/m² ke ton/ha | =B2*0.01 | =B2*0.01 | =B2*0.01 |
| Sisa bahan setelah t hari | =0.5^(30/B2) | =0.5^(30/B2) | =0.5^(30/B2) |
| Lama sampai tinggal 10% | =B2*LOG(10,2) | =B2*LOG(10,2) | =B2*LOG(10,2) |
| Mengunci sel rujukan | Cmd+T saat mengedit rumus, atau ketik tanda $ langsung | F4 saat mengedit rumus, atau ketik tanda $ langsung | ketik tanda $ langsung |
| Format persen | Ctrl+Shift+% | Ctrl+Shift+% | Format > Number > Percent |
| Cek rentang | =IF(B2<5,"periksa",IF(B2>15,"periksa","dalam rentang")) | sama | sama |
| Memisah data csv yang ditempel | Data > Text to Columns | Data > Text to Columns | Data > Split text to columns |

Pada Excel berbahasa Indonesia, nama fungsi dan pemisah berbeda: SUM menjadi JUMLAH, AVERAGE menjadi RATA2, IF menjadi JIKA, argumen dipisah titik koma (;), dan desimal memakai koma (=B2*0,01). Rumus di tabel ditulis dengan pemisah koma dan desimal titik. Bila nama fungsi lain (misalnya LOG) tidak dikenali, cari dengan Formulas > Insert Function. Angka dari blok csv yang tertulis dengan titik desimal dapat terbaca sebagai teks pada pengaturan Indonesia; ganti titik menjadi koma bila perlu.

## Tugas mingguan

Isi lembar "Aliran" di buku kerja. Tugas dianggap lulus bila semua butir berikut terpenuhi.

- [ ] Tabel masukan, penyimpanan, dan keluaran memuat semua baris tabel pada 5.3, masing-masing dengan nilai, satuan, dan rujukan (bab atau gambar dan nama buku).
- [ ] Jumlah keluaran dan penimbunan dihitung dengan rumus, bukan diketik, dan hasilnya 10,36 t C/ha/tahun dengan selisih 3,64 dari NPP 14.
- [ ] Persen ekspor organik (23,6%) dan penimbunan sedimen (10,7%) terhitung terhadap NPP.
- [ ] Satu kalimat menyatakan angka laju penimbunan yang dipakai (1,5 atau 22,6 t/ha/tahun) dengan alasannya.
- [ ] Faktor karbon biomassa yang dipakai dituliskan, disertai catatan selisih antarbuku (0,46 sampai 0,50 pada KD dan BC; 0,40 sampai 0,45 pada H).
- [ ] Tiga hal yang belum terukur dalam neraca dituliskan (DIC, bagian bawah tanah, arus mendatar menurut BC bab 5).
- [ ] Sketsa panah dari masukan ke penyimpanan dan keluaran memuat angka yang sama dengan tabel.
- [ ] Semua satuan seragam (t C/ha/tahun untuk laju, t C/ha untuk stok), dan angka rekaan bertanda "ilustrasi".
- [ ] Latihan 1 sampai 5 terjawab, dan kedua laporan pada "Temukan kesalahan" sudah diperbaiki.

## Rencana sesi langsung 60 menit

| Menit | Kegiatan | Bahan |
| --- | --- | --- |
| 0 sampai 5 | Pembuka: tiga pertanyaan cepat (rentang biomassa, rumus NPP, empat nasib bahan mati) | Pertanyaan di layar |
| 5 sampai 15 | Peserta menunjukkan jawaban latihan 1 dan 2; bahas konversi g/m² ke ton/ha | Buku kerja, kunci latihan |
| 15 sampai 25 | Praktik: salin blok csv neraca, hitung jumlah keluaran dan selisih 3,64 | Blok csv pada 5.3, Excel atau Sheets |
| 25 sampai 40 | Diskusi selisih antarbuku: laju 22,6 dan 1,5, faktor karbon 0,46 sampai 0,50 dan 0,40 sampai 0,45; tiap peserta menuliskan angka pilihannya | Lembar rumus, H 8.1.4.4 dan bab 12 |
| 40 sampai 50 | Berpasangan: perbaiki laporan A dan B pada "Temukan kesalahan" | Teks laporan |
| 50 sampai 60 | Tinjau lembar Aliran, tanya jawab, pengantar Modul 6 | Lembar Aliran peserta |

Bila sesi minggu 2 dibagi dengan Modul 3 dan 4, ambil baris 5 sampai 25 dan 40 sampai 50 (sekitar 30 menit) dan sisanya dikerjakan peserta secara mandiri.

Sumber: Hogarth (2015), The Biology of Mangroves and Seagrasses, edisi ke-3 (H), bab 8 (8.1.2 sampai 8.1.5), bab 9 (9.4 sampai 9.6), dan bab 12; Howard dkk. (2014), Coastal Blue Carbon (BC), bab 5; Kauffman dan Donato (2012), CIFOR Working Paper 86 (KD); lembar rumus bersama untuk faktor karbon dan selisih antarbuku. Nilai McLeod dkk. (2011) berada di luar buku dan perlu dicek ke makalah aslinya. Angka bertanda "ilustrasi" dibuat untuk latihan.

---

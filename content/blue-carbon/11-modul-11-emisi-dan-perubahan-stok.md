# Modul 11. Emisi dan perubahan stok

## Ringkasan modul

Modul ini mengubah dua inventarisasi stok karbon menjadi angka emisi: selisih stok antara dua waktu dihitung per tampungan, dikonversi ke CO2e dengan faktor 3,67, lalu diperiksa apakah seluruh karbon yang hilang memang menjadi emisi. Peserta menerapkannya pada skenario ilustrasi di Hutan Contoh, yaitu 30 ha stratum B yang berubah menjadi tambak, dan menguji seberapa peka hasilnya terhadap asumsi tentang karbon tanah. Modul ini juga membandingkan metode selisih stok dengan metode tambah-kurang dan pengukuran aliran gas (rujukan utama: BC bab 5).

| Aspek | Keterangan |
| --- | --- |
| Minggu | 7 (bersama Modul 12) |
| Waktu belajar | Video 37 menit (3 video), latihan dan tugas sekitar 60 menit, sesi langsung 60 menit |
| Prasyarat | Modul 7, 8, dan 10: stok karbon per tampungan, total per hektare dan kawasan, ketidakpastian. Excel atau Google Sheets dasar |
| Alat | Excel atau Google Sheets, kalkulator, data Hutan Contoh (tab Modul 10 dan tabel di bawah) |
| Luaran minggu ini | Lembar "Emisi" di buku kerja: skenario kehilangan lahan dan emisi CO2e, lengkap dengan uji sensitivitas |

Angka berlabel "ilustrasi" dibuat untuk latihan dan tidak berasal dari buku. Angka dari buku diberi nama bukunya: BC (Coastal Blue Carbon, Howard dkk. 2014), KD (Kauffman dan Donato 2012, CIFOR WP86), H (Hogarth 2015).

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, peserta mampu:

- Membedakan metode selisih stok, tambah-kurang, dan fluks menurut cara kerja, tier, dan gas yang bisa ditangkap.
- Menghitung perubahan stok per tampungan, per tahun, dan emisi CO2e (faktor 3,67) dari dua inventarisasi.
- Menjelaskan fungsi titik acuan (reference datum) dan Surface Elevation Table (SET) dalam membandingkan karbon tanah antarwaktu, dan menghitung tambahan karbon tanah dari data SET.
- Menghitung emisi kehilangan lahan di Hutan Contoh dan menyatakan bagian karbon tanah yang diasumsikan teremisi sebagai parameter yang diuji, minimal pada tiga nilai.
- Menghitung emisi dengan metode tambah-kurang dan mengubah data sungkup tertutup menjadi laju aliran CH4.
- Menuliskan batas atas emisi dengan asumsinya secara terbuka pada lembar "Emisi".

## Rencana video

Tiga video berdurasi total 37 menit. Sisa anggaran video minggu 7 dipakai Modul 12.

| No. | Judul | Durasi (menit) | Isi |
| --- | --- | --- | --- |
| 11.1 | Tiga cara menghitung emisi dan metode selisih stok | 12 | Selisih stok, tambah-kurang, dan fluks; plot permanen; titik acuan dan SET; contoh rawa asin dan contoh SET dari buku |
| 11.2 | Skenario Hutan Contoh: 30 ha stratum B menjadi tambak | 13 | Selisih stok per tampungan; faktor 3,67; apakah semua karbon yang hilang menjadi emisi; uji sensitivitas 25%, 50%, dan 100%; lembar "Emisi" |
| 11.3 | Tambah-kurang dan aliran gas | 12 | Contoh 1.000 ha rawa asin; Tier 1 dan 2; CH4, N2O, dan GWP; sungkup tertutup dan menara fluks |

## Materi

### 11.1 Tiga cara menghitung emisi dan metode selisih stok

Stok menjawab berapa karbon yang tersimpan; emisi menjawab berapa yang lepas atau terserap dari waktu ke waktu (BC bab 5). Buku menyebut tiga metode.

| Metode | Cara kerja | Tier |
| --- | --- | --- |
| Selisih stok (stock-difference) | Stok karbon diukur pada dua waktu lalu dibandingkan | 3 |
| Tambah-kurang (gain-loss) | Luas lahan yang mengalami suatu kegiatan dikalikan faktor emisi kegiatan itu | 1 dan 2 |
| Fluks | Aliran gas antara tanah, tumbuhan, dan udara atau air diukur langsung atau dimodelkan | 2 dan 3 |

Metode selisih stok dan tambah-kurang tidak mengukur gas. Keduanya memakai perubahan stok karbon sebagai pengganti dan menganggap karbon yang hilang lepas sebagai CO2. Anggapan ini tidak berlaku untuk CH4 dan N2O, karena kedua gas itu tidak tersimpan di dalam ekosistem; hanya metode fluks yang dapat menangkapnya (BC bab 5).

Pada metode selisih stok, semua tampungan penting diukur pada T1 dan T2. Hasil terbaik datang dari plot permanen karena lokasi, ukuran plot, dan cara kerja sama. Metode ini juga menunjukkan perubahan per tampungan: bila biomassa hidup turun sedangkan biomassa mati naik, ekosistem itu rusak di antara dua pengukuran. Penyebab kerusakannya tidak terbaca dari data ini. Di lokasi tak terganggu, jarak pengukuran 5 sampai 10 tahun biasanya memadai untuk biomassa, dan 10 sampai 20 tahun untuk tanah yang hanya bertambah beberapa milimeter per tahun. Bila ada perubahan penggunaan lahan, pengukuran dilakukan lebih sering (BC bab 5).

Rumus dasarnya:

```latex
\Delta C = C_{T2} - C_{T1}, \qquad \text{per tahun} = \frac{\Delta C}{T2 - T1}, \qquad \text{emisi CO}_2 = (-\Delta C) \times 3{,}67
```

Tanda negatif pada perubahan stok berarti karbon hilang. Faktor 3,67 berasal dari 44 dibagi 12, yaitu perbandingan massa molekul CO2 terhadap karbon (BC bab 1; KD 3.2.1).

**Contoh dari buku: rawa asin.** Stok karbon rawa asin 34.667 Mg C pada 2002 dan 25.133 Mg C pada 2012 (BC bab 5).

1. Perubahan stok = 25.133 - 34.667 = -9.534 Mg C.
1. Per tahun = -9.534 / 10 = -953 Mg C (tepatnya -953,4).
1. Emisi bila seluruhnya lepas = 953 × 3,67 = 3.498 Mg CO2 per tahun. Dengan 953,4 hasilnya 3.499; selisih ini hanya karena pembulatan.

Buku panduan menulis stok T2 sebagai 25.167 lalu 25.133; hitungannya memakai 25.133. Ini salah ketik, jadi tuliskan angka mana yang Anda pakai.

**Titik acuan dan SET.** Permukaan tanah pesisir tidak tetap: naik karena endapan, turun karena erosi atau pemadatan. Inti 0-100 cm pada T2 karena itu tidak mencakup lapisan yang sama dengan inti 0-100 cm pada T1. Solusinya titik acuan (reference datum), yaitu batas di dalam tanah yang kedudukannya tetap dan berada di bawah jangkauan akar, misalnya batuan dasar atau batas tegas antara tanah organik dan pasir laut. Semua pengukuran dinyatakan terhadap batas itu. Bila batas semacam itu tidak ada, dipakai Surface Elevation Table (SET) pada tonggak permanen, dengan ketelitian 1,5 mm. SET sering dipasang bersama lapisan penanda (marker horizon) yang memperlihatkan tebal endapan baru (akresi) (BC bab 5).

```latex
\text{penurunan tanah dangkal} = \text{akresi (lapisan penanda)} - \text{perubahan tinggi permukaan (SET)}
```

**Contoh dari buku: permukaan naik.** SET mencatat kenaikan 0,52 cm per tahun selama 10 tahun; kerapatan karbon lapisan atas pada T2 adalah 0,195 g/cm3 (BC bab 5).

1. Tebal tanah baru = 0,52 × 10 = 5,2 cm.
1. Karbon tambahan = 5,2 × 0,195 = 1,014 g C/cm2.
1. Ke hektare: 1,014 × 100 = 101,4 Mg C/ha.

**Bila permukaan turun.** Pada contoh buku, SET mencatat penurunan 0,86 cm per tahun selama 10 tahun, jadi 8,6 cm. Inti 1 m pada T2 menjangkau 8,6 cm lebih dalam daripada inti T1, sehingga yang dibandingkan dengan T1 hanya 91,4 cm teratas inti T2 (100 - 8,6 = 91,4).

### 11.2 Skenario Hutan Contoh: 30 ha stratum B menjadi tambak

Skenario ini menghitung emisi dari konversi sebagian stratum B Hutan Contoh dengan metode selisih stok. Seluruh angka stok memakai data kanonik Hutan Contoh; kejadian konversi dan asumsi fraksi karbon yang hilang adalah ilustrasi.

#### Data Hutan Contoh: skenario konversi tambak (ilustrasi)

| Unsur skenario | Nilai | Keterangan |
| --- | --- | --- |
| Inventarisasi awal T1 | 2026 | Plot permanen; stok per ha sama dengan tabel kanonik Hutan Contoh |
| Konversi menjadi tambak | 2030 | 30 ha dari stratum B (264 ha); ilustrasi |
| Pengukuran ulang T2 | 2036 | Selang 10 tahun; ilustrasi |
| Pohon hidup, akar, kayu mati dan serasah di 30 ha | Hilang 100% | Ilustrasi: lahan dibersihkan sepenuhnya; karbon vegetasi yang berpindah di bawah 5% boleh diabaikan (BC bab 5) |
| Karbon tanah 0-100 cm di 30 ha | Hilang 25%, 50%, atau 100% | Rentang dari BC bab 5 (penelitian yang ada menganggap 25 sampai 100% karbon organik di 1 m teratas menjadi emisi); nilai tengah 50% adalah pilihan ilustrasi |
| Titik acuan | Dianggap ada | Kedalaman tanah dibandingkan terhadap batas tetap, sehingga 0-100 cm pada T1 dan T2 sepadan |

Stok stratum B per hektare pada T1 (Mg C/ha, data kanonik): pohon hidup di atas tanah 120, akar 40, pohon mati + kayu mati rebah + serasah 15, tanah 495; total 670 (± 73).

```csv
tampungan,stok_T1_Mg_C_per_ha,fraksi_hilang_dasar
pohon_hidup,120,1
akar,40,1
mati_serasah,15,1
tanah_1m,495,0.5
```

**Langkah 1: karbon yang hilang per hektare dan untuk 30 ha.** Vegetasi dan kayu mati: 120 + 40 + 15 = 175 Mg C/ha, jadi 175 × 30 = 5.250 Mg C. Tanah pada fraksi 50%: 495 × 0,5 = 247,5 Mg C/ha, jadi 247,5 × 30 = 7.425 Mg C. Jumlah = 5.250 + 7.425 = 12.675 Mg C, atau 422,5 Mg C/ha.

**Langkah 2: stok kawasan sebelum dan sesudah.** T1 = 331.620 Mg C (kawasan 564 ha). T2 = 331.620 - 12.675 = 318.945 Mg C, rata-rata 565,5 Mg C/ha (T1: 588). Kehilangan 3,8% dari stok kawasan.

**Langkah 3: per tahun dan CO2e.** Selang 10 tahun memberi -12.675 / 10 = -1.267,5 Mg C per tahun sebagai rata-rata selang. Konversinya terjadi pada 2030, bukan merata; metode selisih stok tidak memperlihatkan waktu kejadian di dalam selang. Emisi CO2e = 12.675 × 3,67 = 46.517 Mg CO2e, atau 4.652 Mg CO2e per tahun rata-rata selang.

**Apakah semua karbon yang hilang menjadi emisi?** Tidak selalu. Karbon yang terkikis dapat berpindah dan mengendap lagi di ekosistem tetangga atau laut dalam, sehingga hasil hitungan adalah batas atas emisi (BC bab 5). Pedoman buku:

- Karbon autokton boleh dihitung; karbon alokton lebih sulit karena sebelumnya hilang dari tempat lain tanpa menjadi emisi.
- Bila karbon tanah bertambah karena endapan, bagian dari luar dikurangi dengan faktor koreksi (dari pustaka, isotop, angka berhati-hati seperti 50%, atau model).
- Untuk kehilangan karena erosi belum ada angka baku; penelitian yang ada memakai 25 sampai 100% karbon organik di 1 m teratas.
- Karbon vegetasi yang berpindah boleh diabaikan bila di bawah 5%.

Buku tidak menyebut fraksi khusus untuk pembuatan tambak. Karena itu fraksi tanah pada skenario ini adalah parameter yang harus diuji, bukan nilai yang dianggap benar.

**Uji sensitivitas fraksi karbon tanah teremisi** (ilustrasi; vegetasi dan kayu mati tetap 5.250 Mg C):

| Fraksi tanah teremisi | Tanah (Mg C) | Total hilang (Mg C) | Emisi (Mg CO2e) | Stok kawasan T2 (Mg C/ha) |
| --- | --- | --- | --- | --- |
| 25% | 3.712,5 | 8.962,5 | 32.892 | 572,1 |
| 50% | 7.425 | 12.675 | 46.517 | 565,5 |
| 100% | 14.850 | 20.100 | 73.767 | 552,3 |

Nilai 100% sama dengan seluruh stok 30 ha (30 × 670 = 20.100 Mg C) dan menjadi batas atas. Dari 25% ke 100%, emisi berubah sekitar 2,2 kali, sepenuhnya karena satu asumsi. Dalam laporan, tuliskan ketiga nilai atau rentangnya, bukan satu angka.

**Ketidakpastian.** Stok T1 untuk 30 ha stratum B adalah 20.100 ± 2.190 Mg C (73 × 30; modul 10). Ketidakpastian ini hanya mewakili pengukuran stok. Ketidakpastian dari fraksi tanah teremisi jauh lebih besar (8.962,5 sampai 20.100 Mg C) dan tidak boleh dilebur ke dalam selang kepercayaan stok.

**Lembar "Emisi" di buku kerja.** Rancangannya (parameter di kolom B, tabel mulai baris 11):

| Sel | Isi | Rumus atau nilai |
| --- | --- | --- |
| B4 | Luas stratum B yang dikonversi (ha) | `30` |
| B5 | Faktor karbon ke CO2 | `3,67` |
| B6 | Fraksi karbon tanah teremisi | `0,5` |
| B7 | Fraksi vegetasi dan kayu mati teremisi | `1` |
| A12:A15 | Pohon hidup, akar, mati + serasah, tanah | stok T1 per ha di B12:B15: 120, 40, 15, 495 |
| C12:C15 | Fraksi hilang | C12 sampai C14 berisi `=$B$7`; C15 berisi `=$B$6` |
| D12:D15 | Hilang per ha (Mg C/ha) | `=B12*C12`, isi ke bawah |
| E12:E15 | Hilang untuk luas konversi (Mg C) | `=D12*$B$4`, isi ke bawah |
| F12:F15 | Emisi (Mg CO2e) | `=E12*$B$5`, isi ke bawah |
| D16, E16, F16 | Jumlah | `=SUM(D12:D15)`, `=SUM(E12:E15)`, `=SUM(F12:F15)` |
| A20:A22 | Fraksi tanah uji | `0,25`; `0,5`; `1` |
| B20:B22 | Emisi menurut fraksi uji (Mg CO2e) | `=$B$4*(SUM($B$12:$B$14)*$B$7+$B$15*A20)*$B$5`, isi ke bawah |
| B25 | Stok kawasan T1 (Mg C) | `331620` |
| B26 | Stok kawasan T2 (Mg C) | `=B25-E16` |

Hasil yang harus muncul pada B6 = 0,5: E16 = 12.675, F16 = 46.517, B20 = 32.892, B21 = 46.517, B22 = 73.767, B26 = 318.945. Di Excel berbahasa Indonesia, tulis desimal dengan koma dan pemisah argumen titik koma.

### 11.3 Tambah-kurang dan aliran gas

Metode tambah-kurang dipakai setelah inventarisasi awal bila pengukuran ulang di lapangan tidak dapat dilakukan. Kegiatan yang terjadi dicatat luasnya, lalu dikalikan faktor emisi kegiatan itu. Faktor emisi dari basis data dunia, misalnya Suplemen Lahan Basah IPCC 2013, menghasilkan Tier 1; faktor dari negara sendiri menghasilkan Tier 2. Data luas kegiatan harus selalu berasal dari negara atau proyek itu sendiri (BC bab 5).

```latex
\text{karbon hilang} = \sum \text{luas kegiatan (ha)} \times \text{faktor emisi (Mg C/ha/tahun)} \times \text{lama (tahun)}
```

**Contoh dari buku.** Rawa asin 1.000 ha diinventarisasi pada 2002. Pada 2007, 200 ha dikeringkan (faktor emisi 7,9 Mg C/ha/tahun). Pada 2010, 50 ha dari lahan itu dibasahi kembali (faktor -0,91 Mg C/ha/tahun; negatif berarti menyerap). Berapa karbon yang hilang sampai 2012 (BC bab 5)?

1. 2007-2010 (3 tahun), 200 ha kering: 200 × 7,9 × 3 = 4.740 Mg C.
1. 2010-2012 (2 tahun), 150 ha tetap kering: 150 × 7,9 × 2 = 2.370 Mg C.
1. 2010-2012 (2 tahun), 50 ha dibasahi kembali: 50 × (-0,91) × 2 = -91 Mg C.
1. Jumlah = 4.740 + 2.370 - 91 = 7.019 Mg C; emisi = 7.019 × 3,67 = 25.760 Mg CO2.

Buku panduan mencetak 25.739 Mg CO2 untuk contoh ini. Hasil kali yang benar adalah 25.760 (25.759,7), jadi 25.739 tampaknya salah ketik. Tuliskan angka yang Anda pakai.

**Metana dan dinitrogen oksida.** Jumlah CH4 dan N2O dari lahan basah jauh lebih kecil daripada CO2, tetapi daya pemanasannya dalam 100 tahun adalah 25 kali (CH4) dan 298 kali (N2O) CO2 (BC bab 5). Karena itu emisi yang kecil dari kedua gas ini dapat mengubah perhitungan manfaat iklim proyek. Buku memberi tiga pedoman:

- Pembuatan tambak membongkar tanah dan menimbulkan emisi CO2 yang besar.
- Emisi N2O umumnya dapat diabaikan, kecuali ada masukan nitrat dari limpasan pupuk atau budi daya.
- Pembentukan CH4 bergantung pada salinitas; di atas 18 ppt emisinya dianggap nol. Membasahi kembali lahan pasang surut air tawar yang pernah dikeringkan menaikkan emisi CH4.

**Sungkup tertutup (static chamber).** Sungkup kedap udara dipasang menutupi sebidang tanah beserta tumbuhannya; contoh udara diambil beberapa kali (misalnya menit ke-2, 15, 35, 45, 60, 80), dan laju kenaikan kadar gas menunjukkan besar aliran. Contoh dari buku: kadar CH4 naik 0,0737 ppm per menit, sungkup berisi 21,8072 mol udara dan menutupi tanah 0,5 m2 (BC bab 5).

1. CH4 keluar = 0,0737 × 21,8072 = 1,607 mikromol per menit.
1. Per m2 = 1,607 / 0,5 = 3,214 mikromol per m2 per menit (buku membulatkan 3,2).
1. Satuan: × 16,042 g/mol × 1.440 menit/hari × 10.000 m2/ha, lalu ke Mg: 0,00074 Mg CH4/ha/hari (buku: 0,00074).
1. Setara CO2: 0,000743 × 25 = 0,0186 Mg CO2e/ha/hari, sekitar 6,8 Mg CO2e/ha/tahun bila laju dianggap tetap sepanjang tahun (ilustrasi; buku memperingatkan bahwa angka tahunan memerlukan anggapan tambahan).

Catatan pemakaian sungkup (BC bab 5): luas tanah tertutup minimal 0,25 m2 karena emisi CH4 lahan basah pasang surut sering rendah; tanah 1-2 m di sekitar sungkup tidak boleh diinjak karena menekan keluar gelembung CH4 dan membuat hasil terlalu tinggi, sehingga dipakai titian setinggi 5-10 cm dan dasar sungkup dipasang beberapa hari sebelumnya. Kelemahannya: sungkup mengubah suhu dan cahaya di dalamnya, tidak menangkap gas yang keluar sebagai gelembung, dan perlu anggapan tambahan untuk angka tahunan.

**Menara fluks.** Kovarians eddy memakai alat di menara di atas tajuk dan mengukur pertukaran CO2 seluruh ekosistem tanpa mengganggu lokasi, tetapi mahal dan pengolahan datanya rumit. Untuk lamun, alat bawah air yang ada baru mengukur oksigen. Karbon juga keluar mendatar bersama air (karbon anorganik terlarut, karbon organik terlarut, dan butiran bahan organik); jalur ini tidak tertangkap pengukuran di udara, sehingga pertukaran gas permukaan-udara belum tentu sama dengan perubahan simpanan karbon (BC bab 5).

## Latihan mandiri

Kerjakan di lembar "Emisi" atau lembar kosong. Faktor 3,67; tulis angka yang dipakai bila buku berbeda.

1. (Dasar) Stok karbon sebuah rawa asin (ilustrasi) adalah 12.480 Mg C pada T1 dan 11.360 Mg C pada T2, selang 8 tahun. Hitung perubahan stok, perubahan per tahun, dan emisi CO2 per tahun bila semua karbon yang hilang dianggap lepas.
1. (Dasar) SET mencatat kenaikan permukaan 0,35 cm per tahun selama 12 tahun (ilustrasi); kerapatan karbon lapisan atas pada T2 0,18 g/cm3. Berapa tambahan karbon tanah dalam Mg C/ha?
1. (Menengah) Di Hutan Contoh, 20 ha stratum A dikonversi menjadi tambak. Anggap vegetasi, akar, dan kayu mati hilang 100% dan karbon tanah hilang 25% (ilustrasi). Hitung karbon yang hilang dan emisi CO2e dengan data stratum A (70, 25, 8, dan tanah 380 Mg C/ha).
1. (Menengah) Pada skenario 30 ha stratum B, ubah fraksi tanah teremisi menjadi 75%. Hitung karbon hilang dan emisi CO2e, lalu nyatakan persentase kehilangan yang berasal dari tanah.
1. (Lanjut) Lahan 100 ha dikeringkan selama 4 tahun dengan faktor emisi 7,9 Mg C/ha/tahun (angka buku, BC bab 5). Pada awal tahun ke-3, 20 ha dibasahi kembali (faktor -0,91). Hitung karbon hilang dan emisi CO2 dengan metode tambah-kurang. Lalu hitung laju CH4 dalam Mg/ha/hari bila kadar di sungkup naik 0,05 ppm per menit pada sungkup 21,8072 mol dan luas 0,5 m2 (ilustrasi).

**Kunci jawaban**

1. Perubahan stok = 11.360 - 12.480 = -1.120 Mg C. Per tahun = -1.120 / 8 = -140 Mg C. Emisi = 140 × 3,67 = 513,8 Mg CO2 per tahun (total 4.110,4 Mg CO2).
1. Tebal baru = 0,35 × 12 = 4,2 cm. Karbon = 4,2 × 0,18 = 0,756 g C/cm2; × 100 = 75,6 Mg C/ha.
1. Vegetasi dan kayu mati = 70 + 25 + 8 = 103 Mg C/ha × 20 = 2.060 Mg C. Tanah = 380 × 20 × 0,25 = 1.900 Mg C. Jumlah = 3.960 Mg C; emisi = 3.960 × 3,67 = 14.533 Mg CO2e.
1. Tanah = 495 × 30 × 0,75 = 11.137,5 Mg C; vegetasi dan kayu mati 5.250. Jumlah = 16.387,5 Mg C; emisi = 16.387,5 × 3,67 = 60.142 Mg CO2e. Bagian dari tanah = 11.137,5 / 16.387,5 = 68%.
1. Tahun 1-2: 100 × 7,9 × 2 = 1.580. Tahun 3-4: 80 × 7,9 × 2 = 1.264, dan 20 × (-0,91) × 2 = -36,4. Jumlah = 2.807,6 Mg C; emisi = 2.807,6 × 3,67 = 10.304 Mg CO2. CH4: 0,05 × 21,8072 = 1,0904 mikromol/menit; / 0,5 = 2,181 mikromol/m2/menit; setelah konversi satuan sekitar 0,00050 Mg CH4/ha/hari.

## Temukan kesalahan

**Kasus A.** Laporan menulis: "Konversi 30 ha stratum B menjadi tambak menghilangkan 588 Mg C/ha × 30 ha = 17.640 Mg C, setara 64.739 Mg CO2e. Seluruh karbon dianggap teremisi."

**Kasus B.** Catatan lapangan menulis: "SET menunjukkan kenaikan 0,52 cm/tahun selama 10 tahun; kerapatan karbon 0,195 g/cm3. Tambahan karbon tanah = 5,2 × 0,195 = 1,014 Mg C/ha."

**Kunci**

- Kasus A salah dua kali. Pertama, 588 adalah rata-rata terbobot seluruh kawasan; lahan yang dikonversi seluruhnya stratum B sehingga yang dipakai 670 Mg C/ha (30 × 670 = 20.100 Mg C). Kedua, anggapan semua karbon tanah menjadi emisi adalah batas atas, bukan hasil; laporan harus menyebut fraksi dan mengujinya (25%, 50%, 100% memberi 32.892, 46.517, 73.767 Mg CO2e). Angka 64.739 dengan 588 memang kebetulan terlihat wajar, padahal tidak berpijak pada stok stratum yang benar. Cara mendeteksi: cocokkan stratum lahan yang hilang dengan baris stok yang dipakai, dan cari kalimat anggapan fraksi di laporan.
- Kasus B: 1,014 adalah g C/cm2, bukan Mg C/ha. Konversi × 100 terlewat; yang benar 101,4 Mg C/ha (100 kali lebih besar). Cara mendeteksi: periksa satuan di tiap langkah (tebal cm × g/cm3 = g/cm2) dan bandingkan dengan kisaran stok karbon tanah pada tab Modul 7.

## Peran AI dan contoh prompt

AI membantu menyusun rumus lembar dan menjelaskan istilah, tetapi hasil hitungannya harus selalu dicocokkan dengan hitungan tangan dan angka di buku.

**Prompt 1: menyusun rumus Excel.**

```markdown
Saya punya lembar Excel dengan stok karbon stratum B (Mg C/ha) di B12:B15: pohon hidup 120, akar 40, kayu mati dan serasah 15, tanah 495. Fraksi hilang untuk vegetasi di B7 dan untuk tanah di B6. Luas konversi di B4 dan faktor 3,67 di B5. Tuliskan rumus Excel untuk karbon hilang (Mg C) dan emisi CO2e per tampungan, dengan acuan sel absolut yang benar. Jelaskan setiap rumus satu kalimat.
```

Pemeriksaan: masukkan rumusnya, lalu cocokkan jumlah dengan hitungan tangan di bagian 11.2 (E16 = 12.675 Mg C, F16 = 46.517 Mg CO2e pada fraksi tanah 0,5). Ubah B6 menjadi 1; E16 harus menjadi 20.100.

**Prompt 2: menjelaskan istilah.**

```markdown
Jelaskan dalam lima kalimat bagaimana titik acuan (reference datum) dan Surface Elevation Table dipakai untuk membandingkan karbon tanah pada dua waktu di mangrove. Gunakan bahasa Indonesia lugas dan sebutkan apa yang tidak bisa dijawab oleh keduanya.
```

Pemeriksaan: bandingkan dengan bagian 11.1 dan BC bab 5. Tandai kalimat yang memuat angka (ketelitian, kedalaman) dan cek angkanya ke buku.

**Prompt 3: memeriksa hitungan.**

```markdown
Periksa hitungan ini dan tunjukkan di mana salahnya bila ada: 30 ha stratum B, vegetasi dan kayu mati hilang 100% (175 Mg C/ha), karbon tanah hilang 50% dari 495 Mg C/ha. Emisi CO2e = ... Tuliskan setiap langkah dengan angka.
```

Pemeriksaan: hitung ulang dengan kalkulator; jangan menerima kata "sudah benar" tanpa angka antara yang cocok.

**Contoh jawaban AI yang bisa salah.** Misalkan AI menjawab: "Emisi dari 30 ha stratum B = 30 × 588 Mg C/ha = 17.640 Mg C. Karena semua karbon yang hilang menjadi CO2, emisinya 17.640 × 3,67 = 64.739 Mg CO2e, dan angka ini pasti."

Cara menangkapnya: (1) 588 adalah rata-rata kawasan, sedangkan lahan yang hilang seluruhnya stratum B (670 Mg C/ha); (2) kata "pasti" bertentangan dengan buku, yang menyebut hasil seperti ini batas atas karena sebagian karbon dapat berpindah (BC bab 5); (3) AI tidak menanyakan asumsi fraksi tanah. Perintahkan AI mengulang hitungan dengan stok stratum B dan tiga fraksi tanah, lalu cocokkan dengan tabel sensitivitas.

## Catatan Excel: Mac dan Windows

| Langkah | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Menjumlah kolom | `=SUM(E12:E15)` | `=SUM(E12:E15)` | `=SUM(E12:E15)` |
| Mengunci sel parameter | Ketik `$` langsung di rumus, misalnya `$B$4`; Cmd+T juga mengganti jenis acuan | Ketik `$` langsung atau tekan F4 | Ketik `$` langsung |
| Menyalin rumus ke bawah | Blok sel, Cmd+D | Blok sel, Ctrl+D | Blok sel, Ctrl+D (Mac: Cmd+D) |
| Membulatkan hasil | `=ROUND(F16,0)` | `=ROUND(F16,0)` | `=ROUND(F16,0)` |
| Memilih fraksi bersyarat | `=IF(A20<=0.5,"rendah","tinggi")` | sama | sama |
| Memformat angka (pemisah ribuan) | Cmd+1, tab Number | Ctrl+1, tab Number | Format > Number |
| Membuat grafik batang sensitivitas | Pilih A20:B22, Insert > Chart | Pilih A20:B22, Insert > Chart | Pilih A20:B22, Insert > Chart |

Pada Excel berbahasa Indonesia, nama fungsi berbeda (SUM menjadi JUMLAH, IF menjadi JIKA, ROUND menjadi BULATKAN), pemisah argumen berupa titik koma, dan desimal ditulis dengan koma. Contoh: `=JUMLAH(E12:E15)` dan `=BULATKAN(F16;0)`. Pada tabel di atas, rumus ditulis dengan tanda koma dan titik desimal gaya bahasa Inggris. Bila rumus menghasilkan galat, periksa pemisah argumen lebih dulu. Menu Excel di Mac (Insert, Chart) dan Windows dapat berbeda letak tombol antarversi; cari lewat kotak pencarian menu bila perlu.

## Tugas mingguan

Serahkan buku kerja dengan lembar "Emisi" yang memenuhi daftar berikut.

- [ ] Parameter (luas konversi, faktor 3,67, fraksi tanah, fraksi vegetasi) terisi di sel terpisah dan diberi label serta keterangan "ilustrasi" untuk yang bukan dari buku.
- [ ] Stok T1 per tampungan stratum B sama dengan data kanonik (120, 40, 15, 495; total 670).
- [ ] Karbon hilang dan emisi tiap tampungan dihitung dengan rumus (bukan angka ketikan); E16 = 12.675 Mg C dan F16 = 46.517 Mg CO2e pada fraksi tanah 0,5.
- [ ] Tabel sensitivitas memuat minimal tiga fraksi tanah (25%, 50%, 100%) dengan emisi 32.892; 46.517; 73.767 Mg CO2e.
- [ ] Stok kawasan T2 = 318.945 Mg C dan persentase kehilangan terhadap T1 ditampilkan.
- [ ] Satu paragraf pendek menyatakan bahwa hasil adalah batas atas (atau rentang), menyebut asumsi fraksi tanah, dan menyebut bahwa ketidakpastian fraksi lebih besar daripada ketidakpastian stok.
- [ ] Satu paragraf pendek menyebut angka mana yang dipakai pada selisih antarbuku yang relevan (25.739 atau 25.760; 25.167 atau 25.133).
- [ ] Nol galat rumus; satuan tertulis pada setiap kolom.

## Rencana sesi langsung 60 menit

| Menit | Kegiatan | Bahan |
| --- | --- | --- |
| 0-5 | Pembukaan; tinjau pertanyaan dari video | Tabel tiga metode |
| 5-15 | Tanya jawab: titik acuan, SET, tanda perubahan stok | Contoh rawa asin dan SET (11.1) |
| 15-35 | Peserta menyusun lembar "Emisi" skenario 30 ha, mencocokkan hasil 12.675 dan 46.517 | Buku kerja, data Hutan Contoh |
| 35-45 | Setiap peserta memilih fraksi tanah dan membela pilihannya; bandingkan dengan 25%, 50%, 100% | Tabel sensitivitas |
| 45-55 | Diskusi kasus: kapan memakai tambah-kurang dan kapan fluks; mengapa N2O dan CH4 tidak tertangkap selisih stok | Contoh 1.000 ha dan sungkup (11.3) |
| 55-60 | Rangkuman dan penjelasan tugas | Daftar centang tugas |

Sumber: BC (Howard dkk. 2014, Coastal Blue Carbon) bab 1 dan bab 5; KD (Kauffman dan Donato 2012, CIFOR WP86) bagian 3.2.1; data Hutan Contoh (ilustrasi) dari tab Modul 10; selisih antarbuku dari lembar rumus modul.

---

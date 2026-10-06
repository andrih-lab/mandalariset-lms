# Panduan

Halaman ini berlaku untuk semua modul: cara memakai materi dan buku kerja Excel, aturan penulisan contoh dan rujukan, data kanonik Hutan Contoh, daftar fungsi dan pintasan Excel, cara mengerjakan soal "temukan kesalahan", cara memakai AI, dan daftar istilah Indonesia-Inggris. Bacalah sekali di minggu 1, lalu buka kembali bagian yang dibutuhkan saat mengerjakan tugas.

## 1. Cara memakai materi dan buku kerja

Setiap modul disusun dengan urutan tetap, sehingga peserta dapat menebak letak bahan yang dicari. Urutannya: tabel aspek, tujuan pembelajaran, rencana video, materi bernomor, latihan mandiri, soal temukan kesalahan, peran AI, catatan Excel, tugas mingguan, dan rencana sesi langsung.

Beban belajar sekitar tiga jam per minggu: video sekitar 60 menit, latihan dan tugas sekitar 60 menit, sesi langsung 60 menit. Urutan kerja yang disarankan:

1. Tonton video minggu itu dan baca bagian Materi yang bernomor sama dengan video.
2. Kerjakan Latihan mandiri tanpa melihat kunci. Cocokkan jawaban dengan kunci, lalu tandai langkah yang berbeda.
3. Kerjakan soal Temukan kesalahan (lihat bagian 7).
4. Isi lembar buku kerja minggu itu. Rumus ditulis di sel, bukan hasilnya diketik.
5. Periksa tugas mingguan dengan daftar centang di akhir modul. Tugas dinyatakan lulus bila semua butir tercentang.
6. Hadiri sesi langsung dengan buku kerja yang sudah terisi, termasuk pertanyaan yang belum terjawab.

Aturan buku kerja:

- Satu berkas Excel (atau Google Sheets) dipakai sepanjang kursus. Lembar ditambahkan tiap minggu (lihat bagian 4).
- Angka masukan (luas, rata-rata, CI) ditaruh di sel tersendiri dan dirujuk oleh rumus. Jangan mengetik ulang angka di dalam rumus.
- Sel masukan diberi warna isian yang sama di semua lembar, misalnya kuning muda, dan sel hasil diberi warna lain.
- Setiap angka yang dipakai diberi satuan di judul kolom, misalnya "Mg C/ha".
- Simpan berkas dengan nama yang memuat tanggal, misalnya `bukukerja_BlueCarbon_2026-10-06.xlsx`, dan simpan salinan di dua tempat.

## 2. Aturan penulisan contoh dan rujukan

Angka dalam materi dibedakan menurut asalnya, supaya peserta tahu mana yang boleh dikutip ke laporan dan mana yang hanya untuk berlatih.

| Asal angka | Cara menandai | Contoh penulisan |
| --- | --- | --- |
| Dibuat untuk latihan | Kata "ilustrasi" di dalam kurung atau di judul tabel | "Stratum B menyimpan 670 Mg C/ha (ilustrasi)." |
| Diambil dari buku | Nama buku dan lokasinya | "Tier 1 karbon tanah mangrove 386 Mg C/ha (BC Tabel 1.2)." |
| Hasil hitungan peserta | Disebut sebagai hasil hitung, dengan langkahnya | "Hasil hitung di lembar Total: 331.620 Mg C." |
| Dari luar tiga buku | Tulis "di luar buku" dan sebutkan sumbernya | "(di luar buku: Ross dkk. 2001)" |

Cara menulis rujukan ke tiga buku sumber:

| Singkatan | Buku | Contoh |
| --- | --- | --- |
| BC | Howard dkk. (2014), Coastal Blue Carbon (buku panduan) | BC bab 1; BC Tabel 4.1 |
| KD | Kauffman dan Donato (2012), CIFOR Working Paper 86 | KD Tabel 5; KD bagian kayu mati rebah |
| H | Hogarth (2015), The Biology of Mangroves and Seagrasses, edisi ke-3 | H bab 2 |

Aturan yang berlaku di semua tugas:

- Tulis rujukan tepat setelah angka atau klaim yang dirujuk, bukan di akhir paragraf.
- Bila tiga buku berbeda angka atau satuan, tuliskan angka mana yang Anda pakai dan alasannya. Selisih antarbuku yang sudah diketahui tercantum di tiap modul. Contoh: tinggi dada 1,37 m (KD) dan 1,3 m (BC dan H). Pilih satu, catat di bagian metode, dan pakai konsisten.
- Hasil hitungan ditulis dengan satuan dan dibulatkan sesuai angka paling kasar yang dipakai. Pembulatan dilakukan di langkah akhir, bukan di tengah hitungan.
- Ketidakpastian ditulis sebagai "rata-rata ± setengah lebar selang kepercayaan 95%" dan satuannya disebut, misalnya "670 ± 73 Mg C/ha".
- Pemisah desimal dalam teks adalah koma (0,415), pemisah ribuan titik (331.620). Di dalam sel Excel, ikuti pengaturan komputer Anda.

## 3. Data kanonik Hutan Contoh

Hutan Contoh adalah lokasi fiktif seluas 564 ha yang dipakai di semua modul. Semua angka di bagian ini adalah ilustrasi. Jangan diubah di modul mana pun; bila Anda mengubahnya di buku kerja untuk bereksperimen, simpan sebagai salinan.

**Strata dan luas.** Luas diambil dari batas resmi dan dianggap tanpa ketidakpastian. Pengecualian: Modul 10 dan 12 membahas ketidakpastian luas dalam latihan terpisah dengan contoh buku 400.000 ± 30.000 ha.

| Stratum | Deskripsi | Luas (ha) |
| --- | --- | --- |
| A | Mangrove pioner tepi laut (Sonneratia, Avicennia) | 180 |
| B | Hutan Rhizophora dewasa | 264 |
| C | Mangrove belakang (Bruguiera, Ceriops) | 120 |
| Jumlah |  | 564 |

**Stok per hektare per tampungan** (ilustrasi). Setiap sel berisi rata-rata ± setengah lebar selang kepercayaan 95%, dalam Mg C/ha.

| Tampungan | Stratum A | Stratum B | Stratum C |
| --- | --- | --- | --- |
| Pohon hidup di atas tanah | 70 ± 12 | 120 ± 18 | 95 ± 14 |
| Akar | 25 ± 6 | 40 ± 8 | 30 ± 7 |
| Pohon mati + kayu mati rebah + serasah | 8 ± 4 | 15 ± 6 | 10 ± 5 |
| Tanah sampai 1 m | 380 ± 58 | 495 ± 70 | 430 ± 62 |
| Total per ha | 483 ± 60 | 670 ± 73 | 565 ± 64 |

Total per hektare dijumlahkan dari rata-rata keempat tampungan. Ketidakpastiannya adalah akar jumlah kuadrat dari setengah lebar CI tiap tampungan, bukan jumlah langsung. Contoh stratum B: akar dari 18² + 8² + 6² + 70² = 72,97, dibulatkan 73.

**Total kawasan** (ilustrasi). Stok stratum adalah stok per hektare dikali luas. Ketidakpastian stratum adalah CI per hektare (dari akar jumlah kuadrat tampungan, belum dibulatkan) dikali luas.

| Stratum | Luas (ha) | Stok (Mg C/ha) | Stok stratum (Mg C) | ± CI95 stratum (Mg C) |
| --- | --- | --- | --- | --- |
| A | 180 | 483 | 86.940 | 10.740 |
| B | 264 | 670 | 176.880 | 19.263 |
| C | 120 | 565 | 67.800 | 7.697 |
| Kawasan | 564 | 588 | 331.620 | 23.359 |

Hasil kawasan:

- Stok total: 331.620 Mg C, dengan ketidakpastian ±23.359 Mg C (7,0%). Selang kepercayaan 95% kira-kira 308.261 sampai 354.979 Mg C.
- Rata-rata terbobot: 331.620 ÷ 564 = 588 Mg C/ha, dengan ketidakpastian ±41,4 Mg C/ha (23.359 ÷ 564).
- Setara CO2e: 331.620 × 3,67 = 1.217.045 Mg CO2e.
- Pembagian per tampungan di tingkat kawasan: tanah 250.680 Mg C (75,6%), pohon hidup di atas tanah 55.680 (16,8%), akar 18.660 (5,6%), pohon mati + kayu mati rebah + serasah 6.600 (2,0%).

Catatan pembulatan. Bila ketidakpastian stratum dihitung dari angka yang sudah dibulatkan (±60, ±73, ±64 per ha), hasilnya 23.389 Mg C. Selisih 30 Mg C (0,1%) hanya akibat pembulatan. Angka yang dipakai di kursus adalah 23.359. Bila hasil buku kerja Anda 23.389, periksa apakah Anda memakai CI yang sudah dibulatkan, dan tulis yang mana yang dipakai.

Data dalam bentuk yang dapat disalin ke Excel (ilustrasi). Satu baris per stratum dan tampungan:

```csv
stratum,luas_ha,tampungan,rata2_MgC_ha,CI95_MgC_ha
A,180,pohon_hidup,70,12
A,180,akar,25,6
A,180,mati_serasah,8,4
A,180,tanah_1m,380,58
B,264,pohon_hidup,120,18
B,264,akar,40,8
B,264,mati_serasah,15,6
B,264,tanah_1m,495,70
C,120,pohon_hidup,95,14
C,120,akar,30,7
C,120,mati_serasah,10,5
C,120,tanah_1m,430,62
```

Tiga titik data contoh yang dipakai berulang di modul (ilustrasi, kecuali dinyatakan lain): inti tanah B-07 = 495 Mg C/ha sampai 1 m; pohon contoh berdiameter 20 cm = biomassa 346,5 kg dan karbon 162,9 kg (persamaan umum Asia, Komiyama dkk. 2005, dengan kerapatan kayu 0,87 g/cm³ dan faktor karbon 0,47; Modul 8); jumlah plot n = 36 menjadi 40 plot dengan cadangan 10% (Modul 6). Data tambahan (inti tanah, pohon di plot, plot pilot) ada di tab modul yang memakainya, dengan judul "Data Hutan Contoh: ...".

## 4. Struktur buku kerja Excel

Buku kerja berisi tujuh lembar dengan nama tetap, supaya tugas dan proyek akhir dapat saling dirujuk. Lembar ditambahkan sesuai minggu.

| Lembar | Minggu | Isi satu kalimat |
| --- | --- | --- |
| Tampungan | 1 | Tabel empat tampungan karbon untuk Hutan Contoh beserta satuan dan faktor konversinya. |
| Desain plot | 3 | Hitungan jumlah plot per stratum dari simpangan baku pilot, ditambah cadangan 10% dan tabel alokasi plot. |
| Tanah | 4 | Stok karbon tanah per inti, per lapisan, dan per hektare, dengan koreksi pemampatan dan karbonat. |
| Vegetasi | 5 | Biomassa dan karbon pohon per plot lalu per hektare, termasuk akar dan kayu mati. |
| Total | 6 | Stok per hektare dan per kawasan dengan galat baku, selang kepercayaan 95%, dan penggabungan ketidakpastian. |
| Emisi | 7 | Skenario kehilangan lahan dan perubahan stok yang diubah menjadi emisi CO2e. |
| Data/Catatan | 1 sampai 8 | Data mentah, asumsi, faktor yang dipakai, angka mana yang dipilih bila buku berbeda, dan catatan perubahan. |

Aturan tata letak: kolom pertama berisi label, baris pertama berisi judul kolom bersatuan, satu tabel per blok tanpa sel yang digabung, dan setiap lembar memakai data dari lembar Data/Catatan atau lembar sebelumnya melalui rujukan sel.

## 5. Fungsi Excel yang dipakai

Kursus hanya memakai delapan fungsi, semuanya tersedia di Excel Mac, Excel Windows, dan Google Sheets. Kolom nama Indonesia berlaku untuk Excel dengan bahasa tampilan Indonesia.

| Tujuan | Excel (Inggris) | Excel (Indonesia) | Google Sheets | Contoh |
| --- | --- | --- | --- | --- |
| Menjumlahkan | SUM | JUMLAH | SUM | `=SUM(B2:B5)` |
| Rata-rata | AVERAGE | RATA.RATA (versi lama: RATA2); periksa di kotak Insert Function | AVERAGE | `=AVERAGE(B2:B9)` |
| Simpangan baku contoh | STDEV.S | STDEV.S; periksa di kotak Insert Function | STDEV.S | `=STDEV.S(B2:B9)` |
| Akar kuadrat | SQRT | AKAR | SQRT | `=SQRT(B2)` |
| Nilai t dua sisi (untuk CI95) | T.INV.2T | T.INV.2T; periksa di kotak Insert Function | T.INV.2T | `=T.INV.2T(0.05,7)` memberi 2,3646 |
| Pembulatan ke atas | ROUNDUP | tidak dicantumkan; cari lewat Insert Function | ROUNDUP | `=ROUNDUP(B2,0)` |
| Jumlah hasil kali dua kolom | SUMPRODUCT | SUMPRODUCT; periksa di kotak Insert Function | SUMPRODUCT | `=SUMPRODUCT(B2:B4,C2:C4)` |
| Pilihan bersyarat | IF | JIKA | IF | `=IF(B2>=0.1,"perlu tambah plot","cukup")` |

Untuk nama yang tertulis "periksa" atau "tidak dicantumkan", jangan menebak. Klik tombol fx di sebelah bilah rumus (Insert Function), ketik nama Inggrisnya atau kegunaannya di kotak pencarian, dan Excel akan menampilkan nama yang berlaku di komputer Anda. Cara lain: ketik `=` lalu huruf awal fungsi, dan Excel menawarkan daftar nama.

**Koma atau titik koma.** Pemisah argumen mengikuti pengaturan wilayah komputer, bukan hanya bahasa Excel. Pada pengaturan Indonesia, pemisah argumen adalah titik koma dan pemisah desimal adalah koma, sehingga `=T.INV.2T(0.05,7)` ditulis `=T.INV.2T(0,05;7)`. Pada pengaturan Inggris Amerika, pemisah argumen adalah koma dan desimal adalah titik. Semua rumus di materi ditulis dengan koma dan titik desimal. Bila Excel Anda menolak rumus yang disalin, ganti koma dengan titik koma, dan titik desimal dengan koma. Google Sheets mengikuti pengaturan lokal berkas (File > Setelan).

Contoh dengan data Hutan Contoh (ilustrasi). Bila luas stratum A, B, dan C ada di B2:B4 dan stok per hektarenya di C2:C4, rumus `=SUMPRODUCT(B2:B4,C2:C4)` menghasilkan 331.620 Mg C, yaitu 180 × 483 + 264 × 670 + 120 × 565. Untuk delapan inti, nilai t dua sisi 95% memakai derajat bebas 7, sehingga `=T.INV.2T(0.05,7)` memberi 2,3646.

## 6. Pintasan keyboard

Tabel ini hanya memuat pintasan dasar. Mac ditulis lebih dulu. Pada keyboard laptop, tombol fungsi (F1 sampai F12) dapat memerlukan tombol Fn, dan Ctrl+Spasi di Mac dapat bentrok dengan pengaturan ganti bahasa keyboard pada macOS. Bila bentrok, klik huruf kolom.

| Langkah | Mac | Windows |
| --- | --- | --- |
| Isi ke bawah (salin sel atas ke sel terpilih) | Ctrl+D | Ctrl+D |
| Isi ke kanan | Ctrl+R | Ctrl+R |
| Ubah rujukan sel menjadi tetap ($) | Cmd+T (pada beberapa versi F4 juga bisa) | F4 |
| Masuk ke mode sunting sel | Ctrl+U | F2 |
| Pilih satu kolom | Ctrl+Spasi | Ctrl+Spasi |
| Pilih satu baris | Shift+Spasi | Shift+Spasi |
| Pilih sampai ujung data | Cmd+Shift+Panah | Ctrl+Shift+Panah |
| Salin, tempel, batal | Cmd+C, Cmd+V, Cmd+Z | Ctrl+C, Ctrl+V, Ctrl+Z |
| Tempel khusus (hanya nilai) | Ctrl+Cmd+V | Ctrl+Alt+V |
| Baris baru dalam satu sel | Ctrl+Option+Return | Alt+Enter |
| Tampilkan semua rumus di lembar | Ctrl+` | Ctrl+` |
| Simpan | Cmd+S | Ctrl+S |

Tanda $ juga dapat diketik langsung: `$B$2` mengunci kolom dan baris, `B$2` mengunci baris saja, `$B2` mengunci kolom saja. Cara ini berlaku di semua perangkat dan di Google Sheets.

## 7. Cara mengerjakan soal "temukan kesalahan"

Soal ini berisi hasil hitungan atau laporan pendek yang tampak masuk akal tetapi mengandung satu atau dua kesalahan khas bidang ini. Tujuannya melatih pemeriksaan sebelum angka masuk ke laporan.

Langkah mengerjakannya:

1. Baca hasil dan tulis perkiraan kasar sendiri tanpa kalkulator. Contoh: stok tanah satu stratum kira-kira berapa Mg C/ha menurut Hutan Contoh (380 sampai 495)?
2. Periksa satuan setiap angka: g/cm³ atau Mg/m³, kg/m² atau Mg/ha, per plot atau per hektare.
3. Periksa asal faktor: kadar karbon (0,39 sampai 0,50 menurut komponen), koreksi karbonat, koreksi pemampatan, kering atau basah.
4. Periksa cara menggabungkan: rata-rata dan CI ditambah langsung atau lewat akar jumlah kuadrat; galat baku atau simpangan baku.
5. Periksa kisaran: pohon di luar kisaran diameter persamaan, jumlah plot terlalu sedikit, kedalaman tanah kurang dari 1 m.
6. Hitung ulang satu baris dengan tangan, bandingkan dengan angka yang tertulis.
7. Tulis jawaban dalam tiga bagian: letak kesalahan, angka yang benar (dengan langkahnya), dan cara mendeteksinya lebih awal.

Bandingkan jawaban Anda dengan kunci setelah selesai. Jawaban yang hanya menyebut "ada yang salah" tanpa angka yang benar dianggap belum lengkap.

## 8. Memakai AI untuk Excel dan memeriksa hasilnya

AI boleh dipakai untuk menyusun rumus Excel, menjelaskan istilah, dan menjelaskan pesan galat. Peserta tetap bertanggung jawab atas angka di laporan. Aturannya:

- AI menyusun rumus atau menjelaskan. AI tidak menentukan angka yang masuk ke laporan.
- Setiap rumus dari AI diperiksa dengan menghitung ulang **satu baris dengan tangan** (kalkulator), lalu dibandingkan dengan hasil sel dan dengan angka di buku atau di Hutan Contoh.
- Sebelum meminta rumus, tuliskan di prompt: letak sel, satuan, dan pemisah argumen Excel Anda (koma atau titik koma).
- Tempel hanya data ilustrasi atau data yang boleh dibagikan. Jangan menempel data lokasi yang bersifat rahasia.
- Catat di lembar Data/Catatan prompt yang dipakai dan hasil pemeriksaannya.
- Bila hasil AI berbeda dari buku, buku yang dipakai. Tuliskan selisihnya.

Contoh prompt: "Di sel D2 saya punya luas (ha) dan di E2 stok (Mg C/ha). Buatkan rumus Excel untuk stok stratum dalam Mg C dan jumlah seluruh strata di D5. Pemisah argumen di komputer saya titik koma." Pemeriksaan: hitung 180 × 483 = 86.940 dengan kalkulator, lalu cocokkan dengan sel.

## 9. Daftar istilah Indonesia-Inggris

| Indonesia | Inggris | Arti singkat |
| --- | --- | --- |
| Stok karbon | Carbon stock | Massa karbon yang tersimpan pada satu waktu, Mg C atau Mg C/ha |
| Tampungan karbon | Carbon pool | Bagian ekosistem yang menyimpan karbon: pohon, akar, kayu mati dan serasah, tanah |
| Biomassa di atas tanah | Aboveground biomass | Massa kering tumbuhan hidup di atas tanah |
| Biomassa di bawah tanah | Belowground biomass | Massa kering akar |
| Serasah | Litter | Daun, ranting, dan bahan tumbuhan mati di permukaan tanah |
| Kayu mati rebah | Downed dead wood | Kayu mati yang tergeletak di tanah |
| Pohon mati berdiri | Standing dead tree | Pohon mati yang masih tegak |
| Persamaan alometrik | Allometric equation | Persamaan yang menduga biomassa dari ukuran pohon, misalnya diameter |
| Kerapatan kayu | Wood density | Berat kering kayu dibagi volume segar, g/cm³ |
| Bobot isi | Bulk density | Berat kering tanah dibagi volume contoh, g/cm³ |
| Pemampatan inti | Core compaction | Inti tanah lebih pendek di dalam pipa daripada di tanah asli |
| Hilang pijar | Loss on ignition (LOI) | Kehilangan berat saat contoh dipanaskan, dipakai menduga bahan organik |
| Karbon organik | Organic carbon | Karbon dari bahan organik; karbon karbonat dikoreksi terpisah |
| Karbon anorganik (karbonat) | Inorganic carbon (carbonate) | Karbon dari kapur atau cangkang, tidak berasal dari bahan organik tanah |
| Strata, stratifikasi | Strata, stratification | Pembagian kawasan menjadi bagian yang lebih seragam |
| Plot contoh | Sample plot | Petak tempat pengukuran dilakukan |
| Rata-rata | Mean | Jumlah nilai dibagi banyak data |
| Simpangan baku | Standard deviation | Sebaran data di sekitar rata-rata |
| Galat baku | Standard error | Simpangan baku dibagi akar banyak data; sebaran rata-rata |
| Selang kepercayaan 95% | 95% confidence interval | Rentang rata-rata ± t × galat baku |
| Ketidakpastian | Uncertainty | Setengah lebar CI, sering dinyatakan dalam persen rata-rata |
| Data aktivitas | Activity data | Besaran kegiatan, misalnya luas hutan yang hilang (ha) |
| Faktor emisi | Emission factor | Emisi per satuan data aktivitas, misalnya Mg CO2e/ha |
| Setara CO2 | CO2 equivalent (CO2e) | Karbon dikali 3,67 menjadi massa CO2 |
| Tier 1 | Tier 1 | Tingkat perhitungan memakai nilai global bawaan, bukan data lapangan |
| Pengukuran, pelaporan, verifikasi | Measurement, reporting, verification (MRV) | Rangkaian pemantauan emisi dan stok yang dapat diperiksa pihak lain |
| Penurunan tanah dangkal | Shallow subsidence | Turunnya permukaan tanah akibat pemadatan lapisan atas |
| Penginderaan jauh | Remote sensing | Pengukuran dari satelit atau pesawat tanpa kontak langsung |

Sumber: BC (Howard dkk. 2014), KD (Kauffman dan Donato 2012), H (Hogarth 2015); istilah dan fungsi Excel mengikuti dokumentasi Excel dan Google Sheets.

---

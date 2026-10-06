# Modul 12. Penginderaan jauh dan data

Modul ini membahas dua hal: apa yang bisa diberikan citra satelit pada inventarisasi karbon (bagian pilihan, BC bab 6) dan cara mengelola data proyek supaya hasil pengukuran bisa diperiksa, dibandingkan, dan dipakai lagi (bagian wajib, BC bab 7). Peserta tidak menulis kode penginderaan jauh. Praktiknya seluruhnya di Excel atau Google Sheets: struktur buku kerja, penamaan berkas, versi, metadata, cadangan, dan catatan lapangan, yang berujung pada daftar periksa pengelolaan data proyek.

| Aspek | Keterangan |
| --- | --- |
| Minggu | 7 (bersama Modul 11) |
| Video | 2 video, total 22 menit: 12.1 (10 menit, pilihan) dan 12.2 (12 menit, wajib) |
| Latihan mandiri dan tugas | sekitar 25 menit untuk bagian Modul 12 |
| Sesi langsung | 60 menit (rencana di bawah) |
| Prasyarat | Modul 10 (ketidakpastian dan penggabungannya); Excel atau Google Sheets dasar |
| Alat | Excel (Mac atau Windows) atau Google Sheets, kalkulator |
| Luaran minggu | Daftar periksa pengelolaan data proyek (lembar "Data" di buku kerja) |
| Bagian pilihan | Video 12.1 dan latihan 1. Peserta yang tidak memiliki proyek berbasis citra boleh melewatinya tanpa memengaruhi kelulusan |

## Tujuan pembelajaran

Setelah modul ini, peserta mampu:

- menyebutkan empat kegunaan penginderaan jauh dalam pekerjaan blue carbon dan membedakan sensor pasif dari sensor aktif;
- mencocokkan data gratis (Landsat, MODIS, SRTM, ALOS PALSAR, ICESat/GLAS) dengan kegunaannya;
- menghitung ketidakpastian stok kawasan dari ketidakpastian luas dan ketidakpastian stok per hektare, serta menyebutkan komponen mana yang lebih menentukan;
- menyusun struktur buku kerja Excel proyek karbon dengan lembar data mentah, lembar referensi, dan lembar hasil yang terpisah;
- membuat aturan penamaan berkas dan catatan versi, dan menulis metadata untuk satu set data;
- menyusun daftar periksa pengelolaan data untuk proyeknya sendiri, dari lembar isian lapangan sampai penyimpanan di pangkalan data terbuka.

## Rencana video

| No. | Judul | Durasi (menit) | Isi |
| --- | --- | --- | --- |
| 12.1 | Penginderaan jauh untuk blue carbon (pilihan) | 10 | Empat kegunaan; sensor pasif dan aktif; resolusi spasial; Landsat, MODIS, SRTM, PALSAR, ICESat; pengecekan lapangan; contoh ketidakpastian luas dari citra dan akibatnya pada stok kawasan |
| 12.2 | Mengelola data proyek (wajib) | 12 | Anjuran BC bab 7; struktur buku kerja; penamaan berkas dan versi; metadata; catatan lapangan; cadangan; contoh pemeriksaan silang di Excel; penyusunan daftar periksa |

## Materi

### 12.1 Penginderaan jauh untuk blue carbon (pilihan)

Penginderaan jauh dipakai dalam empat pekerjaan: menentukan luas ekosistem, membantu membagi strata dan menempatkan plot, menduga biomassa, dan memantau perubahan penggunaan lahan serta stok karbon (BC bab 6). Buku panduan menyarankan agar pekerjaan ini melibatkan ahli penginderaan jauh. Tujuan bagian ini bukan melatih peserta mengolah citra, melainkan membuat peserta cukup paham untuk menyampaikan kebutuhan kepada ahli itu dan menilai hasilnya.

**Sensor pasif dan aktif.** Sensor pasif (optik dan termal) merekam cahaya matahari yang dipantulkan dan panas yang dipancarkan permukaan bumi. Hasilnya mirip foto dan mudah ditafsirkan, tetapi memerlukan cahaya matahari dan terhalang awan, padahal di daerah tropis awan hampir selalu ada. Sensor aktif (radar dan lidar) memancarkan gelombang sendiri lalu mengukur pantulannya. Sensor ini tidak bergantung pada cuaca dan waktu siang, serta dapat menembus awan dan tajuk, tetapi lebih mahal dan analisisnya lebih sulit.

**Resolusi spasial** adalah panjang sisi satu piksel di permukaan bumi. Makin kecil pikselnya, makin rinci gambarnya. Menurut BC bab 6, citra gratis beresolusi 30 m umumnya sudah memadai untuk memetakan ekosistem blue carbon.

| Data | Ciri | Kegunaan utama |
| --- | --- | --- |
| Landsat | Pasif; tersedia sejak 1972; citra optik 30 m | Memetakan dan memantau lahan basah pasang surut; indeks vegetasi dan peta biomassa |
| MODIS | Pasif; 250 m, 500 m, dan 1 km; seluruh bumi tiap 1-2 hari | Memantau perubahan, karena datanya hampir harian sejak 2000 |
| SRTM | Radar, diterbangkan Februari 2000; sekitar 90 m, seluruh dunia | Peta ketinggian; tinggi tajuk mangrove dapat diduga dengan ketelitian 2-4 m, lalu biomassa dihitung |
| ALOS PALSAR | Radar gelombang L; resolusi terbaik sekitar 12 m | Struktur vegetasi dan penggundulan hutan pesisir; bebas awan, siang dan malam |
| ICESat/GLAS | Lidar satelit, 2003-2009 | Tinggi tajuk dengan ketelitian beberapa meter |

Tiga catatan dari BC bab 6. Pertama, kerapatan vegetasi diduga dengan indeks vegetasi. NDVI paling dikenal, tetapi nilainya tidak naik lagi pada vegetasi sedang sampai rapat sehingga hutan yang sangat rapat terduga terlalu rendah. EVI tidak punya kelemahan itu tetapi memakai gelombang biru yang mudah terganggu atmosfer. EVI2 tidak memakai gelombang biru dan dinilai lebih cocok untuk ekosistem pesisir. Kedua, lamun paling sulit dipetakan karena air keruh, kilau matahari, dan epifit di daun melemahkan pantulannya; pemetaannya memerlukan gabungan citra, foto udara, pengetahuan setempat, dan pengamatan lapangan. Ketiga, hasil tafsiran citra selalu dicek di lapangan. Idealnya satu plot pengecekan seluas satu piksel citra; satu proyek penginderaan jauh secara realistis memerlukan 10 sampai 32 minggu.

**Contoh hitung: ketidakpastian luas dan akibatnya pada stok kawasan.** Luas dari citra membawa ketidakpastian sendiri. Stok kawasan adalah hasil kali luas dengan stok per hektare, sehingga yang digabung adalah ketidakpastian relatifnya (Modul 10; KD):

```latex
CI_{kawasan} = L \times S \times \sqrt{\left(\frac{CI_L}{L}\right)^2 + \left(\frac{CI_S}{S}\right)^2}
```

L luas (ha), S stok per hektare (Mg C/ha), CI setengah lebar selang kepercayaan 95%.

Contoh dari buku (BC bab 6 dan 7, dipakai juga di Modul 10): luas mangrove 400.000 ± 30.000 ha, stok 300 ± 30 Mg C/ha.

1. Stok kawasan = 400.000 × 300 = 120.000.000 Mg C.
2. Ketidakpastian relatif luas = 30.000 ÷ 400.000 = 0,075; stok = 30 ÷ 300 = 0,10.
3. Gabungan = akar(0,075² + 0,10²) = 0,125 (12,5%).
4. Setengah lebar selang = 120.000.000 × 0,125 = 15.000.000 Mg C.
5. Hasil: 120 juta ± 15 juta Mg C. Bila ketidakpastian dijumlahkan langsung (9 juta + 12 juta = 21 juta), hasilnya berlebihan.
6. Bagian luas menyumbang 0,075² ÷ 0,125² = 36% dari ragam gabungan; bagian stok per hektare 64%.

Penerapan pada Hutan Contoh (ilustrasi). Sampai sekarang luas 564 ha dianggap pasti karena diambil dari batas resmi. Bila luas itu berasal dari citra dengan ketidakpastian relatif 7,5% (ilustrasi, sama dengan contoh buku), setengah lebar selang luas adalah 564 × 0,075 = 42,3 ha. Stok kawasan 331.620 ± 23.359 Mg C berarti ketidakpastian relatif 23.359 ÷ 331.620 = 0,0704.

| Keadaan | Ketidakpastian relatif gabungan | Setengah lebar selang (Mg C) | Setara (Mg CO2e) |
| --- | --- | --- | --- |
| Luas dianggap pasti | 7,04% | ± 23.359 | ± 85.728 |
| Luas ± 7,5% (citra) | akar(0,075² + 0,0704²) = 10,29% | ± 34.121 | ± 125.224 |
| Luas ± 3,75% (citra lebih baik) | 7,98% | ± 26.463 | ± 97.119 |

Konversi ke CO2e memakai faktor 3,67 (Modul 1 dan 11). Dengan luas ± 7,5%, ketidakpastian kawasan naik dari 7,0% menjadi 10,3%, dan 53% ragamnya berasal dari luas. Menurunkan ketidakpastian luas separuhnya (ke 3,75%) mengembalikan ketidakpastian ke 8,0%. Karena itu pengecekan lapangan atas peta luas layak dianggarkan, setara dengan menambah inti tanah.

### 12.2 Mengelola data proyek (wajib)

BC bab 7 menyatakan bahwa data karbon pesisir yang ada sering sulit dibandingkan karena tiap peneliti memakai parameter, satuan, dan cara pencatatan yang berbeda. Anjurannya: setiap data disertai metadata (tempat, waktu, alat, cara kerja, dan pengukur); lembar isian disiapkan sebelum ke lapangan dan satu orang tiap tim ditugasi sebagai pencatat; data dicatat segera setelah pengukuran, misalnya panjang inti tanah saat inti diangkat; foto diambil dari titik tetap (di mangrove ke empat arah mata angin dari pusat plot; di lamun dan rawa asin dari atas ke bawah); data diperiksa tiap sore, dicocokkan lagi setelah dimasukkan ke komputer, dan dibuatkan cadangan; terakhir data dipublikasikan atau disimpan di pangkalan data terbuka.

Buku tidak mengatur cara menata berkas Excel. Struktur buku kerja, penamaan berkas, dan aturan tiga salinan cadangan di bawah ini ada di luar buku; semuanya saran kerja, bukan ketentuan.

**Struktur buku kerja (di luar buku).** Pisahkan data mentah, tabel referensi, dan hasil hitungan:

| Lembar | Isi | Aturan |
| --- | --- | --- |
| Baca_saya | Judul proyek, penanggung jawab, versi, tanggal, daftar lembar, angka acuan yang dipakai | Diisi pertama kali dan diperbarui tiap versi |
| Data_mentah | Satu baris satu pengukuran (plot, tanggal, pencatat, nilai, satuan) | Tidak diedit setelah dicocokkan; koreksi dicatat di lembar Log |
| Referensi | Luas strata, faktor konversi, persamaan alometrik, angka kanonik beserta rujukan bukunya | Satu sumber angka; lembar hitungan merujuk ke sini |
| Hitung | Rumus saja, tanpa angka yang diketik ulang | Setiap sel hasil berisi rumus |
| Hasil | Tabel dan grafik untuk laporan | Hanya menyalin dari Hitung |
| Log | Tanggal, siapa, apa yang diubah, alasannya | Ditambah, tidak dihapus |

**Penamaan berkas dan versi (di luar buku).** Gunakan pola yang sama untuk semua berkas, terbaca urut, tanpa spasi dan tanpa kata "final":

```
proyek_jenis_isi_tanggal_versi.ekstensi
HutanContoh_tanah_inti-B07_2026-10-06_v02.xlsx
```

Tanggal ditulis tahun-bulan-hari agar urutan abjad sama dengan urutan waktu. Versi naik satu tiap perubahan berarti, dan alasannya ditulis di lembar Log.

**Metadata.** Tulis metadata di lembar Baca_saya atau berkas teks terpisah dengan lima unsur dari buku: tempat (nama lokasi, koordinat plot, sistem koordinat), waktu (tanggal dan jam pengukuran), alat (jenis dan nomor seri, tanggal kalibrasi bila ada), cara kerja (rujukan protokol, misalnya KD atau BC bab 3), dan pengukur. Tambahkan definisi tiap kolom dan satuannya (misalnya karbon tanah dalam Mg C/ha sampai 1 m) serta angka yang dipilih bila buku berbeda, sesuai selisih antarbuku di Modul 10.

**Catatan lapangan.** Siapkan lembar isian sebelum berangkat dengan kolom yang sama seperti lembar Data_mentah, sehingga pemindahan ke komputer tinggal menyalin. Cetak atau simpan di tablet, tetapi tetap bawa salinan kertas. Catat nilai saat pengukuran, bukan dari ingatan. Foto pusat plot diberi nama sesuai kode plot dan arah (misalnya B07_utara.jpg).

**Cadangan (di luar buku).** Simpan tiga salinan: satu di komputer kerja, satu di penyimpanan lain (cakram luar), satu di layanan daring. Cadangan dibuat setiap sore di lapangan, dan sebelum tiap perubahan struktur buku kerja.

Contoh hitung: pemeriksaan silang. Pemeriksaan sore dan pencocokan setelah entri dapat dilakukan dengan hitungan sederhana. Lembar Referensi Hutan Contoh (ilustrasi) berisi luas dan stok tiap stratum:

```csv
stratum,luas_ha,stok_MgC_per_ha
A,180,483
B,264,670
C,120,565
```

1. Jumlah luas = 180 + 264 + 120 = 564 ha, sama dengan luas resmi 564 ha. Lolos.
2. Stok kawasan dihitung ulang = 180 × 483 + 264 × 670 + 120 × 565 = 86.940 + 176.880 + 67.800 = 331.620 Mg C, sama dengan angka laporan. Lolos.
3. Misalkan saat entri luas stratum B tertulis 246 (angka tertukar). Jumlah luas menjadi 546 ha, tidak sama dengan 564, sehingga kesalahan terdeteksi sebelum dipakai. Tanpa pemeriksaan ini, stok menjadi 319.560 Mg C, selisih 12.060 Mg C (3,6%) dari nilai benar.

Pemeriksaan tersebut dijadikan sel tetap di lembar Hitung: selisih antara jumlah luas dan luas resmi, yang harus bernilai nol.

## Latihan mandiri

Soal 1 dan 2 bersifat pilihan (mengikuti video 12.1). Soal 3 sampai 5 wajib. Semua angka Hutan Contoh adalah ilustrasi.

1. (Pilihan) Luas mangrove 400.000 ± 20.000 ha dan stok 300 ± 30 Mg C/ha. Hitung stok kawasan dan setengah lebar selang 95%.
2. (Pilihan) Pada Hutan Contoh, luas 564 ha dipetakan dari citra dengan ketidakpastian relatif 5%. Stok kawasan 331.620 ± 23.359 Mg C. Hitung setengah lebar selang gabungan (Mg C dan Mg CO2e) dan bagian ragam yang berasal dari luas.
3. Lembar Referensi Hutan Contoh Anda berisi luas A = 180, B = 264, C = 12 ha (angka C tidak lengkap) dengan stok per hektare 483, 670, 565 Mg C/ha. Hitung jumlah luas, stok kawasan, dan selisihnya dari angka benar. Apa yang seharusnya memberi peringatan?
4. Nama berkas "data_final_FINAL2 (kopi).xlsx" dibuat pada 6 Oktober 2026 untuk inti tanah B-07 Hutan Contoh, versi ketiga. Tulis ulang sesuai pola di bagian 12.2 dan sebutkan dua masalah pada nama lama.
5. Tulis metadata untuk satu baris data: inti tanah B-07, stratum B, karbon tanah 495 Mg C/ha sampai 1 m. Gunakan lima unsur dari BC bab 7 dan tuliskan angka acuan yang Anda pilih bila buku berbeda. Koordinat dan nama alat boleh diisi dengan keterangan "ilustrasi".

### Kunci jawaban

1. Stok = 400.000 × 300 = 120.000.000 Mg C. Relatif luas = 20.000 ÷ 400.000 = 0,05; stok = 0,10. Gabungan = akar(0,05² + 0,10²) = 0,1118. Setengah lebar selang = 120.000.000 × 0,1118 = 13.416.408, dibulatkan 13,4 juta Mg C. Hasil: 120 juta ± 13,4 juta Mg C. Bila dijumlahkan langsung hasilnya 18 juta, terlalu besar.
2. Relatif stok = 23.359 ÷ 331.620 = 0,0704. Gabungan = akar(0,05² + 0,0704²) = 0,0864. Setengah lebar selang = 331.620 × 0,0864 = 28.646 Mg C (± 8,6%), atau 28.646 × 3,67 = 105.129 Mg CO2e. Bagian luas = 0,05² ÷ 0,0864² = 33,5% dari ragam.
3. Jumlah luas = 180 + 264 + 12 = 456 ha, bukan 564 (kurang 108 ha). Stok = 86.940 + 176.880 + 6.780 = 270.600 Mg C, kurang 61.020 Mg C (18,4%) dari 331.620. Peringatan: jumlah luas tidak sama dengan luas resmi 564 ha. Kemungkinan angka C seharusnya 120.
4. HutanContoh_tanah_inti-B07_2026-10-06_v03.xlsx. Masalah nama lama: kata "final" dan "FINAL2" tidak menunjukkan versi atau urutan, serta tidak ada tanggal, lokasi, atau isi; "(kopi)" dan spasi tidak menjelaskan apa yang berbeda dari berkas aslinya.
5. Contoh isian: tempat = Hutan Contoh, stratum B, inti B-07, koordinat dan sistem koordinat (ilustrasi); waktu = tanggal dan jam pengambilan inti (ilustrasi); alat = pengambil inti dan nomor seri (ilustrasi); cara kerja = protokol pengambilan inti tanah (KD atau BC bab 3); pengukur = nama pencatat. Satuan dan kedalaman: Mg C/ha sampai 1 m. Angka acuan: faktor CO2e = 3,67 (KD dan BC), sebutkan bila angka dari buku lain berbeda.

## Temukan kesalahan

**Laporan A (ketidakpastian luas).** "Luas mangrove dari citra Landsat 400.000 ± 30.000 ha dan stok 300 ± 30 Mg C/ha. Ketidakpastian luas = 30.000 × 300 = 9.000.000 Mg C. Ketidakpastian stok = 400.000 × 30 = 12.000.000 Mg C. Ketidakpastian total = 9.000.000 + 12.000.000 = 21.000.000 Mg C. Hasil: 120 juta ± 21 juta Mg C."

**Laporan B (pemetaan Hutan Contoh).** "Luas Hutan Contoh dipetakan dari MODIS 250 m. Citra gratis dengan resolusi sekasar apa pun memadai, dan karena hasil citra sudah seragam, pengecekan lapangan tidak diperlukan. Luas 564 ha, ketidakpastian 0."

### Kunci

**Laporan A.** Salahnya: ketidakpastian dari dua sumber dijumlahkan langsung. Untuk perkalian, ketidakpastian relatif digabung dengan akar jumlah kuadrat: akar(0,075² + 0,10²) = 0,125, sehingga setengah lebar selang 120.000.000 × 0,125 = 15.000.000 Mg C, bukan 21 juta. Deteksi: gabungan dua sumber yang saling bebas tidak pernah lebih besar daripada jumlah langsungnya, dan hasil yang 40% lebih besar (21 ÷ 15) layak dicurigai; periksa apakah rumus memakai akar jumlah kuadrat.

**Laporan B.** Ada tiga masalah. Pertama, MODIS 250 m dipakai untuk memantau perubahan, bukan memetakan tegakan kecil; satu piksel 250 m × 250 m = 6,25 ha, sehingga 564 ha hanya sekitar 90 piksel, dengan banyak piksel campuran di tepi. BC bab 6 menyebut citra 30 m (Landsat) umumnya memadai; satu piksel Landsat 0,09 ha. Kedua, pernyataan bahwa resolusi apa pun memadai bertentangan dengan buku. Ketiga, hasil citra harus dicek di lapangan, dan luas dari citra mempunyai ketidakpastian, bukan 0. Deteksi: tanyakan resolusi spasial, jumlah piksel di dalam kawasan, dan tanggal pengecekan lapangan.

## Peran AI dan contoh prompt

AI berguna untuk menyusun rumus Excel, merancang struktur lembar, dan menjelaskan istilah, tetapi hasilnya tetap diperiksa peserta dengan hitungan tangan dan angka di buku.

**Prompt 1 (struktur buku kerja).** "Saya mengelola data inventarisasi karbon mangrove dengan tiga strata (A, B, C). Usulkan struktur lembar Excel yang memisahkan data mentah, tabel referensi, hitungan, dan hasil, beserta kolom untuk tabel data mentah satu baris satu pengukuran." Pemeriksaan: cocokkan dengan tabel struktur di 12.2; pastikan ada kolom satuan, tanggal, dan pencatat; pastikan tidak ada angka yang diketik ulang di lembar Hitung.

**Prompt 2 (rumus ketidakpastian).** "Di Excel, A2 adalah luas (ha), B2 setengah lebar selang luas, C2 stok per hektare, D2 setengah lebar selang stok. Tulis rumus setengah lebar selang stok kawasan dengan menggabungkan ketidakpastian relatif luas dan stok." Pemeriksaan: isi dengan 400.000; 30.000; 300; 30 dan bandingkan hasilnya dengan 15.000.000 dari buku. Bila beda, rumus salah.

**Prompt 3 (istilah).** "Jelaskan perbedaan sensor pasif dan aktif dan sebutkan satu kelebihan masing-masing untuk pemetaan mangrove di daerah tropis." Pemeriksaan: cocokkan dengan tabel di 12.1 (pasif terhalang awan; aktif menembus awan tetapi lebih mahal).

**Contoh jawaban AI yang bisa salah.** Untuk prompt 2, AI dapat menjawab: `=A2*C2*(B2/A2+D2/C2)` dan menjelaskan bahwa ketidakpastian relatif luas dan stok dijumlahkan. Hitung tangan: A2*C2 = 120.000.000; B2/A2 + D2/C2 = 0,075 + 0,10 = 0,175; hasilnya 21.000.000. Angka buku adalah 15.000.000, jadi rumus itu salah. Rumus yang benar menggabungkan dengan akar jumlah kuadrat: `=A2*C2*SQRT((B2/A2)^2+(D2/C2)^2)`. Pola kesalahannya sama dengan Laporan A: dua ketidakpastian dijumlahkan langsung.

## Catatan Excel: Mac dan Windows

| Langkah | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Menjumlah luas strata | `=SUM(B2:B4)` | `=SUM(B2:B4)` | `=SUM(B2:B4)` |
| Selisih luas terhadap luas resmi (harus 0) | `=SUM(B2:B4)-B6` | `=SUM(B2:B4)-B6` | `=SUM(B2:B4)-B6` |
| Peringatan otomatis bila tidak cocok | `=IF(ABS(SUM(B2:B4)-B6)>0;"PERIKSA";"OK")` (pemisah koma atau titik koma sesuai pengaturan) | sama | `=IF(ABS(SUM(B2:B4)-B6)>0,"PERIKSA","OK")` |
| Gabungan ketidakpastian luas dan stok | `=A2*C2*SQRT((B2/A2)^2+(D2/C2)^2)` | sama | sama |
| Membulatkan hasil | `=ROUND(E2,0)` | `=ROUND(E2,0)` | `=ROUND(E2,0)` |
| Menjadikan data sebuah tabel | Insert > Table | Insert > Table | Format > Convert to table |
| Membekukan baris judul | View > Freeze Panes > Freeze Top Row | View > Freeze Panes > Freeze Top Row | View > Freeze > 1 row |
| Membatasi isian (daftar stratum A, B, C) | Data > Data Validation | Data > Data Validation | Data > Data validation |
| Melindungi lembar data mentah | Review > Protect Sheet | Review > Protect Sheet | Data > Protect sheets and ranges |
| Menyimpan salinan berversi | File > Save a Copy (atau Save As), lalu ubah v02 menjadi v03 | File > Save As, lalu ubah v02 menjadi v03 | File > Make a copy |
| Melihat riwayat versi | File > Browse Version History (berkas di OneDrive atau SharePoint) | File > Info > Version History (berkas di OneDrive atau SharePoint) | File > Version history > See version history |
| Menyimpan data untuk dibagikan sebagai CSV | File > Save As > CSV UTF-8 (Comma delimited) | File > Save As > CSV UTF-8 (Comma delimited) | File > Download > Comma-separated values (.csv) |

Catatan bahasa dan pengaturan wilayah. Pada Excel berbahasa Indonesia, nama fungsi berbeda (SUM menjadi JUMLAH, SQRT menjadi AKAR, IF menjadi JIKA, ROUND menjadi BULATKAN; ABS tetap) dan pemisah argumen biasanya titik koma. Pengaturan wilayah Indonesia juga memakai koma sebagai pemisah desimal, sehingga 0,075 diketik dengan koma dan berkas CSV dapat memakai titik koma sebagai pemisah kolom. Periksa dengan membuka berkas CSV di editor teks sebelum membagikannya. Menu dan fitur riwayat versi bergantung pada versi Excel dan tempat penyimpanan berkas.

## Tugas mingguan

Tugas: susun daftar periksa pengelolaan data untuk proyek Anda (proyek nyata atau Hutan Contoh) pada lembar "Data" di buku kerja, lalu terapkan pada satu berkas contoh. Isi daftar dengan kolom: butir, tahap (sebelum lapangan, di lapangan, setelah lapangan, penyimpanan), penanggung jawab, bukti (nama berkas atau sel), status (ya, belum).

Bagian wajib dan pilihan:

- Wajib: butir 1 sampai 8 di bawah.
- Pilihan (bagi yang memakai citra): butir 9 dan 10.

Kriteria lulus:

- [ ] Buku kerja memiliki lembar Baca_saya, Data_mentah, Referensi, Hitung, Hasil, dan Log, dan setiap lembar diberi keterangan isinya.
- [ ] Lembar Data_mentah berformat satu baris satu pengukuran, memuat kolom tanggal, kode plot atau inti, pencatat, nilai, dan satuan; tidak ada sel gabungan.
- [ ] Pola nama berkas ditulis di lembar Baca_saya, dan tiga berkas contoh mengikutinya (termasuk tanggal tahun-bulan-hari dan nomor versi).
- [ ] Metadata untuk satu set data memuat lima unsur dari BC bab 7: tempat, waktu, alat, cara kerja, dan pengukur, ditambah definisi kolom dan satuan.
- [ ] Lembar Hitung memuat sedikitnya satu pemeriksaan silang berupa sel yang menunjukkan OK atau PERIKSA (misalnya jumlah luas strata terhadap luas resmi 564 ha).
- [ ] Daftar periksa mencakup lembar isian yang disiapkan sebelum lapangan, pencatat khusus, pencatatan saat pengukuran, foto dari titik tetap, pemeriksaan sore, dan pencocokan setelah entri.
- [ ] Rencana cadangan menyebut tiga salinan, tempat penyimpanannya, dan waktu pembuatannya.
- [ ] Rencana penyimpanan atau publikasi data di pangkalan data terbuka ditulis, atau alasan data tidak dapat dibuka dicatat.
- [ ] (Pilihan) Daftar periksa mencatat sumber citra, resolusi spasial, tanggal citra, dan rencana pengecekan lapangan.
- [ ] (Pilihan) Ketidakpastian luas dari citra dimasukkan dalam hitungan stok kawasan dengan rumus gabungan, dan hasilnya dilaporkan beserta setengah lebar selang.

Uraian butir daftar periksa yang dianjurkan:

| Tahap | Butir |
| --- | --- |
| Sebelum lapangan | Lembar isian siap dan kolomnya sama dengan Data_mentah; pencatat tiap tim ditetapkan; pola nama berkas dan kode plot disepakati; buku kerja dan metadata awal dibuat |
| Di lapangan | Nilai dicatat saat pengukuran (misalnya panjang inti saat inti diangkat); foto dari titik tetap, empat arah mata angin di mangrove; data diperiksa setiap sore dan dicadangkan |
| Setelah lapangan | Entri ke Excel, pencocokan dengan lembar isian, pemeriksaan silang di lembar Hitung, catatan versi di lembar Log |
| Penyimpanan | Tiga salinan; metadata lengkap; angka acuan yang dipilih tercatat; data diserahkan ke pangkalan data terbuka bila memungkinkan |

## Rencana sesi langsung 60 menit

| Menit | Kegiatan | Bahan |
| --- | --- | --- |
| 0-5 | Pembukaan dan pertanyaan dari video | Tab modul ini |
| 5-20 | Tanya jawab lembar Emisi (Modul 11) | Lembar Emisi peserta |
| 20-30 | Pembahasan ringkas penginderaan jauh dan ketidakpastian luas; peserta pilihan menunjukkan hasil soal 1 atau 2 | Tabel data gratis, soal 1-2 |
| 30-40 | Kerja berpasangan: tukar buku kerja, cari kesalahan pada sel pemeriksaan silang yang sengaja diubah (misalnya luas stratum B menjadi 246) | Berkas contoh dari soal 3 |
| 40-55 | Peserta menyusun daftar periksa pengelolaan data di lembar Data dan saling meninjau dengan kriteria lulus | Daftar periksa, kriteria lulus |
| 55-60 | Rangkuman dan penugasan | Daftar centang tugas |

Sumber: BC (Coastal Blue Carbon) bab 6 dan 7; KD (Kauffman dan Donato, CIFOR WP86) untuk penggabungan ketidakpastian; hitungan Hutan Contoh adalah ilustrasi. Struktur buku kerja, penamaan berkas, dan cadangan tiga salinan di luar buku.

---

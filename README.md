# SIMOBILE

**SIMOBILE** adalah aplikasi kasir sederhana yang dirancang untuk membantu pemilik dan pengelola toko kelontong dalam mengelola produk, stok, dan transaksi penjualan secara lebih praktis.

Aplikasi ini dirancang dengan mempertimbangkan kebutuhan pengguna yang tidak memiliki latar belakang teknis, sehingga fitur dan navigasi dibuat sederhana dan mudah dipahami.

---

## Tentang Aplikasi

SIMOBILE dikembangkan untuk membantu kegiatan operasional toko kelontong, khususnya dalam:

* Mencatat transaksi penjualan secara digital.
* Mengelola produk dan stok barang.
* Melihat harga beli dan harga jual produk.
* Mencari produk dengan cepat.
* Melihat ringkasan penjualan.
* Melihat riwayat transaksi.

Aplikasi ini ditujukan untuk penggunaan sehari-hari oleh pemilik atau kasir toko kelontong.

---

## Fitur Utama

### Dashboard

Dashboard memberikan gambaran singkat mengenai aktivitas penjualan toko.

Informasi yang tersedia:

* Jumlah transaksi hari ini.
* Total penjualan hari ini.
* Produk yang paling banyak terjual hari ini.

### Manajemen Produk

Pengguna dapat mengelola produk yang tersedia di toko, meliputi:

* Melihat daftar produk.
* Mencari produk secara langsung.
* Melihat detail produk.
* Menambahkan produk baru.
* Mengedit informasi produk.
* Melihat stok.
* Melihat harga beli.
* Melihat harga jual.
* Melihat gambar produk.

Jika produk tidak memiliki gambar, aplikasi akan menggunakan gambar bawaan.

### Detail Produk

Halaman detail produk menampilkan:

* Nama produk.
* Gambar produk.
* Sisa stok.
* Harga beli.
* Harga jual.
* Perkiraan keuntungan.
* Pilihan untuk mengedit produk.

Keuntungan dihitung berdasarkan:

> **Keuntungan = Harga Jual − Harga Beli**

### Tambah dan Edit Produk

Informasi produk yang dapat diisi:

* Nama produk.
* Harga beli.
* Harga jual.
* Stok.

Aplikasi menyediakan validasi pada setiap bagian yang perlu diperbaiki, misalnya:

* `Kategori produk wajib dipilih`
* `Nama produk wajib diisi`
* `Harga beli tidak boleh 0`
* `Harga jual tidak boleh 0`

### Keranjang dan Transaksi

Keranjang digunakan untuk memproses satu transaksi yang sedang berlangsung.

Alur transaksi:

**Produk → Keranjang → Konfirmasi Transaksi → Riwayat Transaksi**

Pengguna dapat:

* Mencari produk.
* Menambahkan produk ke keranjang.
* Mengubah jumlah barang.
* Melihat stok yang tersedia.
* Melihat subtotal setiap barang.
* Melihat total transaksi.
* Menghapus barang dari keranjang.

Jumlah barang yang ditambahkan tidak dapat melebihi stok yang tersedia.

Setelah transaksi dikonfirmasi:

1. Transaksi disimpan ke riwayat.
2. ID transaksi dibuat secara otomatis.
3. Stok barang dikurangi.
4. Keranjang dikosongkan.
5. Keranjang siap digunakan untuk transaksi berikutnya.

### Riwayat Transaksi

Riwayat Transaksi digunakan untuk melihat transaksi yang telah dilakukan.

Setiap transaksi menampilkan:

* ID transaksi.
* Tanggal transaksi.
* Total transaksi.

Pengguna dapat memilih transaksi untuk melihat detail lengkapnya.

### Detail Transaksi

Detail transaksi berfungsi sebagai catatan transaksi.

Informasi yang ditampilkan:

* ID transaksi.
* Tanggal transaksi.
* Nama barang.
* Jumlah barang.
* Harga jual.
* Subtotal.
* Total transaksi.

### Profil

Menu Profil digunakan untuk menyimpan informasi pemilik dan toko.

Informasi yang tersedia:

* Foto profil.
* Username.
* Nomor telepon.
* Email.
* Nama toko.
* Alamat toko.

> **Catatan:** Username tidak dapat diubah melalui fitur edit profil.

### Pengaturan

Pengaturan dapat diakses melalui menu samping.

Pilihan yang tersedia:

* **Light Mode**
* **Dark Mode**

### Tentang

Menu Tentang berisi:

* Nama aplikasi.
* Deskripsi aplikasi.
* Informasi pengembang.

---

## Instalasi

SIMOBILE digunakan melalui smartphone Android.

### Persyaratan

Sebelum memasang aplikasi, pastikan:

* Menggunakan smartphone Android.
* Memiliki ruang penyimpanan yang cukup.
* Memiliki file instalasi **APK SIMOBILE**.

### Cara Instalasi

1. Dapatkan file APK SIMOBILE.
2. Buka file APK pada smartphone.
3. Jika Android meminta izin untuk memasang aplikasi dari sumber tersebut, izinkan pemasangan sesuai petunjuk yang muncul.
4. Tekan **Install / Pasang**.
5. Tunggu hingga proses pemasangan selesai.
6. Setelah selesai, pilih **Buka** untuk menjalankan aplikasi.

> **Catatan:** Nama menu dan peringatan keamanan dapat berbeda tergantung merek dan versi Android yang digunakan.

---

## Cara Menggunakan

### 1. Memulai Aplikasi

Setelah aplikasi berhasil dipasang, buka **SIMOBILE** melalui ikon aplikasi pada smartphone.

### 2. Mengelola Produk

1. Buka menu **Produk**.
2. Gunakan kolom pencarian untuk mencari barang.
3. Pilih produk untuk melihat detailnya.
4. Tambahkan atau edit produk sesuai kebutuhan.
5. Pastikan harga dan jumlah stok telah diisi dengan benar.

### 3. Melakukan Penjualan

1. Pilih produk yang ingin dijual.
2. Tambahkan produk ke **Keranjang**.
3. Atur jumlah barang.
4. Periksa daftar barang dan subtotal.
5. Periksa total transaksi.
6. Pilih **Konfirmasi Transaksi**.
7. Konfirmasi transaksi.
8. Transaksi akan masuk ke **Riwayat Transaksi**.

### 4. Melihat Transaksi Sebelumnya

1. Buka menu **Riwayat Transaksi**.
2. Pilih transaksi yang ingin diperiksa.
3. Lihat daftar barang, jumlah, harga, subtotal, dan total transaksi.

---

## Tampilan dan Kenyamanan

SIMOBILE dirancang agar mudah digunakan dalam kegiatan toko sehari-hari.

Beberapa aspek yang diperhatikan:

* Navigasi sederhana.
* Pencarian produk secara langsung.
* Informasi stok yang mudah dilihat.
* Tampilan yang tidak terlalu kompleks.
* Mode terang dan mode gelap.
* Tampilan tetap rapi ketika produk tidak memiliki gambar.
* Pesan kesalahan ditampilkan pada bagian yang perlu diperbaiki.

---

## Penyimpanan Data

SIMOBILE menggunakan penyimpanan data pada perangkat untuk mendukung pengelolaan data aplikasi.

> **Catatan:** Implementasi dan ketersediaan penyimpanan lokal dapat bergantung pada versi aplikasi yang digunakan.

---

## Bantuan

Jika mengalami masalah ketika menggunakan aplikasi, pengguna dapat memeriksa kembali langkah penggunaan pada bagian **[Cara Menggunakan](#-cara-menggunakan)**.

Untuk kebutuhan pengembangan atau pelaporan masalah pada aplikasi, pengguna dapat menghubungi pengembang proyek.

---

## Pengembang

**SIMOBILE**

Aplikasi kasir untuk membantu pengelolaan toko kelontong.

Dikembangkan oleh Tim INI HMP YEAH sebagai bagian dari proyek aplikasi mobile.
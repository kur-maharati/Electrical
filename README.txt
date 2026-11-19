ELECTRICAL SYSTEM - TEKNIK ALAT BERAT | SMK MAHARATI

FILE:
- index.html       Halaman utama
- style.css        Tampilan dan warna aplikasi
- script.js        Fungsi menu dan pengaturan alamat tujuan
- assets/          Tempat logo dan file PDF lokal

PENGATURAN ALAMAT MENU:
Buka script.js, lalu ganti tanda # pada objek links dengan alamat tujuan.
Contoh:
basicElectrical: "https://alamat-materi-anda.com"
shopManual: "assets/shop-manual.pdf"

Jika menggunakan PDF lokal, salin PDF ke folder assets dan tulis nama file beserta foldernya.
Untuk Google Form/Drive, gunakan tautan berbagi langsung. Aplikasi akan membuka tautan asli di tab baru.

LOGO:
Masukkan dua file logo PNG ke folder assets dengan nama persis:
- logo-pgri.png
- logo-maharati.png

PUBLIKASI GITHUB PAGES:
1. Ekstrak ZIP.
2. Unggah index.html, style.css, script.js, README.txt, dan folder assets ke root repository GitHub.
3. Masukkan kedua logo ke folder assets.
4. Atur tautan menu pada script.js.
5. Aktifkan GitHub Pages dari Settings > Pages > Deploy from a branch > main > /(root).


PEMBARUAN TAMPILAN:
- Navigasi dropdown bagian atas dihapus.
- Tujuh menu pembelajaran hanya tersedia sebagai kartu di beranda.
- Logo PGRI dan SMK Maharati tersedia dalam PNG transparan di folder assets.
- Atur tautan tujuan setiap kartu pada bagian links di script.js.

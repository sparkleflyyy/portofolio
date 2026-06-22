# PROMPT: Buat Website Portofolio QA Tester (untuk dideploy di Vercel)

## Konteks

Saya seorang developer yang juga merangkap sebagai QA/game tester. Saya butuh website portofolio satu halaman (single-page) yang menampilkan 4 project saya dalam format *case study testing*, bukan sekadar showcase aplikasi biasa. Tujuannya untuk melamar magang sebagai game tester, jadi yang ditonjolkan adalah ketelitian, metode testing, dan kemampuan dokumentasi bug — bukan cuma kemampuan coding.

## Gaya Desain

- Modern, simpel, dan tegas (bold)
- Palet warna: gelap/netral sebagai dasar (contoh: hitam/abu gelap, putih, dengan satu warna aksen yang tegas seperti merah, kuning, atau hijau neon — pilih satu yang konsisten)
- Tipografi: sans-serif yang clean dan tegas untuk heading (ukuran besar, bold), font yang nyaman dibaca untuk body text
- Layout: banyak whitespace, grid yang rapi, hindari dekorasi berlebihan
- Animasi/transisi halus saat scroll (fade-in atau slide-up), tidak berlebihan
- Fully responsive (mobile, tablet, desktop)

## Format Output

Buat sebagai **satu file HTML mandiri**, siap untuk dideploy di Vercel sebagai static site, dengan spesifikasi:
- Gunakan **Tailwind CSS** sebagai styling utama (lewat CDN Tailwind Play: `<script src="https://cdn.tailwindcss.com"></script>`) agar desain modern bisa dibangun cepat dengan utility classes
- JS murni (vanilla JavaScript) untuk interaktivitas (accordion/modal case study, smooth scroll, animasi on-scroll), ditulis langsung di dalam file yang sama
- Google Fonts boleh dipakai untuk tipografi jika diperlukan
- Tidak perlu framework JS (React/Vue) — cukup HTML + Tailwind + vanilla JS agar tetap ringan dan mudah dideploy sebagai static file

## Struktur Halaman

### 1. Hero Section
- Nama saya (placeholder: "Riyan")
- TIDAK perlu tagline atau label role/jabatan apapun
- Bisa tambahkan CTA scroll ke section project

### 2. About Me
Jelaskan bahwa saya adalah seorang **developer sekaligus tester**. Saya membangun project Bank Sampah Digital dan QuadraPlay dari nol (full-stack), lalu juga melakukan proses testing-nya sendiri menggunakan test case terstruktur di Excel. Latar belakang ini membuat saya memahami sistem dari dua sisi: cara membangunnya dan cara mendobrak/mengujinya untuk menemukan bug. Sebutkan juga ketertarikan saya pada dunia QA, khususnya game testing.

### 3. Case Studies — 4 Project

Tampilkan dalam format card/grid yang bisa diklik untuk expand atau pindah ke detail view (gunakan modal atau accordion, bukan halaman terpisah). Setiap project punya struktur konten yang SAMA:

- **Overview**: deskripsi singkat, tech stack, role saya (Developer & Tester / atau hanya Tester)
- **Testing Scope**: fitur-fitur yang diuji
- **Metode Testing**: jenis testing yang dilakukan (functional, regression, role-based access testing, dst)
- **Bukti Testing**: placeholder area untuk screenshot tabel Excel test case (ID, Deskripsi, Steps, Expected Result, Actual Result, Status Pass/Fail) — beri instruksi visual "[INSERT SCREENSHOT TEST CASE EXCEL]" sebagai placeholder yang jelas
- **Demo/Link**: placeholder link ke repo/demo

Berikut detail isi untuk masing-masing project:

---

**Project 1: PixelStation**
- Tech stack: PHP Native
- Role: Developer & Tester
- Deskripsi: Website reservasi PlayStation yang memudahkan pelanggan memesan jadwal bermain secara online. Pengguna dapat melihat ketersediaan waktu, memilih jadwal, dan melakukan reservasi secara real-time. Admin dapat mengelola data reservasi termasuk verifikasi dan konfirmasi pemesanan.
- Testing scope (usulkan): proses reservasi (validasi tanggal/jam bentrok), verifikasi admin, validasi form input, edge case (reservasi di jam yang sama oleh 2 user)

---

**Project 2: Sistem Penyewaan PS (Java)**
- Tech stack: Java
- Role: Developer & Tester
- Deskripsi: Sistem penyewaan PlayStation berbasis Java (desktop/console app — sesuaikan generic karena saya belum berikan detail fitur lengkap)
- Testing scope (usulkan, generic): validasi input transaksi, perhitungan biaya sewa, manajemen stok unit PS

---

**Project 3: Bank Sampah Digital**
- Tech stack: Laravel (PHP 8.1+), Tailwind CSS, Alpine.js, MySQL, Google Socialite SSO, reCAPTCHA v2
- Role: Developer & Tester
- Deskripsi: Platform digitalisasi pengelolaan sampah dengan 3 level akses — Super Admin (dashboard analitik, manajemen cabang & pengguna, master data jenis sampah), Admin Cabang (verifikasi setoran, manajemen produk daur ulang, transaksi penjualan), dan Nasabah (riwayat setoran, marketplace daur ulang dengan filter & checkout, pelacakan transaksi dengan invoice)
- Testing scope: 
  - Role-based access control (3 level: Super Admin, Admin Cabang, Nasabah) — pastikan tiap role hanya bisa akses fitur miliknya
  - Validasi OTP email saat reset password
  - Validasi kekuatan password (min 8 karakter, kombinasi huruf besar, angka, karakter spesial)
  - Flow setoran sampah → otomatis update saldo nasabah & stok gudang
  - Flow marketplace: filter kategori/harga/lokasi, kalkulator checkout, upload bukti pembayaran, perubahan status pesanan
  - Generate invoice dengan watermark
- **PENTING**: jangan tampilkan kredensial akun asli. Gunakan placeholder generik seperti `admin@contoh.id` / `[password tersembunyi untuk keamanan]` jika perlu menyebut contoh akun uji

---

**Project 4: QuadraPlay**
- Tech stack: Flutter (Dart), backend 247Go Cloud Service, integrasi pembayaran Midtrans
- Role: Developer & Tester
- Deskripsi: Aplikasi mobile rental PlayStation dengan fitur reservasi, manajemen pengiriman (delivery), dan integrasi pembayaran. Tersedia sisi pelanggan dan panel admin untuk manajemen unit, reservasi, dan driver pengiriman.
- Testing scope:
  - Flow registrasi & login
  - Reservasi unit PS3/PS4/PS5 dengan pilihan tanggal & durasi
  - Upload dokumen identitas (KTP) — validasi format file
  - Integrasi pembayaran Midtrans (gunakan sandbox simulator, BUKAN production key)
  - Panel admin: manajemen reservasi & driver
  - Edge case: pembayaran gagal/timeout, reservasi bentrok jadwal
- **PENTING**: jangan tampilkan API key, server key Midtrans, token, atau email/password akun asli dari project ini di halaman portofolio. Ganti dengan placeholder seperti `[API_KEY_DISEMBUNYIKAN]` jika perlu menyebutkan contoh konfigurasi

---

### 4. Skills & Tools Summary
Tampilkan dalam grid ikon + label, dikelompokkan:
- **Testing**: Manual Testing, Test Case Design, Regression Testing, Role-based Access Testing, Bug Reporting
- **Tools**: Excel/Google Sheets (test matrix), Jira (familiar), Postman (jika relevan untuk API testing)
- **Development**: PHP/Laravel, Java, Flutter/Dart, MySQL, Tailwind CSS

### 5. Contact / Footer
Placeholder untuk email, LinkedIn, GitHub. Sertakan tombol/link CTA "Download CV".

## Instruksi Teknis Tambahan
- Karena menggunakan Tailwind via CDN, konfigurasi warna aksen kustom (jika dibutuhkan di luar palet default Tailwind) bisa didefinisikan lewat `tailwind.config` inline sebelum script CDN dijalankan
- Semua area screenshot Excel/bukti testing harus diberi placeholder box dengan border dashed (gunakan utility class Tailwind seperti `border-dashed border-2`) dan teks instruksi jelas agar saya tahu di mana harus menyisipkan gambar asli nantinya
- Gunakan icon set sederhana (bisa inline SVG, jangan pakai library eksternal yang berat)
- Pastikan tidak ada bagian kode yang menyertakan kredensial, password, token, atau API key asli dari project manapun
- Berikan komentar di kode pada bagian yang perlu saya isi manual (foto profil, link repo, CV, dll)

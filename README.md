# 📅 Jadwal Kuliah PTIKA

Aplikasi web sederhana berbasis **HTML + CSS + JavaScript** untuk menampilkan dan mengelola jadwal mata kuliah mahasiswa PTIKA.  
Didesain agar jadwal lebih interaktif, bisa difilter, dicari, dan ditampilkan dalam dua mode: **Mingguan** & **Daftar**.

## 🚀 Live Demo
👉 [Klik di sini untuk melihat](https://rafli-chesio.github.io/Jadwal-Kuliah-PTIKA/)

---

## ✨ Fitur Utama
- 📌 **Tampilan Mingguan** – jadwal ditampilkan per-hari dalam grid.
- 📋 **Tampilan Daftar** – daftar mata kuliah lengkap dengan detail dosen & ruang.
- 🔍 **Filter & Pencarian**  
  - Filter berdasarkan **blok kuliah** (Blok 1 / Blok 2).  
  - Filter berdasarkan **hari**.  
  - Pencarian mata kuliah, dosen, atau ruang.  
- 🖥️ **UI Dinamis** – jadwal di-*render* langsung dari JavaScript (data terpusat di `script.js`).
- 📱 **Responsive Design** – tampilan menyesuaikan device.

---

## 🛠️ Teknologi yang Digunakan
- **HTML5** → struktur halaman.
- **CSS3** → styling dengan tema *glassmorphism* (efek kaca + dark mode).
- **JavaScript Vanilla** → logika interaktif: filter, search, dan render tampilan.
- **GitHub Pages** → hosting gratis.

---

## 📂 Struktur Project
```
Jadwal-Kuliah-PTIKA/
├── index.html      # Halaman utama
├── styles.css      # Styling (tema glass/dark)
├── script.js       # Data & logika interaktif
└── image.png       # Logo (opsional)
```

---

## ▶️ Cara Menjalankan
1. Clone repo ini:
   ```bash
   git clone https://github.com/rafli-chesio/Jadwal-Kuliah-PTIKA.git
   cd Jadwal-Kuliah-PTIKA
   ```
2. Buka `index.html` di browser (cukup klik 2x aja).
3. Atur filter atau search untuk eksplor jadwal.

---

## 🤝 Kontribusi
Kalau ada error jadwal, fitur tambahan, atau ide keren lain:
- Silakan buat **Issue**.
- Atau langsung **Pull Request** biar project makin mantap.

---

## 👨‍💻 Author
**Muhammad Rafli Chesio**  
Mahasiswa PTIKA UNIMED yang pengen jadwal kuliah tampil modern, rapi, dan gampang diakses ✨

---

💡 *Fun fact*: Semua jadwal & logika di-*hardcode* di `script.js`, jadi gampang dimodifikasi kalau ada update jadwal baru.

// --- 1. Menu Mobile ---
const menuBtn = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

// Toggle menu saat tombol burger diklik
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));

// Tutup menu otomatis saat link diklik (pakai jeda dikit biar smooth)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setTimeout(() => navLinks.classList.remove('show'), 300));
});


// --- 2. Scroll Spy (Pendek & Padat) ---
const allLinks = document.querySelectorAll('.nav-links a');
const allSections = document.querySelectorAll('article[id], section[id]');

function scrollSpy() {
  // Posisi scroll ditambah 150px biar deteksinya lebih awal
  let scrollPos = window.scrollY + 150;

  allSections.forEach(sec => {
    // Cek apakah posisi scroll sedang berada di dalam area section ini
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      // Kalau iya, hapus 'active' dari semua link dulu
      allLinks.forEach(l => l.classList.remove('active'));
      // Terus tambahin 'active' cuma ke link yang href-nya cocok sama ID section
      document.querySelector(`.nav-links a[href="#${sec.id}"]`)?.classList.add('active');
    }
  });
}

// Jalankan saat di-scroll dan saat pertama kali dimuat
window.addEventListener('scroll', scrollSpy);
window.addEventListener('load', scrollSpy);
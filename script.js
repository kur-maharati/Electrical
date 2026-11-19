/*
  UBAH ALAMAT TUJUAN DI BAGIAN links DI BAWAH INI.
  Bisa menggunakan URL website/Google Drive/Google Form atau file PDF lokal.
  Untuk PDF lokal, simpan file di folder assets, contoh: assets/basic-electrical.pdf
*/
const links = {
  basicElectrical: "#", // contoh: "assets/basic-electrical.pdf" atau URL materi
  ecu: "#",
  wiringDiagram: "#",
  shopManual: "#",
  jobsheet: "#",
  game: "#",
  simulator: "#"
};

const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

function openDestination(menuKey) {
  const destination = links[menuKey];
  if (!destination || destination === '#') {
    alert('Alamat untuk menu ini belum diatur. Silakan isi alamat tujuan pada file script.js.');
    return;
  }
  // Membuka alamat asli secara langsung agar Google Form/Drive dapat digunakan normal.
  window.open(destination, '_blank', 'noopener,noreferrer');
  dropdownMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  dropdownMenu.hidden = !dropdownMenu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!dropdownMenu.hidden));
});

document.querySelectorAll('[data-menu]').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    openDestination(item.dataset.menu);
  });
});

document.addEventListener('click', event => {
  if (!dropdownMenu.hidden && !dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    dropdownMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    dropdownMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

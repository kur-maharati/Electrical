/*
  UBAH ALAMAT TUJUAN DI BAGIAN links DI BAWAH INI.
  Bisa menggunakan URL website/Google Drive/Google Form atau file PDF lokal.
  Untuk PDF lokal, simpan file di folder assets, contoh: assets/basic-electrical.pdf
*/
const links = {
  basicElectrical: "https://drive.google.com/file/d/1KmZTwowaGDqNxA6glxCjzBHTzrp6wu8Q/view?usp=sharing", // contoh: "assets/basic-electrical.pdf" atau URL materi
  ecu: "#",
  wiringDiagram: "https://drive.google.com/file/d/1fchLTRDOwM3EzE7arv9myK_qcJRW3psC/view?usp=sharing",
  shopManual: "https://drive.google.com/file/d/1MtW92jMDipCx8F8vhAQZYulNuWWnoSHL/view?usp=sharing",
  jobsheet: "https://kur-maharati.github.io/Jobsheet/",
  game: "https://kur-maharati.github.io/Game/",
  simulator: "https://kur-maharati.github.io/Simulator/"
};

function openDestination(menuKey) {
  const destination = links[menuKey];
  if (!destination || destination === '#') {
    alert('Alamat untuk menu ini belum diatur. Silakan isi alamat tujuan pada file script.js.');
    return;
  }
  // Membuka alamat asli secara langsung agar Google Form/Drive dapat digunakan normal.
  window.open(destination, '_blank', 'noopener,noreferrer');
}

document.querySelectorAll('.material-card[data-menu]').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    openDestination(item.dataset.menu);
  });
});


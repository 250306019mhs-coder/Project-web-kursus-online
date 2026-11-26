// ===== FITUR 1: Klik judul metode untuk buka/tutup penjelasan =====
const semuaArtikel = document.querySelectorAll("article");

semuaArtikel.forEach(function (artikel) {
  const judul = artikel.querySelector("h3");

  judul.addEventListener("click", function () {
    artikel.classList.toggle("tertutup");
  });
});

// ===== FITUR 2: Tombol kembali ke atas halaman =====
const tombolAtas = document.createElement("button");
tombolAtas.id = "tombol-atas";
tombolAtas.textContent = "↑";
tombolAtas.setAttribute("aria-label", "Kembali ke atas");
document.body.appendChild(tombolAtas);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    tombolAtas.classList.add("tampil");
  } else {
    tombolAtas.classList.remove("tampil");
  }
});

tombolAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

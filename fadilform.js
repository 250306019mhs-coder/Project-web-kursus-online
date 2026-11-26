const inputNama = document.getElementById("nama");
const sapaan = document.getElementById("sapaan");
const selectMetode = document.getElementById("metode");
const selectWaktu = document.getElementById("waktu");
const selectDurasi = document.getElementById("durasi");
const totalJam = document.getElementById("total-jam");
const form = document.querySelector("form");

function ambilHari() {
  const dicentang = document.querySelectorAll('input[name="jadwal"]:checked');
  return Array.from(dicentang).map(function (cb) {
    return cb.value;
  });
}

// ===== FITUR 1: Menyapa pengguna =====
inputNama.addEventListener("input", function () {
  const nama = inputNama.value.trim();
  sapaan.textContent = nama
    ? "Halo, " + nama + "! Selamat datang di ACADEMIND."
    : "";
});

// ===== FITUR 2: Menghitung total jam belajar per minggu =====
function hitungTotalJam() {
  const jumlahHari = ambilHari().length;
  const durasi = Number(selectDurasi.value);

  if (jumlahHari === 0 || durasi === 0) {
    totalJam.textContent = "";
    return;
  }

  totalJam.textContent =
    "Total belajar kamu: " + jumlahHari + " hari x " + durasi +
    " jam = " + (jumlahHari * durasi) + " jam per minggu.";
}

form.addEventListener("change", hitungTotalJam);

// ===== FITUR 3: Menyimpan data lalu pindah ke halaman hasil =====
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const hari = ambilHari();

  if (hari.length === 0) {
    alert("Pilih minimal satu hari belajar.");
    return;
  }

  const dataBaru = {
    nama: inputNama.value.trim(),
    metode: selectMetode.value,
    hari: hari.join(", "),
    waktu: selectWaktu.value,
    durasi: selectDurasi.value
  };

  localStorage.setItem("preferensi", JSON.stringify([dataBaru]));
  
  window.location.href = "fadhilhasil.html";
});


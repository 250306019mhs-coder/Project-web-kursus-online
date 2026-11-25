console.log("Halo ini Citra");



// ===== JS HALAMAN: DAFTAR & PENCARIAN KURSUS =====
const kursus = ["Matematika", "Bahasa Inggris", "IT"];
const daftar = document.getElementById("daftar-kursus");
const tombol = document.getElementById("btnCari");

if (daftar) {
    kursus.forEach(function (nama) {
        daftar.innerHTML += "<li>" + nama + "</li>";
    });
}

if (tombol) {
    tombol.onclick = function () {
        const cari = document.getElementById("cari-kursus").value.trim();
        const hasil = document.getElementById("hasil-pencarian");

        if (kursus.includes(cari)) {
            hasil.textContent = "Kursus " + cari + " tersedia!";
        } else {
            hasil.textContent = "Kursus tidak ditemukan.";
        }
    };
}

// ===== JS FORMULIR =====
const formKursus = document.getElementById("formKursus");

if (formKursus) {
    formKursus.addEventListener("submit", function (e) {
        e.preventDefault(); // cegah form reload biasa

        // Ambil data dari formulir
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const tanggal = document.getElementById("tanggal").value;
        const pilihan = document.getElementById("kursus").value;
        const fileInput = document.getElementById("gambar");
        const alasan = document.getElementById("alasan").value;

        // Susun data ke dalam URL, lalu buka halaman hasil
        const url = "hasil.html"
            + "?nama=" + encodeURIComponent(nama)
            + "&email=" + encodeURIComponent(email)
            + "&tanggal=" + encodeURIComponent(tanggal)
            + "&kursus=" + encodeURIComponent(pilihan)
            + "&alasan=" + encodeURIComponent(alasan);

        window.location.href = url;
    });
}
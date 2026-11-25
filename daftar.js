// ===== HALAMAN FORMULIR (daftar.html) =====
var dropdown = document.getElementById("program");

// Kode di dalam if hanya jalan di daftar.html (karena hanya di sana ada dropdown)
if (dropdown) {

    // Buat tulisan kosong di bawah dropdown untuk menampilkan biaya
    var info = document.createElement("p");
    dropdown.after(info);

    // Fungsi untuk menampilkan biaya
    function tampilkanBiaya() {
        if (dropdown.value === "teknologi") {
            info.innerText = "Biaya: Rp 750.000 per bulan";
        } else if (dropdown.value === "matematika") {
            info.innerText = "Biaya: Rp 400.000 per bulan";
        } else if (dropdown.value === "inggris") {
            info.innerText = "Biaya: Rp 500.000 per bulan";
        } else {
            info.innerText = "";
        }
    }

    // Jalankan fungsi di atas setiap kali dropdown diganti
    dropdown.onchange = tampilkanBiaya;

    // Kalau datang dari halaman utama, program langsung terpilih
    var url = new URLSearchParams(window.location.search);
    if (url.get("program")) {
        dropdown.value = url.get("program");
        tampilkanBiaya();
    }

    // Saat tombol DAFTAR ditekan
    var form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventDefault(); // cegah halaman refresh

        // Simpan data satu per satu
        localStorage.setItem("nama", document.getElementById("nama").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("hp", document.getElementById("hp").value);
        localStorage.setItem("program", dropdown.value);
        localStorage.setItem("pesan", document.getElementById("pesan").value);

        // Pindah ke halaman hasil
        window.location.href = "hasil.html";
    };
}


// ===== HALAMAN HASIL (hasil.html) =====
var tempat = document.getElementById("data-siswa");

// Kode di dalam if hanya jalan di hasil.html
if (tempat) {
    var nama = localStorage.getItem("nama");

    if (nama === null) {
        tempat.innerText = "Belum ada data yang terkirim.";
    } else {
        tempat.innerText =
            "Nama: " + nama + "\n" +
            "Email: " + localStorage.getItem("email") + "\n" +
            "No. HP: " + localStorage.getItem("hp") + "\n" +
            "Program: " + localStorage.getItem("program") + "\n" +
            "Pesan: " + localStorage.getItem("pesan");
    }
}

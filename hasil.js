const daftarData = document.getElementById("data-siswa");

function tampilkanData() {
  const data = JSON.parse(localStorage.getItem("preferensi")) || [];

  if (data.length === 0) {
    daftarData.innerHTML = "<p>Belum ada data yang terkirim.</p>";
    return;
  }

  let isi = "";
  data.forEach(function (item, i) {
    isi +=
      "<div class='hasil'>" +
      "<p>Nama: " + item.nama + "</p>" +
      "<p>Metode: " + item.metode + "</p>" +
      "<p>Hari: " + item.hari + "</p>" +
      "<p>Waktu: " + item.waktu + "</p>" +
      "<p>Durasi: " + item.durasi + " jam per hari</p>" +
      "</div><hr>";
  });
  daftarData.innerHTML = isi;
}

tampilkanData();

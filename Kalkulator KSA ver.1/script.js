let items = [];
let jumlahXalpha = 0;

const konstantaDiamagnetik = {
  "Cu2+": -11e-6,
  "N": -4.9e-6,
  "H": -2.9e-6,
  "S": -15.0e-6,
  "O": -12.0e-6,
  "SO42-": -18e-6,
  "H2O": -13.0e-6,
  "NH3": -18e-6,
  "Cl-": -23.6e-6 //selanjutnya di tabel
};

function tambahItem() {
  const nama = document.getElementById('namaItem').value.trim();
  const tipe = document.getElementById('tipeItem').value;
  const jumlah = parseFloat(document.getElementById('jumlahItem').value);

  if (nama && jumlah > 0) {
    items.push({ nama, tipe, jumlah });
    tampilkanItem();
    document.getElementById('namaItem').value = '';
    document.getElementById('jumlahItem').value = '';
  }
}

function tampilkanItem() {
  const daftar = document.getElementById('daftarItem');
  daftar.innerHTML = items.map(item => `${item.jumlah} x ${item.nama} (${item.tipe})`).join('<br>');
}

function lanjutKeStep2() {
  jumlahXalpha = 0;
  for (let item of items) {
    if (konstantaDiamagnetik[item.nama]) {
      jumlahXalpha += item.jumlah * konstantaDiamagnetik[item.nama];
    } else {
      alert(`Konstanta untuk ${item.nama} belum tersedia! Tambahkan ke konstantaDiamagnetik.`);
      return;
    }
  }
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function hitungMedanMagnetik() {
  const M = parseFloat(document.getElementById('mass').value);
  const L = parseFloat(document.getElementById('length').value);
  const R0 = parseFloat(document.getElementById('r0').value);
  const R = parseFloat(document.getElementById('r').value);
  const Mr = parseFloat(document.getElementById('mr').value);
  const T = parseFloat(document.getElementById('temp').value);

  const Cbal = 1.1;

  const Xg = (L / M) * (Cbal * (R - R0)); //persamaan ke 1
  const Xm = Xg * Mr; //persamaan ke 2
  const XA = Xm - (jumlahXalpha * 1e6); //persamaan ke 3
  const XA_m3 = XA * 1e-6; //konversi dulu XA
  const mueff = 2.828 * Math.sqrt(XA_m3 * T); //persamaan ke 4

  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');

  document.getElementById('result').innerHTML = `
    Jumlah Xα = ${(jumlahXalpha * 1e6).toFixed(4)} cm³/mol<br><br>
    Xg = ${Xg.toFixed(4)} cm³/g<br>
    Xm = ${Xm.toFixed(4)} cm³/mol<br>
    XA = ${XA.toFixed(4)} cm³/mol<br><br>
    <strong>μ<sub>eff</sub> = ${mueff.toFixed(3)} µ<sub>B</sub></strong>
  `;
}

function resetKalkulator() {
  items = [];
  jumlahXalpha = 0;
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  document.getElementById('daftarItem').innerHTML = '';
  document.getElementById('namaItem').value = '';
  document.getElementById('jumlahItem').value = '';
}
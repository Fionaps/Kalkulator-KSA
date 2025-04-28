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
  "Cl-": -23.6e-6
  // selanjutnya dari tabel
};

function updateStepIndicator(step) {
    const steps = document.querySelectorAll('.step');
    const lines = document.querySelectorAll('.step-line');
    
    steps.forEach((s, i) => {
      s.classList.toggle('active', i < step);
    });
    
    lines.forEach((l, i) => {
      l.classList.toggle('active', i < step - 1);
    });
}
  
function tambahItem() {
    const nama = document.getElementById('namaItem').value.trim();
    const tipe = document.getElementById('tipeItem').value;
    const jumlah = parseFloat(document.getElementById('jumlahItem').value);
  
    if (nama && jumlah > 0) {
      items.push({ nama, tipe, jumlah });
      tampilkanItem();
      document.getElementById('namaItem').value = '';
      document.getElementById('jumlahItem').value = '';
      document.getElementById('namaItem').focus();
    } else {
      alert('Harap isi nama dan jumlah dengan benar!');
    }
}
  
function hapusItem(index) {
    items.splice(index, 1);
    tampilkanItem();
}
  
function tampilkanItem() {
    const daftar = document.getElementById('daftarItem');
    
    if (items.length === 0) {
      daftar.innerHTML = '<div class="empty-state">Belum ada item yang ditambahkan</div>';
      return;
    }
    
    daftar.innerHTML = items.map((item, index) => `
      <div class="item-entry">
        <span>${item.jumlah} × ${item.nama} (${item.tipe === 'elemen' ? 'Elemen' : 'Ligan'})</span>
        <button class="delete-btn" onclick="hapusItem(${index})" title="Hapus item">×</button>
      </div>
    `).join('');
}
  
function lanjutKeStep2() {
    if (items.length === 0) {
      alert('Harap tambahkan minimal satu item terlebih dahulu!');
      return;
    }
    
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
    updateStepIndicator(2);
}
  
function kembaliKeStep1() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
    updateStepIndicator(1);
}
  
function hitungMedanMagnetik() {
    const M = parseFloat(document.getElementById('mass').value);
    const L = parseFloat(document.getElementById('length').value);
    const R0 = parseFloat(document.getElementById('r0').value);
    const R = parseFloat(document.getElementById('r').value);
    const Mr = parseFloat(document.getElementById('mr').value);
    const T = parseFloat(document.getElementById('temp').value);
  
    if (!M || !L || !R0 || !R || !Mr || !T) {
      alert('Harap isi semua field dengan benar!');
      return;
    }
  
    const Cbal = 1.1;
  
    const Xg = (L / M) * (Cbal * (R - R0));
    const Xm = Xg * Mr;
    const XA = Xm - (jumlahXalpha * 1e6);
    const XA_m3 = XA * 1e-6;
    const mueff = 2.828 * Math.sqrt(XA_m3 * T);
  
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
    updateStepIndicator(3);
  
    document.getElementById('resultXalpha').textContent = `${(jumlahXalpha * 1e6).toFixed(4)} cm³/mol`;
    document.getElementById('resultXg').textContent = `${Xg.toFixed(4)} cm³/g`;
    document.getElementById('resultXm').textContent = `${Xm.toFixed(4)} cm³/mol`;
    document.getElementById('resultXA').textContent = `${XA.toFixed(4)} cm³/mol`;
    document.getElementById('resultMueff').innerHTML = `${mueff.toFixed(3)} µ<sub>B</sub>`;
}
  
function resetKalkulator() {
    items = [];
    jumlahXalpha = 0;
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
    updateStepIndicator(1);
    document.getElementById('daftarItem').innerHTML = '<div class="empty-state">Belum ada item yang ditambahkan</div>';
    
    // Reset all form fields
    document.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
}
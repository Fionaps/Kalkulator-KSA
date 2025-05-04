let items = [];
let jumlahXalpha = 0;

const konstantaDiamagnetik = {
  "Ag": -31.0e-6,
  "Al": -13.0e-6,
  "As(III)": -20.9e-6,
  "As(V)": -43.0e-6,
  "B": -7.0e-6,
  "Bi": -192.0e-6,
  "Br": -30.6e-6,
  "C": -6.00e-6,
  "C (ring)": -6.24e-6,
  "Co": -15.9e-6,
  "Cl": -20.1e-6,
  "F": -6.3e-6,
  "H": -2.93e-6,
  "Hg(III)": -33.0e-6,
  "I": -44.6e-6,
  "K": -18.5e-6,
  "Li": -4.2e-6,
  "Mg": -10.0e-6,
  "N (ring)": -4.61e-6,
  "N (open chain)": -5.57e-6,
  "Na": -9.2e-6,
  "O": -4.6e-6,
  "P": -26.3e-6,
  "S": -15.0e-6,
  "Sb(III)": -74.0e-6,
  "Se": -23.0e-6,
  "Si": -13e-6,
  "Sn(IV)": -30e-6,
  "Te": -37.3e-6,
  "Ti(II)": -40.0e-6,
  "Zn": -13.5e-6,
  "Ag+": -28e-6,
  "Ag2+": -24e-6,
  "Al3+": -2e-6,
  "As3+": -9e-6,
  "As5+": -6e-6,
  "Au+": -40e-6,
  "Au3+": -32e-6,
  "B3+": -0.2e-6,
  "Ba2+": -26.5e-6,
  "Be2+": -0.4e-6,
  "Bi3+": -25e-6,
  "Bi5+": -23e-6,
  "Br6+": -6e-6,
  "C4+": -0.1e-6,
  "Cd2+": -24e-6,
  "Ce3+": -20e-6,
  "Ce4+": -17e-6,
  "Cl5+": -2e-6,
  "Co2+": -12e-6,
  "Co3+": -10e-6,
  "Cr2+": -15e-6,
  "Cr3+": -11e-6,
  "Cr4+": -8e-6,
  "Cr5+": -5e-6,
  "Cr6+": -3e-6,
  "Cs+": -35.0e-6,
  "Cu+": -12e-6,
  "Cu2+": -11e-6,
  "Dy3+": -19e-6,
  "Er3+": -18e-6,
  "Eu2+": -22e-6,
  "Eu3+": -20e-6,
  "Fe2+": -13e-6,
  "Fe3+": -10e-6,
  "Ga3+": -8e-6,
  "Gd3+": -20e-6,
  "Ge4+": -7e-6,
  "H+": 0,
  "Hf4+": -16e-6,
  "Hg2+": -40.0e-6,
  "Ho3+": -19e-6,
  "I5+": -12e-6,
  "I7+": -10e-6,
  "In3+": -19e-6,
  "Ir+": -50e-6,
  "Ir2+": -42e-6,
  "Ir3+": -35e-6,
  "Ir4+": -29e-6,
  "Ir5+": -20e-6,
  "K+": -14.9e-6,
  "La3+": -20e-6,
  "Li+": -1.0e-6,
  "Lu3+": -17e-6,
  "Mg2+": -5.0e-6,
  "Mn2+": -14e-6,
  "Mn3+": -10e-6,
  "Mn4+": -8e-6,
  "Mn6+": -4e-6,
  "Mn7+": -3e-6,
  "Mo2+": -31e-6,
  "Mo3+": -23e-6,
  "Mo4+": -17e-6,
  "Mo5+": -12e-6,
  "Mo6+": -7e-6,
  "N5+": -0.1e-6,
  "NH4+": -13.3e-6,
  "Na+": -6.8e-6,
  "Nb5+": -9e-6,
  "Nd3+": -20e-6,
  "Ni2+": -12e-6,
  "Os2+": -44e-6,
  "Os3+": -36e-6,
  "Os4+": -29e-6,
  "Os6+": -18e-6,
  "Os8+": -11e-6,
  "P3+": -4e-6,
  "P5+": -1e-6,
  "Pb2+": -32.0e-6,
  "Pb4+": -26e-6,
  "Pd2+": -25e-6,
  "Pd4+": -18e-6,
  "Pm3+": -27e-6,
  "Pr3+": -20e-6,
  "Pr4+": -18e-6,
  "Pt2+": -40e-6,
  "Pt3+": -33e-6,
  "Pt4+": -28e-6,
  "Rb+": -22.5e-6,
  "Re3+": -36e-6,
  "Re4+": -28e-6,
  "Re6+": -16e-6,
  "Re7+": -12e-6,
  "Rh3+": -22e-6,
  "Rh4+": -18e-6,
  "Ru3+": -23e-6,
  "Ru4+": -18e-6,
  "S4+": -3e-6,
  "S6+": -1e-6,
  "Sb3+": -17e-6,
  "Sb5+": -14e-6,
  "Sc3+": -6e-6,
  "Se4+": -8e-6,
  "Se6+": -5e-6,
  "Si4+": -1e-6,
  "Sm2+": -23e-6,
  "Sm3+": -20e-6,
  "Sn2+": -20e-6,
  "Sn4+": -16e-6,
  "Sr2+": -19.0e-6,
  "Tb3+": -19e-6,
  "Tb4+": -17e-6,
  "Te4+": -14e-6,
  "Te5+": -14e-6,
  "Te6+": -12e-6,
  "Th4+": -23e-6,
  "Ti3+": -9e-6,
  "Ti4+": -5e-6,
  "Tl+": -35.7e-6,
  "Tl3+": -31e-6,
  "Tm3+": -18e-6,
  "U3+": -46e-6,
  "U4+": -35e-6,
  "U5+": -26e-6,
  "U6+": -19e-6,
  "V2+": -15e-6,
  "V3+": -10e-6,
  "V4+": -7e-6,
  "V5+": -4e-6,
  "VO2+": -12.5e-6,
  "W2+": -41e-6,
  "W3+": -36e-6,
  "W4+": -23e-6,
  "W5+": -19e-6,
  "W6+": -13e-6,
  "Y3+": -12e-6,
  "Yb2+": -20e-6,
  "Yb3+": -18e-6,
  "Zn2+": -15.0e-6,
  "Zr4+": -10e-6,
  "AsO3-": -51e-6,
  "AsO4-": -60e-6,
  "BF4-": -37e-6,
  "BO3-": -35e-6,
  "Br-": -34.6e-6,
  "BrO3-": -40e-6,
  "C6H5-": -65e-6,
  "C6H5COO-": -71e-6,
  "Cl-": -23.4e-6,
  "ClO3-": -30.2e-6,
  "ClO4-": -32.0e-6,
  "CN-": -13.0e-6,
  "CO32-": -28.0e-6,
  "C2O42-": -34e-6,
  "F-": -9.1e-6,
  "HCOO-": -17e-6,
  "I-": -50.6e-6,
  "IO3-": -51e-6,
  "IO4-": -51.9e-6,
  "NCO-": -23e-6,
  "NCS-": -31.0e-6,
  "NO2-": -10.0e-6,
  "NO3-": -18.9e-6,
  "O2-": -12.0e-6,
  "OAc-": -31.5e-6,
  "OH-": -12.0e-6,
  "PO3-": -42e-6,
  "PtCl6-": -148e-6,
  "S2-": -30e-6,
  "SO3-": -38e-6,
  "SO4-": -40.1e-6,
  "S2O3-": -46e-6,
  "S2O4-": -78e-6,
  "HSO4-": -35.0e-6,
  "Se2-": -48e-6,
  "SeO3-": -44e-6,
  "SeO4-": -51e-6,
  "SiO3-": -36e-6,
  "Te2-": -70e-6,
  "TeO3-": -63e-6,
  "TeO4-": -55e-6,
  "Acac-": -52e-6,
  "Bipy": -105e-6,
  "CO": -10e-6,
  "C5H5-": -65e-6,
  "En": -46.5e-6,
  "Ethylene": -15e-6,
  "Glycinate": -37e-6,
  "H2O": -13e-6,
  "Hydrazine": -20e-6,
  "NH3": -18e-6,
  "Phen": -128e-6,
  "oPBMA": -194e-6,
  "Phthalocyanine": -442e-6,
  "PPh3": -167e-6,
  "Pyrazine": -50e-6,
  "Pyridine": -49e-6,
  "Salen2-": -182e-6,
  "Urea": -34e-6,
  "CCl4": -66.8e-6,
  "CHCl3": -58.9e-6,
  "CH2Cl2": -46.6e-6,
  "CH3Cl": -32.0e-6,
  "CH3NO2": -21.0e-6,
  "CH3OH": -21.4e-6,
  "CCl3COOH": -73.0e-6,
  "CF3COOH": -43.3e-6,
  "CH3CN": -27.8e-6,
  "1,2-C2H4Cl2": -59.6e-6,
  "CH3COOH": -31.8e-6,
  "CH3CH2OH": -33.7e-6,
  "HOCH2CH2OH": -38.9e-6,
  "CH3CH2SH": -44.9e-6,
  "CH3COCH3": -33.8e-6,
  "CH3COOCH3": -52.8e-6,
  "CH3COCH2CH3": -54.1e-6,
  "CH3CH2CH2CN": -50.4e-6,
  "CH3CH2CH2CH2OH": -56.4e-6,
  "CH3CH2OCH2CH3": -55.5e-6,
  "Cyclohexane": -68e-6,
  "Dioxane": +5.5e-6,
  "Furan": -2.5e-6,
  "Hexane": -74.1e-6,
  "Pentane": -61.5e-6,
  "oDichlorobenzene": -84.4e-6,
  "Benzene": -54.8e-6,
  "Triethylamine": -83.3e-6,
  "Toluene": -65.6e-6,
  "Isocetone": -99.1e-6,
  "Naphthalene": -91.6e-6,
  "Benzonitrile": -65.2e-6
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
    const calibration_const = 1e6; 

    const Xg = (Cbal * (R - R0) * L) / (M * calibration_const); 
    const Xm = Mr * Xg;
    const XA = (Xm - (jumlahXalpha * 1e6)) * 1e-6; // Konversi ke m³/mol
    const mueff = 2.828 * Math.sqrt(XA * T);
  
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
    updateStepIndicator(3);
  
    document.getElementById('resultXalpha').textContent = `${(jumlahXalpha * 1e6).toFixed(4)} cm³/mol`;
    document.getElementById('resultXg').textContent = `${Xg.toFixed(4)} cm³/g`;
    document.getElementById('resultXm').textContent = `${Xm.toFixed(4)} cm³/mol`;
    document.getElementById('resultXA').textContent = `${XA.toFixed(4)} m³/mol`;
    document.getElementById('resultMueff').innerHTML = `${mueff.toFixed(3)} BM`;
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

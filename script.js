// inisialisasi variabel
let clicks = 0;
let multiplier = 1;
let autoClicker = 0;
let autoClickerInterval;
let upgrade = 1;


// mendapatkan elemen-elemen HTML yang dibutuhkan
const clickgedung = document.getElementById("gedungs");
const clicksSpan = document.getElementById("clicks");

const multiplyButton = document.getElementById("multiplyButton");
const multiplierSpan = document.getElementById("multiplier");

const autoClickerButton = document.getElementById("autoClickerButton");
const autoClickerSpan = document.getElementById("autoClicker");

const upgradeButton = document.getElementById("upgradeButton");
const upgradeSpan = document.getElementById("upgrade");

const keteranganDiv = document.getElementById("keterangan");
keteranganDiv.textContent = `coin/click : ${multiplier * upgrade}`;

// event listener untuk tombol click
clickgedung.addEventListener("click", clickHandler);

// event listener untuk tombol multiply
multiplyButton.addEventListener("click", multiplyHandler);

// event listener untuk tombol auto clicker
autoClickerButton.addEventListener("click", autoClickerHandler);

// event listener untuk tombol upgrade
upgradeButton.addEventListener("click", upgradeHandler);

// event listener untuk keypress event pada document object
document.addEventListener("keypress", keyPressHandler);

// fungsi yang dipanggil ketika terjadi keypress event pada document object
function keyPressHandler(event) {
  // jika tombol yang ditekan adalah spacebar
  if (event.code === "Space") {
    clickHandler();
  }
}

document.getElementById("closeshop").addEventListener("click", function() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("showshop").style.display = "block";
})

document.getElementById("showshop").addEventListener("click", function() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("showshop").style.display = "none";
});

function updateKeterangan() {
    keteranganDiv.textContent = `coin/click : ${multiplier * upgrade}`;
}

// fungsi yang dipanggil ketika tombol click ditekan
// fungsi yang dipanggil ketika tombol click ditekan
function clickHandler() {
    clicks += multiplier * upgrade;
    clicksSpan.textContent = clicks;
    if(autoClicker == 0){
      setTimeout(function() {
        document.getElementById("tamu").style.display = "none";
      }, 1000);
      document.getElementById("tamu").style.display = "block";
    }
}
  

// fungsi yang dipanggil ketika tombol multiply ditekan
function multiplyHandler() {
  if (clicks >= 40 * 5 * multiplier) {
    clicks -= 40 * 5 * multiplier;
    clicksSpan.textContent = clicks;
    multiplier += 1;
    multiplierSpan.textContent = multiplier;
    if(multiplier == 5){
      document.getElementById("multiplycontent").style.display = "none";
    }
    multiplyButton.textContent = `${40 * 5 * multiplier} $`;
    if (multiplier == 2){
      document.getElementById("gedunglt2").style.display = "block";
    } 
    if (multiplier == 3){
      document.getElementById("gedunglt3").style.display = "block";
    } 
    if (multiplier == 4){
      document.getElementById("gedunglt4").style.display = "block";
    }
    if (multiplier == 5){
      document.getElementById("gedunglt5").style.display = "block";
    }
    // meng-update nilai di dalam elemen keterangan
    updateKeterangan();
  } else {
    alert("Uang tidak cukup!");
  }
}

// fungsi yang dipanggil ketika tombol auto clicker ditekan
function autoClickerHandler() {
  if (clicks >= 50 * 3 * (autoClicker + 1)) {
    clicks -= 50 * 3 * (autoClicker + 1);
    clicksSpan.textContent = clicks;
    autoClicker += 1;
    autoClickerSpan.textContent = autoClicker;
    autoClickerButton.textContent = `${50 * 3 *(autoClicker + 1)} $`;
    if (autoClickerInterval == null) {
      autoClickerInterval = setInterval(() => {
        clicks += autoClicker * multiplier * upgrade;
        clicksSpan.textContent = clicks;
      }, 1000);
    }
    if(autoClicker == 5){
      document.getElementById("autoclickercontent").style.display = "none";
    }
    if(autoClicker > 0){
      document.getElementById("tamu").style.display = "block";
    }
    if (autoClicker == 2){
      document.getElementById("upgradetamu").innerHTML = "tamu3";
      document.getElementById("tamu").innerHTML = "tamu2";
    } 
    if (autoClicker == 3){
      document.getElementById("upgradetamu").innerHTML = "tamu4";
      document.getElementById("tamu").innerHTML = "tamu3";
    } 
    if (autoClicker == 4){
      document.getElementById("upgradetamu").innerHTML = "tamu5";
      document.getElementById("tamu").innerHTML = "tamu4";
    }
    if (autoClicker == 5){
      document.getElementById("tamu").innerHTML = "tamu5";
    }
  } else {
    alert("Uang tidak cukup!");
  }
}

// fungsi yang dipanggil ketika tombol upgrade ditekan
function upgradeHandler() {
    if (clicks >= 15 * 3 * upgrade) {
      clicks -= 15 * 3 * upgrade;
      clicksSpan.textContent = clicks;
      upgrade += 1;
      upgradeSpan.textContent = upgrade;
      upgradeButton.textContent = `${15 * 3 * upgrade} $`;
      if(upgrade == 5){
        document.getElementById("upgradescontent").style.display = "none";
      }
      if (upgrade == 2){
        document.getElementById("upgradegedung").innerHTML = "gedunglv3";
        document.getElementById("gedunglt1").innerHTML = "lobbylv2";
        document.getElementById("gedunglt2").innerHTML = "gedunglv2";
        document.getElementById("gedunglt3").innerHTML = "gedunglv2";
        document.getElementById("gedunglt4").innerHTML = "gedunglv2";
        document.getElementById("gedunglt5").innerHTML = "rooftoplv2";
      } 
      if (upgrade == 3){
        document.getElementById("upgradegedung").innerHTML = "gedunglv4";
        document.getElementById("gedunglt1").innerHTML = "lobbylv3";
        document.getElementById("gedunglt2").innerHTML = "gedunglv3";
        document.getElementById("gedunglt3").innerHTML = "gedunglv3";
        document.getElementById("gedunglt4").innerHTML = "gedunglv3";
        document.getElementById("gedunglt5").innerHTML = "rooftoplv3";
      } 
      if (upgrade == 4){
        document.getElementById("upgradegedung").innerHTML = "gedunglv5";
        document.getElementById("gedunglt1").innerHTML = "lobbylv4";
        document.getElementById("gedunglt2").innerHTML = "gedunglv4";
        document.getElementById("gedunglt3").innerHTML = "gedunglv4";
        document.getElementById("gedunglt4").innerHTML = "gedunglv4";
        document.getElementById("gedunglt5").innerHTML = "rooftoplv4";
      }
      if (upgrade == 5){
        document.getElementById("gedunglt1").innerHTML = "lobbylv5";
        document.getElementById("gedunglt2").innerHTML = "gedunglv5";
        document.getElementById("gedunglt3").innerHTML = "gedunglv5";
        document.getElementById("gedunglt4").innerHTML = "gedunglv5";
        document.getElementById("gedunglt5").innerHTML = "rooftoplv5";
      }
      // meng-update nilai di dalam elemen keterangan
      updateKeterangan();
    } else {
      alert("Uang tidak cukup!");
    }
  }

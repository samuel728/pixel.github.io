window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

		// Get all buttons on the page
		var buttons = document.querySelectorAll('button');
		
		// Add event listener to each button to deselect it after click
		buttons.forEach(function(button) {
			button.addEventListener('click', function() {
				this.blur(); // Deselect the button
			});
		});

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
keteranganDiv.textContent = `Coin per Click : ${multiplier * upgrade}`;

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
    keteranganDiv.textContent = `Coin per Click : ${multiplier * upgrade}`;
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
      document.getElementById("multiplyButton").style.display = "none";
    }
    multiplyButton.innerHTML = `${40 * 5 * multiplier} <img src="asset/coin.png" style="height: 10px;">`;
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
    autoClickerButton.innerHTML = `${50 * 3 *(autoClicker + 1)} <img src="asset/coin.png" style="height: 10px;">`;
    if (autoClickerInterval == null) {
      autoClickerInterval = setInterval(() => {
        clicks += autoClicker * multiplier * upgrade;
        clicksSpan.textContent = clicks;
      }, 1000);
    }
    if(autoClicker == 5){
      document.getElementById("autoClickerButton").style.display = "none";
    }
    if(autoClicker > 0){
      document.getElementById("tamu").style.display = "block";
    }
    if (autoClicker == 2){
      document.getElementById("upgradetamu").innerHTML = "<img src='asset/3p.gif' style='width: 50px;'>";
      document.getElementById("tamu").innerHTML = "<img src='asset/2p.gif' style='width: 50px;'>";
      document.getElementById("tamu").style.display = "block";
    } 
    if (autoClicker == 3){
      document.getElementById("upgradetamu").innerHTML = "<img src='asset/4p.gif' style='width: 50px;'>";
      document.getElementById("tamu").innerHTML = "<img src='asset/3p.gif' style='width: 50px;'>";
    } 
    if (autoClicker == 4){
      document.getElementById("upgradetamu").innerHTML = "<img src='asset/5p.gif' style='width: 50px;'>";
      document.getElementById("tamu").innerHTML = "<img src='asset/4p.gif' style='width: 50px;'>";
    }
    if (autoClicker == 5){
      document.getElementById("upgradetamu").innerHTML = "<img src='asset/3p.gif' style='width: 50px;'>";
      document.getElementById("tamu").innerHTML = "<img src='asset/5p.gif' style='width: 50px;'>";
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
      upgradeButton.innerHTML = `${15 * 3 * upgrade} <img src="asset/coin.png" style="height: 10px;">`;
      if(upgrade == 5){
        document.getElementById("upgradeButton").style.display = "none";
      }
      if (upgrade == 2){
        document.getElementById("upgradegedung").innerHTML = "<img src='asset/lv3lt1.png' style='width:100px; margin-bottom: 10px;'>";
        document.getElementById("gedunglt1").innerHTML = "<img src='asset/lv2lt1.png' style='width:150px;'>"; //lobbylv2
        document.getElementById("gedunglt2").innerHTML = "<img src='asset/lv2lt2.png' style='width:150px;'>"; //gedlv2
        document.getElementById("gedunglt3").innerHTML = "<img src='asset/lv2lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt4").innerHTML = "<img src='asset/lv2lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt5").innerHTML = "<img src='asset/lv2lt2.png' style='width:150px;'>";
        document.getElementById("rooftop").innerHTML = "<img src='asset/lv2r.png' style='width:150px;'>";
      } 
      if (upgrade == 3){
        document.getElementById("upgradegedung").innerHTML = "<img src='asset/lv4lt1.png' style='width:100px; margin-bottom: 10px;'>";
        document.getElementById("gedunglt1").innerHTML = "<img src='asset/lv3lt1.png' style='width:150px;'>";
        document.getElementById("gedunglt2").innerHTML = "<img src='asset/lv3lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt3").innerHTML = "<img src='asset/lv3lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt4").innerHTML = "<img src='asset/lv3lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt5").innerHTML = "<img src='asset/lv3lt2.png' style='width:150px;'>";
        document.getElementById("rooftop").innerHTML = "<img src='asset/lv3r.png' style='width:150px;'>";
      } 
      if (upgrade == 4){
        document.getElementById("upgradegedung").innerHTML = "<img src='asset/lv5lt1.png' style='width:100px; margin-bottom: 10px;'>";
        document.getElementById("gedunglt1").innerHTML = "<img src='asset/lv4lt1.png' style='width:150px;'>";
        document.getElementById("gedunglt2").innerHTML = "<img src='asset/lv4lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt3").innerHTML = "<img src='asset/lv4lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt4").innerHTML = "<img src='asset/lv4lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt5").innerHTML = "<img src='asset/lv4lt2.png' style='width:150px;'>";
        document.getElementById("rooftop").innerHTML = "<img src='asset/lv4r.png' style='width:150px;'>";
      }
      if (upgrade == 5){
        document.getElementById("upgradegedung").innerHTML = "MAX";
        document.getElementById("gedunglt1").innerHTML = "<img src='asset/lv5lt1.png' style='width:150px;'>";
        document.getElementById("gedunglt2").innerHTML = "<img src='asset/lv5lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt3").innerHTML = "<img src='asset/lv5lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt4").innerHTML = "<img src='asset/lv5lt2.png' style='width:150px;'>";
        document.getElementById("gedunglt5").innerHTML = "<img src='asset/lv5lt2.png' style='width:150px;'>";
        document.getElementById("rooftop").innerHTML = "<img src='asset/lv5r.png' style='width:150px;'>";
      }
      // meng-update nilai di dalam elemen keterangan
      updateKeterangan();
    } else {
      alert("Uang tidak cukup!");
    }
  }
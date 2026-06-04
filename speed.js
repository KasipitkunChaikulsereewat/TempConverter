import { toMeter, fromMeter } from './length.js';
import { toSeconds, fromSeconds } from './time.js';

let speedInputSI = document.getElementById('speedFormContainerInput1');
let speedInputTime = document.getElementById('speedFormContainerInput2');
let speedDistanceunitFrom = document.getElementById('speedFormContainerDistanceUnitFrom');
let speedTimeunitFrom = document.getElementById('speedFormContainerTimeUnitFrom');
let speedDistanceunitTo = document.getElementById('speedFormContainerDistanceUnitTo');
let speedTimeunitTo = document.getElementById('speedFormContainerTimeUnitTo');
let speedResultSI = document.getElementById('speedFormContainerResult');
let speedConvertBtn = document.getElementById('speedFormContainerConvertBtn');

function toScientific(num) {
    return num.toExponential(2);
}

var clickSound1 = document.getElementById('click-sound');

function playClickSoundKita() {
    clickSound1.currentTime = 0;
    clickSound1.play();
}

var clickSound2 = document.getElementById('click-sound-clear');

function playClickSoundClear() {
    clickSound2.currentTime = 0;
    clickSound2.play();
}

let speedSciNotation = document.getElementById('speedFormContainerSciNotation');

speedConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val1 = Number(speedInputSI.value);
    if (isNaN(val1) || speedInputSI.value === '') {
        speedResultSI.textContent = 'Please Enter a number';
        return;
    }
    const val2 = Number(speedInputTime.value);
    if (isNaN(val2) || speedInputTime.value === '') {
        speedResultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = toMeter(val1, speedDistanceunitFrom.value);
    const seconds = toSeconds(val2, speedTimeunitFrom.value);
    const outMeters = fromMeter(meters, speedDistanceunitTo.value);
    const outSeconds = fromSeconds(seconds, speedTimeunitTo.value);
    const out = outMeters / outSeconds;
    if (speedSciNotation.checked) {
        speedResultSI.textContent = toScientific(out) + ' ' + speedDistanceunitTo.value + '/' + speedTimeunitTo.value;
    } else {
        speedResultSI.textContent = out.toFixed(4) + ' ' + speedDistanceunitTo.value + '/' + speedTimeunitTo.value;
    }
});

let speedClearBtn = document.getElementById('speedFormContainerClearBtn');

speedClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    speedInputSI.value = '';
    speedInputTime.value = '';
    speedDistanceunitFrom.value = '';
    speedTimeunitFrom.value = '';
    speedDistanceunitTo.value = '';
    speedTimeunitTo.value = '';
    speedResultSI.textContent = 'select a unit';
});

// Dropdown functionality

/*function toggleDropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#searchInput')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterFunction() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const div = document.getElementById("mydropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
    }
  }
}

// Expose to global scope for HTML event handlers
window.filterFunction = filterFunction;

document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);*/
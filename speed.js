import { toMeter, fromMeter } from './length.js';
import { toSeconds, fromSeconds } from './time.js';

const inputSI = document.getElementById('input1');
const inputTime = document.getElementById('input2');
const distanceunitFrom = document.getElementById('distanceunitFrom');
const timeunitFrom = document.getElementById('timeunitFrom');
const distanceunitTo = document.getElementById('distanceunitTo');
const timeunitTo = document.getElementById('timeunitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

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

const sciNotationCheckbox = document.getElementById('sciNotation');

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val1 = Number(inputSI.value);
    if (isNaN(val1) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const val2 = Number(inputTime.value);
    if (isNaN(val2) || inputTime.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = toMeter(val1, distanceunitFrom.value);
    const seconds = toSeconds(val2, timeunitFrom.value);
    const outMeters = fromMeter(meters, distanceunitTo.value);
    const outSeconds = fromSeconds(seconds, timeunitTo.value);
    const out = outMeters / outSeconds;
    if (sciNotationCheckbox.checked) {
        resultSI.textContent = toScientific(out) + ' ' + distanceunitTo.value + '/' + timeunitTo.value;
    } else {
        resultSI.textContent = out.toFixed(4) + ' ' + distanceunitTo.value + '/' + timeunitTo.value;
    }
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    inputSI.value = '';
    inputTime.value = '';
    distanceunitFrom.value = '';
    timeunitFrom.value = '';
    distanceunitTo.value = '';
    timeunitTo.value = '';
    resultSI.textContent = 'select a unit';
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
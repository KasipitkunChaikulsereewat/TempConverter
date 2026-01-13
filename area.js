
const inputSI = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

const toSqMeter = (value, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case 'nm^2' : return value / 1e+18;
        case 'um^2' : return value / 1e+12;
        case 'mm^2' : return value / 1e+6;
        case 'cm^2' : return value / 10000;
        case 'in^2' : return value * 0.00064516;
        case 'ft^2' : return value * 0.092903;
        case 'yd^2' : return value * 0.836127;
        case 'm^2' : return value;
        case 'km^2' : return value * 1e+6;
        case 'mi^2' : return value * 2.59e+6;
        case 'ac' : return value * 4046.86;
        case 'ha' : return value * 10000;
        case 'tr. wa' : return value * 4;
        case 'rai' : return value * 1600;
        default: return "Please select a unit";
    }
}

const fromSqMeter = (meters, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case "nm^2": return meters * 1e+18;
        case 'um^2': return meters * 1e+12;
        case 'mm^2': return meters * 1e+6;
        case 'cm^2': return meters * 10000;
        case 'in^2': return meters / 0.00064516;
        case 'ft^2': return meters / 0.092903;
        case 'yd^2': return meters / 0.836127;
        case 'm^2': return meters;
        case 'km^2': return meters / 1000000;
        case 'mi^2': return meters / 2590000;
        case 'ac': return meters / 4046.86;
        case 'ha': return meters / 10000;
        case 'tr. wa': return meters / 4;
        case 'rai': return meters / 1600;
        default: return "Please select a unit";
    }
}

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
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = toSqMeter(val, unitFrom.value);
    const out = fromSqMeter(meters, unitTo.value);
    if (sciNotationCheckbox.checked) {
        resultSI.textContent = toScientific(out) + ' ' + unitTo.value;
    } else {
        resultSI.textContent = out.toFixed(4) + ' ' + unitTo.value;
    }
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    inputSI.value = '';
    unitFrom.value = '';
    unitTo.value = '';
    resultSI.textContent = 'select a unit';
});

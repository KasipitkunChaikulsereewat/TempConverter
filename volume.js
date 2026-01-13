
const inputSI = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

const toCuMeter = (value, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case 'nm^3' : return value / 1e+27;
        case 'um^3' : return value / 1e+18;
        case 'mm^3' : return value / 1e+9;
        case 'cm^3' : return value / 1e+6;
        case 'in^3' : return value * 0.0000163871;
        case 'ft^3' : return value * 0.0283168;
        case 'yd^3' : return value * 0.764555;
        case 'dm^3' : return value / 1000;
        case 'm^3' : return value;
        case 'km^3' : return value * 1e+9;
        case 'mi^3' : return value * 4.168e+9;
        case 'ug' : return value * 0.00378541;
        case 'ml' : return value / 1e+6;
        case 'l' : return value / 1000;
        case 'kgl' : return value;
        default: return "Please select a unit";
    }
}

const fromCuMeter = (meters, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case "nm^3": return meters * 1e+27;
        case 'um^3': return meters * 1e+18;
        case 'mm^3': return meters * 1e+9;
        case 'cm^3': return meters * 1e+6;
        case 'in^3': return meters / 0.0000163871;
        case 'ft^3': return meters / 0.0283168;
        case 'yd^3': return meters / 0.764555;
        case 'dm^3': return meters * 1000;
        case 'm^3': return meters;
        case 'km^3': return meters / 1e+9;
        case 'mi^3': return meters / 4.168e+9;
        case 'ug': return meters / 0.00378541;
        case 'ml': return meters * 1e+6;
        case 'l': return meters * 1000;
        case 'kgl': return meters;
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

const sciNotation = document.getElementById('sciNotation');

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = toCuMeter(val, unitFrom.value);
    const out = fromCuMeter(meters, unitTo.value);
    if (sciNotation.checked) {
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

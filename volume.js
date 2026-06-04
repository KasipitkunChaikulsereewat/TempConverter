
let volumeInputSI = document.getElementById('volumeFormContainerInput');
let volumeUnitFrom = document.getElementById('volumeFormContainerUnitFrom');
let volumeUnitTo = document.getElementById('volumeFormContainerUnitTo');
let volumeResultSI = document.getElementById('volumeFormContainerResult');
let volumeConvertBtn = document.getElementById('volumeFormContainerConvertBtn');

let volumeToCuMeter = (value, unit) => {
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

let volumeFromCuMeter = (meters, unit) => {
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

let volumeSciNotation = document.getElementById('volumeFormContainerSciNotation');

volumeConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(volumeInputSI.value);
    if (isNaN(val) || volumeInputSI.value === '') {
        volumeResultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = volumeToCuMeter(val, volumeUnitFrom.value);
    const out = volumeFromCuMeter(meters, volumeUnitTo.value);
    if (volumeSciNotation.checked) {
        volumeResultSI.textContent = toScientific(out) + ' ' + volumeUnitTo.value;
    } else {
        volumeResultSI.textContent = out.toFixed(4) + ' ' + volumeUnitTo.value;
    }
});

let volumeClearBtn = document.getElementById('volumeFormContainerClearBtn');

volumeClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    volumeInputSI.value = '';
    volumeUnitFrom.value = '';
    volumeUnitTo.value = '';
    volumeResultSI.textContent = 'select a unit';
});

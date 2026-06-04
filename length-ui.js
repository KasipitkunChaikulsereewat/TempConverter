
let lengthInputSI = document.getElementById('lengthFormContainerInput');
let lengthUnitFrom = document.getElementById('lengthFormContainerUnitFrom');
let lengthUnitTo = document.getElementById('lengthFormContainerUnitTo');
let lengthResultSI = document.getElementById('lengthFormContainerResult');
let lengthConvertBtn = document.getElementById('lengthFormContainerConvertBtn');

let lengthToMeter = (value, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case "nm": return value/1e+9;
        case 'um': return value / 1e+6;
        case 'mm': return value / 1000;
        case 'cm': return value / 100;
        case 'in': return value * 0.0254;
        case 'ft': return value * 0.3048;
        case 'yd': return value * 0.9144;
        case 'm': return value;
        case 'km': return value * 1000;
        case 'mi': return value * 1609.34;
        case 'nmi': return value * 1852;
        case "ly": return value * 9.461e+15;
        case "pc": return value * 3.086e+16;
        case "au": return value * 1.496e+11;
        default: return "Please select a unit";
    }
}

let lengthFromMeter = (meters, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case "nm": return meters * 1e+9;
        case 'um': return meters * 1e+6;
        case 'mm': return meters * 1000;
        case 'cm': return meters * 100;
        case 'in': return meters / 0.0254;
        case 'ft': return meters / 0.3048;
        case 'yd': return meters / 0.9144;
        case 'm': return meters;
        case 'km': return meters / 1000;
        case 'mi': return meters / 1609.34;
        case 'nmi': return meters / 1852;
        case "ly": return meters / 9.461e+15;
        case "pc": return meters / 3.086e+16;
        case "au": return meters / 1.496e+11;
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

let lengthSciNotation = document.getElementById('lengthFormContainerSciNotation');

lengthConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(lengthInputSI.value);
    if (isNaN(val) || lengthInputSI.value === '') {
        lengthResultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = lengthToMeter(val, lengthUnitFrom.value);
    const out = lengthFromMeter(meters, lengthUnitTo.value);
    if (lengthSciNotation.checked) {
        lengthResultSI.textContent = toScientific(out) + ' ' + lengthUnitTo.value;
    } else {
        lengthResultSI.textContent = out.toFixed(4) + ' ' + lengthUnitTo.value;
    }
});

let lengthClearBtn = document.getElementById('lengthFormContainerClearBtn');

lengthClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    lengthInputSI.value = '';
    lengthUnitFrom.value = '';
    lengthUnitTo.value = '';
    lengthResultSI.textContent = 'select a unit';
});

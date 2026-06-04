
let energyInputSI = document.getElementById('energyFormContainerInput');
let energyUnitFrom = document.getElementById('energyFormContainerUnitFrom');
let energyUnitTo = document.getElementById('energyFormContainerUnitTo');
let energyResultSI = document.getElementById('energyFormContainerResult');
let energyConvertBtn = document.getElementById('energyFormContainerConvertBtn');

function toJoule(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'J': return value;
        case 'kJ': return value * 1000;
        case 'cal': return value * 4.184;
        case 'kcal': return value * 4184;
        case 'Wh': return value * 3600;
        case 'kWh': return value * 3.6e+6;
        case 'eV': return value * 1.60218e-19;
        default: return "Please select a unit";
    }
}

function fromJoule(joules, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'J': return joules;
        case 'kJ': return joules / 1000;
        case 'cal': return joules / 4.184;
        case 'kcal': return joules / 4184;
        case 'Wh': return joules / 3600;
        case 'kWh': return joules / 3.6e+6;
        case 'eV': return joules / 1.60218e-19;
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

let energySciNotation = document.getElementById('energyFormContainerSciNotation');

energyConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(energyInputSI.value);
    if (isNaN(val) || energyInputSI.value === '') {
        energyResultSI.textContent = 'Please Enter a number';
        return;
    }
    const joules = toJoule(val, energyUnitFrom.value);
    const out = fromJoule(joules, energyUnitTo.value);
    if (energySciNotation.checked) {
        energyResultSI.textContent = toScientific(out) + ' ' + energyUnitTo.value;
    } else {
        energyResultSI.textContent = out.toFixed(4) + ' ' + energyUnitTo.value;
    }
});

let energyClearBtn = document.getElementById('energyFormContainerClearBtn');

energyClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    energyInputSI.value = '';
    energyUnitFrom.value = '';
    energyUnitTo.value = '';
    energyResultSI.textContent = 'select a unit';
});


let massInputSI = document.getElementById('massFormContainerInputSI');
let massUnitFrom = document.getElementById('massFormContainerUnitFrom');
let massUnitTo = document.getElementById('massFormContainerUnitTo');
let massResultSI = document.getElementById('massFormContainerResultSI');
let massConvertBtn = document.getElementById('massFormContainerConvertBtn');

function toGram(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ug': return value / 1e+6;
        case 'mg': return value / 1000;
        case 'g': return value;
        case 'kg': return value * 1000;
        case 'ton': return value * 1e+6;
        case 'mgton': return value * 1e+9;
        case 'ggton': return value * 1e+12;
        case 'trton': return value * 1e+15;
        default: return "Please select a unit";
    }
}

function fromGram(grams, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ug': return grams * 1e+6;
        case 'mg': return grams * 1000;
        case 'g': return grams;
        case 'kg': return grams / 1000;
        case 'ton': return grams / 1e+6;
        case 'mgton': return grams / 1e+9;
        case 'ggton': return grams / 1e+12;
        case 'trton': return grams / 1e+15;
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

let massSciNotation = document.getElementById('massFormContainerSciNotation');

massConvertBtn.addEventListener('click', function(event){

    playClickSoundKita();
    const val = Number(massInputSI.value);
    if (isNaN(val) || massInputSI.value === '') {
        massResultSI.textContent = 'Please Enter a number';
        return;
    }
    const grams = toGram(val, massUnitFrom.value);
    const out = fromGram(grams, massUnitTo.value);
    if (massSciNotation.checked) {
        massResultSI.textContent = toScientific(out) + ' ' + massUnitTo.value;
    } else {
        massResultSI.textContent = out.toFixed(4) + ' ' + massUnitTo.value;
    }
});

let massClearBtn = document.getElementById('massFormContainerClearBtn');

massClearBtn.addEventListener('click', function(event){

    playClickSoundClear();
    massInputSI.value = '';
    massUnitFrom.value = '';
    massUnitTo.value = '';
    massResultSI.textContent = 'select a unit';
});

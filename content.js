
let tempTextbox = document.getElementById("tempFormContainerInput");
let tempUnitFrom = document.getElementById("tempFormContainerUnitFrom");
let tempUnitTo = document.getElementById("tempFormContainerUnitTo");
let tempResult = document.getElementById("tempFormContainerResult");
let tempConvertBtn = document.getElementById("tempFormContainerConvertBtn");
let tempClearBtn = document.getElementById("tempFormContainerClearBtn");

function toCelsius(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case '°C': return value;
        case '°F': return (value - 32) * 5/9;
        case 'K': return value - 273.15;
        case '°R': return (value - 491.67) * 5/9;
        default: return "Please select a unit";
    }
}

function fromCelsius(celsius, unit){
    switch(unit){
        case '': return "Please select a unit";
        case '°C': return celsius;
        case '°F': return (celsius * 9/5) + 32;
        case 'K': return celsius + 273.15;
        case '°R': return (celsius + 273.15) * 9/5;
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

let tempSciNotation = document.getElementById('tempFormContainerSciNotation');

tempConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(tempTextbox.value);
    if (isNaN(val) || tempTextbox.value === '') {
        tempResult.textContent = 'Please Enter a Temperature';
        return;
    }
    const celsius = toCelsius(val, tempUnitFrom.value);
    const out = fromCelsius(celsius, tempUnitTo.value);
    
    if ((tempUnitTo.value === 'K' && out < 0) || (tempUnitTo.value === '°C' && out < -273.15) || (tempUnitTo.value === '°F' && out < -459.67) || (tempUnitTo.value === '°R' && out < 0)) {
        tempResult.textContent = 'Temperature below absolute zero!';
        return;
    }
    else{
        if (tempSciNotation.checked) {
            tempResult.textContent = toScientific(out) + ' ' + tempUnitTo.value;
        } else {
            tempResult.textContent = out.toFixed(2) + ' ' + tempUnitTo.value;
        }
    }
});

tempClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    tempTextbox.value = '';
    tempUnitFrom.value = '';
    tempUnitTo.value = '';
    tempResult.textContent = 'select a unit';
});
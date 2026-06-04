let timeInput = document.getElementById('timeFormContainerInput');
let timeUnitFrom = document.getElementById('timeFormContainerUnitFrom');
let timeUnitTo = document.getElementById('timeFormContainerUnitTo');
let timeResult = document.getElementById('timeFormContainerResult');
let timeConvertBtn = document.getElementById('timeFormContainerConvertBtn');

function toSeconds(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ms': return value / 1000;
        case 's': return value;
        case 'min': return value * 60;
        case 'hr': return value * 3600;
        case 'd': return value * 86400;
        case 'w': return value * 604800;
        case 'mth': return value * 2.592e+6;
        case 'yr': return value * 3.1536e+7;
        default: return "Please select a unit";
    }
}

function fromSeconds(seconds, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'ms': return seconds * 1000;
        case 's': return seconds;
        case 'min': return seconds / 60;
        case 'hr': return seconds / 3600;
        case 'd': return seconds / 86400;
        case 'w': return seconds / 604800;
        case 'mth': return seconds / 2.592e+6;
        case 'yr': return seconds / 3.1536e+7;
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

let timeSciNotation = document.getElementById('timeFormContainerSciNotation');

timeConvertBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();   
    const val = Number(timeInput.value);
    if (isNaN(val) || timeInput.value === '') {
        timeResult.textContent = 'Please Enter a number';
        return;
    }
    const seconds = toSeconds(val, timeUnitFrom.value);
    const out = fromSeconds(seconds, timeUnitTo.value);
    if (timeSciNotation.checked) {
        timeResult.textContent = toScientific(out) + ' ' + timeUnitTo.value;
    } else {
        timeResult.textContent = out.toFixed(4) + ' ' + timeUnitTo.value;
    }
});

let timeClearBtn = document.getElementById('timeFormContainerClearBtn');

timeClearBtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    timeInput.value = '';
    timeUnitFrom.value = '';
    timeUnitTo.value = '';
    timeResult.textContent = 'select a unit';
});

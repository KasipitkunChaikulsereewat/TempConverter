const input = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const result = document.getElementById('result');
const convertbtn = document.getElementById('convertbtn');

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

const sciNotation = document.getElementById('sciNotation');

convertbtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();   
    const val = Number(input.value);
    if (isNaN(val) || input.value === '') {
        result.textContent = 'Please Enter a number';
        return;
    }
    const seconds = toSeconds(val, unitFrom.value);
    const out = fromSeconds(seconds, unitTo.value);
    if (sciNotation.checked) {
        result.textContent = toScientific(out) + ' ' + unitTo.value;
    } else {
        result.textContent = out.toFixed(4) + ' ' + unitTo.value;
    }
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundClear();
    input.value = '';
    unitFrom.value = '';
    unitTo.value = '';
    result.textContent = 'select a unit';
});

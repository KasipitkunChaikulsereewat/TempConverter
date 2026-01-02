
const inputSI = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

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

const sciNotation = document.getElementById('sciNotation');

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const joules = toJoule(val, unitFrom.value);
    const out = fromJoule(joules, unitTo.value);
    if (sciNotation.checked) {
        resultSI.textContent = toScientific(out) + ' ' + unitTo.value;
    } else {
        resultSI.textContent = out.toFixed(4) + ' ' + unitTo.value;
    }
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    inputSI.value = '';
    unitFrom.value = '';
    unitTo.value = '';
    resultSI.textContent = 'select a unit';
});

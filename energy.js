
const inputSI = document.getElementById('inputSI');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('resultSI');
const convertbtnSI = document.getElementById('convertbtnSI');

function toJoule(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'j': return value;
        case 'kj': return value * 1000;
        case 'cal': return value * 4.184;
        case 'kcal': return value * 4184;
        case 'wh': return value * 3600;
        case 'kwh': return value * 3.6e+6;
        case 'ev': return value * 1.60218e-19;
        default: return "Please select a unit";
    }
}

function fromJoule(joules, unit){
    switch(unit){
        case '': return "Please select a unit";
        case 'j': return joules;
        case 'kj': return joules / 1000;
        case 'cal': return joules / 4.184;
        case 'kcal': return joules / 4184;
        case 'wh': return joules / 3600;
        case 'kwh': return joules / 3.6e+6;
        case 'ev': return joules / 1.60218e-19;
        default: return "Please select a unit";
    }
}

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const joules = toJoule(val, unitFrom.value);
    const out = fromJoule(joules, unitTo.value);
    resultSI.textContent = out.toFixed(3) + ' ' + unitTo.value;
});
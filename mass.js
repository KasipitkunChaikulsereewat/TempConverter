const kgTolb = document.getElementById('KgtoLb');
const lbTokg = document.getElementById('LbtoKg');
const lbTooz = document.getElementById('LbtoOz');
const ozTolb = document.getElementById('Oztolb');
const kgTooz = document.getElementById('KgtoOz');
const ozTokg = document.getElementById('Oztokg');

const textbox = document.getElementById('input');
const result = document.getElementById('result');
const sciNotationCheckbox = document.getElementById('sciNotation2');

function convertMass(event) {
    event.preventDefault(); // Prevent form submission
    playClickSoundKita();
    if (textbox.value === '' || isNaN(textbox.value)) {
        result.textContent = 'Please enter a Mass.';
        return;
    }
    else if (kgTolb.checked) {
        let mass = Number(textbox.value);
        mass = mass * 2.20462;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' lb';
        } else {
            result.textContent = mass.toFixed(2) + ' lb';
        }
    }
    else if (lbTokg.checked) {
        let mass = Number(textbox.value);
        mass = mass / 2.20462;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' kg';
        } else {
            result.textContent = mass.toFixed(2) + ' kg';
        }
    }
    else if (lbTooz.checked) {
        let mass = Number(textbox.value);
        mass = mass * 16;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' oz';
        } else {
            result.textContent = mass.toFixed(2) + ' oz';
        }
    }
    else if (ozTolb.checked) {
        let mass = Number(textbox.value);
        mass = mass / 16;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' lb';
        } else {
            result.textContent = mass.toFixed(2) + ' lb';
        }
    }
    else if (kgTooz.checked) {
        let mass = Number(textbox.value);
        mass = mass * 35.274;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' oz';
        } else {
            result.textContent = mass.toFixed(2) + ' oz';
        }
    }
    else if (ozTokg.checked) {
        let mass = Number(textbox.value);
        mass = mass / 35.274;
        if (sciNotationCheckbox.checked) {
            result.textContent = toScientific(mass) + ' kg';
        } else {
            result.textContent = mass.toFixed(2) + ' kg';
        }
    }
    
}

const convertbtn2 = document.getElementById('convertbtn2');
convertbtn2.addEventListener('click', convertMass);

const clearbtn2 = document.getElementById('clearbtn2');
clearbtn2.addEventListener('click', function() {
    playClickSoundClear();
    textbox.value = '';
    result.textContent = 'select a unit';
    document.querySelectorAll('input[name="unit"]').forEach((el) => el.checked = false);
});

const inputSI = document.getElementById('inputSI');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('resultSI');
const convertbtnSI = document.getElementById('convertbtn');

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

const sciNotation = document.getElementById('sciNotation');

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    playClickSoundKita();
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const grams = toGram(val, unitFrom.value);
    const out = fromGram(grams, unitTo.value);
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

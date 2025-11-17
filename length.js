/*const kgTolb = document.getElementById('KgtoLb');
const lbTokg = document.getElementById('LbtoKg');
const lbTooz = document.getElementById('LbtoOz');
const ozTolb = document.getElementById('Oztolb');
const kgTooz = document.getElementById('KgtoOz');
const ozTokg = document.getElementById('Oztokg');

const textbox = document.getElementById('input');
const result = document.getElementById('result');

function convertMass(event) {
    event.preventDefault(); // Prevent form submission
    if (textbox.value === '' || isNaN(textbox.value)) {
        result.textContent = 'Please enter a Mass.';
        return;
    }
    else if (kgTolb.checked) {
        let mass = Number(textbox.value);
        mass = mass * 2.20462;
        result.textContent = mass.toFixed(2) + ' lb';
    }
    else if (lbTokg.checked) {
        let mass = Number(textbox.value);
        mass = mass / 2.20462;
        result.textContent = mass.toFixed(2) + ' kg';
    }
    else if (lbTooz.checked) {
        let mass = Number(textbox.value);
        mass = mass * 16;
        result.textContent = mass.toFixed(2) + ' oz';
    }
    else if (ozTolb.checked) {
        let mass = Number(textbox.value);
        mass = mass / 16;
        result.textContent = mass.toFixed(2) + ' lb';
    }
    else if (kgTooz.checked) {
        let mass = Number(textbox.value);
        mass = mass * 35.274;
        result.textContent = mass.toFixed(2) + ' oz';
    }
    else if (ozTokg.checked) {
        let mass = Number(textbox.value);
        mass = mass / 35.274;
        result.textContent = mass.toFixed(2) + ' kg';
    }
    
}

const convertbtn = document.getElementById('convertbtn');
convertbtn.addEventListener('click', convertMass);*/

const inputSI = document.getElementById('inputSI');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('resultSI');
const convertbtnSI = document.getElementById('convertbtnSI');

function toMeter(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case "nm": return val/1e+9;
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

function fromMeter(meters, unit){
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

convertbtnSI.addEventListener('click', function(event){
    event.preventDefault();
    const val = Number(inputSI.value);
    if (isNaN(val) || inputSI.value === '') {
        resultSI.textContent = 'Please Enter a number';
        return;
    }
    const meters = toMeter(val, unitFrom.value);
    const out = fromMeter(meters, unitTo.value);
    resultSI.textContent = out.toFixed(2) + ' ' + unitTo.value;
});
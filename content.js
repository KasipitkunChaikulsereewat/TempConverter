/*const textbox = document.getElementById("input");
const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
const CtoK = document.getElementById("CtoK");
const KtoC = document.getElementById("KtoC");
const FtoK = document.getElementById("FtoK");
const KtoF = document.getElementById("KtoF");
const result = document.getElementById("result");
const convertbtn = document.getElementById("convertbtn");
let temp;

function convert(event) {
    event.preventDefault(); // Prevent form submission
    if (textbox.value === '' || isNaN(textbox.value)) {
        result.textContent = 'Please enter a Temperature.';
        return;
    }
    else if (CtoF.checked) {
        temp = Number(textbox.value);
        temp = (temp * 9/5) + 32;
        if (temp < -459.67) {
            result.textContent = 'Temperature below absolute zero!';
            return;
        }
        else{
            result.textContent = temp.toFixed(2) + ' °F';
        }
    }
    else if (FtoC.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        if (temp < -273.15) {
            result.textContent = 'Temperature below absolute zero!';
            return;
        }
        else{
            result.textContent = temp.toFixed(2) + ' °C';
        }
    } 
    else if (CtoK.checked) {
        temp = Number(textbox.value);
        temp = temp + 273.15;
        if (temp < 0) {
            result.textContent = 'Temperature below absolute zero!';
            return;
        }
        else{
            result.textContent = temp.toFixed(2) + ' K';
        }
    }
    else if (KtoC.checked) {
        temp = Number(textbox.value);
        if (temp < 0) {
            result.textContent = 'Temperature in Kelvin cannot be lower than zero!';
            return;
        }
        else {
            temp = temp - 273.15;
            result.textContent = temp.toFixed(2) + ' °C';
        }
    } 
    else if (FtoK.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9 + 273.15;
        if (temp < 0) {
            result.textContent = 'Temperature below absolute zero!';
            return;
        }
        else {
            result.textContent = temp.toFixed(2) + ' K';
        }
    } 
    else if (KtoF.checked) {
        temp = Number(textbox.value);
        if (temp < 0) {
            result.textContent = 'Temperature in Kelvin cannot be lower than zero!';
            return;
        }
        else {
            temp = (temp - 273.15) * 9/5 + 32;
            result.textContent = temp.toFixed(2) + ' °F';
        }
    }
    else {
        result.textContent = 'Please select a unit.';
    }
}

convertbtn.addEventListener("click", convert);*/

const textbox = document.getElementById("input");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const result = document.getElementById("result");
const convertbtn = document.getElementById("convertbtn");

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

convertbtn.addEventListener('click', function(event){
    event.preventDefault();
    const val = Number(textbox.value);
    if (isNaN(val) || textbox.value === '') {
        result.textContent = 'Please Enter a Temperature';
        return;
    }
    const celsius = toCelsius(val, unitFrom.value);
    const out = fromCelsius(celsius, unitTo.value);
    
    if ((unitTo.value === 'K' && out < 0) || (unitTo.value === '°C' && out < -273.15) || (unitTo.value === '°F' && out < -459.67) || (unitTo.value === '°R' && out < 0)) {
        result.textContent = 'Temperature below absolute zero!';
        return;
    }
    else{
        result.textContent = out.toFixed(2) + ' ' + unitTo.value;
    }
});

// Dropdown functionality

function toggleDropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
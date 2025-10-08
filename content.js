const textbox = document.getElementById("input");
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

convertbtn.addEventListener("click", convert);

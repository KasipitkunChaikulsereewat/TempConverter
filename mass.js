const kgTolb = document.getElementById('KgtoLb');
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
convertbtn.addEventListener('click', convertMass);
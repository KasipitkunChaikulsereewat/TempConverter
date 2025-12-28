
const inputSI = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

function toMeter(value, unit){
    switch(unit){
        case '': return "Please select a unit";
        case "nm": return value/1e+9;
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
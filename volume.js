
const inputSI = document.getElementById('input');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultSI = document.getElementById('result');
const convertbtnSI = document.getElementById('convertbtn');

const toCuMeter = (value, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case 'nm^3' : return value / 1e+27;
        case 'um^3' : return value / 1e+18;
        case 'mm^3' : return value / 1e+9;
        case 'cm^3' : return value / 1e+6;
        case 'in^3' : return value * 0.0000163871;
        case 'ft^3' : return value * 0.0283168;
        case 'yd^3' : return value * 0.764555;
        case 'dm^3' : return value / 1000;
        case 'm^3' : return value;
        case 'km^3' : return value * 1e+9;
        case 'mi^3' : return value * 4.168e+9;
        case 'ug' : return value * 0.00378541;
        case 'ml' : return value / 1e+6;
        case 'l' : return value / 1000;
        case 'kgl' : return value;
        default: return "Please select a unit";
    }
}

const fromCuMeter = (meters, unit) => {
    switch(unit){
        case '': return "Please select a unit";
        case "nm^3": return meters * 1e+27;
        case 'um^3': return meters * 1e+18;
        case 'mm^3': return meters * 1e+9;
        case 'cm^3': return meters * 1e+6;
        case 'in^3': return meters / 0.0000163871;
        case 'ft^3': return meters / 0.0283168;
        case 'yd^3': return meters / 0.764555;
        case 'dm^3': return meters * 1000;
        case 'm^3': return meters;
        case 'km^3': return meters / 1e+9;
        case 'mi^3': return meters / 4.168e+9;
        case 'ug': return meters / 0.00378541;
        case 'ml': return meters * 1e+6;
        case 'l': return meters * 1000;
        case 'kgl': return meters;
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
    const meters = toSqMeter(val, unitFrom.value);
    const out = fromSqMeter(meters, unitTo.value);
    resultSI.textContent = out.toFixed(4) + ' ' + unitTo.value;
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    inputSI.value = '';
    unitFrom.value = '';
    unitTo.value = '';
    resultSI.textContent = 'select a unit';
});

// Dropdown functionality

function toggleDropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#searchInput')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterFunction() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const div = document.getElementById("mydropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
    }
  }
}

document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
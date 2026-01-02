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

convertbtn.addEventListener('click', function(event){
    event.preventDefault();
    const val = Number(input.value);
    if (isNaN(val) || input.value === '') {
        result.textContent = 'Please Enter a number';
        return;
    }
    const seconds = toSeconds(val, unitFrom.value);
    const out = fromSeconds(seconds, unitTo.value);
    result.textContent = out.toFixed(4) + ' ' + unitTo.value;
});

const clearbtn = document.getElementById('clearbtn');

clearbtn.addEventListener('click', function(event){
    event.preventDefault();
    input.value = '';
    unitFrom.value = '';
    unitTo.value = '';
    result.textContent = 'select a unit';
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
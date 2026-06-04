
const tempBtn = document.getElementById("tempBtn");
const massBtn = document.getElementById("massBtn");
const lengthBtn = document.getElementById("lengthBtn");
const timeBtn = document.getElementById("timeBtn");
const volumeBtn = document.getElementById("volumeBtn");
const speedBtn = document.getElementById("speedBtn");
const energyBtn = document.getElementById("energyBtn");
const areaBtn = document.getElementById("areaBtn");

function showConverter(containerClass) {
    const containers = document.querySelectorAll(
    '.lengthFormContainer, .tempFormContainer, .massFormContainer, .timeFormContainer, .volumeFormContainer, .speedFormContainer, .energyFormContainer, .areaFormContainer'
    );
    containers.forEach(c => c.classList.remove('show'));

    // Show the selected container
    const selected = document.querySelector('.' + containerClass);
    if (selected) {
        selected.classList.add('show');
        document.querySelector('.docContainer').classList.add('hidden');
    }
}

// Example: Show length converter when button is clicked
document.getElementById('lengthBtn').addEventListener('click', function(event) {
showConverter('lengthFormContainer');
console.log(event);
});

document.getElementById('tempBtn').addEventListener('click', function() {
showConverter('tempFormContainer');
});

document.getElementById('massBtn').addEventListener('click', function() {
showConverter('massFormContainer');
});

document.getElementById('timeBtn').addEventListener('click', function() {
showConverter('timeFormContainer');
});

document.getElementById('volumeBtn').addEventListener('click', function() {
showConverter('volumeFormContainer');
});         

document.getElementById('speedBtn').addEventListener('click', function() {
showConverter('speedFormContainer');
});

document.getElementById('energyBtn').addEventListener('click', function() {
showConverter('energyFormContainer');
});

document.getElementById('areaBtn').addEventListener('click', function() {
showConverter('areaFormContainer');
});

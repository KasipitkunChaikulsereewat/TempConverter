// Dropdown functionality


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
    const buttons = div.getElementsByClassName("converterCollection");
    for (let i = 0; i < buttons.length; i++) {
        txtValue = buttons[i].textContent || buttons[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}

// Add click handler after DOM is ready to ensure the button exists
document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    if (dropbtn) {
        dropbtn.addEventListener('click', toggleDropdown);
    }
});
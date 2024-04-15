document.querySelector('.hamburger').addEventListener('click', function() {
    // Toggle the display property of the dropdown menu
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

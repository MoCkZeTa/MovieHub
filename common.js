let dropdownMenu = document.querySelector('.dropdown-menu');
document.querySelector('.hamburger').addEventListener('click', function() {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

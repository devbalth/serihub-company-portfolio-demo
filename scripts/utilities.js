const menu = document.querySelector('.small-menu');
const hamburger = document.querySelector('.hamburger-menu');
const links = document.querySelectorAll('.small-nav-links li a');
const year = document.querySelector('#current-year');

/* Menu */


// Small Screen Menu and Links //

hamburger.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.add('active');
});

links.forEach(link => {
    link.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.remove('active');
    });
});

/* Current Year */


let date = new Date();
let currentYear = date.getFullYear();

year.textContent = currentYear;
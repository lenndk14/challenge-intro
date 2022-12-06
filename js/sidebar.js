const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const closeIcon = document.querySelector('.close-menu');
const fade = document.querySelector('.grid');
const grayscale = document.querySelector('.hero-img--mobile', 'footer-img')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    fade.classList.toggle('active');
    grayscale.classList.toggle('active')
})

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
    fade.classList.remove('active');
    grayscale.classList.remove('active')
})
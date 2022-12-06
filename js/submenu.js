const featButton = document.querySelector('.feat-btn');
const compButton = document.querySelector('.comp-btn');
const featSubMenu = document.querySelector('.sub-menu--feat');
const compSubMenu = document.querySelector('.sub-menu--comp');
const featMenuArrow = document.querySelector('.menu-arrow--feat');
const compMenuArrow = document.querySelector('.menu-arrow--comp');

featButton.addEventListener('click', () => {
    featSubMenu.classList.toggle('active');
    featMenuArrow.classList.toggle('active');
});

compButton.addEventListener('click', () => {
    compSubMenu.classList.toggle('active');
    compMenuArrow.classList.toggle('active');
});

document.querySelectorAll('.sub-menu').forEach(n => n.addEventListener('click', () => {
    subMenu.classList.remove('active');
    menuArrow.classList.remove('active');
}));
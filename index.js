const hamburgerMenu = document.querySelector('#hamburgerMenu');
const hamburgerNav = document.querySelector('#hamburgerNav');
const body = document.querySelector('body');
let menuOn = false;
hamburgerMenu.addEventListener('click', () => {
    if(!menuOn) {
        hamburgerMenu.classList.add('open');
        menuOn = true;
        hamburgerNav.classList.add('open');
    } else {
        hamburgerMenu.classList.remove('open');
        menuOn = false;
        hamburgerNav.classList.remove('open');
    }
})

window.onresize = function() {
    if(window.innerWidth >= 1000) {
        hamburgerMenu.classList.remove('open');
        hamburgerNav.classList.remove('open');
        menuOn = false;
    }
}
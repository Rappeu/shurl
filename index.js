const hamburgerMenu = document.querySelector('#hamburgerMenu');
let menuOn = false;
hamburgerMenu.addEventListener('click', () => {
    if(!menuOn) {
        hamburgerMenu.classList.add('open');
        menuOn = true;
    } else {
        hamburgerMenu.classList.remove('open');
        menuOn = false;
    }
})
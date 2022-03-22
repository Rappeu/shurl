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
const faq = document.querySelector('.faq');
const faqX = document.querySelector('.faqX');
const faqAnswer = document.querySelector('.faqAnswer');
let faqActive = false;

faq.addEventListener('click', () => {
    if(!faqActive) {
        faqX.classList.add('open');
        faqAnswer.classList.add('open');
        faqActive = true;
    } else {
        faqX.classList.remove('open');
        faqAnswer.classList.remove('open');
        faqActive = false;
    }
})


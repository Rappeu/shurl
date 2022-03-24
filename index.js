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

const faq1 = document.querySelector('.faq1');
const faqX1 = document.querySelector('.faqX1');
const faqAnswer1 = document.querySelector('.faqAnswer1');
let faqActive1 = false;

faq1.addEventListener('click', () => {
    if(!faqActive1) {
        faqX1.classList.add('open');
        faqAnswer1.classList.add('open');
        faqActive1 = true;
    } else {
        faqX1.classList.remove('open');
        faqAnswer1.classList.remove('open');
        faqActive1 = false;
    }
})

const faq2 = document.querySelector('.faq2');
const faqX2 = document.querySelector('.faqX2');
const faqAnswer2 = document.querySelector('.faqAnswer2');
let faqActive2 = false;

faq2.addEventListener('click', () => {
    if(!faqActive2) {
        faqX2.classList.add('open');
        faqAnswer2.classList.add('open');
        faqActive2 = true;
    } else {
        faqX2.classList.remove('open');
        faqAnswer2.classList.remove('open');
        faqActive2 = false;
    }
})


const faq3 = document.querySelector('.faq3');
const faqX3 = document.querySelector('.faqX3');
const faqAnswer3 = document.querySelector('.faqAnswer3');
let faqActive3 = false;

faq3.addEventListener('click', () => {
    if(!faqActive3) {
        faqX3.classList.add('open');
        faqAnswer3.classList.add('open');
        faqActive3 = true;
    } else {
        faqX3.classList.remove('open');
        faqAnswer3.classList.remove('open');
        faqActive3 = false;
    }
})


const faq4 = document.querySelector('.faq4');
const faqX4 = document.querySelector('.faqX4');
const faqAnswer4 = document.querySelector('.faqAnswer4');
let faqActive4 = false;

faq4.addEventListener('click', () => {
    if(!faqActive4) {
        faqX4.classList.add('open');
        faqAnswer4.classList.add('open');
        faqActive4 = true;
    } else {
        faqX4.classList.remove('open');
        faqAnswer4.classList.remove('open');
        faqActive4 = false;
    }
})



const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const overlay = document?.querySelector('#overlay');

import theme from "module/header/index.js";

//const headerHeight = header.offsetHeight;
//console.log(headerHeight);
//document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {

  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
  overlay?.style.setProperty('display', 'block');

});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    overlay?.style.setProperty('display', 'none');
  });

});

overlay.addEventListener('click', () => {

  body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  overlay?.style.setProperty('display', 'none');

});

window.addEventListener("resize", () => {

  if (window.innerWidth > 1024) {

    navItems.forEach(() => {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      nav?.classList.remove('nav--visible');
      overlay?.style.setProperty('display', 'none');
    });

  }
})


let resizeTimer = null;
window.addEventListener("resize", () => {

  if (window.innerWidth <= 1024) {
    header?.classList.add("resize-animation-stopper");
  }

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    header?.classList.remove("resize-animation-stopper");
  }, 500);

});
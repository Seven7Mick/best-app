document.addEventListener('DOMContentLoaded', () => {

  const buttonScrollToDown = document.getElementById('scroll-down');
  const buttonScrollToUp = document.getElementById('scroll-up');

  const isSafari = navigator.userAgent.match(/ipad|iphone/i) || navigator.userAgent.includes("Mac");

  const header = document.querySelector('.header');
  const footerPage = document.querySelector('.footer');

  if (isSafari) {
    $('html, body').animate({
      scrollTop: footerPage.offset().bottom
    }, 1000)
  } else {
    // Scroll Down
    buttonScrollToDown.addEventListener('click', () => {
      footerPage.scrollIntoView({ behavior: "smooth" });
    })
  }

  if (isSafari) {
    $('html, body').animate({
      scrollTop: footerPage.offset().top
    }, 1000)
  } else {
    // Scroll Up
    buttonScrollToUp.addEventListener('click', () => {
      header.scrollIntoView({ behavior: "smooth" });
    })
  }

  // Menu
  const burger = header.querySelector('.header__menu-burger');
  const body = document.querySelector('body');


  const toggleMenu = () => {
    header.classList.toggle('header_menu_open');
    body.classList.toggle('body_overflow_hidden')

  };

  burger.addEventListener('click', toggleMenu)

})
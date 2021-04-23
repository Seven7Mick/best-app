document.addEventListener('DOMContentLoaded', () => {

  const buttonScrollToDown = document.getElementById('scroll-down');
  const buttonScrollToUp = document.getElementById('scroll-up');
  // Scroll Down
  buttonScrollToDown.addEventListener('click', () => {
    const footerPage = document.querySelector('.footer');
    footerPage.scrollIntoView({behavior: "smooth"});
  })
  // Scroll Up
  buttonScrollToUp.addEventListener('click', () => {
    const header = document.querySelector('.header');
    header.scrollIntoView({behavior: "smooth"});
  })
  // Menu
  const header = document.querySelector('.header');
  const burger = header.querySelector('.header__menu-burger');
  const body = document.querySelector('body');


  const toggleMenu = () => {
    header.classList.toggle('header_menu_open');
    body.classList.toggle('body_overflow_hidden')
    
  };

  burger.addEventListener ('click', toggleMenu)

})
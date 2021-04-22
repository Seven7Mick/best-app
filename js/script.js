document.addEventListener('DOMContentLoaded', () => {

  const buttonScrollToDown = document.getElementById('scroll-down');
  const buttonScrollToUp = document.getElementById('scroll-up');

  buttonScrollToDown.addEventListener('click', () => {
    const footerPage = document.querySelector('.footer');
    footerPage.scrollIntoView({behavior: "smooth"});
  })

  buttonScrollToUp.addEventListener('click', () => {
    const header = document.querySelector('.header');
    header.scrollIntoView({behavior: "smooth"});
  })

})
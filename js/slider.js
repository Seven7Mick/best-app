$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    appendDots: $('.slider-page__slider-nav'),
    variableWidth: true,
  });
});
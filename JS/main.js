const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: true,
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: true,
});
$(function () {
  $('.newsletter-parallax').parallax();
});
$(document).ready(function () {
  $(window).bind('scroll', function (e) {
    var scrolledY = $(window).scrollTop();
    $('.bgWrapper').css(
      'background-position',
      'center -' + scrolledY * 0.2 + 'px'
    );
  });
});

const hotelSlider = new Swiper('.swiper-container', {
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

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  console.log('Коик по кнопке меню');
  document
    .querySelector('.navbar-button')
    .classList.toggle('navbar-button--visible');
});

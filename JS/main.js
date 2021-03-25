$(document).ready(function () {
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
  AOS.init();
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
    console.log('Клик по кнопке меню');
    document
      .querySelector('.navbar-button')
      .classList.toggle('navbar-button--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  closeModalButton.on('click', closeModal);
  modalButton.on('click', openModal);
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) document.getElementById('modal_id').hidden = 1;
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) document.getElementById('modal1_id').hidden = 1;
});
//Маска
$(document).ready(function () {
  $('.phone').mask('+7 (000) 000-00-00');
});

// Обработка форм
$('.form').each(function () {
  $(this).validate({
    errorClass: 'invalid',
    messages: {
      name: {
        required: 'Please specify your name',
        minlength: 'At least two letters',
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
      search: {
        required: 'Please write something',
      },
      phone: {
        required: 'Phone is required',
      },
    },
  });
});

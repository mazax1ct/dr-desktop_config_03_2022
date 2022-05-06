//открытие фильтра
$(document).on('click', '.js-filter-opener', function () {
  $('.popup.is-open').scrollTop(0); //скролл к началу попапа
  setTimeout(function() {
    $('.popup.is-open').addClass('overflow');
    $('.tests-filter').addClass('is-open');
  },50);
  return false;
});

//закрытие фильтра
$(document).on('click', '.js-filter-closer', function () {
  $('.tests-filter').removeClass('is-open');
  $('.popup.is-open').removeClass('overflow');
  return false;
});


//слайдеры тестов
const testsSlider = new Swiper('.js-tests-slider', {
    loop: true,
    navigation: {
        nextEl: '#tests_1_next',
        prevEl: '#tests_1_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 12,
      }
    }
});

const testsSlider2 = new Swiper('.js-tests-slider-2', {
    loop: false,
    navigation: {
      nextEl: '#tests_2_next',
      prevEl: '#tests_2_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 12,
      }
    }
});

const testsSlider3 = new Swiper('.js-tests-slider-3', {
    loop: true,
    navigation: {
      nextEl: '#tests_3_next',
      prevEl: '#tests_3_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 12,
      }
    }
});

const testsSlider4 = new Swiper('.js-tests-slider-4', {
    loop: false,
    navigation: {
      nextEl: '#tests_4_next',
      prevEl: '#tests_4_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 12,
      }
    }
});

//переключение тестов
$(document).on('click', '.js-tests', function () {
  $('.js-tests').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tests-section').hide();
  $('.js-tests-section[data-target="'+$(this).attr("data-target")+'"]').show();

  testsSlider.update();
  testsSlider2.update();
  testsSlider3.update();
  testsSlider4.update();
  return false;
});

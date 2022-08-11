//автосаггест
$(document).on('focus', '.tests-search__input', function () {
  $(this).closest('.tests-search').find('.tests-search__dropdown').show();
  testsSlider5.update();
  testsSlider7.update();
});

//переключение настройки графиков
$(document).on('click', '.js-graphs', function () {
  $('.js-graphs').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-graphs-section').hide();
  $('.js-graphs-section[data-target="'+$(this).attr("data-target")+'"]').show();

  $('.graphs').hide();
  $('.graphs[data-target="'+$(this).attr("data-target")+'"]').show();

  testsSlider.update();
  testsSlider2.update();
  testsSlider3.update();
  testsSlider4.update();
  testsSlider6.update();
  testsSlider7.update();
  partsSlider.update();
  return false;
});

const testsSlider6 = new Swiper('.js-tests-slider-6', {
    loop: false,
    navigation: {
      nextEl: '#tests_6_next',
      prevEl: '#tests_6_prev',
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

const testsSlider7 = new Swiper('.js-tests-slider-7', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      1200: {
        spaceBetween: 12
      }
    }
});

//слайдер комплектующих
const partsSlider = new Swiper('.js-parts-slider', {
    loop: false,
    navigation: {
        nextEl: '#parts_next',
        prevEl: '#parts_prev',
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
      480: {
        slidesPerView: 3,
      },
      560: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 6,
      }
    }
});

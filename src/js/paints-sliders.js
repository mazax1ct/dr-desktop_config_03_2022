//слайдеры тестов
const paintsSlider = new Swiper('.js-paints-slider', {
    loop: true,
    navigation: {
        nextEl: '#paints_1_next',
        prevEl: '#paints_1_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10
      }
    }
});

const paintsSlider2 = new Swiper('.js-paints-slider-2', {
    loop: false,
    navigation: {
      nextEl: '#paints_2_next',
      prevEl: '#paints_2_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10
      }
    }
});

const sliderFilter = new Swiper('.js-slider-filter', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: '#slider-filter-1-next',
      prevEl: '#slider-filter-1-prev',
    },
});

const sliderFilter2 = new Swiper('.js-slider-filter-2', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: '#slider-filter-2-next',
      prevEl: '#slider-filter-2-prev',
    },
});

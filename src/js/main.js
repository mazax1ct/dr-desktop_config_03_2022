//тултипы
$(document).on('click', '.info', function () {
  if($(this).hasClass('is-open')) {
    $(this).removeClass('is-open');
  } else {
    $(this).addClass('is-open');
  }
  return false;
});

//список компонентов
$(document).on('click', '.js-components-list-opener', function () {
  $('.components-dropdown').hide();
  $('.js-components-list-opener').removeClass('is-active');

  $(this).addClass('is-active');
  $(this).closest('.components__item').find('.components-dropdown').show();

  $('.config').addClass('blur');

  tabsSlider.update();
  return false;
});

$(document).on('click', '.js-components-list-closer', function () {
  $('.components-dropdown').hide();
  $('.js-components-list-opener').removeClass('is-active');

  $('.config').removeClass('blur');
  return false;
});

//переключение разделов
$(document).on('click', '.sections__button', function () {
  $('.sections__button').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tab').hide();
  $('.js-tab[data-target="'+$(this).attr("data-target")+'"]').show();
  return false;
});

//открытие попапа
$(document).on('click', '.js-popup-opener', function () {
  var popup = $(this).attr('data-popup');
  $('.popup').hide();
  $('.' + popup).show();
  $('.popup-shade').fadeIn();
  if(popup === 'js-popup-test') {
    //обновление свайпера
    testsSlider.update();
    testsSlider2.update();
  }
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-closer', function () {
  $('.popup-shade').fadeOut();
  $('.popup').hide();
  return false;
});

//откртие фильтра
$(document).on('click', '.js-filter-opener', function () {
  $('.tests-filter').addClass('is-open');
  return false;
});

//закрытие фильтра
$(document).on('click', '.js-filter-closer', function () {
  $('.tests-filter').removeClass('is-open');
  return false;
});

const testsSlider = new Swiper('.js-tests-slider', {
    loop: true,
    navigation: {
        nextEl: '.js-tests-next',
        prevEl: '.js-tests-prev',
    },
    slidesPerView: 10,
    spaceBetween: 12
});

const testsSlider2 = new Swiper('.js-tests-slider-2', {
    loop: true,
    navigation: {
        nextEl: '.js-tests-next',
        prevEl: '.js-tests-prev',
    },
    slidesPerView: 10,
    spaceBetween: 12
});

//переключение тестов
$(document).on('click', '.js-tests', function () {
  $('.js-tests').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tests-section').hide();
  $('.js-tests-section[data-target="'+$(this).attr("data-target")+'"]').show();

  testsSlider.update();
  testsSlider2.update();
  return false;
});

const tabsSlider = new Swiper('.js-components-tabs', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

Array.from(
  document.querySelectorAll('.component '),
  function(el) {
    el.addEventListener('mousemove',function(e){
      var rect = el.getBoundingClientRect()
      el.style.setProperty('--px', e.clientX - rect.left);
      el.style.setProperty('--py', e.clientY - rect.top);
    });
  });

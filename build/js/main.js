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
  return false;
});

$(document).on('click', '.js-components-list-closer', function () {
  $('.components-dropdown').hide();
  $('.js-components-list-opener').removeClass('is-active');
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

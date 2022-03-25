//тултипы
$(document).on('click', '.info', function () {
  if($(this).hasClass('is-open')) {
    $(this).removeClass('is-open');
  } else {
    $(this).addClass('is-open');
  }
  return false;
});

//переключение разделов
$(document).on('click', '.js-section', function () {
  $('.js-section').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tab').hide();
  $('.js-tab[data-section="'+$(this).attr("data-section")+'"]').show();
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

//переключение графиков
$(document).on('click', '.js-graphs', function () {
  $('.js-graphs-section').hide();
  $('.js-graphs-section[data-graphs="'+$(this).attr("data-graphs")+'"]').show();
});

//переключение различий
$(document).on('click', '.js-diff', function () {
  if($(this).find('input').is(':checked')) {
    $('.compare__spec-table').removeClass('compare__spec-table--no_diffs');
  } else {
    $('.compare__spec-table').addClass('compare__spec-table--no_diffs');
  }
});

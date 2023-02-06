//открытие попапа
$(document).on('click', '.js-popup-opener', function () {
  $('body').addClass('overflow');
  var popup = $(this).attr('data-popup');
  $('.popup-shade').fadeIn(200);

  $('.popup').removeClass('is-open').fadeOut(200, function () {
    setTimeout(function() {
      $('.' + popup).fadeIn(200, function () {
        $(this).addClass('is-open');

        if(popup === 'js-popup-test') {
          //обновление свайпера
          testsSlider.update();
          testsSlider2.update();
          testsSlider3.update();
          testsSlider4.update();
        }

        if(popup === 'js-popup-paint') {
          //обновление свайпера
          paintsSlider.update();
          paintsSlider2.update();

          sliderFilter.update();
          sliderFilter2.update();
        }
      });
    },200);
  });

  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-closer', function () {
  $('body').removeClass('overflow');
  $('.popup-shade').fadeOut(200);
  $('.popup').removeClass('is-open').fadeOut(200);
  return false;
});

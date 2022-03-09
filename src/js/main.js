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

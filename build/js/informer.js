//информер
$(document).on('click', '.js-informer-opener', function () {
  $('.informer').addClass('is-active');
  return false;
});

$(document).on('click', '.js-informer-closer', function () {
  $('.informer').removeClass('is-active');
  return false;
});

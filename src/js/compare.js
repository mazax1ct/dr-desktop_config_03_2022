//переключение разделов
$(document).on('click', '.js-section', function () {
  $('.js-section').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tab').hide();
  $('.js-tab[data-section="'+$(this).attr("data-section")+'"]').show();
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

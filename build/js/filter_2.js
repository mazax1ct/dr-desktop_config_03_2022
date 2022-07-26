//автосаггест
$(document).on('focus', '.tests-search__input', function () {
  $(this).closest('.tests-search').find('.tests-search__dropdown').show();
  testsSlider5.update();
});

//переключение настройки графиков
$(document).on('click', '.js-graphs', function () {
  $('.js-graphs').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-graphs-section').hide();
  $('.js-graphs-section[data-target="'+$(this).attr("data-target")+'"]').show();

  $('.graphs').hide();
  $('.graphs[data-target="'+$(this).attr("data-target")+'"]').show();

  $('.config__title-block .config__title').text($(this).attr('data-title'));

  if($(this).attr('data-title') == 'Комплектующие') {
    $('.filter-toggler').addClass('hidden');
    $('.dropdown').removeClass('hidden');
  } else {
     $('.filter-toggler').removeClass('hidden');
     $('.dropdown').addClass('hidden');
  }

  testsSlider.update();
  testsSlider2.update();
  testsSlider3.update();
  testsSlider4.update();
  return false;
});

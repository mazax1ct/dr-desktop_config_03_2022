$(document).on('click', '.js-dropdown', function () {
  if($(this).parent('.dropdown').hasClass('is-open')){
    $(this).parent('.dropdown').removeClass('is-open');
  }else{
    $('.dropdown').removeClass('is-open');
    $(this).parent('.dropdown').addClass('is-open');
  }

  return false;
});

$(document).on('click', '.dropdown__dropdown-item', function () {
  $(this).closest('.dropdown').find('.dropdown__placeholder').html($(this).html());
  $(this).closest('.dropdown').find('.dropdown__dropdown-item').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

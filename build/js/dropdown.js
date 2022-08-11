$(document).on('click', '.js-dropdown', function () {
  if($(this).parent('.dropdown').hasClass('is-open')){
    $(this).parent('.dropdown').removeClass('is-open');
  }else{
    $('.dropdown').removeClass('is-open');
    $(this).parent('.dropdown').addClass('is-open');
  }

  return false;
});

$(document).on('click', '.dropdown__dropdown-button', function () {
  $(this).closest('.dropdown').find('.dropdown__placeholder').html($(this).html());
  $(this).closest('.dropdown').find('.dropdown__dropdown-button').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

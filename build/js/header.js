$(document).on('click', '.js-menu-toggler', function () {
  $('.header__icons').removeClass('is-open');
  $('.header__menu').toggleClass('is-open');

  if($(this).hasClass('is-active')) {
    $('.menu-toggler').removeClass('is-active');
    $(this).removeClass('is-active');
    $('body').removeClass('overflow');
  } else {
    $('.menu-toggler').removeClass('is-active');
    $(this).addClass('is-active');
    $('body').addClass('overflow');
  }

  return false;
});

$(document).on('click', '.js-icons-toggler', function () {
  $('.header__menu').removeClass('is-open');
  $('.header__icons').toggleClass('is-open');

  if($(this).hasClass('is-active')) {
    $('.menu-toggler').removeClass('is-active');
    $(this).removeClass('is-active');
    $('body').removeClass('overflow');
  } else {
    $('.menu-toggler').removeClass('is-active');
    $(this).addClass('is-active');
    $('body').addClass('overflow');
  }

  return false;
});

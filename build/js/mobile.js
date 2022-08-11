//графики на мобиле
$(document).on('click', '.js-graphs-opener', function () {
  $('body').addClass('overflow');
  $('.config__graphs').addClass('is-open');
  return false;
});

$(document).on('click', '.js-graphs-closer', function () {
  $('body').removeClass('overflow');
  $('.config__graphs').removeClass('is-open');
  return false;
});

//омниблок в карточке
$(document).on('click', '.js-omni-toggler', function () {
  $('.card__omni-dropdown').toggleClass('is-open');
  return false;
});

//залипание секций на мобиле
var resize_scroll = function() {
  var block = $('.sections');
  var blockOffsetTop = $('.sections-wrapper').offset().top;

  if($(window).scrollTop() >= blockOffsetTop) {
    block.addClass("fixed");
  } else {
    block.removeClass("fixed");
  }
};

$(document).ready(function() {
  resize_scroll();
});

$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

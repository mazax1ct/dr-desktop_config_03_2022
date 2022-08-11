//переключение разделов
$(document).on('click', '.sections__button', function () {
  $('.sections__button').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-tab').hide();
  $('.js-tab[data-target="'+$(this).attr("data-target")+'"]').show();
  return false;
});

//список компонентов
$(document).on('click', '.js-components-list-opener', function () {

  $('body').addClass('overflow');

  $('.components-dropdown').removeClass('is-open').fadeOut();
  $('.js-components-list-opener').removeClass('is-active');

  $(this).addClass('is-active');
  $(this).closest('.components__item').find('.components-dropdown').fadeIn(300, function () {
    $(this).addClass('is-open');
  });

  $('.config').addClass('blur');

  tabsSlider.update();
  return false;
});

$(document).on('click', '.js-components-list-closer', function () {
  $('.components-dropdown').removeClass('is-open').fadeOut();
  $('.js-components-list-opener').removeClass('is-active');

  $('body').removeClass('overflow');

  $('.config').removeClass('blur');
  return false;
});

//слайдер спец серий
const tabsSlider = new Swiper('.js-components-tabs', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//фонарик
Array.from(
  document.querySelectorAll('.component '),
  function(el) {
    el.addEventListener('mousemove',function(e){
      var rect = el.getBoundingClientRect()
      el.style.setProperty('--px', e.clientX - rect.left);
      el.style.setProperty('--py', e.clientY - rect.top);
    });
  });

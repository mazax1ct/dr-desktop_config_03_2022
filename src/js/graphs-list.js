$(document).ready(function() {

  console.log($('.graphs__list:visible').get(0).scrollHeight, $('.graphs:visible').height());
  if($('.graphs__list:visible').get(0).scrollHeight - 2 > $('.graphs:visible').height()) {
    $('.graphs__list:visible').addClass('scrollable');
  }
});

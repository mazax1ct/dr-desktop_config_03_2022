$(document).ready(function() {
  $(".js-phone-mask").inputmask("+7-999-999-99-99",{"clearIncomplete": true, showMaskOnHover: false});
  $(".js-email-mask").inputmask({ alias: "email", showMaskOnHover: false});
});

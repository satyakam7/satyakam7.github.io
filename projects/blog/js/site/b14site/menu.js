(function (ns, root, $) {
  "use strict";

  ns.addHandlers = function () {

    $("nav .menu-item").click(function(evt) {
      evt.preventDefault();

      var id = $(this).attr('data-id');

      if ($('#' + id).parent('.scrollmagic-pin-spacer').length) {
        var offsetTop = $('#' + id).parent('.scrollmagic-pin-spacer').offset().top;
      } else {
        var offsetTop = $('#' + id).offset().top;
      }

      if ($(window).scrollTop() != offsetTop) {
        var goTo = offsetTop - 100;
        $(window).scrollTop(goTo);

        $('html, body').animate({
          scrollTop: offsetTop
        }, 500);

        b14site.analytics.track('14years', 'menu-click', id);
      }
    });

  }
})(b14site.getNamespace('menu'), this, jQuery);
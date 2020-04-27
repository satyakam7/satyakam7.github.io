(function (ns, root, $) {
  "use strict";

  ns.load = function () {
    if($('.clock').length && $('html').hasClass('has-mouse')) {
      var duration = 10;
      var ease = Linear.easeNone;
      var cx,
          cy,
          dx,
          dy,
          tiltx,
          tilty,
          radius,
          degree;

      $(window).on('mousemove', function(e){
        if ($('.clock').hasClass('is-visible')) {
          var offset = $('.clock').offset();

          cx = offset.left + Math.ceil($('.clock').width() / 2.0);
          cy = offset.top + Math.ceil($('.clock').height() / 2.0);
          dx = event.pageX - cx;
          dy = event.pageY - cy;

          tiltx = (dy / cy);
          tilty = - (dx / cx);
          radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
          degree = (radius * 40);

          $(".clock--inner").css({
            '-webkit-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
            '-moz-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
            'transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
          });
        }
      });
    }
  }

})(b14site.getNamespace('clock'), this, jQuery);

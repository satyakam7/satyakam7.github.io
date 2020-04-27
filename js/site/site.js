/*jshint forin:false, browser:true, indent:2, trailing:true, unused:false */

/**
 * @file
 * Generel site js code
 */

// Setup the namespace.
this.site = this.site || {};

(function (ns, $, Drupal) {
  'use strict';

  // Touch
  var ua = navigator.userAgent.toLowerCase();
  if (
    /(ipad)/.exec(ua) ||
    /(iphone)/.exec(ua) ||
    /(android)/.exec(ua) ||
    /(windows phone)/.exec(ua)
  ) {
    $('html').addClass('has-touch');
  } else {
    $('html').addClass('no-touch has-mouse');
  }

  // Mouse
  function has_mouse() {
    if (matchMedia('(pointer:fine)').matches) {
      return true;
    } else {
      return false;
    }
  }

  if (has_mouse()) {
    $('html').addClass('has-mouse');
  }

  // Check if IE

  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    $('html').addClass('is-ie');
  }

  $(function() {
    b14site.init.load();
    b14site.intro.load();
    b14site.scroll.initScroll();
    b14site.clock.load();
    b14site.breaker.load();
    b14site.menu.addHandlers();
  });

})(this.site, jQuery);
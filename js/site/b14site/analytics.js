(function (ns, root, $) {
  "use strict";

  // Send tracking events to Google Analytics
  ns.track = function(eventCategory, eventAction, eventLabel, eventValue, nonInteraction ) {
    ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue, {
      nonInteraction: (nonInteraction === false)
    });
  }

  // Track virtual page view. (Events cannot be used with funnels)
  ns.track_virtual_pageview = function(pagePath) {
    ga('send', 'pageview', pagePath);
  }

})(b14site.getNamespace('analytics'), this, jQuery);
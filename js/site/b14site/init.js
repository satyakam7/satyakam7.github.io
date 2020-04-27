(function (ns, root, $) {
  "use strict";

  ns.itemLoop = function (item) {
    var next = item.next();

    if (!next.length) {
      var next = item.parent().children().first();
    }
    item.hide();
    next.show();
    item.removeClass('is-active');
    next.addClass('is-active');
  }

  ns.itemLoopZindex = function (item) {
    var next = item.next();

    if (!next.length) {
      var next = item.parent().children().first();
    }
    next.css('z-index', 2);
    item.css('z-index', 1);
    item.removeClass('is-active');
    next.addClass('is-active');
  }

  ns.addStartPauseVideo = function (item) {
    $(item).each(function() {
      var current = $(this);
      var isPlaying = current.attr('data-is-playing');
      if (isPlaying == 'no') {
        if (current.find('source').length) {
          current[0].play();
          current.attr('data-is-playing', 'yes');

          setTimeout(function() {
            current.parent().addClass('video-is-playing');
          }, 1000);
        } else {
          var videoSource = current.attr('data-video-source');

          if (videoSource) {
            current.attr('src', videoSource);
            current[0].play();
            current.attr('data-is-playing', 'yes');

            setTimeout(function() {
              current.parent().addClass('video-is-playing');
            }, 1000);
          }
        }
      } else if (isPlaying == 'yes') {

        // Check if IE
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
          current[0].pause();
          current.attr('data-is-playing', 'no');
          current.parent().removeClass('video-is-playing');

        } else {
          // Check if video is loaded and playing
          var playPromise = current[0].play();

          if (playPromise !== undefined) {
            playPromise.then(function() {
              // Automatic playback started!
              // We can now safely pause video...
              current[0].pause();
              current.attr('data-is-playing', 'no');
              current.parent().removeClass('video-is-playing');
            });
          }
        }
      }
    });
  }

  ns.load = function () {
    var loop;

    $('.image--lazy-load').each(function() {
      var src = $(this).attr('data-img-src');
      $(this).children('img').attr('src', src);
    });
    var bgImages = new Array();

    $('.image--lazy-load-bg').each(function(index) {
      var src = $(this).attr('data-img-src');

      bgImages[index] = new Image();
      bgImages[index].src = src;

      $(this).css('background-image', 'url("' + src + '")');

    });

    // Set video src
    //$('video').each(function() {
    //  var video_source = $(this).attr('data-video-source');
    //
    //  if (video_source) {
    //    $(this).append('<source src="' + video_source + '" type="video/mp4">')
    //    var vid = this;
    //    vid.play();
    //  }
    //});
  }
})(b14site.getNamespace('init'), this, jQuery);
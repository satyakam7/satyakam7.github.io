(function (ns, root, $) {
  "use strict";

  ns.load = function () {

    var windowWidth = $(window).width();
    var tlArrow = gsap.timeline({repeat: 2, repeatDelay: 4});

    tlArrow
      .to('.scroll-for-more', {y: 30, duration: 0.5, ease: "power1.inOut"})
      .to('.scroll-for-more', {y: 0, duration: 0.5, ease: "power1.inOut"})
      .to('.scroll-for-more', {y: 30, duration: 0.5, ease: "power1.inOut"})
      .to('.scroll-for-more', {y: 0, duration: 0.5, ease: "power1.inOut"});

    var tlLoad = gsap.timeline();

    tlLoad
      .to('.clock', {opacity: 1, duration: 1, ease: "none"})
      .to('.section--intro--text', {opacity: 1, x: 0, duration: 0.8, ease: "power3.out"});

    if (windowWidth > 600) {
      tlLoad
        .fromTo('.clock', {right: "50%", rotation: -77.1428571}, {right: "20%", rotation: 0, duration: 1, ease: "power3.out"}, "-=0.7");
    } else {
      tlLoad
        .fromTo('.clock', {top: 130, right: "50%", rotation: -77.1428571}, {top: 270, right: "30%", rotation: 0, duration: 1, ease: "power3.out"}, "-=0.7");
    }

    tlLoad
      .to('.landing-header', {y: 0, duration: 0.5, ease: "power3.out"})
      .to('.scroll-for-more .link-arrow', {width: "100%", duration: 0.5, ease: "power3.out"})
      .to('.scroll-for-more .arrow-point--inner', {width: "100%", duration: 0.5, ease: "power3.out"})
      .add(tlArrow, "+=4")
      .pause();

    setTimeout(function() {
      tlLoad.resume();
    }, 500);
  }
})(b14site.getNamespace('intro'), this, jQuery);
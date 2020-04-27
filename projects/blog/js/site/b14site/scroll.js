(function (ns, root, $) {
  "use strict";

  ns.initScroll = function () {
    var loop,
        officeLoop;

    loop = setInterval(function () {
            b14site.init.itemLoop($('.section-header--element.is-active'));
          }, 400);

    // Waypoints
    $('body').imagesLoaded(function() {
      var waypoint = new Waypoint({
        element: $('.section--breaker.breaker-one')[0],
        handler: function(direction) {
          if (direction == 'down') {
            clearInterval(loop);
            $('.section--intro .clock').removeClass('is-visible');
          }
          if (direction == 'up') {
            $('.section--intro .clock').addClass('is-visible');
            clearInterval(loop);
            loop = setInterval(function () {
              b14site.init.itemLoop($('.section-header--element.is-active'));
            }, 400);
          }

        }
      });

      var sectionName;

      $('.analytics-section').waypoint(function(direction) {
        var me = this;
        sectionName = $(me.element).attr('data-analytics');

        setTimeout(function() {
          if (sectionName == $(me.element).attr('data-analytics')) {
            if(jQuery.data(me.element, "seen" ) != true) {
              jQuery.data(me.element, "seen", true);
              var pageView = '14years/' + sectionName;
              b14site.analytics.track_virtual_pageview(pageView);
            }
          }
        }, 500);
      });

      var section = $('.section');

      section.waypoint(function(direction) {
        if (direction == 'down') {
          var sectionBgColor = $(this.element).attr('data-bg-color');

          if (sectionBgColor == 'white') {
            $('body').css('background-color', '#FFF');
          } else if (sectionBgColor == 'black') {
            $('body').css('background-color', '#222');
          }
        }
      }, {
        offset: '10%',
      });

      section.waypoint(function(direction) {
        if (direction == 'up') {
          var previousSection = $(this.element).parent().prev().children('section');

          if (previousSection.length) {
            var sectionBgColor = previousSection.attr('data-bg-color');

            if (sectionBgColor == 'white') {
              $('body').css('background-color', '#FFF');
            } else if (sectionBgColor == 'black') {
              $('body').css('background-color', '#222');
            }
          }
        }
      }, {
        offset: '90%',
      });

      //var waypointOffice = new Waypoint({
      //  element: $('.section--thanks')[0],
      //  handler: function(direction) {
      //    if (direction == 'down') {
      //      console.log('down');
      //      officeLoop = setInterval(function () {
      //        b14site.init.itemLoopZindex($('.thanks-image.is-active'));
      //      }, 200);
      //    }
      //    if (direction == 'up') {
      //      console.log('up');
      //      clearInterval(officeLoop);
      //    }
      //
      //  }
      //});

    });

    // Scrollmagic
    const controller = new ScrollMagic.Controller();

    // Clock
    var tlClock = gsap.timeline();

    tlClock
      .to('.clock', {scale: 1.5, duration: 1, transformOrigin: "right", ease: "power1.in"})
      .to('.clock .hours img', {x: "-30%", y: "-30%", duration: 1, ease: "none"}, "-=1")
      .to('.clock .minutes img', {x: "-30%", y: "-30%", duration: 1, ease: "none"}, "-=1")
      .to('.clock .seconds img', {x: "-30%", y: "-30%", duration: 1, ease: "none"}, "-=1")
      .to('.menu-item.section-intro .menu-item--bg', {width: "100%", duration: 1, ease: "none"}, "-=1");

    const sceneClock = new ScrollMagic.Scene({
      triggerElement: ".section--intro",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin(".section--intro")
      .setTween(tlClock)
    	.addTo(controller);

    // Breaker one
    var tlBreakerOne = gsap.timeline();

    tlBreakerOne
      .to('.section--breaker.breaker-one .be-bold-style-container', {y: "-57.14285714%", duration: 4, ease: "none"})
      .to('.section--breaker.breaker-one .be-bold-light', {scale: 0.9, opacity: 0.04, duration: 1, ease: "power2.inOut"}, "-=4")
      .to('.section--breaker.breaker-one .be-bold-book', {scale: 1, opacity: 0.1, duration: 1, ease: "power2.inOut"}, "-=4")
      .to('.section--breaker.breaker-one .be-bold-book', {scale: 0.9, opacity: 0.04, duration: 1, ease: "power2.inOut"}, "-=3")
      .to('.section--breaker.breaker-one .be-bold-medium', {scale: 1, opacity: 0.1, duration: 1, ease: "power2.inOut"}, "-=3")
      .to('.section--breaker.breaker-one .be-bold-medium', {scale: 0.9, opacity: 0.04, duration: 1, ease: "power2.inOut"}, "-=2")
      .to('.section--breaker.breaker-one .be-bold-demi', {scale: 1, opacity: 0.1, duration: 1, ease: "power2.inOut"}, "-=2")
      .to('.section--breaker.breaker-one .be-bold-demi', {scale: 0.9, opacity: 0.04, duration: 1, ease: "power2.inOut"}, "-=1")
      .to('.section--breaker.breaker-one .be-bold-bold', {scale: 1, opacity: 0.1, duration: 1, ease: "power2.inOut"}, "-=1")
      .to('.section--breaker.breaker-one .not-bold', {opacity: 0, duration: 1, ease: "none"})
      .to('.section--breaker.breaker-one .be-bold-bold', {opacity: 1, duration: 1, ease: "none"}, "+=0.5")
      .to('.section--breaker.breaker-one .be-bold-bold', {opacity: 1, duration: 0.1, ease: "none"}, "+=2");

    const sceneBreakerOne = new ScrollMagic.Scene({
      triggerElement: ".section--breaker.breaker-one",
      triggerHook: "onLeave",
      duration: 1500
    })
      .setPin(".section--breaker.breaker-one")
      .setTween(tlBreakerOne)
    	.addTo(controller);

    // Heroes
    var tlHeroes = gsap.timeline();
    var heroesDuration = 1500;

    tlHeroes
      .to('.section--heroes--intro .label-and-header', {x: "-100%", duration: 1, ease: "power2.inOut"})
      .to('.section--heroes--intro .section-text', {y: "-260px", duration: 1, ease: "power2.inOut"}, "-=1");

    $('.hero-element').each(function(index) {
      var current = $(this),
          previous = $(this).prev();

      if (index == 0) {
        tlHeroes
          .fromTo($(this), {width: "0%"}, {width: "100%", duration: 1, ease: "power1.inOut"}, "-=1");
      } else {
        tlHeroes
          .set($(this), {display: "block"})
          //.to($(this), {opacity: 1, duration: 0.01})
          .fromTo($(this), {width: "0%"}, {width: "100%", duration: 1, ease: "power1.inOut"}, "+=0.4")
          .to(previous, {opacity: 0, display: "none", duration: 0.01});
      }

      tlHeroes
        .add( function(){
          clearInterval(loop);
        })
        .add( function(){
          clearInterval(loop);
          loop = setInterval(function () {
            b14site.init.itemLoopZindex(current.find('.hero-element--images--image.is-active'));
          }, 400);
        })
        .to($(this).find('.hero-element--title'), {opacity: 1, duration: 0.1, ease: "none"});

      heroesDuration = heroesDuration + 2000;
    });

    tlHeroes
      .to('.heroes-container--inner', {opacity: 1, duration: 0.1, ease: "none"})
      .to('.menu-item.section-heroes .menu-item--bg', {width: "100%", duration: 11.2, ease: "none"}, "-=10.3");

    const sceneHeroes = new ScrollMagic.Scene({
      triggerElement: ".section--heroes",
      triggerHook: "onLeave",
      duration: heroesDuration
    })
      .setPin(".section--heroes")
      .setTween(tlHeroes)
    	.addTo(controller);

    // Breaker Two
    var tlBreakerTwo = gsap.timeline();

    tlBreakerTwo
      .to('.section--breaker.breaker-two .text-element.eight', {rotationY: "-90deg", duration: 1, ease: "power1.inOut"})
      .to('.section--breaker.breaker-two .text-element.eight', {opacity: 0, duration: 0.01, ease: "none"}, "-=0.01")
      .to('.section--breaker.breaker-two .text-element.three', {opacity: 1, duration: 0.01, ease: "none"})
      .to('.section--breaker.breaker-two .text-element.three', {rotationY: "0deg", duration: 1, ease: "power1.inOut"}, "-=0.01")
      .to('.section--breaker.breaker-two .text-element.six', {rotationY: "-90deg", duration: 1, ease: "power1.inOut"})
      .to('.section--breaker.breaker-two .text-element.six', {opacity: 0, duration: 0.01, ease: "none"}, "-=0.01")
      .to('.section--breaker.breaker-two .text-element.five', {opacity: 1, duration: 0.01, ease: "none"})
      .to('.section--breaker.breaker-two .text-element.five', {rotationY: "0deg", duration: 1, ease: "power1.inOut"}, "-=0.01")
      .to('.section--breaker.breaker-two .text-element.four', {rotationY: "-90deg", duration: 1, ease: "power1.inOut"})
      .to('.section--breaker.breaker-two .text-element.four', {opacity: 0, duration: 0.01, ease: "none"}, "-=0.01")
      .to('.section--breaker.breaker-two .text-element.seven', {opacity: 1, duration: 0.01, ease: "none"})
      .to('.section--breaker.breaker-two .text-element.seven', {rotationY: "0deg", duration: 1, ease: "power1.inOut"}, "-=0.01");

    const sceneBreakerTwo = new ScrollMagic.Scene({
      triggerElement: ".section--breaker.breaker-two",
      triggerHook: "onLeave",
      duration: 6000
    })
      .setPin(".section--breaker.breaker-two")
      .setTween(tlBreakerTwo)
    	.addTo(controller);

    //tlBreakerTwo
    //  .to('.section--breaker.breaker-two .letter-element', {opacity: 1, duration: 0.2, ease: "none", stagger: 0.2})
    //  .to('.section--breaker.breaker-two .letter-element--inner', {rotationY: "0deg", duration: 1, ease: "none", transformOrigin: "left", stagger: 0.2}, "-=1.8")
    //  .to('.section--breaker.breaker-two .letter-element--inner', {rotationY: "-101deg", duration: 1, ease: "none", transformOrigin: "right", stagger: 0.2})
    //  .to('.section--breaker.breaker-two .letter-element', {opacity: 0, duration: 0.2, ease: "none", stagger: 0.2}, "-=1.8");
    //

    // Code
    var tlCode = gsap.timeline();

    tlCode
      .fromTo('.code-container img', {rotationY: "-130deg", opacity: 0}, {rotationY: "0deg", opacity: 1, duration: 1.5, ease: "none"})
      .to('.section--code--intro', {y: "-200%", opacity: 0, duration: 1, ease: "none"}, "-=1")
      .to('.code-container', {scale: 2, opacity: 0, duration: 1, ease: "none"}, "+=0.5")
      .to('.menu-item.section-code .menu-item--bg', {width: "100%", duration: 4, ease: "none"}, "-=3");

    //tlCode
    //  .fromTo('.code-container img', {rotationY: "-130deg", opacity: 0}, {rotationY: "0deg", opacity: 0.2, duration: 1.5, ease: "none"})
    //  .to('.section--code--intro', {y: "-200%", opacity: 0, duration: 0.7, ease: "none"})
    //  .to('.code-container img', {opacity: 1, duration: 0.5, ease: "none"}, "-=0.2")
    //  .to('.code-container', {scale: 2, opacity: 0, duration: 1, ease: "none"}, "+=0.5");
    //  .to('.menu-item.section-code .menu-item--bg', {width: "100%", duration: 4, ease: "none"}, "-=4.5");

    const sceneCode = new ScrollMagic.Scene({
      triggerElement: ".section--code",
      triggerHook: "onLeave",
      duration: 2000
    })
      .setPin(".section--code")
      .setTween(tlCode)
    	.addTo(controller);

    // Karaoke
    var tlKaraoke = gsap.timeline();

    tlKaraoke
      .to('.section--breaker.breaker-three .text-roman-container', {width: '100%', duration: 1, ease: "power1.inOut"})
      .to('.section--breaker.breaker-three .text-roman-container', {backgroundColor: '#222222', duration: 0.3, ease: "none"});

    const sceneKaraoke = new ScrollMagic.Scene({
      triggerElement: ".section--breaker.breaker-three",
      triggerHook: "onLeave",
      duration: 2000
    })
      .setPin(".section--breaker.breaker-three")
      .setTween(tlKaraoke)
    	.addTo(controller);

    // Design
    var tlDesignMenu = gsap.timeline();

    tlDesignMenu
      .to('.menu-item.section-design .menu-item--bg', {width: "100%", duration: 1, ease: "none"});

    const sceneDesignMenu = new ScrollMagic.Scene({
      triggerElement: ".section--design",
      triggerHook: "onLeave",
      duration: 6000
    })
      .setTween(tlDesignMenu)
    	.addTo(controller);

    // Design group one
    var tlDesignGroupOneStart = gsap.timeline();

    tlDesignGroupOneStart
      .to('.section--design--intro .label-and-header', {opacity: 1, duration: 0.1, ease: "none"})
      .call(b14site.init.addStartPauseVideo, ['.design-element-group.group-one video'])
      .to('.section--design--intro .label-and-header', {x: "-100%", duration: 1, ease: "power1.in"})
      .to('.section--design--intro .section-text', {y: "-260px", duration: 1, ease: "power1.in"}, "-=1")
      .to('.section--design--intro .section-text', {opacity: 0, duration: 0.7, ease: "none"}, "-=0.7")
      .to('.design-element-group.group-one .design-element-group--inner', {scale: 1, opacity: 1, duration: 1, ease: "power1.in"}, "-=0.2");

    const sceneDesignGroupOneStart = new ScrollMagic.Scene({
      triggerElement: ".section--design",
      triggerHook: "onLeave",
      duration: 1000
    })
      .setPin(".section--design")
      .setTween(tlDesignGroupOneStart)
    	.addTo(controller);

    var tlDesignGroupOneEnd = gsap.timeline();

    tlDesignGroupOneEnd
      .to('.design-element-group.group-one .design-element-group--inner', {scale: 2, y: "-100%", duration: 1, ease: "none"})
      .call(b14site.init.addStartPauseVideo, ['.design-element-group.group-one video'])
      .to('.design-element-group.group-one .design-element-group--inner', {opacity: 0, duration: 1, ease: "none"}, "-=1");

    const sceneDesignGroupOneEnd = new ScrollMagic.Scene({
      triggerElement: ".group-one-trigger-hook",
      offset: 200,
      triggerHook: "onEnter",
      duration: 600
    })
      .setTween(tlDesignGroupOneEnd)
    	.addTo(controller);

    // Design group two
    var tlDesignGroupTwoStart = gsap.timeline();

    tlDesignGroupTwoStart
      .to('.design-element-group.group-two .design-element-group--inner', {scale: 1, opacity: 1, duration: 1, ease: "power1.in"});

    const sceneDesignGroupTwoStart = new ScrollMagic.Scene({
      triggerElement: ".design-element-group.group-two",
      triggerHook: "onLeave",
      duration: 1000
    })
      .setPin(".design-element-group.group-two")
      .setTween(tlDesignGroupTwoStart)
    	.addTo(controller);

    var tlDesignGroupTwoEnd = gsap.timeline();

    tlDesignGroupTwoEnd
      .to('.design-element-group.group-two .design-element-group--inner', {scale: 2, y: "-100%", duration: 1, ease: "none"})
      .to('.design-element-group.group-two .design-element-group--inner', {opacity: 0, duration: 1, ease: "none"}, "-=1");

    const sceneDesignGroupTwoEnd = new ScrollMagic.Scene({
      triggerElement: ".group-two-trigger-hook",
      offset: 200,
      triggerHook: "onEnter",
      duration: 600
    })
      .setTween(tlDesignGroupTwoEnd)
    	.addTo(controller);

    // Design group three
    var tlDesignGroupThreeStart = gsap.timeline();

    tlDesignGroupThreeStart
      .to('.design-element-group.group-three .design-element-group--inner', {scale: 1, opacity: 1, duration: 1, ease: "power1.in"});

    const sceneDesignGroupThreeStart = new ScrollMagic.Scene({
      triggerElement: ".design-element-group.group-three",
      triggerHook: "onLeave",
      duration: 1000
    })
      .setPin(".design-element-group.group-three")
      .setTween(tlDesignGroupThreeStart)
    	.addTo(controller);

    var tlDesignGroupThreeEnd = gsap.timeline();

    tlDesignGroupThreeEnd
      .to('.design-element-group.group-three .design-element-group--inner', {scale: 2, y: "-100%", duration: 1, ease: "none"})
      .to('.design-element-group.group-three .design-element-group--inner', {opacity: 0, duration: 1, ease: "none"}, "-=1");

    const sceneDesignGroupThreeEnd = new ScrollMagic.Scene({
      triggerElement: ".group-three-trigger-hook",
      offset: 200,
      triggerHook: "onEnter",
      duration: 600
    })
      .setTween(tlDesignGroupThreeEnd)
    	.addTo(controller);

    // Design group four
    var tlDesignGroupFourStart = gsap.timeline();

    tlDesignGroupFourStart
      .to('.design-element-group.group-four .design-element-group--inner', {scale: 1, opacity: 1, duration: 1, ease: "power1.in"});

    const sceneDesignGroupFourStart = new ScrollMagic.Scene({
      triggerElement: ".design-element-group.group-four",
      triggerHook: "onLeave",
      duration: 1000
    })
      .setPin(".design-element-group.group-four")
      .setTween(tlDesignGroupFourStart)
    	.addTo(controller);

    var tlDesignGroupFourEnd = gsap.timeline();

    tlDesignGroupFourEnd
      .to('.design-element-group.group-four .design-element-group--inner', {scale: 2, y: "-100%", duration: 1, ease: "none"})
      .to('.design-element-group.group-four .design-element-group--inner', {opacity: 0, duration: 1, ease: "none"}, "-=1");

    const sceneDesignGroupFourEnd = new ScrollMagic.Scene({
      triggerElement: ".group-four-trigger-hook",
      offset: 200,
      triggerHook: "onEnter",
      duration: 600
    })
      .setTween(tlDesignGroupFourEnd)
    	.addTo(controller);

    // Breaker Four
    var tlBreakerFour = gsap.timeline();


    tlBreakerFour
      .to('.section--breaker.breaker-four .word-element.create .letter-element', {opacity: 0, duration: 0.01, ease: "none"})
      .set('.section--breaker.breaker-four .paths-sizer', {float: "left"}) // Hack to fix Firefox bug
      .to('.section--breaker.breaker-four .word-element.create .letter-element', {opacity: 1, duration: 0.15, ease: "none", stagger: 0.15})
      .to('.section--breaker.breaker-four .word-element.create .letter-element', {y: 0, duration: 1, ease: "power1.out", stagger: 0.2}, "-=0.9")
      .to('.section--breaker.breaker-four .text-container--inner', {rotation: "-90deg", duration: 1.5, ease: "power1.out", transformOrigin: "center top"})
      .to('.section--breaker.breaker-four .word-element.new', {opacity: 1, duration: 0.15, ease: "none"})
      .to('.section--breaker.breaker-four .word-element.new', {y: 0, duration: 0.3, ease: "power1.out"}, "-=0.15")
      .to('.section--breaker.breaker-four .text-container--inner', {x: "-35%", duration: 1, ease: "power1.out"}, "+=0.5")
      .to('.section--breaker.breaker-four .word-element.new', {y: "50%", duration: 1, ease: "power1.out"}, "-=1")
      .to('.section--breaker.breaker-four .word-element.create .letter-e-last', {y: "200%", duration: 1, ease: "power1.out"}, "-=1")
      .to('.section--breaker.breaker-four .word-element.create .letter-a', {y: "200%", duration: 1, ease: "power1.out"}, "-=1")
      .to('.section--breaker.breaker-four .word-element.create .letter-e', {y: "200%", duration: 1, ease: "power1.out"}, "-=1")
      .to('.section--breaker.breaker-four .word-element.create .letter-r', {y: "200%", duration: 1, ease: "power1.out"}, "-=1")
      .to('.section--breaker.breaker-four .word-element.create .letter-e-last', {y: "0%", duration: 0.7, ease: "power1.inOut"})
      .to('.section--breaker.breaker-four .word-element.new', {y: "0%", duration: 0.7, ease: "power1.inOut"}, "-=0.5")
      .to('.section--breaker.breaker-four .word-element.create .letter-e', {y: "0%", duration: 0.8, ease: "power1.inOut"}, "-=0.5")
      .to('.section--breaker.breaker-four .word-element.create .letter-a', {y: "0%", duration: 0.8, ease: "power1.inOut"}, "-=0.4")
      .to('.section--breaker.breaker-four .word-element.create .letter-r', {y: "0%", duration: 0.8, ease: "power1.inOut"}, "-=0.7")
      .to('.section--breaker.breaker-four .text-container--inner', {rotation: "0deg", duration: 1.5, ease: "power1.out", transformOrigin: "center top"})
      .to('.section--breaker.breaker-four .text-container--inner', {y: "-40%", duration: 0.5, ease: "power1.inOut"})
      .to('.section--breaker.breaker-four .word-element.paths .letter-element', {opacity: 1, duration: 0.15, ease: "none", stagger: 0.15})
      .add( function(){
        clearInterval(loop);
      })
      .add( function(){
        clearInterval(loop);
        loop = setInterval(function () {
          b14site.init.itemLoopZindex($('.thanks-image.is-active'));
        }, 200);
      })
      .to('.section--breaker.breaker-four .word-element.paths .letter-element', {y: 0, duration: 1, ease: "power1.out", stagger: 0.2}, "-=0.9");
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      tlBreakerFour.set('.section--breaker.breaker-four .paths-sizer', {float: "right"}); // Hack to fix Firefox bug
    }

    const scenePaths = new ScrollMagic.Scene({
      triggerElement: ".section--breaker.breaker-four",
      triggerHook: "onLeave",
      duration: 2500
    })
      .setPin(".section--breaker.breaker-four")
      .setTween(tlBreakerFour)
    	.addTo(controller);

    //tlBreakerFour
    //  .to('.section--breaker.breaker-four .banner', {right: '100%', x: '100%', duration: 1, ease: "power1.inOut"})
    //  .to('.section--breaker.breaker-four .section-paths--text', {scale: 1.1, duration: 0.5, ease: "power1.inOut"})
    //  .to('.section--breaker.breaker-four .section-paths--text', {opacity: 1, duration: 0.5, ease: "none"});
    //


    // Thanks
    var tlThanks = gsap.timeline();

    if ($(window).width() > 600) {
      var arrowWidth = "100px";
    } else {
      var arrowWidth = "64px";
    }

    tlThanks
      //.to('.section--thanks .thanks-image', {scale: 1, duration: 1, ease: "power1.inOut"})
      .to('.section--thanks .thanks-images-container', {scale: 1, duration: 1, ease: "power1.inOut"})
      .to('.section--thanks .link-arrow', {y: "600%", duration: 0.5, ease: "power1.inOut"})
      .to('.section--thanks .link-arrow', {width: arrowWidth, duration: 0.5, ease: "power1.inOut"}, "-=0.3")
      .to('.section--thanks .arrow-point--inner', {width: "100%", duration: 0.5, ease: "power1.inOut"}, "-=0.3")
      .to('.menu-item.section-thanks .menu-item--bg', {width: "100%", duration: 1.7, ease: "none"}, "-=1.7");

    const sceneThanks = new ScrollMagic.Scene({
      triggerElement: ".section--thanks",
      triggerHook: "onLeave",
      duration: 1000
    })
      .setPin(".section--thanks")
      .setTween(tlThanks)
    	.addTo(controller);
  }
})(b14site.getNamespace('scroll'), this, jQuery);
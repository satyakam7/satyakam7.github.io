if (document.documentElement.clientWidth > 768) {
    var controller = new ScrollMagic.Controller();
    var sections = document.querySelectorAll("section");
    var tl = new TimelineMax();
    var offset = window.innerHeight;
    for (let i = 1; i < sections.length; i++) {
        tl.from(sections[i], 1, {
            xPercent: 100,
            ease: Linear.easeNone
        }, "+=1");
    }
    new ScrollMagic.Scene({
        triggerElement: "#pinMaster",
        triggerHook: "onLeave",
        duration: "300%"
    }).setPin("#pinMaster").setTween(tl).addTo(controller);
    $("section").each(function (i) {
        var picOverlay = $(this).find(".overlay");
        var animateIn = new TimelineMax();
        animateIn.fromTo(picOverlay, 1, {
            skewX: 0,
            scale: 3
        }, {
            skewX: 0,
            xPercent: 103,
            transformOrigin: "0% 100%",
            ease: Power4.easeOut
        }, "-=1");
        new ScrollMagic.Scene({
            triggerElement: "#pinMaster",
            triggerHook: 0,
            offset: i * offset
        }).setTween(animateIn).addTo(controller)
    });
}
$(window).scroll(function () {
    inViewport();
});
$(window).resize(function () {
    inViewport();
});

function inViewport() {
    var header = $('header');
    var heightThreshold = $(".about").offset().top;
    var heightThreshold_end = $(".about").offset().top + $(".about").outerHeight();
    var scroll = $(window).scrollTop();
    if (scroll >= heightThreshold - 100 && scroll <= heightThreshold_end - 100) {
        header.addClass('dark');
    } else {
        header.removeClass('dark');
    }
}; {
    var mouse = {
        x: 0,
        y: 0
    }; //Cursor position
    var pos = {
        x: 0,
        y: 0
    }; //Cursor position
    var ratio = 0.09; //delay follow cursor
    var active = false;
    var ball = document.getElementById("ball");
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    }); //scale from middle ball
    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }
    TweenLite.ticker.addEventListener("tick", updatePosition);

    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenLite.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
    $(".contact-area").mouseenter(function (e) {
        TweenMax.to(this, 0.3, {
            scale: 1.05
        }); //scale trigger element
        TweenMax.to(ball, 0.3, {
            scale: 3.3
        }); //scale ball
        TweenMax.to(ball, 0.3, {
            borderWidth: '.5px'
        });
        active = true;
    });
    $(".contact-area").mouseleave(function (e) {
        TweenMax.to(this, 0.3, {
            scale: 1
        });
        TweenMax.to(ball, 0.3, {
            scale: 1
        });
        TweenMax.to(this.querySelector(".text-hover"), 0.3, {
            x: 0,
            y: 0
        });
        TweenMax.to(ball, 0.3, {
            borderWidth: '1px'
        });
        active = false;
    });
    $(".contact-area").mousemove(function (e) {
        parallaxCursor(e, this, 1); //magnetic ball = low number is more attractive
        callParallax(e, this);
    });

    function callParallax(e, parent) {
        parallaxIt(e, parent, parent.querySelector(".text-hover"), 85); //magnetic area = higher number is more attractive
    }

    function parallaxIt(e, parent, target, movement) {
        let boundingRect = parent.getBoundingClientRect();
        let relX = e.clientX - boundingRect.left;
        let relY = e.clientY - boundingRect.top;
        TweenMax.to(target, 0.3, {
            x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
            y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
            ease: Power2.easeOut
        });
    }

    function parallaxCursor(e, parent, movement) {
        let rect = parent.getBoundingClientRect();
        let relX = e.clientX - rect.left;
        let relY = e.clientY - rect.top;
        pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        TweenMax.to(ball, 0.3, {
            x: pos.x,
            y: pos.y
        });
    }
}
$(document).ready(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return !1
            }
        }
    })
    $(".contact-footer").click(function () {
        $('html, body').animate({
            scrollTop: $('.timeline').offset().top + 10000
        }, 800)
    })
});
const section = document.querySelectorAll(".portfolio-item")
var currentPixel = window.pageYOffset
const looper = function () {
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    var speed = diff * 0.5
    speed = Math.min(2, Math.max(-2, speed));
    $('.portfolio-item').css({
        'transform': "skewY(" + speed + "deg)"
    });
    currentPixel = newPixel
    requestAnimationFrame(looper)
}
looper()
const profileSection = document.querySelectorAll(".skew-item")
let currentPixel2 = window.pageYOffset
const looper2 = function () {
    const newPixel2 = window.pageYOffset
    const diff2 = newPixel2 - currentPixel2
    var speed2 = diff2 * 0.1
    speed2 = Math.min(2, Math.max(-2, speed2));
    $('.skew-item').css({
        'transform': "skewY(" + speed2 + "deg)"
    });
    currentPixel2 = newPixel2
    requestAnimationFrame(looper2)
}
looper2()
$("body").mousemove(function (event) {
    var w = $(this).width(),
        pct = 360 * (+event.pageX) / w,
        bg = "linear-gradient(" + pct + "deg,#fff,#000)";
    $(".dot").css("background-image", bg);
});
// scrollMagic Scene
var profileController = new ScrollMagic.Controller({
    reverse: false
});
$(".image-collage").each(function () {
    var picOverlay2 = $(this).find(".profile-overlay");
    var animateIn = new TimelineMax();
    animateIn.fromTo(picOverlay2, 2, {
        skewX: 3,
        scale: 3
    }, {
        skewX: 0,
        delay: 1,
        xPercent: 103,
        transformOrigin: "0% 100%",
        ease: Power4.easeOut
    }, "-=1")
    // Make a scrollMagic Scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 'onEnter',
        reverse: false
    }).setTween(animateIn).addTo(profileController);
});
const portfolioSection = document.querySelectorAll(".skew-item-2")
let currentPixel3 = $("div.modal").scrollTop()
const looper3 = function () {
    const newPixel3 = $("div.modal").scrollTop()
    const diff3 = newPixel3 - currentPixel3
    var speed3 = diff3 * 0.5
    speed3 = Math.min(2, Math.max(-2, speed3));
    $('.skew-item-2').css({
        'transform': "skewY(" + speed3 + "deg)"
    });
    currentPixel3 = newPixel3
    requestAnimationFrame(looper3)
}
looper3()
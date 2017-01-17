/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/
var allowdToGet = true;
var previousPosition = 0;
var section_to_scroll;
/*function trackMouse(sliders) {

    sliders.mousemove(function(e) {
        if (allowdToGet) {
            allowdToGet = false;
            setTimeout(function() {
                console.log(e.pageX - previousPosition);
                allowdToGet = true;
            }, 500);
        }
    });
}*/


mousePerspective($(window).width(), $(window).height());

function mousePerspective(w, h) {
    var triangle1 = $(".large-triangle1");
    var triangle2 = $(".large-triangle2");
    var triangle3 = $(".large-triangle3");
    var triangle4 = $(".large-triangle4");
    var triangle5 = $(".large-triangle5");
    var triangle6 = $(".large-triangle6");
    var triangles = $(".triangles");
    var defaultTransform = "rotateY(0deg) rotateX(0deg)"
    $('.content-area').mousemove(function(e) {
        var Xmouse = e.pageX;
        var Ymouse = e.pageY;
        //calc perc
        var Xperc = Xmouse / w;
        var Yperc = Ymouse / h;
        // triangle 1.
        Xpos = Math.floor(Xperc * 30);
        Ypos = Math.floor(Yperc * 30);
        //console.info("X Axis : " + Xpos + " Y Axis : " + Ypos);
        Xrev = 100 - Xpos;
        Yrev = 100 - Ypos;
        triangle1.css({
            //perspectiveOrigin: Xpos + '% ' + Ypos + '%'
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
        // triangle 2
        Xpos = Math.floor(Xperc * 20);
        Ypos = Math.floor(Yperc * 20);
        Xrev = 200 - Xpos;
        Yrev = 200 - Ypos;
        triangle2.css({
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
        // triangle 3
        Xpos = Math.floor(Xperc * 20);
        Ypos = Math.floor(Yperc * 20);
        Xrev = 200 - Xpos;
        Yrev = 200 - Ypos;
        triangle3.css({
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
        // triangle 4
        Xpos = Math.floor(Xperc * 15);
        Ypos = Math.floor(Yperc * 15);
        Xrev = 200 - Xpos;
        Yrev = 200 - Ypos;
        triangle4.css({
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
        // triangle 5
        Xpos = Math.floor(Xperc * 16);
        Ypos = Math.floor(Yperc * 16);
        Xrev = 180 - Xpos;
        Yrev = 180 - Ypos;
        triangle5.css({
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
        // triangle 6
        Xpos = Math.floor(Xperc * 20);
        Ypos = Math.floor(Yperc * 20);
        Xrev = 170 - Xpos;
        Yrev = 170 - Ypos;
        triangle6.css({
            transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
        });
    });
    /*  $('.content-area').on('mouseleave', function(e) {
           triangles.css({ 
              transform: defaultTransform
          });

      });*/
}
$(document).ready(function() {
    var disabled = false;
    var allowScrolling = true;
    var _docWidth = $(window).width();
    var sliders = $('.sliders-place');


    //************* HEADER SCROLLING **********************************

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({ triggerElement: "#appHeader", triggerHook: 0, duration: 86 })
        .addTo(controller);
    scene.setClassToggle("#appHeader", "normal-header");
    //trackMouse(sliders);


    //************* PARALLAX SCROLLING ********************************
    var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });
    var scene2 = new ScrollMagic.Scene({ triggerElement: "#parallax-trigger" })
        .setTween("#parallax1", { y: "10%", ease: Linear.easeNone })
        .addTo(controller2);

    //**************** CONTENT SLIDER ********************************** 

    var $landingWrapper = $(".landing-wrapper"),
        $landingInnerContent = $(".landing-inner-content");
    // set initial container to half of .landing-inner-content width
    //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

    // scroll left and right
    $landingInnerContent.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper.width() / 2) {
            //console.log($landingWrapper.width() - e.clientX );
            TweenMax.to($landingWrapper, 2, {
                scrollTo: {
                    x: "+=175"
                },
                ease: Power2.easeOut
            });
        } else {
            TweenMax.to($landingWrapper, 2, {
                scrollTo: {
                    x: "-=175"
                },
                ease: Power2.easeOut
            });
        }
    });

    //**********REVIES SLIDER****************************************

    $('#reviews-slider').owlCarousel({
        loop: false,
        smartSpeed: 250,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        //touchDrag:false,
        dotsContainer: "#reviews-dots",
        onResized: function() {

        },
        onInitialized: function() {

        }
    });

    //==========PARTNERS SLIDER ====================================== 

    $('#partners-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        smartSpeed: 450,
        dots: false,
        nav: false,
        items: 5,
        autoHeight: false,
        mouseDrag: true
    });

    //==========CONTACT FORM ====================================== 
    $(".contact-form").validate({
        rules: {
            contact_subject: "required",
            contact_email: "required",
            contact_message: "required"
        },
        submitHandler: function() {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                var data = $(this.currentForm).serialize();
                $.ajax('http://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    data: data
                }).done(function(success) {
                    $("#contact_subject").val("");
                    $("#contact_email").val("");
                    $("#contact_message").val("");
                    toastr.success("Success!")
                }).fail(function(error) {
                    toastr.error("An error occured.")
                }).always(function() {
                    disabled = false;
                    button.val("Send");
                });
            }
        }
    });
    // ***************COUNTER****************************
    var sectionContainer = $('.section-counters');
    var allowCounting = true;
    $('#counters').bind('inview', function(event, visible) {
        if (visible) {
            if (allowCounting) {
                var startValues = [0, 100, 0, 0];
                var endValues = [11, 225, 155, 4];
                for (var i = 0; i < 4; i++) {
                    var element = document.getElementById("counter" + (i + 1));
                    var numAnim = new CountUp(element, startValues[i], endValues[i]);
                    numAnim.start(function() {});
                }
                allowCounting = false;
            }
            $(window).scroll(function() {
                var scrollPosition = $(window).scrollTop();
                if (_docWidth > 1150 && _docWidth < 1250) {
                    sectionContainer.css('background-position', '50% ' + (-Math.round(scrollPosition * 0.04)) + 'px');
                } else if (_docWidth < 1149 && _docWidth > 750) {
                    sectionContainer.css('background-position', '50% ' + (Math.round(scrollPosition / 30)) + 'px');
                } else if (_docWidth > 1250) {
                    sectionContainer.css('background-position', '50% ' + (-Math.round(scrollPosition * 0.08)) + 'px');
                }
            });

        } else {
            scrollCounter = 0;
            sectionContainer.css('background-position', '50% 0');
        }
    });


    // ============TOP NAVIGATION ===========================================

    var sectionsController = new ScrollMagic.Controller();
    var sceneNav = new ScrollMagic.Scene({
            triggerElement: "#section-services",
            triggerHook: 'onEnter',
            offset: 203
        })
        .addTo(sectionsController)
        //.addIndicators()
        .on("enter", function(e) {
            console.log("enter");
        })
    sceneNav.setClassToggle("#top-nav", "section-services");
    sceneNav.setClassToggle("#service-boxes", "active-services");

    sectionsController.scrollTo(function(newpos) {
        if (section_to_scroll) {
            var offsetTop = 0;
            switch (section_to_scroll) {
                case '#section-home':
                    offsetTop = 0;
                    break;
                case '#section-services':
                    offsetTop = 90;
                    break;
                case '#section-about-us':
                    offsetTop = 90;
                    break;
                case '#section-portfolio':
                    offsetTop = 0;
                    break;
                case '#section-contact-us':
                    offsetTop = 0;
                    break;
            }
        }

        TweenMax.to(window, 0.5, { scrollTo: { y: newpos - offsetTop } });
    });
    /* scene.setClassToggle("#top-nav", "section-services");*/



    $(".menu-item, .logo-link").bind('click', function(event) {
        var param = event.currentTarget.attributes['data-scroll-nav'];
        if (param && param.value) {
            section_to_scroll = "#" + param.value;
            var currentElement = $(this);
            sectionsController.scrollTo(section_to_scroll);
            $(".menu-item").each(function(index) {
                $(this).removeClass('active-menu');
            });
            currentElement.addClass('active-menu');
        }
    });
    //********************TOASTER *********************
    toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "30000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        //*****************************************************************
    $('html,body').animate({
        scrollTop: 0
    }, 400, 'easeInOutQuad');

});

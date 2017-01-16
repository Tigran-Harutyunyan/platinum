/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/
var allowdToGet = true;
var previousPosition = 0;

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
        .setTween("#parallax1", { y: "20%", ease: Linear.easeNone })
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

    //********************************TOASTER *********************
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
        // ================================================================
        /*    $.scrollIt({
                upKey: 38, // key code to navigate to the next section
                downKey: 40, // key code to navigate to the previous section
                easing: 'swing', // the easing function for animation
                scrollTime: 800, // how long (in ms) the animation takes
                //activeClass: 'active-link', // class given to the active nav element
                onPageChange: null, // function(pageIndex) that is called when page is changed
                topOffset: aCare.topOffset // offets (in px) for fixed top navigation
            });
        */
        /*    $(".contact-link,.home-link").on("click", function() {
                $(".menu-item").each(function(element) {
                    $(element).removeClass("active");
                });
                var element = this;
                if ($(element).hasClass('home-link')) {
                    $("html, body").animate({ scrollTop: 0 }, 800, 'swing', function() {
                        $(element).addClass("active");
                    });
                } else {
                    $("html, body").animate({ scrollTop: $(document).height() }, 800, 'swing', function() {
                        $(element).addClass("active");
                    });
                }

            })*/

});

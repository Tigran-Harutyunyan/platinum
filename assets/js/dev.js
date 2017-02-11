/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/
var allowdToGet = true;
var previousPosition = 0;
var section_to_scroll;
var allowMouseMove = true;
var triangle1 = $(".large-triangle1"),
    triangle2 = $(".large-triangle2"),
    triangle3 = $(".large-triangle3"),
    triangle4 = $(".large-triangle4"),
    triangle5 = $(".large-triangle5"),
    triangle6 = $(".large-triangle6"),
    triangle7 = $(".large-triangle7"),
    triangle8 = $(".large-triangle8"),
    triangle9 = $(".large-triangle9"),
    triangle10 = $(".large-triangle10"),
    triangle11 = $(".large-triangle11"),
    triangles = $(".triangles"),
    defaultTransform = "rotateY(0deg) rotateX(0deg)",
    contactsArea = $('.content-area'),
    windowWidth = $(window).width(),
    windowHeight = $(window).height();
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

if (windowWidth>1200){
    mousePerspective(windowWidth, windowHeight);
}
  

function mousePerspective(w, h) {
    $('.content-area').mousemove(function (e) {
        if (allowMouseMove) {
            allowMouseMove = false;
            setTimeout(function () {
                allowMouseMove = true;
                var Xmouse = e.pageX;
                var Ymouse = e.pageY;
                //calc perc
                var Xperc = Xmouse / w;
                var Yperc = Ymouse / h;
                // triangle 1.
                Xpos = Math.floor(Xperc * 20);
                Ypos = Math.floor(Yperc * 20);
                //console.info("X Axis : " + Xpos + " Y Axis : " + Ypos);
                Xrev = 100 - Xpos;
                Yrev = 100 - Ypos;
                triangle1.css({
                    //perspectiveOrigin: Xpos + '% ' + Ypos + '%'
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 2
                Xpos = -(Math.floor(Xperc * 20));
                Ypos = Math.floor(Yperc * 30);
                triangle2.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 3
                Xpos = Math.floor(Xperc * 50);
                Ypos = -(Math.floor(Yperc * 20));
                triangle3.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 4
                Xpos = -(Math.floor(Xperc * 22));
                Ypos = Math.floor(Yperc * 30);
                triangle4.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 5
                Xpos = Math.floor(Xperc * 16);
                Ypos = Math.floor(Yperc * 16);
                triangle5.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 6
                Xpos = -(Math.floor(Xperc * 16));
                Ypos = Math.floor(Yperc * 20);

                triangle6.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 7
                Xpos = Math.floor(Xperc * 20);
                Ypos = Math.floor(Yperc * 20);
                triangle7.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 8
                Xpos = Math.floor(Xperc * 20);
                Ypos = Math.floor(Yperc * 20);
                triangle8.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 9
                Xpos = -(Math.floor(Xperc * 10));
                Ypos = (Math.floor(Yperc * 5));
                triangle9.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 10
                Xpos = Math.floor(Xperc * 4);
                Ypos = Math.floor(Yperc * 3);
                triangle10.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
                // triangle 11
                Xpos = Math.floor(Xperc * 20);
                Ypos = Math.floor(Yperc * 20);
                triangle11.css({
                    transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                });
            }, 200)
        }

    });
    /*  $('.content-area').on('mouseleave', function(e) {
           triangles.css({ 
              transform: defaultTransform
          });

      });*/
}
$(document).ready(function () {
    var disabled = false,
        allowScrolling = true,
        _docWidth = $(window).width(),
        sliders = $('.sliders-place'),
        menuToggler = $('#menu-toggler'),
        mobileMenuContainer = $('.menu-toggler-container');

    menuToggler.click(function (event) {
        event.stopPropagation()
        $(this).toggleClass("opened-menubar");
        mobileMenuContainer.toggleClass('menu-opened')
    });

    /* $('body.html').on('click',function(event){
         event.stopPropagation();
     })*/
    //************* HEADER SCROLLING **********************************

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
            triggerElement: "#appHeader",
            triggerHook: 0,
            duration: 86
        })
        .addTo(controller);
    scene.setClassToggle("#appHeader", "normal-header");
    //trackMouse(sliders);


    //*************  PARALLAX SCROLLING ********************************
    var controller2 = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
        }
    });
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#parallax-trigger"
        })
        .setTween("#parallax1", {
            y: "10%",
            ease: Linear.easeNone
        })
        .addTo(controller2);

    //************* BIG SLIDER PARALLAX SCROLLING ********************************

    /*  var controller3 = new ScrollMagic.Controller({
        triggerElement: "#mainSlider",
        triggerHook: 0
    });
    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#mainSlider"
        })
        .setTween("#mainSlider", {
            y: "10%",
            ease: Linear.easeNone
        })
        .addTo(controller3)
        .addIndicators()
*/
    //*************  CONTACT US SECTIon ********************************
    /*    var contactsController = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onEnter",
                duration: "200%"
            }
        });
        var sceneContacts = new ScrollMagic.Scene({
                triggerElement: "#area-contacts"
            })
            .addTo(contactsController);

        sceneContacts.on("enter", function (event) {
            console.log("Scene entered.");
            contactsArea.mousemove(function (e) {
                //allowMouseMove = false;
                setTimeout(function () {
                    allowMouseMove = true;
                    //calc perc
                    var Xperc = e.pageX / windowWidth;
                    var Yperc = e.pageY / windowHeight;

                    // triangle 7
                    Xpos = Math.floor(Xperc * 20);
                    Ypos = Math.floor(Yperc * 20);
                    triangle7.css({
                        transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                    });

                    // triangle 9
                    Xpos = -(Math.floor(Xperc * 10));
                    Ypos = (Math.floor(Yperc * 5));
                    triangle9.css({
                        transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                    });
                    // triangle 10
                    Xpos = Math.floor(Xperc * 4);
                    Ypos = Math.floor(Yperc * 3);
                    triangle10.css({
                        transform: "rotateY(" + Ypos + "deg)" + "rotateX(" + Xpos + "deg)"
                    });

                }, 200)
            });

        });
        sceneContacts.on("leave", function (event) {
            console.log("Scene left."); 
            triangles.css({
                transform: defaultTransform
            }); 
            contactsArea.unbind("mousemove");
        });*/
    //**************** CONTENT SLIDER ********************************** 
    var velocity = 0,
        threshold = 300,
        maxVelocity = 10;
    var $landingWrapper = $("#landing1"),
        $landingInnerContent = $("#landing-content1");
    var $landingWrapper2 = $("#landing2"),
        $landingInnerContent2 = $("#landing-content2");
    // set initial container to half of .landing-inner-content width
    //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

    // scroll left and right
    var latestPosition;
    var allowScroll = true;
    var allowScroll2 = true;
    var _docWidth = $(document).width();
    var land_width = $landingWrapper.width();
    var land_width2 = $landingWrapper2.width();
    $landingInnerContent.on("mousemove touchmove", function (e) {
        if (allowScroll) {
            land_width = $landingWrapper.width();
            if ((e.clientX < land_width / 4) || (e.clientX > land_width * 3 / 4)) {
                allowScroll = false;
                setTimeout(function () {
                    var difference = _docWidth - e.clientX;
                    var currentVelocity = Math.round(Math.abs(calculateVelocity(e.clientX, difference)));
                    if (e.clientX > land_width / 2) {
                        TweenMax.to($landingWrapper, 2, {
                            scrollTo: {
                                x: "+=" + 20 * currentVelocity
                            },
                            ease: Power2.easeOut
                        });
                    } else {
                        TweenMax.to($landingWrapper, 2, {
                            scrollTo: {
                                x: "-=" + 20 * currentVelocity
                            },
                            ease: Power2.easeOut
                        });
                    }
                    allowScroll = true;
                }, 100);
            } else {
                TweenMax.to($landingWrapper, 2, {
                    scrollTo: {
                        x: "+=0"
                    },
                    ease: Power2.easeOut
                });
            }
        }
    });
    $landingInnerContent2.on("mousemove touchmove", function (e) {
        if (allowScroll2) {
            land_width2 = $landingWrapper2.width();
            if ((e.clientX < land_width2 / 4) || (e.clientX > land_width2 * 3 / 4)) {
                allowScroll2 = false;
                setTimeout(function () {
                    var difference = _docWidth - e.clientX;
                    var currentVelocity = Math.round(Math.abs(calculateVelocity(e.clientX, difference)));
                    if (e.clientX > land_width2 / 2) {
                        TweenMax.to($landingWrapper2, 2, {
                            scrollTo: {
                                x: "+=" + 20 * currentVelocity
                            },
                            ease: Power2.easeOut
                        });
                    } else {
                        TweenMax.to($landingWrapper2, 2, {
                            scrollTo: {
                                x: "-=" + 20 * currentVelocity
                            },
                            ease: Power2.easeOut
                        });
                    }
                    allowScroll2 = true;
                }, 100);
            } else {
                TweenMax.to($landingWrapper2, 2, {
                    scrollTo: {
                        x: "+=0"
                    },
                    ease: Power2.easeOut
                });
            }
        }
    });
    var calculateVelocity = function (clientX, difference) {
        return clientX < threshold ? (threshold - clientX) / threshold * -maxVelocity : difference < threshold ? (threshold - difference) / threshold * maxVelocity : 0;
    };


    //**********REVIES SLIDER****************************************

    $('#reviews-slider').owlCarousel({
        loop: false,
        smartSpeed: 400,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',

        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        //touchDrag:false,
        dotsContainer: "#reviews-dots",
        onResized: function () {

        },
        onInitialized: function () {

        }
    });


    //**********HOME SLIDER****************************************
    var itemsCounter = $('#items-counter'),
        currentSlide = $('#current-slide'),
        navElemContainer = $(".nav-element-container"),
        navElemContainerElements,
        bannersSlider = $('#banners-slider');
    bannersSlider.owlCarousel({
        loop: false,
        smartSpeed: 250,
        margin: 0,
        //nav: true,
        dots: true,
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        //touchDrag:false,
        dotsContainer: ".banner-dots",
        onInitialized: function (event) {
            calculateSlideInfo(event);
            createElements(event.item.index, event.item.count);
        },
        onTranslated: function (event) {
            calculateSlideInfo(event);
            createElements(event.item.index);
        }
    });

    function calculateSlideInfo(event) {
        itemsCounter.text(event.item.count < 10 ? '/0' + (event.item.count) : '/' + event.item.count);
        currentSlide.text(event.item.index + 1 < 10 ? '0' + (event.item.index + 1) : event.item.index + 1);
    }


    function createElements(currentIndex, slideCount) {
        if (slideCount) {
            for (i = 0; i < slideCount - 1; i++) {
                navElemContainer.append("<span class='' data-nav=" + (i + 1) + "></span>");
            }
            navElemContainerElements = $(".nav-element-container span");
        } else {
            console.log(currentIndex);
            navElemContainerElements.each(function (index) {
                if (currentIndex != $(this).data('nav')) {
                    $(this).removeClass('active-nav');
                } else {
                    $(this).addClass('active-nav');
                }
            });
        }
    }
    navElemContainerElements.on('click', function () {
            bannersSlider.trigger('to.owl.carousel', $(this).data('nav'));
        })
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
            /*    ,responsive: {
                    0: {
                        items: 4,
                        margin:0
                         
                    }, 
                    950: {
                        items: 5,
                        margin:0
                    },
                    1200: {
                        items: 5
                    }  
                }*/
    });

    //==========CONTACT FORM ====================================== 
    $(".contact-form").validate({
        rules: {
            contact_subject: "required",
            contact_email: "required",
            contact_message: "required"
        },
        submitHandler: function () {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                var data = $(this.currentForm).serialize();
                $.ajax('http://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    data: data
                }).done(function (success) {
                    $("#contact_subject").val("");
                    $("#contact_email").val("");
                    $("#contact_message").val("");
                    toastr.success("Success!")
                }).fail(function (error) {
                    toastr.error("An error occured.")
                }).always(function () {
                    disabled = false;
                    button.val("Send");
                });
            }
        }
    });
    // ***************COUNTER****************************
    var sectionContainer = $('.section-counters');
    var allowCounting = true;
    $('#counters').bind('inview', function (event, visible) {
        if (visible) {
            if (allowCounting) {
                var startValues = [0, 100, 0, 0];
                var endValues = [11, 225, 155, 7];
                for (var i = 0; i < 4; i++) {
                    var element = document.getElementById("counter" + (i + 1));
                    var numAnim = new CountUp(element, startValues[i], endValues[i]);
                    numAnim.start(function () {});
                }
                allowCounting = false;
            }
            $(window).scroll(function () {
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
        .on("enter", function (e) {
            console.log("enter");
        })
    sceneNav.setClassToggle("#top-nav", "section-services");
    sceneNav.setClassToggle("#service-boxes", "active-services");

    sectionsController.scrollTo(function (newpos) {
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

        TweenMax.to(window, 0.5, {
            scrollTo: {
                y: newpos - offsetTop
            }
        });
    });
    /* scene.setClassToggle("#top-nav", "section-services");*/



    $(".menu-item, .logo-link, .nav-item").bind('click', function (event) {
        var param = event.currentTarget.attributes['data-scroll-nav'];
        if (param && param.value) {
            section_to_scroll = "#" + param.value;
            var currentElement = $(this);
            $(".menu-item").each(function (index) {
                $(this).removeClass('active-menu');
            });
            $(".nav-item").each(function (index) {
                $(this).removeClass('active-menu');
            });
            currentElement.addClass('active-menu');
            setTimeout(function () {
                sectionsController.scrollTo(section_to_scroll);
            }, 400)
        }
    });
    //********************DRAGGBLE*********************
    Draggable.create("#landing-content1", {
        bounds: $("#landing1"),
        edgeResistance: .65,
        cursor: "pointer",
        type: "x",
        throwProps: true
    });
    Draggable.create("#landing-content2", {
        bounds: $("#landing2"),
        edgeResistance: .65,
        cursor: "pointer",
        type: "x",
        throwProps: true
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
/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/
var allowdToGet = true;
var previousPosition = 0;

function trackMouse(sliders) {

    sliders.mousemove(function(e) {
        if (allowdToGet) {
            allowdToGet = false;
            setTimeout(function() {
                console.log(e.pageX - previousPosition);
                allowdToGet = true;
            }, 500);
        }
    });
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

    //**************** CONTENT SLIDERS ********************************** 

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
    //*******************************

    //=======================================================================================================
    /*    var owl = $('.owl-carousel-home');
        owl.owlCarousel({
            loop: true,
            smartSpeed: 800,
            margin: 0,
            nav: true,
            items: 1,
            autoHeight: false,
            mouseDrag: false,
            //touchDrag:false,
            onResized: function() {
                setTimeout(function() {
                    var _height = $('#main-slider').height() + "px";
                    $('.scrolling-content').animate({
                        top: _height
                    }, 100);
                }, 100);
                allowToSet = true;
            },
            onInitialized: function() {
                setTimeout(function() {
                    var _height = $('#main-slider').height() + "px";
                    $('.scrolling-content').animate({
                        top: _height
                    }, 250);
                }, 200)
            }
        });
    */
    //=================================================================
    /*    var owl_2 = $('.owl-carousel-reviews');
        var revItemIndex = $('#reviewItemIndex');
        var reviewCount = $('#reviewCount');
        owl_2.owlCarousel({
            loop: false,
            margin: 0,
            smartSpeed: 450,
            dots: false,
            nav: true,
            items: 1,
            autoHeight: false,
            mouseDrag: false,
            onInitialized: function(event) {
                reviewCount.text(event.item.count);
                revItemIndex.text(event.item.index + 1);
            },
            onChanged: function(event) {
                reviewCount.text(event.item.count);
                revItemIndex.text(event.item.index + 1);
            }
        });
    */
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

    // ========================================================


    /*  $(".contact-form").validate({
          rules: {
              contact_name: "required",
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
                      $("#_name").val("");
                      $("#_subject").val("");
                      $("#_email").val("");
                      $("#_message").val("");
                      toastr.success("Success!")
                  }).fail(function(error) {
                      toastr.error("An error occured.")
                  }).always(function() {
                      disabled = false;
                      button.val("Send");
                  });
              }
          }
      });*/
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








    //$("html, body").animate({ scrollTop: 0 }, 800, 'swing');

});

/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/

 
 
var section_to_scroll;
 
 
$(document).ready(function() {
    var disabled = false, 
        menuToggler = $('#menu-toggler'),
        mobileMenuContainer = $('.mobile-menu-container') ;

    menuToggler.click(function(event) {
        event.stopPropagation()
        $(this).toggleClass("opened-menubar");
        mobileMenuContainer.toggleClass('menu-opened')
    });
 
    //**********HOME SLIDER****************************************

    var  bannersSlider = $('#banners-slider');
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
        onInitialized: function(event) {
           
        } 
    }); 
   
 
    function initFormValidator() {

        //==========CONTACT FORM ====================================== 

        $(".contact-form").validate({
            rules: {
                contact_subject: "required",
                contact_email: "required email",
                contact_message: "required"
            },
            submitHandler: function() {
                if (!disabled) {
                    var button = $(".btn-submit");
                    button.disabled = true;
                    button.val("Sending...");
                    var data = $(this.currentForm).serialize();
                    $.post('mailer/', data, function(response) {
                        disabled = false;
                        button.val("Send");
                        if (response.error) {
                            toastr.error(response.message)
                        } else {
                            toastr.success(response.message)
                            $("#contact_subject").val("");
                            $("#contact_email").val("");
                            $("#contact_message").val("");
                        }
                    }, 'json');
                }
                disabled = true;
            }
        });

    }
 

    $(".menu-item, .logo-link, .nav-item").bind('click', function(event) {
        var param = event.currentTarget.attributes['data-scroll-nav'];
        if (param && param.value) {
            section_to_scroll = "#" + param.value;
            var currentElement = $(this);
            $(".menu-item").each(function(index) {
                $(this).removeClass('active-menu');
            });
            $(".nav-item").each(function(index) {
                $(this).removeClass('active-menu');
            });
            currentElement.addClass('active-menu');
            setTimeout(function() {
                sectionsController.scrollTo(section_to_scroll);
            }, 400)
        }
    });

 
 

    if (navigator.userAgent.match(/Trident\/7\./)) { // smooth scrolling for fixed bgs in  IE 
        $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
    //********************TOASTER *********************
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});
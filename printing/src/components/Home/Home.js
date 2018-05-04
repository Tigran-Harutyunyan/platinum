import Header from "../Header/Header.vue";

export default {
    data() {
        return {
            itemsCounter: {},
            currentSlide: {},
            navElemContainerElements: {},
            bannersSlider: {},
            minScreenWidth: 1150,
            canvas:{},
            stage: {}, 
            exportRoot: {},
            anim_container: {}, 
            dom_overlay_container: {}   
        }
    },
    methods: {
        createElements(currentIndex, slideCount) {
            if (slideCount) {
                for (var i = 0; i < slideCount - 1; i++) {
                    this.navElemContainer.append("<span class='' data-nav=" + (i + 1) + "></span>");
                }
                this.navElemContainerElements = $(".nav-element-container span");
            } else {
                this.navElemContainerElements.each(function (index) {
                    if (currentIndex != $(this).data('nav')) {
                        $(this).removeClass('active-nav');
                    } else {
                        $(this).addClass('active-nav');
                    }
                });
            }
            this.navElemContainerElements.on('click', () => {
                this.bannersSlider.trigger('to.owl.carousel', $(this).data('nav'));
            });

        },
        calculateSlideInfo(event) {
            this.itemsCounter.text(event.item.count < 10 ? '/0' + (event.item.count) : '/' + event.item.count);
            this.currentSlide.text(event.item.index + 1 < 10 ? '0' + (event.item.index + 1) : event.item.index + 1);
        },
        initBannerParallaxScroller() {

            //*************  BANNER PARALLAX SCROLLING ********************************

            if ($(window).width() > this.minScreenWidth) {
                var controllerBanner = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter",
                        duration: "200%"
                    }
                });
                var sceneBanner = new ScrollMagic.Scene({
                    triggerElement: "#main-section",
                })
                    .setTween("#mainSlider", {
                        y: "-8%",
                        ease: Linear.easeNone
                    })
                    //.addIndicators()  
                    .addTo(controllerBanner);
            }
        },
        initHomeSlider() { 

            //**********HOME SLIDER****************************************   

            this.itemsCounter = $('#items-counter');
            this.currentSlide = $('#current-slide');
            this.navElemContainer = $(".nav-element-container");
            this.navElemContainerElements;
            this.bannersSlider = $('#banners-slider');
            this.bannersSlider.owlCarousel({
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
                onInitialized: (event) => {
                    this.calculateSlideInfo(event);
                    this.createElements(event.item.index, event.item.count);
                },
                onTranslated: (event) => {
                    this.calculateSlideInfo(event);
                    this.createElements(event.item.index);
                }
            });
        },
        initLogo() { 
            this.canvas = document.getElementById("canvas");
            this.anim_container = document.getElementById("animation_container");
            this.dom_overlay_container = document.getElementById("dom_overlay_container");
            this.handleComplete();
        },
        handleComplete() {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            this.exportRoot = new lib.Logo_animation();
            this.stage = new createjs.Stage(this.canvas);
            this.stage.addChild(this.exportRoot);
            //Registers the "tick" event listener.
            var fnStartAnimation =   () =>{
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", this.stage);
            }
            //Code to support hidpi screens and responsive scaling.

            this.makeResponsive(true, 'both', false, 1);
            fnStartAnimation();
        },
        makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', this.resizeCanvas);
            function resizeCanvas() {
                var w = lib.properties.width,
                    h = lib.properties.height;
                var iw = window.innerWidth,
                    ih = window.innerHeight;
                var pRatio = window.devicePixelRatio || 1,
                    xRatio = iw / w,
                    yRatio = ih / h,
                    sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    } else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    } else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    } else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                this.canvas.width = w * pRatio * sRatio;
                this.canvas.height = h * pRatio * sRatio;
                this.canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                this.canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw;
                lastH = ih;
                lastS = sRatio;
            }
        } 
    },
    components: {
        "pl-header": Header
    },
    mounted() {
        this.initHomeSlider();
        this.initBannerParallaxScroller();
        this.initLogo();
        $("#graphics_slider, #web_slider").mThumbnailScroller({
            theme: "hover-classic", //"hover-precise", //theme:"hover-classic"
            speed: 15
        });
        $('.open-popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-with-zoom',

            zoom: {
                enabled: true,
                duration: 300
            }
        });

    }
}
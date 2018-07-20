 export default {
   data() {
     return {
       currentSlide: 1,
       slidesLength: '',
       swiperOption: {
         slidesPerView: 1,
         fadeEffect: {
           crossFade: true
         },
         speed: 700,
         effect: 'fade',
         autoplay: true,
         pagination: {
           el: '.big-slider-pagination',
           clickable: true
         }
       },
       showBoxes: false
     }
   },
   mounted() {
     this.setSlidesItems(1); //set slide item info.

     this.swiper.on('slideChange', () => {
       //handle slide change.
       let currentIndex = this.swiper.activeIndex + 1;
       if (currentIndex === 2) {
         this.showBoxes = true
       }
       this.setSlidesItems(currentIndex);
     });

     this.initLogo();

   },
   computed: {
     swiper() {
       return this.$refs.bigSlider.swiper
     },
     customData() {
       return this.$store.getters.getCustomData;
     }
   },

   methods: {
     setSlidesItems(currentIndex) {
       let slidesLength = this.swiper.slides.length;
       //this.slidesLength = (currentIndex < 10) ? '/0' + slidesLength : '/' + slidesLength;
       this.currentSlide = (currentIndex < 10) ? '0' + currentIndex : currentIndex;
     },
     // Logo animation related.
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
       var fnStartAnimation = () => {
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
   }
 }

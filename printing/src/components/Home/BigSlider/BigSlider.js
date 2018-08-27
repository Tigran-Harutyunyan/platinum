 import LogoAnimation from './LogoAnimation/LogoAnimation.vue';
 import SocialMedia from "../SocialMedia/SocialMedia.vue";
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
         speed: 2000,
         effect: 'fade',
         autoplay: {
          delay: 5000,
          },
         pagination: {
           el: '.big-slider-pagination',
           clickable: true
         }
       },
       showBoxes: false
     }
   },
   components: {
     'logo-animation': LogoAnimation,
     'social-media': SocialMedia
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

   },
   computed: {
     swiper() {
       return this.$refs.bigSlider.swiper
     }
   },
   methods: {
     setSlidesItems(currentIndex) {
       let slidesLength = this.swiper.slides.length;
       this.slidesLength = (currentIndex < 10) ? '/0' + slidesLength : '/' + slidesLength;
       this.currentSlide = (currentIndex < 10) ? '0' + currentIndex : currentIndex;
     }
   }
 }

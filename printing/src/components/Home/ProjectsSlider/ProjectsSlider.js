import {
  EventBus
} from '../../../event-bus';
import data from './slidersData'
export default {
  data() {
    return {
      visible: false,
      index: 0,
      projects: [],
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 20,
        autoplay: true,
        isInitialized: false,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1250: {
            slidesPerView: 4
          },
          860: {
            slidesPerView: 3
          },
          560: {
            slidesPerView: 2
          },
          340: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.myProjects.swiper
    },
    projectsSliderImages: {
      get: function () {
        return this.$store.getters.projectsSliderImages;
      },
      set: function () {}
    }
  },
  created() {
    let data = this.$store.getters.projectsSliderImages;
    if (!data.length) {
      this.$store.dispatch('getProjectSliderImages');
    }
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
            this.next();
            break;
          case 'ArrowLeft':
            this.prev();
            break;
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault();
            break;
          case 'Escape':
            this.hide();
            break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  updated() {
    /*  if (!this.isInitialized) {
       this.isInitialized = true;
       setTimeout(function () {
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
       }, 400) 
     } */
  }
}

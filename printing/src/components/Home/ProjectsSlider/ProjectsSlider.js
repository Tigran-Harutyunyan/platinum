import {
  EventBus
} from '../../../event-bus';
import data from './slidersData'
export default {
  data() {
    return {
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
  updated() {
    if (!this.isInitialized) {
      this.isInitialized = true;
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
}

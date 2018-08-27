export default {
  data() {
    return {
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
      return this.$refs.myProjects.swiper;
    },
    projectsSliderImages: {
      get: function () {
        return this.$store.getters.projectsSliderImages;
      },
      set: function () {}
    } 
  },
  methods: {
   
  },
  created() {
    let data = this.$store.getters.projectsSliderImages;
    if (!data.length) {
      this.$store.dispatch('getProjectSliderImages');
    }
  } 
} 
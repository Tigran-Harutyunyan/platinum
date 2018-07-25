export default {
  data() {
    return {
      projects: [],
      swiperOption: {
        slidesPerView: 5,
        autoplay: true,
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
    partnersImages: {
      get: function () {
        return this.$store.getters.partnersImages;
      },
      set: function () {}
    }
  },
  swiper() {
    return this.$refs.partners.swiper;
  }, 
  mounted() {
    let data = this.$store.getters.partnersImages;  
    if (!data.length) {
      this.$store.dispatch('getPartnersImages');
    } 
  }
}

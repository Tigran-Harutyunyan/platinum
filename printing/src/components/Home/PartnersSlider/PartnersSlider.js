export default {
  data() {
    return {
      projects: [],
      swiperOption: {
        slidesPerView: 5,
        autoplay: true
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

export default {
  data() {
    return {}
  },
  directives: {
    carousel: {
      inserted: function (el) {
        $(el).owlCarousel({
          loop: true, 
          rewind: true,
          //autoplay: true,
          //margin: 20, 
          nav: true,
          dots:false, 
          mouseDrag: true,
          responsive: {
            0: {
              items:1
            },
            630: {
              items:2,  
            },
            890: {
              items: 3, 
            }, 
            1190: {
              items:4,  
            },
            1400: {
              items: 5,  
            },
            1620: {
              items: 6,
              margin:0 
            } 
          }
        }) 
      },
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
  mounted() {
    let data = this.$store.getters.partnersImages;  
    if (!data.length) {
      this.$store.dispatch('getPartnersImages');
    } 
  }
}

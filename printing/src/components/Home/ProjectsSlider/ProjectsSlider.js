export default {
  data() {
    return {
      visible: false,
      index: 0,
      projects: [],
      dialogTableVisible: false,
      counter: 0,
      popupImage: {},
      currentSlideIndex: '', 
    }
  },
  computed: { 
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
  directives: {
    carousel: {
      inserted: function (el) {
        $(el).owlCarousel({
          loop: true,
          rewind: true,
          autoPlay: true,
          margin: 20,
         // navElement: $('#navi'),
          nav: true,
          dots:false,
       
          mouseDrag: true,
          responsive: {
            0: {
              items: 1,  
            },
            600: {
              items: 3, 
            },
             
            950: {
              items: 3,  
            },
            1000: {
              items: 5,  
            }
          }
        })
        console.log("crousel inserted")
      },
    }
  },

  methods: { 
    openPopup(image, index) {
      this.popupImage = image;
      this.counter = index;
      setTimeout(() => {
        this.dialogTableVisible = true;
      }, 100);
    },
    navigate(direction) {
      if ((this.counter == 0 && direction == -1) || (this.counter == this.projectsSliderImages.length - 1 && direction == 1)) {
        return;
      }
      this.counter = this.counter + direction;
      if (direction === -1 && this.counter < 0) {
        this.counter = this.amount - 1;
      }
      if (direction === 1 && !this.projectsSliderImages[this.counter]) {
        this.counter = 0;
      }
      this.popupImage = this.projectsSliderImages[this.counter].image;
    },
    show() {
      this.visible = true;
    }
  }
}

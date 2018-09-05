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
            200: {
              items:1
            },
            550: {
              items:2,  
            },
            820: {
              items: 3, 
            }, 
            1070: {
              items: 4,  
            },
            1500: {
              items: 5,  
            },
            1600: {
              items: 6 
            } 
          }
        }) 
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

export default {
  data() {
    return {
      visible: false,
      index: 0,
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
        $(el).slick({
          autoplay: true,
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 7,
          slidesToScroll: 3,
          draggable: false,
          responsive: [{ 
              breakpoint: 1640,
              settings: {
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1350,
              settings: {
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1090,
              settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 830,
              settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 560,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true 
              }
            }
          ]
        });
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

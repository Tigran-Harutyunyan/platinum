import data from './slidersData'
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
  created() {
    let data = this.$store.getters.projectsSliderImages;
    if (!data.length) {
      this.$store.dispatch('getProjectSliderImages');
    }
  },
  methods: {
    openPopup(image,index) {
      this.popupImage = image; 
      this.counter  = index;
      setTimeout(() => {
        this.dialogTableVisible = true;
      }, 100);
    },
    navigate(direction) { 
      if ((this.counter == 0 &&  direction ==-1) || (this.counter == this.projectsSliderImages.length-1 && direction == 1)){
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

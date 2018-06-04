import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import VueGridLayout from "vue-grid-layout";
import isotope from 'vueisotope';
export default {
  data() {
    return {
      popupVisible: false,
      counter: 0,
      currentSlide: {}
    }
  },
  computed: {
    apiPath() {
      return this.$store.getters.getApiPath;
    },
    amount() {
      return this.completedWorks.length;
    },
    completedWorks: {
      get: function () {
        return this.$store.getters.getCompletedWorks;
      },
      set: function () {}
    }
  },
  methods: {
    getOptions() {
      return {
        itemSelector: '.grid-item',
        // layout mode options
        masonry: {
          columnWidth: 350,
          gutter: 16
        }
      }
    },
    getCounter(id) {
      this.completedWorks.forEach((element, index) => {
        if (element.id == id) {
          return index;
        }
      });
    },
    openPopup(item) {
      this.getCompletedWorkById(item.id);
      this.counter = this.getCounter(item.id);
      $('html').addClass("no-scroll")
    },
    closePopup() {
      this.popupVisible = false;
      $('html').removeClass("no-scroll")
    },
    navigate(direction) {
      this.counter = this.counter + direction;
      if (direction === -1 && this.counter < 0) {
        this.counter = this.amount - 1;
      }
      if (direction === 1 && !this.completedWorks[this.counter]) {
        this.counter = 0;
      }
      let id;
      this.completedWorks.forEach((element, index) => {
        if (index == this.counter) {
          id = element.id
        }
      });

      this.getCompletedWorkById(id);
    },
    getCompletedWorkById(id) {
      this.$store.dispatch('getCompletedWorkById', id).then((response) => {
        if (response[0] && response[0].id) {
          this.currentSlide = response;
          this.popupVisible = true;
        }
      }).catch((error) => {});
    }
  },
  mounted() {
    this.$store.dispatch('getCompletedWorks');
  },
  components: {
    "pl-header": Header,
    "pl-footer": Footer,
    isotope
  }
}

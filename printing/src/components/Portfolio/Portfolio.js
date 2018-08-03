import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import VueGridLayout from "vue-grid-layout";
import isotope from 'vueisotope';
import PortfolioPopup from './PortfolioPopup/PortfolioPopup.vue';
export default {
  data() {
    return { 
      counter: 0,
      currentSlideID: '',
      showContent: false,
      loading: true
    }
  },
  watch: {
    completedWorks() {
      this.loading = false;
      this.showContent = true;
    }
  },
  computed: {
    apiPath() {
      return this.$store.getters.getApiPath;
    }, 
    completedWorks: {
      get: function () {
        return this.$store.getters.getCompletedWorks;
      },
      set: function () {}
    }
  },
  methods: {  
    getOptions: function () {
      var _this = this
      return {
        name: '.grid-item',
        masonry: {
          columnWidth: 348,
          gutter: 16,
          originTop: true,
          layoutMode: 'packery',
          horizontalOrder: true
        }
      }
    },
    onPopupClosed(){
      this.currentSlideID = -1;
    } 
  },
  mounted() {
    this.$store.dispatch('getCompletedWorks');
  },
  components: {
    Header,
    Footer,
    PortfolioPopup,
    isotope
  }
}

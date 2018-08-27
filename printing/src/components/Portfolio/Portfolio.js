import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import VueGridLayout from "vue-grid-layout";
import isotope from 'vueisotope';
import PortfolioPopup from './PortfolioPopup/PortfolioPopup.vue';
import debounce from 'lodash.debounce';
export default {
  data() {
    return { 
      counter: 0,
      currentSlideID: '',
      showContent: false,
      loading: true,
      scrollPosition: ""
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
    invokeSearching: _.debounce(function () {
      this.scrollPosition = window;
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById("scrolledDiv").getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
      console.log('Element is ' + offset + ' vertical pixels from <body>');
    }, 400),
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
     document.getElementById("scrolledDiv").addEventListener('scroll', this.invokeSearching);  
  },
  destroy() { 
    window.removeEventListener('scroll');
  },
  components: {
    Header,
    Footer,
    PortfolioPopup,
    isotope
  }
}

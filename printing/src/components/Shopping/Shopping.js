import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import Slider from "../Slider/Slider.vue";
import Sidebar from "../Sidebar/Sidebar.vue";
import HelperLinks from "../HelperLinks/HelperLinks.vue";
import InfoTabs from "../InfoTabs/InfoTabs.vue";
import HeaderCategories from '../MobileProductList/MobileProductList.vue';
export default {
  name: 'home',
  components: {
    Header,
    Slider,
    Footer,
    Sidebar,
    HelperLinks,
    InfoTabs,
    HeaderCategories,
    fullWidth: false
  },
  data() {
    return {
      showSidebar: false, 
      showCategoryDropdown: false,
      showInfoTabs: false
    };
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to.name);
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    fromBurger(){
      console.log('sdfdfs');
    },
    toggleCategoryDropdown() {
      this.showCategoryDropdown = !this.showCategoryDropdown;
    },
    checkRoute(route) {
      this.showSidebar = route != "advertisement";
      this.showInfoTabs = route == "Categories" || route == "ProductDetail" ? true : false;
      this.fullWidth = route === "advertisement";
    }
  },

  created() {
    this.checkRoute(this.$route.name);
  }
}

import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import Slider from "../Slider/Slider.vue";
import Sidebar from "../Sidebar/Sidebar.vue";
import HelperLinks from "../HelperLinks/HelperLinks.vue";
import InfoTabs from "../InfoTabs/InfoTabs.vue";
export default {
  name: 'home',
  components: {
    Header,
    Slider,
    Footer,
    Sidebar,
    HelperLinks,
    InfoTabs
  },
  data() {
    return {
      showSidebar: false
    };
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to.name);
    }
  },
  methods: {
    checkRoute(route) {
      this.showSidebar =
        route == "Categories" || route == "ProductDetail" ? true : false;
    }
  },
  created() {
    this.checkRoute(this.$route.name);
  }
} 
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
    HeaderCategories
  },
  data() {
    return {
      showSidebar: false,
      productList: {},
      showCategoryDropdown: false
    };
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to.name);
    },
    products: function (newVal, oldVal) { 
      this.productList = newVal; 
      this.$store.dispatch('setSideBarProducts',products);
    } 
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }, 
    sidebarProducts: {
      get: function () {
        return this.$store.getters.sidebarProducts;
      },
      set: function () {}
    }
  }, 
  methods: {
    toggleCategoryDropdown(){
      this.showCategoryDropdown = !this.showCategoryDropdown;
    },
    checkRoute(route) {
      this.showSidebar =  route == "Categories" || route == "ProductDetail" ? true : false;
    }  
  }, 
  mounted(){
    if (this.sidebarProducts) { 
      this.isLoading = false;
      this.productList = this.sidebarProducts;
    } else {
      this.$store.dispatch('getProducts');
    }  
  },
  created() {
    this.checkRoute(this.$route.name);
  }
} 
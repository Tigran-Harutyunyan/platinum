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
      let products = newVal;
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const element = products[key];
          element[0].categoryName = this.getCategoryName(element[0].category_id); 
        }
      }
      this.isLoading = false;
      this.productList = products; 
      this.$store.dispatch('setSideBarProducts',products);
    },
    categories: function (newVal, oldVal) {
      this.categories = newVal;
      this.$store.dispatch('getProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    categories: {
      get: function () {
        return this.$store.getters.categories;
      },
      set: function () {}
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
    },
    getCategoryName(category_id) {
      let categoryName = "";
      this.categories.forEach(category => {
        if (category_id == category.id) {
          categoryName = category.name;
        }
      });
      return categoryName;
    }
  }, 
  mounted(){
    if (this.sidebarProducts) { 
      this.isLoading = false;
      this.productList = this.sidebarProducts;
    } else {
      let categories = this.$store.getters.categories;
      if (!categories) {
        this.$store.dispatch('getCategories');
      } else {
        this.$store.dispatch('getProducts');
      }
    }  
  },
  created() {
    this.checkRoute(this.$route.name);
  }
} 
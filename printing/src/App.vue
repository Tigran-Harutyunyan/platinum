<template>
  <div id="app"> 
    <pl-header></pl-header>
     <div class="main-section content-area" style="margin-top: 70px;" id="products">
          <slider></slider> 
          <div class="content-area products-area" style="position:relative">
             <div class="products-inner">
                <div class="large-triangle1 triangles tr-1"></div>
                <div class="large-triangle1 triangles tr-2"></div>
                <div class="logo-transparent"></div>
                <div class="large-triangle1 triangles tr-3"></div>
                <div class="large-triangle1 triangles tr-4"></div>
                <sidebar v-show="showSidebar"></sidebar>
                <div class="products-main">
                    <helper-links></helper-links>
                    <router-view/>
                    <help-tabs v-show="showSidebar"></help-tabs>
                </div>
            </div> 
        </div>
        <pl-footer></pl-footer>
     </div> 
  </div>
</template>

<script>
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";

import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Slider from "./components/Slider/Slider.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import HelperLinks from "./components/HelperLinks/HelperLinks.vue";
import HelpTabs from "./components/HelpTabs/HelpTabs.vue";
import styles from "./assets/css/styles.scss";
import {
  Carousel,
  CarouselItem,
  Select,
  Option,
  Input,
  Button,
  Checkbox,
  Upload,
  MessageBox,
  Notification,
  Table,
  TableColumn,
  Tabs,
  TabPane
} from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Upload);
Vue.use(Table);
Vue.use(TableColumn); 
Vue.use(Tabs);
Vue.use(TabPane); 
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
 
locale.use(lang)
export default {
  name: "App",
  components: {
    "pl-header": Header,
    slider: Slider,
    "pl-footer": Footer,
    sidebar: Sidebar,
    "helper-links": HelperLinks,
    "help-tabs": HelpTabs
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
        route == "Products" || route == "ProductDetail" ? true : false;
    }
  },
  created() {
    this.checkRoute(this.$route.name);
  }
};
</script>
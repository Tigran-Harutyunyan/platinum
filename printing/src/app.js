import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);
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
    TabPane,
    Form,
    FormItem
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
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang);

const AdminApi = require('./admin-api');
Vue.use(AdminApi);

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
                route == "Categories" || route == "ProductDetail" ? true : false;
        }
    },
    created() {
        this.checkRoute(this.$route.name);
        this.$store.dispatch('getCategories');
    }
};
import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);
import "element-ui/lib/theme-chalk/index.css";

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
    Loading,
    Table,
    TableColumn,
    Tabs,
    TabPane,
    Form,
    FormItem,
    DatePicker
} from "element-ui";
Vue.use(Loading.directive);
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
Vue.use(DatePicker);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang);

import VueAwesomeSwiper from 'vue-awesome-swiper'; 
// require styles
import 'swiper/dist/css/swiper.css'; 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

const AdminApi = require('./admin-api');
Vue.use(AdminApi);

export default {
    name: "App", 
    data() {
        return {};
    },
   /*  watch: {
        $route(to, from) {}
    }, */
    methods: {
        
    },
    created() { 
        this.$store.dispatch('getCategories');
    }
};
import Vue from 'vue';
 
import 'element-ui/lib/theme-chalk/index.css';
import styles from '../static/sass/styles.scss';


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
    DatePicker,
    Popover,
    Dialog,
    Collapse,
    CollapseItem
} from 'element-ui';
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
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang); 
 
import storage from './storage';

export default {
    name: 'App', 
    watch: {
        '$route': function (to, from) {
            if (to.name == 'Cart') {
                $('html').stop().animate({
                    scrollTop: 400
                }, 700, 'swing', function () {});
            }
        }
    },
    created() {
        this.$store.dispatch('getProducts');
    
        if (storage.getToken()) {
            this.$store.dispatch('getBasketProducts');
        }
    }
};

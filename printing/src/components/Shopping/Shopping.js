import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import Slider from "../Slider/Slider.vue";
import Sidebar from "../Sidebar/Sidebar.vue";
import HelperLinks from "../HelperLinks/HelperLinks.vue";
import HelpTabs from "../HelpTabs/HelpTabs.vue";
export default {
    name: 'home',
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
    created(){ 
        this.checkRoute(this.$route.name);
    }
}
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import VueGridLayout from "vue-grid-layout";

export default {
    data() {
        return {
            numbers: []
        }
    },
    created() {
        for (let index = 0; index < 32; index++) {
            this.numbers.push(index);
        } 
    },
    mounted() { 
        var $grid = $('.grid').masonry({ 
            itemSelector: '.grid-item',
            gutter: 16,
            horizontalOrder: true,
            fitWidth: true
        });
    },
    components: {
        "pl-header": Header,
        "pl-footer": Footer
    }
}
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import VueGridLayout from "vue-grid-layout";

export default {
    data() {
        return {
            items: [],
            popupVisible: false,
            counter: 0,
            currentSlide: {}
        }
    },
    created() {
        for (let index = 0; index < 32; index++) {
            this.items.push(index);
        }
    },
    computed:{
        amount(){
            return this.items.length;
        }
    },
    methods:{
        openPopup(index){   
            this.currentSlide = this.items[index]; 
            this.counter = index;
            this.popupVisible = true; 
            $('html').addClass("no-scroll")
        },
        closePopup(){
            this.popupVisible = false; 
            $('html').removeClass("no-scroll")
        },
        navigate(direction) {
            //current.classList.remove('current');
            this.counter = this.counter + direction;
            if (direction === -1 &&  this.counter < 0) { 
                    this.counter = this.amount - 1; 
            }
            if (direction === 1 &&  !this.items[this.counter]) { 
                    this.counter = 0;
            }
            this.currentSlide = this.items[this.counter]; 
          }  
    },
    mounted() {
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            gutter: 16,
            horizontalOrder: true,
            fitWidth: true,
            columnWidth: 350 
        });
     
        $(window).resize(() => {
            $grid.masonry()
        });
    },
    components: {
        "pl-header": Header,
        "pl-footer": Footer
    }
}
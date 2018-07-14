import { EventBus } from '../../../event-bus';
import data from './slidersData'
export default {
    data() {
        return { 
            projects: [],
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 20,
                autoplay:true, 
               /*  breakpoints: { 
                    1250: {
                      slidesPerView: 4, 
                    } 
                  } */
            }
        }
    },
    created() {
        this.projects = data.graphic;  
    },
    swiper() {
        return this.$refs.myProjects.swiper
    },
    mounted(){ 
        $('.open-popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-with-zoom', 
            zoom: {
                enabled: true,
                duration: 300
            }
        });
    }
}
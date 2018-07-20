export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: { 
                    1250: {
                      slidesPerView: 1, 
                    } 
                  }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }, 
        staffData: {
            get: function() {
                return this.$store.getters.getStaffData;
            },
            set: function() {}  
        }, 
    },
    mounted(){
        let data = this.$store.getters.getStaffData;
        if (!data) {  
             this.$store.dispatch('getStaffInfo');
        } 
    } 
    
}
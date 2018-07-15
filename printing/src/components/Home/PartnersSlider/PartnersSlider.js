export default {
    data() {
        return { 
            projects: [],
            swiperOption: {
                slidesPerView: 5,   
                autoplay:true 
            }
        }
    }, 
    swiper() {
        return this.$refs.partners.swiper
    } 
}
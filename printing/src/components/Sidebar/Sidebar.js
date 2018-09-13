import Preloader from '../../commonComponents/Preloader/Preloader.vue';
export default {
  data() {
    return { 
      isLoading: true
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  components:{
    Preloader
  }  
}

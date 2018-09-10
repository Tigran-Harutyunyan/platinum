import Preloader from '../../commonComponents/Preloader/Preloader.vue';
export default {
  data() {
    return { 
      isLoading: true
    }
  },
  props: {
    productList: {}
  },
  components:{
    Preloader
  },
  watch: {
    productList(newVal) { 
      this.isLoading = false;
      this.productList = newVal; 
    } 
  }   
}

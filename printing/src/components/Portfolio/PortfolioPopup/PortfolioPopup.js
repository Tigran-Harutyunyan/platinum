 export default {
   props: ['currentSlide'],
   methods: {
    navigate(direction){
      this.$emit('navigate',direction);
    },
    closePopup(){
      this.$emit('closePopup');
    }
   }
 }

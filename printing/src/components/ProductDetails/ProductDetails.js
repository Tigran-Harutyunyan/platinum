export default { 
    data() {
        return {
          fileList:[],
            options: [{
                value: 'Option1',
                label: 'Option1'
              }, {
                value: 'Option2',
                label: 'Option2'
              }, {
                value: 'Option3',
                label: 'Option3'
              }],
              value: '',
              styleObject: null
        }
    }, 
    methods: {
      handleChange(file, fileList) {   
        if(file.raw.type.indexOf('image')!= -1){
          var fr = new FileReader(); 
          fr.onload =  () =>{  
              this.styleObject = {
                'background-image': `url(${fr.result})`,
                'background-color':'transparent' 
              } 
          }
          fr.readAsDataURL(file.raw); 
        } 
        this.fileList = fileList.slice(-1);
        /* this.$notify({
          title: 'Upload file',
          message: 'Success!',
          position: "top-right",
          type: "success"
        }); */
      },
      handleRemove(file, fileList) { 
        this.fileList = fileList.slice(-1);
        this.styleObject = {}
      }
    } 
}

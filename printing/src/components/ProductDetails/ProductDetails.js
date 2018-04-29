export default {
    data() {
        return {
            fileList: [],
            sizes: [],
            value: '',
            styleObject: null,
            product: {},
            productInfo: {},
            paperType: [],
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }] 
        }
    },
    watch: {
        '$route' (to, from) {
            this.getProductById();
        }
    },
    methods: {
        handleChange(file, fileList) {
            if (file.raw.type.indexOf('image') != -1) {
                var fr = new FileReader();
                fr.onload = () => {
                    this.styleObject = {
                        'background-image': `url(${fr.result})`,
                        'background-color': 'transparent'
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
        },
        getProductById() {
            this.$store.dispatch('getProductById', {
                id: this.$route.params.id
            }).then((response) => {
                this.product = response;
                this.productInfo = response[0]; 
                if (this.product.properties.Size.length){
                  this.sizes = this.product.properties.Size;
                } 
                
                if (this.product.properties.Size.length){
                  this.paperType = this.product.properties.Size;
                } 
            }).catch((error) => { 
            });
        }
    },
    created() {
        this.getProductById();
    }
}
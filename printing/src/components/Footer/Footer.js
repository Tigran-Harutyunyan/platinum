export default {
    name: 'pl-footer',
    data() {
        return {
            email:''
        }
    },
    methods: {
        submit() {
            this.$notify({
                title: 'Subsribe',
                message: 'Comming soon!',
                position: "top-right",
                type: "warning"
            });
        }
    }
}
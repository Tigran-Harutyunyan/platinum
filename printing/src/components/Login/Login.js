export default {
    data() {
        return { 
            email: "admin@mplatinumInc.com",
            password: "1"
        }
    },
    methods: {
        submit() {
             this.$store.dispatch('requestLogin', {
                email: this.email,
                password: this.password
            }).then((response) => {
                console.log(response)

            }).catch((error) => {

            });    
        }
    }
}
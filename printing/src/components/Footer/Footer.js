import {
    required,
    minLength,
    email
} from 'vuelidate/lib/validators';
export default {
    name: 'pl-footer',
    data() {
        return {
            email: '',
            loading: false
        }
    },
    methods: {
        onSubmit() {
            if (!this.loading && !this.$v.$invalid) {
                this.loading = true;
                this.$store.dispatch('requestSubscribe', {
                    contact_email_subscribe: this.email
                }).then((response) => {
                    this.loading = false;
                    if (response.success) {
                        this.$notify({
                            title: 'Subscribe',
                            message: 'You have been successfully subscribed',
                            position: "top-right",
                            type: "success"
                        });
                    } else {
                        this.$notify({
                            title: 'Subscribe',
                            message: 'Subscription error',
                            position: "top-right",
                            type: "error"
                        });
                    }
                }).catch((error) => {
                    this.loading = false;
                    this.$notify({
                        title: 'Subscribe',
                        message: 'Server error',
                        position: "top-right",
                        type: "error"
                    });
                });
            }
        }
    },
    computed: {
        customData() {
            return this.$store.getters.getCustomData;
        }
    },
    mounted() {
        this.$store.dispatch('getCustomData');
    },
    validations: {
        email: {
            required,
            email
        }
    }
}
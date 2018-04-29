import VueRecaptcha from 'vue-recaptcha';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
//https://www.google.com/recaptcha/admin#site/341190406
export default {
    data() {
        return {
            agree: false,
            recaptchaResponse: "",
            first_name: "Tigran",
            last_name: "Harutyunyan",
            company_name: "Sun",
            email: "tigran@mail.ru",
            password: "",
            receive_promotions: false,
            recaptcha: '',
            passwordConfirm: '',
            isLoading: false
        }
    },
    computed: {
        isFormValid(){
            return !this.$v.$invalid  && this.agree && this.recaptchaResponse.length;
        }
    },
    methods: {
        onSubmitSignup() { 
            if (!this.isLoading) {
                this.isLoading = true;
                this.$store.dispatch('requestSignup', {
                    email: this.email,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    company_name: this.company_name,
                    receive_promotions: this.receive_promotions,
                    recaptcha: this.recaptchaResponse
                }).then((response) => {
                    this.isLoading = false
                    console.log(response); 
                }).catch((error) => {
                    this.isLoading = false
                });
            }
        },
        onVerify(response) {
            this.recaptchaResponse = response
        },
        onExpired() {
            this.$refs.recaptcha.reset();
        },
        resetRecaptcha() {
            this.$refs.recaptcha.reset(); // Direct call reset method
        }
    },
    components: { VueRecaptcha },
    validations: {
        first_name: {
            required
        },
        last_name: {
            required
        }, 
        email: {
            required,
            email
        }, 
        password: {
            required,
            minLength: minLength(6)
        },
        passwordConfirm: {
            required,
            sameAsPassword: sameAs('password')
        }
    }
}
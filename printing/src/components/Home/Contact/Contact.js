import {
    required,
    minLength,
    email
} from 'vuelidate/lib/validators'; 

import PartnersSlider from "../PartnersSlider/PartnersSlider.vue";
import SocialMedia from "../SocialMedia/SocialMedia.vue";
// import utils from '../../../utils'; 
export default {
    data() {
        return {
            email: '',
            subject: '',
            message: '',
            loading: false
        }
    },
    props: ['locale'],
    computed: {
        customData() {
            return this.$store.getters.getCustomData;
        }
    },
    mounted() {
        this.$store.dispatch('getCustomData');
    },
    methods: {
        onSubmit() {
            if (!this.loading && !this.$v.$invalid) {
                this.loading = true;
                this.$store.dispatch('requestContact', {
                    contact_email: this.email,
                    contact_message: this.message,
                    contact_subject: this.subject
                }).then((response) => {
                    this.loading = false;
                    if (response.success) {
                        this.$notify({
                            title: 'Contact',
                            message: 'The message has been sent successfully',
                            position: "top-right",
                            type: "success"
                        });
                    } else {
                        this.$notify({
                            title: 'Contact',
                            message: 'Error sending contact information',
                            position: "top-right",
                            type: "error"
                        });
                    }
                }).catch((error) => {
                    this.loading = false;
                    this.$notify({
                        title: 'Contact',
                        message: 'Error sending contact information',
                        position: "top-right",
                        type: "error"
                    });
                });
            }
        },
    },
    components: { 
        'partners-slider': PartnersSlider,
        'social-media': SocialMedia
    },
    validations: {
        email: {
            required,
            email
        },
        subject: {
            required
        },
        message: {
            required
        }
    }
}
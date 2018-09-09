import {
  required, 
  email 
} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      recoveryMail: "",
      loading: false
    }
  },
  computed: {
    isAllowedToRequest() {
      return !this.$v.email.$invalid && !this.$v.password.$invalid && !this.loading;
    }
  },
  methods: {
    onSubmit() {
        if (!this.$v.recoveryMail.$invalid) {
          this.$store.dispatch('recover', {
            email: this.recoveryMail
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
  
          });
        }
      },
  },
  validations: {
    recoveryMail: {
      required,
      email
    }
  }
}

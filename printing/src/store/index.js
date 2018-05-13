import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        data: {},
        userInfo: {},
        products: {},
        categories: [],
        apiPath: "http://api.platinuminkdesign.com",
        storage: {locale:"en"},
        customData: {},
        sliderImages: []
    },
    getters: {
        appData: state => state.data,
        getUserInfo: state => state.userInfo,
        getApiPath: state => state.apiPath,
        products: state => state.products,
        categories: state => state.categories,
        getStorage: state => state.storage,
        getApiPath: state => state.apiPath,
        getCustomData: state => state.customData,
        getSliderImages: state => state.sliderImages,
    },
    mutations: {
        SET_DATA(state, payload) {
            state.data = payload;
        },
        SET_USER_INFO(state, payload) {
            state.userInfo = payload;
        },
        updateProducts(state, products) {
            state.products = products;
        },
        updateCategories(state, categories) {
            state.categories = categories;
        },
        SET_STORAGE(state, payload) {
            state.storage = payload;
        },
        SET_CUSTOM_DATA(state, payload) {
            state.customData = payload;
        },
        UPDATE_SLIDER_IMAGES(state, payload) {
            state.sliderImages = payload;
        }
    },
    actions: { 
        setStorage({ commit }, payload) {
            commit('SET_STORAGE', payload)
        },
        setData({ commit }, payload) {
            commit('SET_DATA', payload)
        },
        setUserInfo({ commit }, payload) {
            commit('SET_USER_INFO', payload)
        },
        getProducts({
            commit
        }, data) {
            axios.get(`${this.state.apiPath}/api/getProductsList?lang=${this.state.storage.locale}`).then((response) => {
                commit('updateProducts', response.data)
            })
        },
        getSliderImages({
            commit
        }, data) {
            axios.get(`${this.state.apiPath}/api/getSliderImages?lang=${this.state.storage.locale}`).then((response) => {
               if (Array.isArray(response.data)){
                    response.data.forEach(element => {
                        element.imageStyle = {
                            'background-image': `url(${this.state.apiPath}${element.image})`  
                        }
                        element.image = `${this.state.apiPath}${element.image}`;
                        element.productLink = `/#/product${element.product_id}`
                    }); 
                    commit('UPDATE_SLIDER_IMAGES', response.data)
                } 
            })
        },
        getCategories({
            commit
        }, data) {
            axios.get(`${this.state.apiPath}/api/getCategories?lang=${this.state.storage.locale}`).then((response) => {
                commit('updateCategories', response.data)
            })
        },
        requestLogin({
            commit
        }, {
            first_name,
            last_name,
            company_name,
            email,
            password,
            receive_promotions,
            recaptcha
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/login`,
                    method: 'post',
                    params: {
                        email,
                        password
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        requestLogOut({
            commit
        }, {
            token
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/logout`,
                    method: 'post',
                    params: {
                        token
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        requestSignup({
            commit
        }, {
            first_name,
            last_name,
            company_name,
            email,
            password,
            receive_promotions,
            recaptcha
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/register`,
                    method: 'post',
                    params: {
                        first_name,
                        last_name,
                        company_name,
                        email,
                        password,
                        receive_promotions,
                        recaptcha
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        requestLogOut({
            commit
        }, {
            formData
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/logout`,
                    method: 'post',
                    data: formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        addProductToBasket({
            commit
        }, {
            formData 
        }) { 
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/addProductToBasket`,
                    method: 'post',
                    data: formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(response =>{
                    reject(response);
                })
            });
        },  
        getBasketProducts({
            commit
        }, {
            formData 
        }) { 
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/getBasketProducts?lang=am`,
                    method: 'post',
                    data: formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(response =>{
                    reject(response);
                })
            });
        },   
        requestContact({
            commit
        }, {
            contact_email,
            contact_message,
            contact_subject
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/sendEmail`,
                    method: 'post',
                    params: {
                        contact_email,
                        contact_message,
                        contact_subject
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        requestSubscribe({
            commit
        }, {
            contact_email_subscribe
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/addSubscriber`,
                    method: 'post',
                    params: {
                        contact_email_subscribe
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        getProductById({
            commit
        }, {
            id
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/getProductById?id=${id}&lang=${this.state.storage.locale}`,
                    method: 'get',
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        },
        getCustomData({
            commit
        }, data) {
            if (Object.keys(this.state.customData).length === 0) {
                return new Promise((resolve, reject) => {
                    axios({
                        url: `${this.state.apiPath}/api/getCustomData`,
                        method: 'get',
                    }).then(response => {
                        resolve(response.data);
                        if (response.data && response.data.email) {
                            commit('SET_CUSTOM_DATA', response.data)
                        }
                    }).catch(function(error) {
                        reject(error);
                    })
                });
            } 
        }
    }
})
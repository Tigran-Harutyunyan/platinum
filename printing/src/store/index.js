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
        apiPath: "http://api.platinuminkdesign.com/",
        locale: ''
    },
    getters: {
        appData: state => state.data,
        getUserInfo: state => state.userInfo,
        getApiPath: state => state.apiPath,
        products: state => state.products,
        categories: state => state.categories,
        locale: state => state.locale,
        getApiPath: state => state.apiPath
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
        SET_LOCALE(state, payload) {
            state.locale = payload;
        },
    },
    actions: {
        setLocale({ commit }, payload) {
            commit('SET_LOCALE', payload)
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
            axios.get(`${this.state.apiPath}/api/getProductsList?lang=am`).then((response) => {
                commit('updateProducts', response.data)
            })
        },
        getCategories({
            commit
        }, data) {
            axios.get(`${this.state.apiPath}/api/getCategories?lang=am`).then((response) => {
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
        getProductById({
            commit
        }, {
            id
        }) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${this.state.apiPath}/api/getProductById?id=${id}`,
                    method: 'get',
                }).then(response => {
                    resolve(response.data);
                }).catch(function(error) {
                    reject(error);
                })
            });
        }
    }
})
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
        apiPath: "http://api.platinuminkdesign.com/api"
    },
    getters: {
        appData: state => state.data,
        getUserInfo: state => state.userInfo,
        getApiPath: state => state.apiPath,
        products: state => state.products,
        categories: state => state.categories
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
        }
    },
    actions: {
        setData({ commit }, payload) {
            commit('SET_DATA', payload)
        },
        setUserInfo({ commit }, payload) {
            commit('SET_USER_INFO', payload)
        },
        getProducts({
            commit
        }, data) { 
            axios.get(`${this.state.apiPath}/getProductsList?lang=am`).then((response) => { 
                commit('updateProducts', response.data) 
            })
        },
        getCategories({
            commit
        }, data) {
            axios.get(`${this.state.apiPath}/getCategories?lang=am`).then((response) => { 
                commit('updateCategories', response.data) 
            })
        },
    }
})
exports.install = function (Vue) { 
    Vue.prototype.$adminApi = { 
        getProductsList() {
            let endpoint = `http://api.platinuminkdesign.com/api/getProductsList?lang=am`; 
            return Vue.http.get(endpoint);
        },
        getCategories() {
            let endpoint = `http://api.platinuminkdesign.com/api/getCategories?lang=am`; 
            return Vue.http.get(endpoint);
        }  
    };  
};
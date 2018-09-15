 import userApi from '../../api/userApi';
 import storage from '../../storage';
 import {
   EventBus
 } from '../../event-bus.js';


 const setUser = ({
   commit
 }, payload) => {
   commit('SET_USER', payload)
 };

 const setLocale = ({
   commit
 }, payload) => {
   storage.setLocale(payload);
   commit('SET_LOCALE', payload)
 };

 const setToken = ({
  commit
}, payload) => {
  storage.setToken(payload);
  commit('SET_TOKEN', payload)
}; 
 
const deleteToken = ({
  commit
}, payload) => {
  storage.deleteToken();
  commit('DELETE_TOKEN')
}; 

 const login = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.login(data).then(
       (response) => {
         if (response.success) {
           commit('SET_USER', response);
           if (response.token) {
             commit('SET_TOKEN', response.token);
           }
         }
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };
 const logout = ({
   commit,
   state
 }) => {
   return new Promise((resolve, reject) => {
     userApi.logout().then(
       (response) => {
         commit('SET_USER', {});
         commit('DELETE_TOKEN');
         resolve(response);
       },
       (errorResponse) => {
         commit('SET_USER', {});
         commit('DELETE_TOKEN');
         reject(errorResponse);
       }
     );
   });
 };

 const changePassword = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.changePassword(data).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const signup = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.signup(data).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const recover = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.recover(data).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const sendEmail = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.sendEmail(data).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const subscribe = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.subscribe(data).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const updateProfileInfo = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.updateProfileInfo(data).then(
       (response) => { 
         if (response.success) { 
           commit('SET_USER', response);
         }
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };


 const addProductToBasket = ({
   commit,
   state
 }, {
   formData
 }) => {
   return new Promise((resolve, reject) => {
     userApi.addProductToBasket(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const removeBasketProduct = ({
   commit,
   state
 }, {
   formData
 }) => {
   return new Promise((resolve, reject) => {
     userApi.removeBasketProduct(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const moveProductToOrders = ({
   commit,
   state
 }, {
   formData
 }) => {
   return new Promise((resolve, reject) => {
     userApi.moveProductToOrders(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const getBasketProducts = ({
   commit,
   state
 }) => {
   return new Promise((resolve, reject) => {
     userApi.getBasketProducts().then(
       (response) => {
         if (Array.isArray(response)) {
           commit('UPDATE_CART_ITEMS', response);
         }
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const customOrder = ({
   commit,
   state
 }, {
   formData
 }) => {
   return new Promise((resolve, reject) => {
     userApi.customOrder(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const getProductPrice = ({
   commit,
   state
 }, {
   formData
 }) => {
   return new Promise((resolve, reject) => {
     userApi.getProductPrice(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 const getOrders = ({
   commit,
   state
 }) => {
   return new Promise((resolve, reject) => {
     userApi.getOrders().then(
       (response) => {
         if (!response.data.error) {
           commit('UPDATE_ORDERS_DATA', response.data);
         }
         resolve(response);
       },
       (errorResponse) => {
         reject(errorResponse);
       }
     );
   });
 };

 export default {
   login,
   logout,
   changePassword,
   signup,
   recover,
   sendEmail,
   subscribe,
   updateProfileInfo,
   addProductToBasket,
   moveProductToOrders,
   removeBasketProduct,
   getBasketProducts,
   customOrder,
   getProductPrice,
   getOrders,
   setLocale,
   setUser,
   setToken,
   deleteToken
 }

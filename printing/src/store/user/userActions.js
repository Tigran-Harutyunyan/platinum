 import userApi from '../../api/userApi';
 import {
  EventBus
} from '../../event-bus.js';
 const login = ({
   commit,
   state
 }, data) => {
   return new Promise((resolve, reject) => {
     userApi.login(data).then(
       (response) => {
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
 }, { formData }) => {
   return new Promise((resolve, reject) => { 
     userApi.logout(formData).then(
       (response) => {
         resolve(response);
       },
       (errorResponse) => {
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
/* 
 const getBasketProducts = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {   
    userApi.getBasketProducts().then(
      (response) => {
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};  */
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
  // / getBasketProducts
   /*   setStorage,
     setData,
     setUserInfo, 
      */
   //removeBasketProduct,



 }

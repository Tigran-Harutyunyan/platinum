 import utils from '../utils';
 import {
  config
} from '../api/config';

 const userMiddleware = {
   fromBackEnd: {
     getBasketProducts(response) { 
       response.forEach(element => {
         if (element.front_side) {
           element.front_side = `${config.imgBaseUrl}${element.front_side }`;
           element.style = `background-image:url(${ element.front_side});`;
         }
         if (element.back_side) {
           element.back_side = `${config.imgBaseUrl}${element.back_side }`;
           element.style = `background-image: url(${ element.back_side});`;
         }
       });
       return response;
      }
   },
   toBackEnd: {
     appendToken() {
       let token = utils.getUserToken();
       let formData = new FormData();
       formData.append('token', token);
       return formData;
     },
   }
 };

 export default userMiddleware

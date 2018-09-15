 import utils from '../utils';

 const userMiddleware = {
   fromBackEnd: {

   },
   toBackEnd: {
     appendToken() {
       let token = utils.getUserToken();  
       let formData = new FormData();
       formData.append('token', token);
       return formData;
     }
   }
 };

 export default userMiddleware

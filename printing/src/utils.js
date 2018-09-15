 const utils = { 

   getSortId(key, propertyNames) {
     for (const _key in propertyNames) {
       if (propertyNames.hasOwnProperty(_key) && key === propertyNames[_key].name) {
         return parseInt(propertyNames[_key].order_id);
       }
     }
   }
 };

 export default utils;

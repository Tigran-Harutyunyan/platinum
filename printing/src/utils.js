 const utils = {
   getLang(params) {
     let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
     if (typeof storage.locale == 'undefined') {
       storage.locale = 'en'
     }
     return storage.locale;
   },
   getSortId(key, propertyNames) {
    for (const _key in propertyNames) {
      if (propertyNames.hasOwnProperty(_key) && key === propertyNames[_key].name) {
        return parseInt(propertyNames[_key].order_id);
      }
    }
  },
 };

 export default utils;

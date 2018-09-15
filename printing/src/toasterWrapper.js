const utils = {
    getLocale(params) {
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      if (typeof storage.locale == 'undefined') {
        storage.locale = 'en'
      }
      return storage.locale;
    },
     
  };
 
  export default utils;
 
import api from './api';

import productsMiddleware from '../apiMiddlewares/productsMiddleware';
const productsApi = {
  getProductById(productId, lang) {
    return api.get(`getProductById?${productId}?lang=${lang}`).then(res => { 
      return res;
    });
  },
  getProducts(lang) {
    return api.get(`getProductsList?lang=${lang}`).then(res => {
      res = productsMiddleware.fromBackEnd.parseProducts(res);
      return res;
    });
  },
};

export default productsApi; 
import { config } from '../api/config.js';
const middleware = {
  fromBackEnd: {
    parseProducts(products) {
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const element = products[key];
          element[0].categoryHref = `/category/${element[0].category_id}`;
          element.forEach(product => {
            product.href = `/product/${product.id}`;
            if (product.images.length) {
              product.image = `${config.imgBaseUrl}${product.images[0].image}`
            } else {
              product.image = '../static/img/products/1.png'
            }
          }); 
        }
      }
      return products;
    }
  },
  toBackEnd: {

  }
};

export default middleware;

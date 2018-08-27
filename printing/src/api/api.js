import Vue from 'vue';
import { config } from './config.js';
import axios from 'axios'; 

const api = {
  get(url) {
    return new Promise((resolve, reject) => { 
      axios.get(`${config.host}${url}`).then((res) => { 
        if (res.data && Object.keys(res.data).length > 0) {
          resolve(res.data);
        } else {
       /*    Object.keys(res.body.errors).forEach(field => {
            res.body.errors[field].forEach(errorMessage => {
              toastService.showError(errorMessage);
            });
          });
 */
          reject(res);
        }
      });

    });
  },
  /* post(url, body = {}, config = {}) {
      return new Promise((resolve, reject) => {
          
          Vue.http.post(`${apiConfig.host}${url}`, body, config).then(res => {
              
              if (!Object.keys(res.body.errors).length) {
                  resolve(res);
              } else {
                  Object.keys(res.body.errors).forEach(field => {
                      res.body.errors[field].forEach(errorMessage => {
                          toastService.showError(errorMessage);
                      });
                  });

                  reject(res);
              }
          }, err => {
              toastService.showError(err.body.message);
              reject(err);
          });
      });
  }  */
};

export default api;

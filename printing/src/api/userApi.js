import api from './api';
import utils from '../utils';

let lang = utils.getLang();

const userApi = {
  login(params) {
    let url = 'login?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  logout(params) {
    let url = 'logout?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  changePassword(params) {
    let url = 'changePassword?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  signup(params) {
    let url = 'register?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  recover(params) {
    let url = 'resetPassword?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  sendEmail(params) {
    let url = 'sendEmail?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  subscribe(params) {
    let url = 'addSubscriber?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  updateProfileInfo(params) {
    let url = 'updateProfileInfo?';
    return api.post(url, params).then(res => {
      return res;
    });
  },

  addProductToBasket(params) {
    let url = 'addProductToBasket?'; 
    return api.post(url, params).then(res => {
      return res;
    });
  },
};

export default userApi;

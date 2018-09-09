import axios from 'axios';
import {
  EventBus
} from '../../event-bus.js';

import productsApi from '../../api/productsApi';
axios.interceptors.response.use(function (response) {
  if (response.data.error && response.data.message === "Invalid token") {
    EventBus.$emit('logout');
  }
  return response

}, function (err) {
  return Promise.reject(err);
});
const setStorage = ({
  commit
}, payload) => {
  commit('SET_STORAGE', payload)
};
const setData = ({
  commit
}, payload) => {
  commit('SET_DATA', payload)
};
const setUserInfo = ({
  commit
}, payload) => {
  commit('SET_USER_INFO', payload)
};
const getProducts = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    productsApi.getProducts().then(
      (response) => {
        resolve(response);
        commit('UPDATE_PRODUCTS', response)
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getCompletedWorks = ({
  commit,
  state
}, data) => {
  axios.get(`${state.apiPath}/api/getCompletedWorks?lang=${state.storage.locale}`).then((response) => {
    if (Array.isArray(response.data)) {
      response.data.forEach(element => {
        element.imageStyle = {
            'background-image': `url(${state.apiPath}${element.image})`
          },
          element.image = `${state.apiPath}${element.image}`
      });
      commit('UPDATE_COMPLETED_WORKS', response.data)
    }
  })
};
const getCompletedWorkById = ({
  commit,
  state
}, id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${state.apiPath}/api/getCompletedWorkById?id=${id}&lang=${state.storage.locale}`).then(response => {
      if (response.data.images) {
        response.data.images.forEach(element => {
          element.image = `${state.apiPath}${element.image}`;
        });
      }
      resolve(response.data);
    })
  });
};

const getSliderImages = ({
  commit,
  state
}, data) => {
  axios.get(`${state.apiPath}/api/getSliderImages?lang=${state.storage.locale}`).then((response) => {
    if (Array.isArray(response.data)) {
      response.data.forEach(element => {
        element.imageStyle = {
          'background-image': `url(${state.apiPath}${element.image})`
        }
        element.image = `${state.apiPath}${element.image}`;
        element.productLink = `/product/${element.product_id}`
      });
      commit('UPDATE_SLIDER_IMAGES', response.data)
    }
  })
};
const getProjectSliderImages = ({
  commit,
  state
}, data) => {
  axios.get(`${state.apiPath}/api/getProjectSliderImages?lang=${state.storage.locale}`).then((response) => {
    if (Array.isArray(response.data)) {
      response.data.forEach(element => {
        element.thumbnail = `${state.apiPath}${element.image}`;
        element.image = `${state.apiPath}${element.popup_image}`;
      });
      commit('PROJECTS_SLIDER_IMAGES', response.data)
    }
  })
};
const getPartnersImages = ({
  commit,
  state
}, data) => {
  axios.get(`${state.apiPath}/api/getPartnerImages?lang=${state.storage.locale}`).then((response) => {
    if (Array.isArray(response.data)) {
      response.data.forEach(element => {
        element.image = `${state.apiPath}${element.image}`;
      });
      commit('UPDATE_PARTNERS_IMAGES', response.data)
    }
  })
};
const getCategories = ({
  commit,
  state
}, data) => {
  axios.get(`${state.apiPath}/api/getCategories?lang=${state.storage.locale}`).then((response) => {
    if (Array.isArray(response.data)) {
      /*  array.forEach(element => {
         
       }); */
      commit('UPDATE_CATEGORIES', response.data)
    }

  })
};
const getSearchResults = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/search?lang=${state.storage.locale}`,
      method: 'post',
      params: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
 
const getBasketProducts = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/getBasketProducts?&lang=${state.storage.locale}`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      if (Array.isArray(response.data)) {
        response.data.forEach(element => {
          if (element.front_side) {
            element.front_side = `${state.apiPath}${element.front_side }`
          }
          if (element.back_side) {
            element.back_side = `${state.apiPath}${element.back_side }`
          }
        });
      }
      commit('UPDATE_CART_ITEMS', response.data)
      resolve(response.data);
    }).catch(response => {
      reject(response);
    })
  });
}; 
 
const removeBasketProduct = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/removeBasketProduct`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const customOrder = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/customOrder`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const getProductById = ({
  commit,
  state
}, {
  id
}) => {
  return new Promise((resolve, reject) => {
    productsApi.getProductById(id).then(
      (response) => {
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getCustomData = ({
  commit,
  state
}, data) => {
  if (Object.keys(state.customData).length === 0) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${state.apiPath}/api/getCustomData?lang=${state.storage.locale}`,
        method: 'get',
      }).then(response => {
        resolve(response.data);
        if (response.data && response.data.email) {
          commit('SET_CUSTOM_DATA', response.data)
        }
      }).catch(function (error) {
        reject(error);
      })
    });
  }
};
const moveProductToOrders = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/moveProductToOrders`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const getStaffInfo = ({
  commit,
  state
}) => {
  axios.get(`${state.apiPath}/api/getStaff?lang=${state.storage.locale}`).then((response) => {
    response.data.forEach(element => {
      element.image = `${state.apiPath}${element.image}`;
      element.name = `${ element.first_name} ${ element.last_name}`;
    });
    if (!response.data.error) {
      commit('UPDATE_STAFF', response.data);
    }
  })
};
const getSamples = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    axios.get(`${state.apiPath}/api/getSamples?lang=${state.storage.locale}`).then((response) => {
      if (Array.isArray(response.data)) {
        response.data.forEach(element => {
          element.image = `${state.apiPath}${element.image}`;
          element.pdf = `${state.apiPath}${element.pdf}`;
        });
      }
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

const getOrders = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    let token = state.storage.user ? state.storage.user.token : "";
    formData.append('token', token);
    axios({
      url: `${state.apiPath}/api/getOrders?lang=${state.storage.locale}`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      /*  if (Array.isArray(response.data)){
           response.data.forEach(element => {
               element.status = element.status ?  element.status: 'N/A' 
           });
       } */
      if (!response.data.error) {
        commit('UPDATE_ORDERS_DATA', response.data);
      }

      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const getProductPrice = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/getProductPrice?`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const setScrollParams = ({
  commit,
  state
}, params) => {
  commit('STORE_SCROLL_PARAMS', params);
};

const setSideBarProducts = ({
  commit,
  state
}, products) => {
  commit('SET_PRODUCT_LIST', products);
};

const getAdvertisements = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    axios.get(`${state.apiPath}/api/getAdvertisements?lang=${state.storage.locale}`).then((response) => {

      if (Object.keys(response.data).length > 0) {
        for (const key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            const category = response.data[key];
            if (key !== 'audio') {
              if (category.length > 0) {
                category.forEach(item => {
                  if (item.image) {
                    item.thumbnail = `${state.apiPath}${item.image}`;
                    item.image = `${state.apiPath}${item.popup_image}`;
                  }
                });
              }
            }
            if (key == 'audio') {
              if (category.length > 0) {
                category.forEach(item => {
                  if (item.audio) {
                    item.audio = `${state.apiPath}${item.audio}`;
                  }
                });
              }
            }
          }
        }
        commit('SET_ADVERTISEMENTS', response.data);
      }
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
export default {
  setStorage,
  setData,
  setUserInfo,
  getProducts,
  getCompletedWorks,
  getCompletedWorkById,
  getSliderImages,
  getCategories,   
  getBasketProducts,  
  removeBasketProduct,
  getProductById,
  getCustomData,
  moveProductToOrders,
  getStaffInfo,
  getOrders,
  getProductPrice, 
  getPartnersImages,
  getProjectSliderImages,
  getSearchResults,
  setScrollParams,
  setSideBarProducts,
  getSamples,
  customOrder,
  getAdvertisements
}

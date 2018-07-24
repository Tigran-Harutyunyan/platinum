import axios from 'axios';

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
  axios.get(`${state.apiPath}/api/getProductsList?lang=${state.storage.locale}`).then((response) => {
    commit('UPDATE_PRODUCTS', response.data)
  })
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
        }
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
    axios.get(`${state.apiPath}/api/getCompletedWorkById?id=${id}lang=${state.storage.locale}`).then(response => {
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
        element.productLink = `/#/product/${element.product_id}`
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
    commit('UPDATE_CATEGORIES', response.data)
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
const requestLogin = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/login`,
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

const requestPasswordRecovery = ({
  commit,
  state
}, {
  email
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/resetPassword`,
      method: 'post',
      params: {
        email
      },
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

const requestSignup = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/register`,
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

const updateProfileInfo = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/updateProfileInfo`,
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

const requestLogOut = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/logout`,
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
const addProductToBasket = ({
  commit,
  state
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/addProductToBasket`,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      resolve(response.data);
    }).catch(response => {
      reject(response);
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
      commit('UPDATE_CART_ITEMS', response.data)
      resolve(response.data);
    }).catch(response => {
      reject(response);
    })
  });
};
const requestContact = ({
  commit,
  state
}, {
  contact_email,
  contact_message,
  contact_subject
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/sendEmail`,
      method: 'post',
      params: {
        contact_email,
        contact_message,
        contact_subject
      },
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

const requestSubscribe = ({
  commit,
  state
}, {
  contact_email_subscribe
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/addSubscriber`,
      method: 'post',
      params: {
        contact_email_subscribe
      },
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
const changePassword = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/changePassword`,
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
const getProductById = ({
  commit,
  state
}, {
  id
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${state.apiPath}/api/getProductById?id=${id}&lang=${state.storage.locale}`,
      method: 'get',
    }).then(response => {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  });
};
const getCustomData = ({
  commit,
  state
}, data) => {
  if (Object.keys(state.customData).length === 0) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${state.apiPath}/api/getCustomData`,
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
    commit('UPDATE_STAFF', response.data)
  })
};
const getOrders = ({
  commit
}, {
  formData
}) => {
  return new Promise((resolve, reject) => {
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
      commit('UPDATE_ORDERS_DATA', response.data)
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
}
export default {
  setStorage,
  setData,
  setUserInfo,
  getProducts,
  getCompletedWorks,
  getCompletedWorkById,
  getSliderImages,
  getCategories,
  requestLogin,
  requestPasswordRecovery,
  requestSignup,
  requestLogOut,
  updateProfileInfo,
  addProductToBasket,
  getBasketProducts,
  requestContact,
  requestSubscribe,
  removeBasketProduct,
  getProductById,
  getCustomData,
  moveProductToOrders,
  getStaffInfo,
  getOrders,
  getProductPrice,
  changePassword,
  getPartnersImages,
  getProjectSliderImages,
  getSearchResults
}

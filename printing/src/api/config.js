const config = {
  host: location.host.includes('platinuminkdesign') ? `https://api.platinuminkdesign.com/api/` : `https://api.platinumink.am/api/`,
  imgBaseUrl: location.host.includes('platinuminkdesign') ? `https://api.platinuminkdesign.com/` : `https://api.platinumink.am/`
}

export {
  config
}; 
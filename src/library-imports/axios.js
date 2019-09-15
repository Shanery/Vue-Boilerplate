import Vue from 'vue';

import axios from 'axios';

let $axios = axios.create({
  baseURL: "https://api.base/"
});

Vue.prototype.$axios = $axios;

// Default to Console loging the response.
$axios.interceptors.response.use((response)=>{
  console.log(response);
  return response;
}, (error) => {

// Default Error To Retry Logging in
  console.error(error.response)
  if (error.response.status == '401') {
    
  }
  
  return Promise.reject(error)
})
import axios from "axios"
import Vue from "vue"

axios.interceptors.request.use(config=>{
  if(config.url != "/"){
    config.headers.Token = localStorage.getItem("Token")
  }
  return config;
},err=>{
  return Promise.reject(err)
})
//post传参设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.axios = axios;



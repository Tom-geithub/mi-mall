import Vue from 'vue'
import router from './router'
import store from './store'
//让每个页面都可以使用axios
import axios from 'axios'
// 将作用域对象挂在vue中，方便使用this调用请求
import VueAxios from 'vue-axios'
import App from './App.vue'

/* 请求基础值设置 */
axios.defaults.baseURL='/api';//这里默认使用的时接口代理
axios.defaults.timeout=8000;

/* 接口错误拦截 */
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10)//未登录时设置status为10
  {
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});


Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import store from './store'
//让每个页面都可以使用axios
import axios from 'axios'
// 将作用域对象挂在vue中，方便使用this调用请求
import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'
// 引入懒加载
import VueLazyLoad from 'vue-lazyload'


/* 根据接口代理来配置请求地址 */
axios.defaults.baseURL='/api';
axios.defaults.timeout=8080;

/* 根据接口环境变量来获取请求地址(使用其他两种跨域方式的情况下) */
// axios.defaults.baseURL=env.baseURL;

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
// 使用懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 
import Vue from 'vue'
import router from './router'
//引入store
import store from './store'
//让每个页面都可以使用axios
import axios from 'axios'
// 将作用域对象挂在vue中，方便使用this调用请求
import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'
// 引入懒加载
import VueLazyLoad from 'vue-lazyload'
//引入cookie
import VueCookie from 'vue-cookie'
// 引入element-ui
import {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



/* 根据接口代理来配置请求地址 */
axios.defaults.baseURL = '/api';
// 服务器如果超过8080ms没有响应就会停止axios
axios.defaults.timeout = 8080;

/* 根据接口环境变量来获取请求地址(使用其他两种跨域方式的情况下) */
// axios.defaults.baseURL=env.baseURL;

/* 接口错误拦截 */
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10)//未登录时设置status为10
  {
    // if (path != '#/index') {
    //   window.location.href = '/#/login';
    // }
    // return Promise.reject(res);//防止进入login页面通过其他方法再次跳转到其他页面
  } else {
    this.$message.warning(res.msg);
    return Promise.reject(res); //失败时使用reject抛出异常
  }
},(error)=>{//上面的function拦截的是业务层面的（接口都能访问），这里拦截的是http状态码请求的
  let res=error.response;
  Message.error(res.data.message);
  return Promise.reject(res);
});


Vue.use(VueAxios, axios)
// 使用懒加载
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
//使用cookie
Vue.use(VueCookie);
Vue.config.productionTip = false
//使用element-ui
Vue.component(Message)
// 让massage可以通过this来调用
Vue.prototype.$message=Message;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

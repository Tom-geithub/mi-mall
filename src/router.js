import Vue from "vue";
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

Vue.use(Router)

export default new Router({
    routes: [
        /* 主页面 */
        {
            path: '/',
            name: 'home',
            component: Home,
            /* 设置重定向 */
            redirect:'/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: () => import('./pages/product.vue')
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail.vue')
                }
            ]
        },
        /* 登录页面 */
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children:[
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: () => import('./pages/alipay.vue')
                }
            ]
        }
    ]
})
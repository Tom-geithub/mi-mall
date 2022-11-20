<!-- 作为订单的主视图 订单支付，购物车等内容都嵌套在这里面，结构和home类似 -->

<template>
    <div>
        <OrderHeaderVue></OrderHeaderVue>
        <router-view></router-view>
        <NavFooterVue></NavFooterVue>
    </div>
</template>
<script>
import NavFooterVue from '@/components/NavFooter.vue';
import OrderHeaderVue from '@/components/OrderHeader.vue';
export default {
    name: 'nav-order',
    components:{
        NavFooterVue,
        OrderHeaderVue
    }
}
</script>
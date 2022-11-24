<!-- 作为订单的主视图 订单支付，购物车等内容都嵌套在这里面，结构和home类似 -->

<template>
    <div>
        <OrderHeaderVue :title="title">
            <template v-slot:tip>
                <span>{{ tip }}</span>
            </template>
        </OrderHeaderVue>
        <router-view></router-view>
        <ServiceBarVue></ServiceBarVue>
        <NavFooterVue></NavFooterVue>
    </div>
</template>
<script>
import NavFooterVue from '@/components/NavFooter.vue';
import OrderHeaderVue from '@/components/OrderHeader.vue';
import ServiceBarVue from '@/components/ServiceBar.vue';
export default {
    name: 'nav-order',
    components: {
        NavFooterVue,
        OrderHeaderVue,
        ServiceBarVue
    },
    data() {
        return {
            title: ' ',
            tip: ' '
        }
    },
    mounted() {
        let path = this.$route.path;
        if (path == '/order/confirm') {
            this.title = "订单确认";
            this.tip = '请认真确认订单信息';
        } else if (path == '/order/list') {
            this.title = "订单列表";
            this.tip = '请谨防钓鱼连接或诈骗电话，了解更多>';
        } else if (path == '/order/pay') {
            this.title = "订单支付";
            this.tip = '请谨防钓鱼连接或诈骗电话，了解更多>';
        }else{
            this.title='订单支付';
            this.tip='请谨防钓鱼连接或诈骗电话，了解更多>';
        }
    }
}
</script>
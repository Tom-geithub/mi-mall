<!-- 购物车 -->
<template>
    <div>
        <OrderHeaderVue></OrderHeaderVue>
        cart
        <OrderFooterVue></OrderFooterVue>
    </div>
</template>
<script>
import OrderFooterVue from '@/components/OrderFooter.vue';
import OrderHeaderVue from '@/components/OrderHeader.vue';
export default {
    name: 'order-car',
    components: {
        OrderFooterVue,
        OrderHeaderVue
    }
}
</script>
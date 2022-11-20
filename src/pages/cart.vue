<!-- 购物车 -->
<template>
    <div>
        <OrderHeaderVue title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </OrderHeaderVue>
        <NavFooterVue></NavFooterVue>
    </div>
</template>
<script>
import NavFooterVue from '@/components/NavFooter.vue';
import OrderHeaderVue from '@/components/OrderHeader.vue';
export default {
    name: 'order-car',
    components: {
        NavFooterVue,
        OrderHeaderVue
    }
}
</script>


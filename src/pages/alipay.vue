<!-- 支付页面到支付宝页面之间的一个中转页面 -->
<template>
    <div class="ali-pay">
        <loadingVue v-if="loading"></loadingVue>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import loadingVue from './loading.vue';
export default {
    name: 'order-alipay',
    components:{
        loadingVue
    },  
    data() {
        return {
            content: ' ',
            orderId:this.$route.query.orderId,
            loading:true
        }
    },
    mounted() {
        this.paySubmit();
    },
    methods: {
        paySubmit() {
            this.axios.post('/pay', {
                orderId: this.orderId,
                orderName: "Vue高仿小米商城", //扫码支付时订单名称
                amount: 0.01, //元
                payType: 1 //1支付宝，2微信
            }).then((res) => {
                this.content = res.content;//这里拿到支付宝给回来的源码
                setTimeout(() => {
                    document.forms[0].submit();//这里的forms是直接获取当前页面所有的form
                }, 100);
            })
        }
    }
}
</script>
<!-- 产品展示 -->
<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <div class="btn">立即购买</div>
            </template>
        </product-param>
        <div class="h">123</div>
        <div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div>
    </div>
</template>
<script>
import ProductParam from '@/components/ProductParam.vue';
export default{
    name:'order-product',
    components:{
        ProductParam
    }
}
</script>

<style lang="scss" scoped>
    .product{
        .h{
            background-color: green;
            height: 150px;
        }
        .btn{
            margin-left: 10px;
        }
    }
</style>
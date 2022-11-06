<!-- 作为订单的主视图 订单支付，购物车等内容都嵌套在这里面，结构和home类似 -->

<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
export default {
    name: 'nav-footer'
}
</script>
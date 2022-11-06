<!--作为主页面 复用头部和尾部 index首页和其他内容会嵌套在router-view中-->

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
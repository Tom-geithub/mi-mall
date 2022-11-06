<!--作为主页面 复用头部和尾部 index首页和其他内容会嵌套在router-view中-->

<template>
    <div>
        <NavHeaderVue></NavHeaderVue>
        <router-view></router-view>
        <NavFooterVue></NavFooterVue>
    </div>
</template>
<script>
import NavHeaderVue from '@/components/NavHeader.vue';
import NavFooterVue from '@/components/NavFooter.vue';
export default {
    name: 'nav-home',
    components:{
        NavHeaderVue,
        NavFooterVue
    }
}
</script>
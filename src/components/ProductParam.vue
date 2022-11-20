<!-- 产品站参数组件 -->
<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props:{
        title:String
    },
    data() {
        return{
            isFixed:false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.initHeight)
    },
    methods: {
        initHeight() {
            //获取页面y轴的偏移量，下面三种方法是为了兼容不同的浏览器
            let scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    destroyed (){
        window.removeEventListener('scroll',this.initHeight,true)
        //最后一个参数为true时采用冒泡的方式销毁，false时采用捕获的方式
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    z-index: 10;
    &.is_fixed{
        position: fixed;//绝对定位
        top: 0;
        width: 100%;
        background-color: $colorG;
        box-shadow: 0 5px 5px $colorE;//水平偏移量 垂直偏移量 阴影半径 阴影颜色
    }

    .container {
        @include flex();

        .pro-title {
            font-size: $fontH;
            color: $colorB;
            font-weight: bold;
        }

        .pro-param {
            font-size: $fontJ;

            span {
                margin: 0 10px;
            }

            a {
                color: $colorC;
            }
        }
    }
}
</style>
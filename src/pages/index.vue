<!-- 首页 -->
<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <!-- 轮播图菜单 -->
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children"></div>
                        </li>
                    </ul>
                </div>
                <!-- 轮播图 -->
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in slideList" :key="index">
                        <a :href="'/#/product/' + item.id"><img :src="item.img" :alt="item.id"></a>
                    </swiper-slide>
                    <!-- 分页器和箭头 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'nav-index',
    components: {
        ServiceBar,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,//循环
                effect: 'cube',//动画为砖块
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                },
            },
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-5.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index {
    .container {
        .swiper-box {
            // 轮播图菜单
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                // padding: 26px 0;
                /* 下面是设置透明,使用的是开发者中调试出来的透明度,
                这里不能用opacity,因为字体和箭头也会变透明 */
                background-color: #55585a8a;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            &:after{
                                content: " ";
                                position: absolute;
                                right: 30px;
                                top:17.5px;
                                @include bgImg(10px,15px,'/public/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                        }
                    }
                }
            }
            // 轮播图
            .swiper-container {
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
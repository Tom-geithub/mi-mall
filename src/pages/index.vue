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
                            <div class="children">
                                <ul v-for="(item, i) in menuList" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a :href="sub ? '/#/product/' + sub.id : ' '">
                                            <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
            <!-- 广告位 -->
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <!-- banner -->
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
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
            ],
            menuList: [
                [
                    {
                        id: 30,
                        img: '/imgs/item-box-1.png',
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: '/imgs/item-box-2.png',
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: '/imgs/item-box-4.jpg',
                        name: '移动4G专区'
                    },
                ],
                [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';

.index {
    .container {
        .swiper-box {

            // 轮播图菜单
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                // padding: 26px 0;
                /* 下面是设置透明,使用的是开发者中调试出来的透明度,
                这里不能用opacity,因为字体和箭头也会变透明 */
                background-color: #55585a8a;
                box-sizing: border-box;

                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;

                        a {
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;

                            &:after {
                                content: " ";
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                @include bgImg(10px, 15px, '/public/imgs/icon-arrow.png');
                            }
                        }

                        &:hover {
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            position: absolute;
                            width: 962px;
                            top: 0;
                            left: 264px;
                            background-color: $colorG;
                            border: 1px solid $colorH;
                            transition: all 1s;//没用
                            ul{
                                display: flex;
                                // justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a{
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }

            // 轮播图
            .swiper-container {
                height: 451px;

                .swiper-button-prev {
                    left: 274px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;
            }
        }

        .banner{
            margin-bottom: 50px;
        }
    }
}
</style>
<!-- 首页 -->
<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
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
.index {
    .container {
        .swiper-box {
            .swiper-container {
                height: 451px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
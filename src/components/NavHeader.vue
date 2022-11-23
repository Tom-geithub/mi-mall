<template>
    <div class="header">
        <!-- 顶部栏 -->
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{ username }}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="" v-if="username" @click="logoout">退出</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>
                        购物车{{ this.cartCount }}
                    </a>
                </div>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="nav-header">
            <div class="container">
                <!-- logo -->
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <!-- menu -->
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in phoneList" :key="index">
                                    <a :href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{ item.name }}</div>
                                        <div class="pro-price">{{ item.price | currency }}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <!-- search -->
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


  
<script>
import { mapState } from 'vuex';
export default {
    name: "nav-header",
    data() {
        return {
            // username:'admin',
            phoneList: []
        }
    },
    computed: {
        /*  username() {
             return this.$store.state.username;
         },
         cartCount() {
             return this.$store.state.cartCount;
         } */
        ...mapState(['username', 'cartCount'])
    },
    filters: {
        currency(val) {
            if (!val) return '0.00';
            return val.toFixed(2) + '元';
        }
    },
    mounted() {
        this.getProductList();
        // 只有从登录页面过来时才调用该方法
        let params = this.$route.params;
        if(params && params.from=='login'){
            this.getCartCount();
        }
    },
    methods: {
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res) => {
                this.$store.dispatch('saveCartCount', res);
            })
        },
        login() {
            this.$router.push('/login');
        },
        logoout() {
            this.axios.post('/user/logout').then(() => {
                this.$message.success('退出成功');
                this.$cookie.set('userId', ' ', { expires: '-1' })//expires表示过期时间，这里是立即过期
                this.$store.dispatch('saveUserName', ' ');
                this.$store.dispatch('saveCartCount', '0');
            })
        },
        getProductList() {
            this.axios.get('/products', {
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                this.phoneList = res.list;
            })
        },
        goToCart() {
            this.$router.push('/cart');
            //使用该方法才能跳转,获取参数将push改成params即可
        }
    }
};
</script> 



<style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.header {
    .nav-topbar {
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #b0b0b0;

        .container {
            // display: flex; //:设置元素两边对齐  中间居中
            // justify-content: space-between; //水平方向居中
            // align-items: center; //垂直方向居中
            @include flex();

            a {
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }

            .my-cart {
                width: 110px;
                background-color: #ff6600;
                text-align: center;
                color: #ffffff;
                margin-right: 0;

                .icon-cart {
                    @include bgImg(16px, 12px, '/public/imgs/icon-cart-checked.png');
                    background-size: contain;
                }
            }
        }
    }

    .nav-header {
        .container {
            position: relative;
            height: 112px;
            @include flex();

            .header-menu {
                display: inline-block;
                width: 643px;
                padding-left: 209px;

                .item-menu {
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;

                    span {
                        cursor: pointer; //让鼠标移上去是小手标志
                    }

                    &:hover {
                        color: $colorA;

                        .children {
                            height: 220px;
                            opacity: 1;
                        }
                    }

                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0; //默认关闭状态
                        opacity: 0; //透明度 隐藏border下面的阴影
                        overflow: hidden; //让内容隐藏起来
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 10;
                        transition: all .5s;
                        background-color: #ffffff;

                        .product {
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;

                            a {
                                display: inline-block;
                            }

                            img {
                                width: auto;
                                height: 111px;
                                margin-top: 26px;
                            }

                            .pro-img {
                                height: 137px;
                            }

                            .pro-name {
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }

                            .pro-price {
                                color: $colorA;
                            }

                            //图片之间的竖线
                            &:before {
                                content: ' '; //这个必须要有,没有就不能展示
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }

                            &:last-child:before {
                                display: none;
                            }
                        }
                    }
                }
            }

            .header-search {
                width: 319px;

                .wrapper {
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;

                    input {
                        border: none;
                        box-sizing: border-box;
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }

                    a {
                        @include bgImg(18px, 18px, '/public/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }

}
</style>
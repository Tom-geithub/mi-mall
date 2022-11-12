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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart">
                        <span class="icon-cart"></span>
                        购物车
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
                        <div class="children"></div>
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
export default {
    name: "nav-header",
};
</script> 



<style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';

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

                .icon-cart {
                    @include bgImg(16px,12px,'/public/imgs/icon-cart-checked.png');
                    background-size: contain;
                }
            }
        }
    }

    .nav-header {
        .container {
            height: 112px;
            // display: flex; //:设置元素两边对齐  中间居中
            // justify-content: space-between; //水平方向居中
            // align-items: center; //垂直方向居中
            @include flex();

            .header-logo {
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: #ff6600;

                a {
                    display: inline-block;
                    width: 110px;
                    height: 55px;

                    &:before {
                        content: ' ';
                        @include bgImg(55px,55px,'/public/imgs/mi-logo.png',55px);
                        transition: margin .2s; //过渡动画
                    }

                    &:after {
                        content: ' ';
                        @include bgImg(55px,55px,'/public/imgs/mi-home.png',55px);
                        background-size: 55px;
                    }

                    //鼠标移上去图片变化
                    &:hover:before {
                        margin-left: -55px;
                        transition: margin .2s; //过渡动画
                    }
                }
            }

            .header-menu{
                display: inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menu{
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor:pointer;//让鼠标移上去是小手标志
                    }
                    &:hover{
                        
                    }
                }
            }

            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        border: none;
                        box-sizing: border-box;
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'/public/imgs/mi-home.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }

}
</style>
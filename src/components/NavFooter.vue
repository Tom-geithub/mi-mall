<!-- 公用尾部 -->
<template>
    <div class="footer">
        <!-- logo -->
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <!-- link -->
        <div class="footer-link">
            <a href="https://gitee.com/MercifulTom/mi-mall" target="_blank">TOM的小米商城</a><span>|</span>
            <a href="https://gitee.com/MercifulTom/mi-mall" target="_blank">TOM的小米商城</a><span>|</span>
            <a href="https://gitee.com/MercifulTom/mi-mall" target="_blank">TOM的小米商城</a><span>|</span>
            <a href="https://gitee.com/MercifulTom/mi-mall" target="_blank">TOM的小米商城</a>
        </div>
        <!-- copyright -->
        <div class="copyright">Copyright @2019 <span class="domain">mi.futurefe.com </span>All RightsResered.</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height:36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
        }
        .copyright{
            .domain{
                color: #ff6600;
            }
        }
    }

</style>
<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <!-- 头部 -->
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <!-- 内容 -->
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <!-- 尾部 -->
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{canelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" :@click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{canelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mall-modal',
    props: {
        // 弹框类型：小small，中middle，大large，表单form
        modalType: {
            type: String,
            dafault: 'form'
        },
        //弹框标题
        title: String,
        //按钮类型：1：确定类型 2：取消类型 3：确定取消
        btnType: String,
        sureText: {
            type: String,
            dafault: '确定'
        },
        canelText: {
            type: String,
            dafault: '取消'
        },
        showModal: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
@import './../assets/scss/button.scss';
</style>
<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage'
export default{
  name:'app',
  components:{

  },
  data (){
    return{

    }
  },
  mounted (){

    // storage.setItem('abc',{a:1},'user');

    //获取用户信息,只有在登录状态时才执行该操作
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  } ,
  methods:{
    getUser (){
      this.axios.get('/user').then((res)=>{
        //页面刷新后再进行一次赋值
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount (){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>

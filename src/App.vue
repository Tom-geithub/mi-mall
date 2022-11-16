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
    //获取用户信息
    this.getUser();
    this.getCartCount();
  } ,
  methods:{
    getUser (){
      this.axios.get('/user').then(()=>{
        //to-do 保存到vuex里面
      })
    },
    getCartCount (){
      this.axios.get('/carts/products/sum').then(()=>{
        //to-do 保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>

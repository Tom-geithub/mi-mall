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
    this.axios.get('/pet/1').then((res)=>{
      this.res=res;
    })
  } 
}
</script>

<style>

</style>

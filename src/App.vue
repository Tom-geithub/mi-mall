<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import storage from './storage'
export default{
  name:'app',
  components:{

  },
  data (){
    return{

    }
  },
  mounted (){
    storage.setItem('abc',{a:1},'user');
  }
}
</script>

<style>

</style>

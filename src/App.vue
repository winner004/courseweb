<template>
  <div id="app">
    <div>
      <navbar></navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from "./config/RouterConfig"
  import navbar from "@/components/navbar"
  export default {
      name:'app',
      router,
      components:{
          navbar
      }
  }
</script>
<style>

</style>

<template>
    <a-input-search placeholder="输入关键字c" @search="search" v-model="searchText" style="width:200px" />
</template>

<script>
    import { Input } from "ant-design-vue"
    import Vue from "vue"
    Vue.use(Input)
export default {
  name: 'searchText',
    data() {
        return {
            searchText:''
        };
    },
 methods:{
     search(){
         alert(this.searchText)
     }
 }
}
</script>

<style scoped>

</style>
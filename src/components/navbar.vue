<template>
  <div>
      <a-breadcrumb separator=" " :routes="navroutes" :itemRender="renderNav">
         <!--使用jax就不需要下面这一段-->
          <!--<template slot="itemRender" slot-scope="{route}">-->
              <!--<router-link :to="route.path">-->
                  <!--{{route.meta.navname}}-->
              <!--</router-link>-->
          <!--</template>-->
      </a-breadcrumb>
  </div>
</template>

<script>
    import Vue from "vue"
    import { Breadcrumb} from "ant-design-vue"
    //使用Jax方式不需要写到components中
    import searchText from "./searchText"
    Vue.use(Breadcrumb)

export default {
  name: 'navbar',
    data() {
        return {
            mynav:[
                {path:"/a1",meta:{navname:"自定义导航1",index:2}},
                {path:"/a2",meta:{navname:"自定义导航2",index:6}},
                {path:"/rec",meta:{navname:"推荐课程",index:6},href:"/course/"},
                {path:"search",meta:{navname:"搜索框",index:4},
                    comp:<searchText/>},
            ],
        };
    },
    computed:{
        navroutes(){
            let navs=this.$router.options.routes.concat(this.mynav)
            navs.sort((item1,item2) => {
                if(item1.meta.index>item2.meta.index) return 1;
                if(item1.meta.index<item2.meta.index) return -1;
                return 0;
            })
            return navs
        }
    },
    methods:{

        renderNav({route, params, routes, paths}){
            if("comp" in route){
                return route["comp"]
            }
            //route中是否有href参数，有的话取出参数，没有的话取"/"
            const getHref="href" in route?route.href:"/";
            // 当前地址栏的pathname不等于route中的参数，就通过下边a标签的href跳转
            // alert(self.location.pathname)
            if(self.location.pathname!==getHref){
                return <a href={getHref+"#"+route.path}> {route.meta.navname}</a>
            }
           //  this.$route.path 当前点击的路径
           //  route.path  当前渲染的路径
           // alert(this.$route.path)
           //  alert(route.path)
            if(this.$route.path===route.path)
                return <span>
                    {route.meta.navname}
                </span>
            return <router-link to={route.path}>
        {route.meta.navname}
        </router-link>
        }
    },
    components:{

    }
}
</script>

<style scoped>

</style>
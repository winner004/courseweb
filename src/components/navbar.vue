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
    import { AllRouterConfigs } from "../config/RouterConfig";
    import Vue from "vue"
    import {Breadcrumb,Input,Avatar,Popover} from "ant-design-vue"
    //使用Jax方式不需要写到components中
    import searchText from "./searchText"
    Vue.use(Breadcrumb)
    Vue.use(Input)
    Vue.use(Avatar)
    Vue.use(Popover)

export default {
  name: 'navbar',
    data() {
        return {
            mynav:[
                {path:"/a1",meta:{navname:"自定义导航1",index:2}},
                {path:"/a2",meta:{navname:"自定义导航2",index:6}},
                {path:"/rec",meta:{navname:"推荐课程",index:7},href:"/course/"},
                {path:"search",meta:{navname:"搜索框",index:8},
                    comp:<searchText/>},
                {path:"avatar",meta:{navname:"用户头像",index:100},
                    comp:<a-popover   trigger="click">
                        <template slot="content">
                            <p>我的课程</p>
                            <p><a href="/users/#/pub">发布课程</a></p>
                            <p>账号设置</p>
                            <p>退出登录</p>
                        </template>
                        <a-avatar   style="backgroundColor:#87d068"  icon="user"/>
                    </a-popover>
                }
            ],
        };
    },
    computed:{
        navroutes(){
            //  let navs=this.$router.options.routes.concat(this.mynav);
            let navs=AllRouterConfigs.concat(this.mynav)
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
            if("meta" in route && "hide" in route.meta ){
                return
            }
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
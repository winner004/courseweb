import VueRouter from "vue-router"
// import Index from "./../components/index"
const RouterConfig={
    routes:[
        {path:"/",name:"index",meta:{navname:"首页",index:1},component:() => import(/* webpackChunkName:"index-chunk" */"@/components/index")},
        {path:"/test",name:"test",meta:{navname:"测试",index:3},component:() => import(/* webpackChunkName:"test-chunk" */"@/components/test")},
        {path:"/",name:"course",meta:{navname:"课程",index:4},href:"/course/"},
        {path:"/member",name:"member",meta:{navname:"用户",index:5}},
    ]
}

export default new VueRouter(RouterConfig)
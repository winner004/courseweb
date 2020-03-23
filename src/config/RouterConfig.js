import VueRouter from "vue-router"

const IndexRouterConfig={
    routes:[
        {path:"/",name:"index",meta:{navname:"首页",index:1},component:()=>import(/* webpackChunkName: "index-chunk" */"@/components/index")},
        {path:"/test",name:"test",meta:{navname:"测试页",index:3},component:()=>import(/* webpackChunkName: "test-chunk" */"@/components/test")},
        {path:"/member",name:"member",meta:{navname:"会员中心",index:5} },
    ]
};
const CourseRouterConfig={
    routes:[
        {path:"/course",meta:{navname:"课程",index:4},href:"/course/",
            component:()=>import("@/modules/course/courselist"),
        },
        {path:"/detail/:id",name:"coursedetail",meta:{navname:"课程详细",hide:1,},href:"/course/",
            component:()=>import("@/modules/course/coursedetail")},
    ]
};

const AllRouterConfigs=IndexRouterConfig.routes.concat(CourseRouterConfig.routes)
const IndexRouter=new VueRouter(IndexRouterConfig)
const CourseRouter=new VueRouter(CourseRouterConfig)

export {IndexRouter,CourseRouter,AllRouterConfigs}

//export default new VueRouter(RouterConfig)

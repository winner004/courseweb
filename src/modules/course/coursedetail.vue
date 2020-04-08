<template>
    <div id="app">

        <div class="container">
            <div class="coursedetail">
                <div class="title">
                    <h1>Java从入门到精通21天，这是测试标题</h1>
                    <a-divider orientation="right">作者：<a href="#">张三丰</a> </a-divider>
                </div>
                <div class="content">
                    <a-card  class="auth">
                        <a-card-meta
                                title="张三丰"
                                description="程序员在囧途讲师，13年开发经验。擅长php、go、Java等。多年项目架构、开发、运营
经验">
                            <a-avatar slot="avatar"
                                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                      :size="64" />
                        </a-card-meta>
                    </a-card>
                    <a-card  class="coursedescribe">
                        <p>这里放的是课程介绍，本篇是继协程篇、进程篇之后的http server篇。主要讲解http server的基本知识点、
                            开发套路。学完本课程将会具备初步的api框架自研能力。</p>
                        <p>1、本课程会介绍一种适合微服务api开发函数框架编程</p>
                        <p>2、借鉴了go框架中的部分功能</p>
                        <p>3、为后面RPC篇打下结构基础</p>
                        <p>4、本课程不适合零基础学员</p>
                    </a-card>
                    <div class="row">
                        <a-button type="primary" icon="money-collect" size="large">9.9 购买本课程</a-button>
                    </div>
                    <div class="row left">
                        <a-tabs defaultActiveKey="1">
                        <!--<a-tabs defaultActiveKey="1" :tabPosition="mode"  >-->
                            <a-tab-pane tab="第1章:热身和导航栏" key="1">
                                <a-list :dataSource="data">
                                    <a-list-item slot="renderItem" slot-scope="item, index">
                                        <a-list-item-meta :description="item.des">
                                            <router-link slot="title" :to="{name:'courselesson',params:{id:123}}">第{{index+1}}讲： {{item.title}}</router-link>

                                        </a-list-item-meta>
                                    </a-list-item>
                                </a-list>
                            </a-tab-pane>
                            <a-tab-pane tab="第2章:课程页开发" key="2">第2章</a-tab-pane>
                            <a-tab-pane tab="第3章:后端数据模拟" key="3">第3章</a-tab-pane>
                        </a-tabs>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {Divider,Card,Avatar,Button,Tabs,List} from "ant-design-vue"
    import Vue from "vue"
    Vue.use(Divider)
    Vue.use(Card)
    Vue.use(Avatar)
    Vue.use(Button);
    Vue.use(Tabs);
    Vue.use(List);
    export default {
        name: "coursedetail",
        beforeMount(){
            this.data=[
                {title:"开张课、课程内容、环境搭建",des:"开张课，说一下环境和课程主要内容"},
                {title:"路由组件的按需加载设置、别名设置",des:"热身课程，把基础课程中没讲到的内容带一下"},
                {title:"在jsx下文本框事件触发",des:"今天来讲下jsx下组件的事件触发写法"},
                {title:"把搜索框封装到外部组件并加载",des:"本课时我们把搜索框单独封装到外部"},
            ];

        },
        data(){
            return {
                data:[]
            }
        }
    }
</script>

<style scoped>

</style>
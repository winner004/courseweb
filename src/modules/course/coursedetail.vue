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
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {Divider,Card,Avatar} from "ant-design-vue"
    import Vue from "vue"
    Vue.use(Divider)
    Vue.use(Card)
    Vue.use(Avatar)
    export default {
        name: "coursedetail"
    }
</script>

<style scoped>

</style>
<template>
    <div id="app">
        <div>
            <navbar></navbar>
        </div>
        <div class="container">
            <a-row>
                <a-col :lg="16" :xl="15">
                    <router-view></router-view>
                </a-col>
                <a-col :xs="0" :lg="8" :xl="7" style="margin-left:20px">
                    <classify/>
                    <adv1/>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    import { CourseRouter } from "@/config/RouterConfig"
    import navbar from "@/components/navbar"
    import {Row,Col} from "ant-design-vue"
    import classify from "@/components/widget/classify"
    import adv1 from "@/components/widget/adv1"
    import Vue from "vue"
    Vue.use(Row)
    Vue.use(Col)
    export default {
        name: "course",
        router:CourseRouter,
        components:{
            navbar,
            classify,
            adv1
        }
    }
</script>

<style scoped>

</style>
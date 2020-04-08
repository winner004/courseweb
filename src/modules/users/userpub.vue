<template>
    <div class="users">
        <a-card title="发布课程" style="text-align: left;">
        <a-form :form="form" @submit="handleSubmit">
            <a-form-item label="课程名称">
                <a-input placeholder="填写课程名称"/>
            </a-form-item>
            <a-form-item label="课件简介">
                <a-textarea placeholder="请详细填写课程简介" :rows="6"/>
            </a-form-item>
            <a-form-item label="个人说明">
                <a-textarea placeholder="譬如您的头衔、项目经验等" :rows="3"/>
            </a-form-item>
            <a-form-item label="课程价格">
                <a-input  addonAfter="RMB" defaultValue="10" />
            </a-form-item>
            <a-button type="primary" html-type="submit">
                发布
            </a-button>
        </a-form>
        </a-card>
    </div>
</template>

<script>
    import {Form,Card,Button,Dropdown,Menu} from "ant-design-vue"
    import Vue from "vue"
    Vue.use(Form)
    Vue.use(Card)
    Vue.use(Button)
    Vue.use(Dropdown)
    Vue.use(Menu)
    export default {
        name: "userpub"
    }
</script>

<style scoped>

</style>
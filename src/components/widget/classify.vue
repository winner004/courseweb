<template>
    <div class="widget">
        <a-card title="热门分类">
            <a-card-grid style="width:25%;textAlign:'center'">
                <i class="anticon"><myicon name="php"/></i>
                <span>PHP</span>
            </a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">
                <i class="anticon"><myicon name="python"/></i>
                <span>python</span>
            </a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">
                <i class="anticon"><myicon name="h5e"/></i>
                <span>H5</span>
            </a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">
                <my-icon type="icon-_qianduankaifa"/>
                <span>前端</span>
            </a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
            <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
        </a-card>
    </div>
</template>

<script>
    import {Card,Icon} from "ant-design-vue"
    import Vue from "vue"
    import myicon from 'vue-svg-icon/Icon.vue';
    Vue.use(Card)
    Vue.use(Icon)
    const MyIcon = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_1707444_j5erumy3gq.js', // 在 iconfont.cn 上生成
    });
    export default {
        name: "classify",
        components:{
            myicon,
            MyIcon
        }
    }
</script>

<style scoped>

</style>
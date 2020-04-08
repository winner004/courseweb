<template>
    <div id="app">
        <a-card title="课程目录" style="text-align: left">
            <a-tree defaultExpandAll :treeData="lessonCatalog"  @select="selectNode"
            />

        </a-card>

    </div>
</template>

<script>
    import {Tree,Card} from "ant-design-vue"
    import Vue from "vue"
    Vue.use(Tree)
    Vue.use(Card)
    export default {
        name: "coursecatalog",
        data(){
            return {
                lessonCatalog:[]
            }
        },
        created() {
            this.lessonCatalog=[
                { title: '第一章：热身和导航栏', key: '0',selectable:false,children:[
                        { title: '第1课:xxxxx', key: '101'},
                        { title: '第2课:xxxxx', key: '102'},
                        { title: '第3课:xxxxx', key: '103'},
                        { title: '第4课:xxxxx', key: '104'},
                    ] },
                { title: '第二章：课程页开发', key: '1',selectable:false,children:[
                        { title: '第1课:xxxxx', key: '201'},
                        { title: '第2课:xxxxx', key: '202'},
                        { title: '第3课:xxxxx', key: '203'},
                        { title: '第4课:xxxxx', key: '204'},
                    ] },
                { title: '第三章：后端数据模拟', key: '2',selectable:false },
            ]

        },
        methods:{
            selectNode(selectedKeys,e){
                if(e.selected){
                    const id=selectedKeys[0];
                    self.location=self.location.pathname+"#/lesson/"+id
                }
            }
        }

    }
</script>

<style scoped>

</style>
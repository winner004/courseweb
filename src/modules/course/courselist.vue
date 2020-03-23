<template>
    <div class="course">
        <a-row>
            <a-col :span="24" class="listh">
                课程列表
            </a-col>
        </a-row>
        <a-row class="column">
            <a-col :span="4">
                <img src="/images/c.png" class="img"/>
            </a-col>
            <a-col :span="20">
                <a-row >
                    <a-col :span="24" class="title courseline">
                    Java从入门到精通
                </a-col>
                    <a-col :span="24" class="introduce courseline" >
                        这里放的是课程的简介
                    </a-col>
                    <a-col :span="24" class=" courseline" >
                    作者名字.作者签名
                     </a-col>
                    <a-col :span="24" class=" courseline" >
                        <a-row>
                            <a-col :span="18">
                                <a href="">标签</a> | <a href="">标签</a> | <a href="">标签</a>
                            </a-col>
                            <a-col :span="6" class="price">
                               46课时/￥220
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row class="column">
            <a-col :span="4">
                <img src="/images/c.png" class="img"/>
            </a-col>
            <a-col :span="20">
                <a-row >
                    <a-col :span="24" class="title courseline">
                        PHP 入门到精通21天
                    </a-col>
                    <a-col :span="24" class="introduce courseline" >
                        这里放的是课程的简介
                    </a-col>
                    <a-col :span="24" class=" courseline" >
                        作者名字.作者签名
                    </a-col>
                    <a-col :span="24" class=" courseline" >
                        <a-row>
                            <a-col :span="18">
                                <a href="">标签</a> | <a href="">标签</a> | <a href="">标签</a>
                            </a-col>
                            <a-col :span="6" class="price">
                                50课时/￥180
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row class="column">
            <a-col :span="4">
                <img src="/images/c.png" class="img"/>
            </a-col>
            <a-col :span="20">
                <a-row >
                    <a-col :span="24" class="title courseline">
                        Vue+ant 实战进阶第一季
                    </a-col>
                    <a-col :span="24" class="introduce courseline" >
                        这里放的是课程的简介
                    </a-col>
                    <a-col :span="24" class=" courseline" >
                        作者名字.作者签名
                    </a-col>
                    <a-col :span="24" class=" courseline" >
                        <a-row>
                            <a-col :span="18">
                                <a href="">标签</a> | <a href="">标签</a> | <a href="">标签</a>
                            </a-col>
                            <a-col :span="6" class="price">
                                21课时/￥120
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>

    </div>
</template>

<script>
    import {Row,Col} from "ant-design-vue"
    import Vue from "vue"
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    Vue.use(Row)
    Vue.use(Col)
    export default {
        name: "courselist",
        components: {
            ARow,
            ACol

        }
    }
</script>

<style scoped>

</style>
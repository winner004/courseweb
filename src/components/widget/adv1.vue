<template>
    <div class="widget">
        <lottie :options="advOptions"
                v-on:animCreated="handlerAdv"/>

    </div>
</template>

<script>
    import Lottie from 'vue-lottie';
    import * as advData from "@/assets/adv1.json"

    export default {
        name: "adv1",
        data(){
            return {
                advOptions:{ animationData: advData.default },
                adv:{}
            }
        },
        methods:{
            handlerAdv: function (adv) {
                this.adv = adv;
            },

        },
        components:{
            Lottie
        }
    }
</script>

<style scoped>

</style>
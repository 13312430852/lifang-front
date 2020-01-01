<template>
    <div style="height: 100%; width: 100%; font-family:PingFang SC; font-weight:400;">

        <MerchandiseModel></MerchandiseModel>
        <div class="reportBtn">
            <div class="btn1" >
                <img src="../assets/report/矢量智能对象.png" width="100%" @click="lover"/>
            </div>
            <div class="leaf" v-show="lichunfu">
                <div style=" width: 30%; height: 61.64%; margin: 10% auto;">
                    举报
                </div>
            </div>
        </div>
        <div style="height: 500%; width: 90%; background-color: #4c90f5;">
            jjj
        </div>

    </div>
</template>

<script>
    import MerchandiseModel from "./MerchandiseModel"
    export default {
        name: "ReportStart",
        components:{
            MerchandiseModel,
        },
        data(){
            return{
                lichunfu:false
            }
        },
        methods:{
            lover(){
                this.lichunfu = !this.lichunfu
            }
        },
    }
</script>

<style scoped>
    .reportBtn{
        height: 7.496%;
        width: 29.33%;
        position: absolute;
        left: 66.933%;
        top: 1.65%;

        display: flex;
        flex-direction: column;
    }
    .btn1{
        width: 26.36%;
        height: 14%;
        margin-left: 63.636%;
        margin-top: 0;

    }
    .leaf{
        height: 73%;
        width: 98.2%;
        margin: auto;
        background: url("../assets/report/形状 1.png");
        font-size: 187.5%;
        color: #323131;

    }

</style>
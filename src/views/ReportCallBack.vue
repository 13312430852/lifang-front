<template>
    <div style="font-family:PingFang SC; font-weight:bold;">
        <div style="width: 19.4%; height: 11.24%; margin: auto; margin-top: 8.62%">
            <img src="../assets/service/确认 (1).png" style="width: 100%; margin:  auto 0;"/>
        </div>
        <div class="reportTex">
            举报已经提交
        </div>
        <div class="reportTex">
            请耐心等待反馈消息
        </div>
        <div style="width: 80%; height: 6%; margin: 30% auto">
            <button style="width: 100%; height: 100%; background-color: #4c90f5;border-style: none;border-radius: .6rem;
            font-size: 175%; color: #ffffff; font-family:PingFang SC; font-weight:bold;" @click="callBack">
                完成
            </button>
        </div>

        <!--<p >举报已提交</p>
        <p >请耐心等待客服反馈消息</p>-->


    </div>
</template>

<script>
    export default {
        name: "ReportCallBack",
        data(){
            return{
                goodId:null
            }
        },
        created(){
            this.goodId = this.$route.query.goodsId;
        },
        methods:{
            callBack(){
                this.$router.push('/goodDetail/' + this.goodId);

            },

        }
    }
</script>

<style scoped>
    .reportTex{
        width: 91.3%;font-size: 175%; text-align: center;  margin: auto; margin-top: 6%
    }
</style>

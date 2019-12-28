<template>
    <div style="background-color: #ececec">
        <div style="width: 92%; background-color: #f8f6f6; margin: auto; height: 45.7%;  margin-top: 6%">

            <div class="top">
                <div class="top1">
                    提现至微信钱包
                </div>

            </div>
            <div class="next" >
                <div class="tex">
                    <p style="padding-top:4.3%">提现金额:</p>
                </div>
                <div class="inputs">
                    <div>
                        ￥
                    </div>
                    <div>
                        <input  class="inputSet"
                                style="border: none; font-family: 'PingFang SC'; font-size: 100%; width: 80%;outline: none;"
                                v-model="applyCount"
                        onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" v-change="inspect1">
                    </div>


                </div><hr/>
                <div class="hint" style="padding-top: 4.3%">

                    <div class="hint1">

                        可提现金额{{user.user_all_money}},
                    </div>
                    <div class="hint2">
                        全部提现
                    </div>

                </div>
                <button style="width: 86%; height: 15%; background-color: #4c90f5; margin-left: 4.535%;
                color: #ffffff; font-size: 175%; font-family: PingFang SC;">
                    预计两小时到账，确认提现</button>
            </div>

        </div>
        <h1>{{applyCount}}</h1>

    </div>

</template>

<script>
    export default {
        name: "Withdraw",
        data(){
            return{
                user:{//测试用的数据-对象
                    'user_all_money':24.5,
                    'name':'lcf'
                },
                applyCount:'我是小姐姐'

        }
    },
        methods:{
            inspect1(){
                get
            }
        }
    }
</script>

<style scoped>

    .top{
        height: 16.6%;
        font-family:PingFang SC;
        font-weight:400;
        color: #141414;
        font-size: 162.5%;



    }
    .top1{
        padding-top: 4.3%;
        padding-left: 4.3%;
    }
    .next{
        background-color: #ffffff;
        height: 83.4%;
        padding-left: 4.3%;
        font-family:PingFang SC;

    }
    .tex{
        font-size: 175%;
        color: #757575;
        height: 14.2%;
    }
    .inputs{

        height: 17.9%;
        font-size: 350%;
        color: #141414;
        width: 86.4%;
        margin-top: 4.3%;
        display: flex;
    }
    .hint{

        height: 22.2%;
        font-size: 137.5%;
        display: flex;
        color: #757575;

    }
    .hint2{
        color: #ff0000;
    }

    .inputSet{
        height: 75%;
    }
</style>
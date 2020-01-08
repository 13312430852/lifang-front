<template>
    <div style="font-family:PingFang SC; font-weight:400;">
        <div id="qianbao1">
            <div>
                <p class="tex">当前资产:</p>
            </div>

            <div class="yue">
                <div class="yue1" style=" width: 50%">
                    ￥<span v-text="user_all_money"></span>
                    <!--{{ user.user_all_money }}-->
                    <!--￥599-->
                </div>
                <button  @click="toWithdraw" style="border: none;  background-color: #ffffff; margin-top: 1%">提现</button>
            </div>

        </div>
        <!--钱包的第一部分-->

        <div id="Detailed"><!--详细部分-->
            <div id="money" ><!--第二部分-->
                <div class="Moneytop"><!--状态明细-->
                    <div class="Moneytop1" @click="lllla"  >
                        收入明细：<span style="color: #67C23A">￥{{outMoney}}</span>
                        <div class="walletHr-box">
                            <div class="walletHr"  v-show="theOne">
                            </div>
                        </div>
                    </div>
                    <div class="Moneytop1" @click="lllla2">
                        支出明细：<span style="color: #F56C6C">￥{{countMoney}}</span>
                        <div class="walletHr-box">
                            <div class="walletHr" v-show="theTwo">

                            </div>
                        </div>
                    </div>
                    <!--<div class="Moneytop1" @click="lllla" >支出明细：元</div>
                    <div class="Moneytop1" @click="lllla2">收入明细：元</div>-->
                </div>
                <div id="datils" >
                    <router-view/>
                </div>

            </div>
        </div>
        <bottom-navigation></bottom-navigation>

    </div>

</template>

<script>
    import BottomNavigation from "../components/BottomNavigation";
    export default {
        name: "Wallet",
        components: {BottomNavigation },
        data(){
            return{
                user_all_money:0,
                num:0,
                userId:"",
                countMoney:"",
                outMoney:"",
                testList:[],
                moneyOutList:[

                ],
                moneyList:[


                ],
                theOne:true,
                theTwo:false,
                //对样式进行控制
            }
        },
        created(){
            axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryInMoney')
                .then(response => {
                    this.moneyList = response.data.data.moneyList;
                    this.countMoney = response.data.data.countMoney;
                    console.log(this.moneyList);
                    console.log(this.countMoney);
                })
                .catch(err => alert('网络错误'));

        axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryOutMoney')
            .then(response => {
                this.moneyOutList = response.data.data.moneyList;
                this.outMoney = response.data.data.countMoney;
                console.log(this.moneyOutList);
            })
            .catch(err => alert('网络错误'));

            //获取用户的基本信息
       axios.get(process.env.VUE_APP_URL + 'mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    console.log(re.data)
                    this.user_all_money= re.data.data.userAllMoney;
                   /* if(this.user.user_all_money == null){
                        this.user.user_all_money = 0
                    }*/
                })
           .catch(err => alert('未请求到用户基本数据错误为：' + err));
    },

        methods:{
            toWithdraw(){
                /*this.$router.push('/withdraw');*/
                /*this.$alert('Sorry!此功能尚未开发！', '功能未开发', {
                    confirmButtonText: '确定',
                    callback: action => {
                    }
                });*/
                this.$notify.info({
                    title: '功能未开放',
                    message: '提现功能尚未开放哦！'
                });
            },
            lllla(){
                this.theOne  = true;
                this.theTwo = false;
                this.$router.push('/thehome/wallet/walletRouter1');
            },
            lllla2(){
                this.theOne = false;
                this.theTwo = true;
                this.$router.push('/thehome/wallet/walletRouter2')
            }
        }
    }
</script>

<style scoped>
    #qianbao1 {

        height: 16.87%;
        background: rgba(76, 144, 245, 1);
        width: 92%;
        color: #ffffff;
        margin: 2.24% auto;
        /* background-image: linear-gradient(to right, #4C90F5, #B8D2FB);
         border-radius: 10px;*/

        background:linear-gradient(221deg,#7fa4fb,#6cb7fb);
        box-shadow:0px 0px 13px 0px rgba(129,67,243,0.47);
        border-radius:10px;
    }

    .tex {

        font-family: PingFang SC;
        font-size: 1.75rem;
        font-weight: bold;
        padding-top: 5%;
        padding-left: 4.7%;
    }

    .yue {

        margin: 2% auto ;
        width: 100%;
        display: flex;
        height: 40%;
    }

    .yue1 {


        margin: auto 3%;
        font-size: 25px;
    }

    .yue button {

        text-align: center;
        height: 76.9%;
        width: 18.11%;
        margin: auto 8%;
        font-size: 1.75rem;
        color: #4c90f5;
        font-family: PingFang SC;
        border-radius: 5%;
        border-style: none;
        outline: none;
    }

    /*第一部分css*/

    .Moneytop{
        border: 0px black solid;
        display: flex; width: 92%;
        height: 100%;
/*        background-color: red;*/
        margin: 5.33% auto;


    }
    .Moneytop1{
        text-align: center;
        border: 0px black solid;
        flex: 50%;
        font-family:PingFang SC;
        font-weight:bold;
        font-size: 1.625rem;
        color: #6e6e6e;

        /*border: solid;*/

    }
    .item1{

        display: flex;
        flex-direction: row;
        width: auto;
        /*background-color: green;*/
        margin: auto;
        list-style-type: none;
        margin-top:2.7%;
    }
    .item2{

       margin-top: 2.2%;
    }
    .item3{
        text-align: center;

        flex: 3;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 1.5rem;
    }
    .item4{
        text-align: center;

        flex: 2;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 1.5rem;
    }
    .item5{
        text-align: center;

        flex:3;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 1.5rem;
    }
    .walletHr-box{
        border: 0px black solid;
        height: 6px;
        width: 100%;
        display: flex;
        justify-content: center;

    }
    .walletHr{
        border: 0px black solid;
        height: 2px;
        width: 51%;
        background-color: #4c90f5;
        border-radius: 2px;
        display: block;
        margin: 1px 0;
    }

</style>

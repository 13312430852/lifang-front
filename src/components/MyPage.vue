<template>
    <div id="biggest">
        <div class="message">
            <div class="user_info">
                <div class="col-1 baseMsg">
                    <el-avatar class="headImg" :src="user.headimgurl" :size="60"></el-avatar>
                    <div class="theName">
                        <span v-text="user.userName"></span>
                        <span class="time">注册时间：<span v-text="theTime(user.userRegistTime)"></span></span>
                    </div>
                    <div class="theName">
                        <span class="user_item" v-text="sex(user.userSex)"></span>
                    </div>
                </div>
                <div class="col-2 money" >
                    <div class="col-1 fir">
                        <div class="col-1 title">资产</div>
                        <div class="col-1 num" >￥<span v-text="user.userAllMoney"></span></div>
                    </div>
                    <div class="line"></div>
                    <div class="col-1 fir">
                        <div class="col-1 title">收入</div>
                        <div class="col-1 num">+<span v-text="countMoney"></span></div>
                    </div>
                    <div class="line"></div>
                    <div class="col-1 fir">
                        <div class="col-1 title">支出</div>
                        <div class="col-1 num">-<span v-text="outMoney"></span></div>
                    </div>
                </div>
            </div>
        </div>


        <ul id="navList">
            <li @click="ToallOrder()">我的订单</li>
            <li @click="ToShare()">我的分享</li>
            <li @click="toCardTicket">卡券中心</li>
            <li @click="toAddress">收货地址</li>
            <div class="borderBottom" :style="{left:distance + '%'}"></div>
        </ul>
    </div>



</template>
<script>
    export default {
        name: "MyPage",

        data(){
            return{
                distance:0,
                theUrl:null,
                countMoney:null,
                outMoney:null,
                user:{},
            }
        },
        computed:{
            sex(){
                return (re => {
                    if(re == "2") return '男';
                    else if(re == "1") return '女';
                })
            },
            theTime(){
                return it => {
                    return it.split(" ")[0];
                }
            }
        },
        methods: {
            StringToDate(date){
                date = date.substring(0,19);
                date = date.replace(/-/g,'/');
                var timestamp = new Date(date).getTime();
                return timestamp;
            },

            judgeUrl() {
                this.theUrl = window.location.pathname;
                if (this.theUrl.indexOf("/My") != -1) {
                    this.distance = 0;
                } else if (this.theUrl.indexOf("/MyShare") != -1) {
                    this.distance = 25;
                } else if (this.theUrl.indexOf("/myCards") != -1) {
                    this.distance = 50;
                } else if (this.theUrl.indexOf("/myaddress") != -1) {
                    this.distance = 75;
                }
            },

            ToallOrder() {
                    this.distance = 0;
                    this.$router.push('/thehome/Order/My/AllOrder')
            },
            ToShare() {
                this.distance = 25;
                this.$router.push('/thehome/Order/MyShare')
            },
            toCardTicket()
            {
                this.distance = 50;
                this.$router.push('/thehome/Order/myCards')
            },
            toAddress()
            {
                this.distance = 75;
                this.$router.push('/thehome/Order/myaddress');
            }
        },
        created() {
            this.judgeUrl();

            //获取用户的基本信息
            axios.get(process.env.VUE_APP_URL + 'mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    this.user = re.data.data;
                    this.time = this.user.userRegistTime.substr(0,10)
                    console.log(this.user);
                })
                .catch(err => alert('未请求到用户基本数据错误为：' + err))


            axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryInMoney')
                .then(response => {
                    this.countMoney = response.data.data.countMoney;
                })
                .catch(err => alert('网络错误'))

            axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryOutMoney')
                .then(response => {
                    this.outMoney = response.data.data.countMoney;
                })
                .catch(err => alert('网络错误'))
        }

    }
</script>

<style scoped>
    .line{
        height: 80%;
        width: 1px;
        background-color: rgba(170,206,248,1);
    }
    .num{
        font-size: 1.9rem;
        color: white;
        text-align: center;
    }
    .title{
        font-size: 1.9rem;
        color: white;
        text-align: center;
    }
    .fir{
        /*background-color: red;*/
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    .time{
        margin-left: 18%;
        font-size: 1.4rem;
    }
    .theName{
        margin-top: 4%;
        margin-left: 15%;
        font-size: 1.8rem;
        color: white;

    }
    .money{
        /*background-color: #4c90f5;*/
        display: flex;
    }
    .baseMsg{
        /*background-color: red;*/
    }
    .col-2{
        flex: 2;
    }
    .col-1{
        flex: 3;
    }
    .headImg{
        /*background-color: red;*/
        float: left;
        margin-top: 4%;
        margin-left: 4%;
        margin-right: 5%;
    }


    .user_info{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
/*background-color: red;*/
        /*margin: auto;*/
        /*display: flex;*/
    }
    .borderBottom{
        width: 25%;
        height: 4px;
        background-color: #4c90f5;
        position: absolute;
        bottom: 0;
        left: 0%;
        transition: left .1s;
        border-radius: 2px;
    }
    /*.address{
        !*background-color: #4C90F5;*!
        border-bottom: 6px solid #4c90f5;
    }*/
    .square {
        width: 100%;
        background-image: url("../assets/h2.png");
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
    }

    .square:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #biggest{
        height:31.1%;
        width: 100%;
        /*background-color: red;*/
        margin-bottom: 4.3%;
    }
    .message {
        display: flex;
        width: 92%;
        height:82.7%;
       /* background-image: linear-gradient(to right, #4C90F5, #B8D2FB);
        border-radius: 10px;*/
        margin: 1.9% auto;

        background:linear-gradient(221deg,#7fa4fb,#6cb7fb);
        box-shadow:0px 0px 13px 0px rgba(129,67,243,0.47);
        border-radius:10px;

    }
    .head-picture1 {
        width: 16.6%;
        height: 38%;
        /*border-radius: 50%;*/
        margin-top: 3%;
        margin-left: 5%;
    }
    .list1 {
        /*height: 8.6%;*/
        color: white;
        font-size: 1.9rem;
        font-family:PingFang SC;
        width: 90%;
        height: 94%;
        margin-left: 6%;
        /*background-color: red;*/

    }
    #navList{
        list-style: none;
        width: 92%;
        height: 16%;
        margin: 5.1% auto;
        display:flex;
        position: relative;
        /*background-color: #5f5f5f;*/

    }
    #navList li{
        flex: 1;
        font-size: 1.875rem;
        text-align: center;
        color: #141414;
        font-weight: 600;
        font-family:PingFang SC;

    }
</style>
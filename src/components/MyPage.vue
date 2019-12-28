<template>
    <div id="biggest">
        <div class="message">
            <div class="head-picture1">
                <img :src="user.headimgurl" width="100%" height="100%" style="border-radius: 60%">
                <!--<div class="square">
                    <div class="content"></div> &lt;!&ndash;头像&ndash;&gt;
                </div>-->
            </div>
            <dl class="list1">
                <dd v-text="user.user_name"></dd>   <!--用户电话，需自己添加，添加后才能显示-->
                <dd v-text="sex(user.userSex)"></dd>
                <dd>
                    昵称：<span v-text="user.userName"></span>
                </dd>
                <dd>
                    注册时间：<span v-text="user.userRegistTime"></span>
                </dd>
            </dl>
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
                user:{
                   /* 'head_picture': require('../assets/headPicture1.png'),
                    'user_name': '用户昵称',
                    'user_sex': '男',
                    'user_tel': '1515****621',
                    'user_regist_time':'2019.12.12'*/
                },
            }
        },
        computed:{
            sex(){
                return (re => {
                    if(re == "2") return '男'
                    else if(re == "1") return '女'
                })
            }
        },
        methods:{

            ToallOrder(){
                this.distance = 0;
                this.$router.push('/Order/AllOrder')

            },
            ToShare(){
                this.distance = 25;
                this.$router.push('/MyShare')
            },
            toCardTicket(){
                this.distance = 50;
                this.$router.push('/Order/myCards')
            },
            toAddress(){
                this.distance = 75;
                this.$router.push('/myaddress');
            }
        },
        created() {
            //获取用户的基本信息
            axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
            axios.defaults.headers.common["userType"] = 'MINE';
            axios.get('http://39de9ecd.ngrok.io/mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    this.user = re.data.data;
                    console.log(this.user);
                })
                .catch(err => alert('未请求到用户基本数据错误为：'+err))
        }

    }
</script>

<style scoped>
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
        background-image: linear-gradient(to right, #4C90F5, #B8D2FB);
        border-radius: 10px;
        margin: 1.9% auto;
    }
    .head-picture1 {
        width: 16.6%;
        height: 38%;
        /*border-radius: 50%;*/
        margin-top: 3%;
        margin-left: 5%;
    }
    .list1 {
        height: 8.6%;
        margin-top: 5%;
        margin-left: 5%;
        color: white;
        font-size: 1.9rem;
        font-family:PingFang SC;

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
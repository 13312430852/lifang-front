<template>
    <div class="allPage">
        <div class="reciept">
            <div class="recieptFirst">
                <div class="Nname" v-text="PayMessage.userAddress.addressName">
                </div>
                <div class="Nphone" v-text="PayMessage.userAddress.addressTel">
                </div>
            </div>
            <div class="recieptSecond">
                <div class="tubiao">
                    <img src="../assets/adrressIcon.png" width="100%"/>
                </div>
                <div class="site" v-text="PayMessage.userAddress.rcAddress">

                </div>
            </div>
        </div>
        <div class="commodity">
            <div class="commodityFirst">
                <div class="Fno1">
                    <img :src="PayMessage.GoodsList.goods.goodsImageUrl" style="width: 100%">
                </div>
                <div class="Fno2">
                    <div v-text="PayMessage.GoodsList.goods.goodsName" class="Fno2-1">

                    </div>
                    <div v-html="PayMessage.GoodsList.goods.goodsDesc" class="Fno2-2">

                    </div>
                </div>
                <div class="Fno3">
                    <div class="Fno3-1" >
                        ￥{{PayMessage.GoodsList.goodsNorms.currentPrice}}
                    </div>
                    <div class="Fno3-2">
                        x{{PayMessage.count}}
                    </div>
                </div>
            </div>
            <div class="commoditySecond">
                <div style=" margin: auto 2%; width: 23%; ">
                    店铺地址：
                </div>
                <div v-text="PayMessage.GoodsList.business.businessAddress" style="margin: auto 0"></div>
            </div>
            <div class="commodityLast">
                <div style="display: flex; height: 9.8%;">
                    <div  class="last1-1" style="overflow: hidden;
        text-overflow: ellipsis;" v-text="PayMessage.count">

                    </div>
                    <div class="last1-2">
                        <div>

                        </div>
                        <div  v-text="PayMessage.GoodsList.goodsNorms.norms">

                    </div>
                    </div>

                </div>
                <div style="display: flex">
                    <div  class="last2-1">
                        活动类型：
                    </div>
                    <div class="last2-2">
                        <div  v-text="discountType(PayMessage.GoodsList.goods.discountType)"></div>
                    </div>

                </div>
                <div style="display: flex">
                    <div  class="last2-1">
                        消费方式：
                    </div>
                    <div class="last2-2">
                        <div  v-text="consumType(PayMessage.GoodsList.goods.consumeType)"></div>
                    </div>

                </div>
                <div class="last3" v-if="PayMessage.userGoodCaeds != null">
                    <div class="man">满</div>
                    <div class="jian"v-text="PayMessage.userGoodCaeds.cardsOrder"></div>
                    <div class="man">减</div>
                    <div class="jian" v-text="PayMessage.userGoodCaeds.cardsPrice"></div>
                </div>
            </div>
        </div>
        <div class="basePart">
            <div class="basePartTxt">
                小计：{{PayMessage.allPrice}}
            </div>

            <button class="btn" @click="toPay">立即购买</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderSubmit",
        data(){
            return{
                theOrderId:null,
                orderMsg:null,

                user1:{
                    'nickname':'我是怂狗狗',
                    'numberPhone':'13007808520'
                },
        PayMessage:{},

            }

        },
        methods:{
            toPay(){
                axios.get(process.env.VUE_APP_URL + 'order/payOrder/' + this.PayMessage.orderID)
                    .then(re => {
                        console.log(re.data);
                        if(re.data.code == 200 ){       //支付成功后跳至订单详情页面
                            this.$router.push('/details')
                        }
                    })
                    .catch(err => {
                        alert('网络错误');
                    })
            }
        },

        created() {
            let newgoods=this.$route.query;

                    this.PayMessage=newgoods
                    console.log(this.PayMessage)

        }
        ,
        computed:{
            consumType(){
                return (it) =>{
                    if(it == 1){
                        return '到店消费'
                    }else if(it == 2){
                        return '包邮'
                    }
                }

            },
            discountType(){
                return (it) =>{
                    if(it=='1'){
                        return '限时抢购'
                    }else if(it=='2'){
                        return '限量抢购'
                    }
                    else return '团购'
                }

            }
        }
    }
</script>

<style scoped>
    .allPage{
        background-color: #ececec;
        font-family:PingFang SC; font-weight:400;
    }
    .reciept{
        width: 94.67%;
        height: 14.61%;
        background-color: #ffffff;
        margin: 2.48% auto;

    }
    .recieptFirst{
        display: flex;
        height: 41%;

    }
    .Nname{
        font-size: 262.5%;
        font-weight:500;
        color: #000000;
        flex: 1;
        height: 56.25%;
        width: 50%;
        margin: auto;
        text-align: center;font-weight:500;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .Nphone{
        font-size: 200%;
        color: #000000;
        flex: 1;
        height: 40%;
        width: 50%;
        margin: auto;
    }
    .recieptSecond{
        width: 78.4%;
        height: 42%;
        display: flex;
    }
    .tubiao{
        width: 5.45%;
        height: 48.75%;
        margin-left: 5.4%;
    }
    .site{
        width: 89.12%;
        height: 100%;
        font-size: 187.5%;
        color: #000000;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 5.4%;
        font-weight:500;
    }
    .commodity{
        /*height: 14.02%;*/

        margin: 6% auto;
        background-color: #ffffff;
        height: 60%;
        width: 94.67%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .commodityFirst{
        height: 26.34%;
        width: 100%;
        display: flex;
        margin: 4.367% 0;

    }
    .Fno1{
        width: 26.34%;
        height: 100%;
        background-color: red;
        margin: 4.23% 0;

    }
    .Fno2{
        width: 53.94%;
        height: 100%;
        margin: 4.23% 1%;
    }
    .Fno2-1{
        height: 44.545%;
        width: 100%;
        margin: 2% 0;
        font-size: 187.5%;
        color: #000000;font-weight:500;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .Fno2-2{
        height: 43.85%;
        width: 100%;
        background-color: #ececec;
        color: #545454;
        margin: 3.6% 0;
        font-size: 150%;
    }
    .Fno3{
        height: 48.13%;
        width: 16.9%;

        margin: 8% 1%;
    }
    .Fno3-1{
        height: 31.11%;
        width: 90%;
        margin: 5% 5%;
        font-size: 162.5%;
        color: #000000;
    }
    .Fno3-2{
        height: 31.11%;
        width: 90%;
        margin: 5% 5%;
        font-size: 162.5%;
        color: #a8a5a5;
    }
    .commoditySecond{
        display: flex;
        height: 8%;
        width: 100%;
        margin: 6.34% 0 ;
        font-size: 200%;
        color: #000000;font-weight:500;
    }
    .commodityLast{
        height: 43.7%;
        width: 100%;
        margin: 11.97% 0%;

        font-size: 162.5%;
        color: #000000;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .last1-1{
        flex: 70%;
        text-align: center;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .last1-2{
        flex: 10%;
        display: flex;
        height: 9.67%;
    }
    .last2-1{
        flex: 70%;
        text-align: center;
        height: 9.67%;
        margin-top: 7.6%;

    }
    .last2-2{
        flex: 10%;
        display: flex;
        height: 9.67%;
        margin-top: 7.6%;
    }
    .last3{
        display: flex;
        height: 15%;
        width: 100%;
        margin:  7% 30%;
        font-size: 1.625rem;
    }
    .man{
        width: 10%;
        text-align: center;
        line-height: 200%;
        color: white;
        background-color: #ff4400;
    }
    .jian{
        width: 10%;
        text-align: center;
        line-height: 200%;
        color: white;
        background-color: #ff4400;
    }

    .last3-1{
        color: #ff7a01;
        text-align: center;
    }
    .basePart{
        height: 6.75%;
        width: 100%;
        display: flex;
        background-color: #ffffff;
        position: absolute;
        bottom: 0%;
    }
    .basePartTxt{
        font-size: 1.625rem;
        color: #ff7a01;
        width: 30%;
        margin: auto 0 auto 37%;
    }
    .btn{
       width: 26.67%;
        height: 66.67%;
        margin: auto 4.5%;
        background-color: #fe5500;
        color: #ffffff;
        font-size: 2rem;
        border-style: none;
    }
</style>
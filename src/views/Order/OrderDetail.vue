<template>
    <div id="biggest">
        <div id="title">订单详情</div>
        <div class="logistics">
            <div class="logistics1">
                <div class="logistics_Icon">
                    <img src="../../assets/car.png" height="45%"/>
                </div>
                <div class="logistics_Message" v-text="ordersExperssState123"></div>
            </div>
            <div style="height: 1px;width: 100%;background-color: #B8D2FB;margin: 0 auto"></div>
            <div class="logistics2">
                <div class="logistics_Icon">
                    <img src="../../assets/position.png" height="58%"/></div>
                <div class="logistics_Message1" v-text="order.address.rcAddress"></div>
            </div>
        </div>
        <div class="Detail">
            <div class="every">
                <div class="store">
                    <div class="left" v-text="order.businessName"></div>
                    <div class="right" style="margin-top: 7%" v-text="ordersPayState123"></div>
                </div>
                <div class="picture_message">
                    <div class="picture">
                        <img :src="order.goods.goodsImageUrl" width="100%" height="100%">
                    </div>

                    <div class="message">
                        <div class="message_1" v-text="order.goods.goodsName"></div>
                        <div class="message_2">
                            <div class="discript" v-html="order.goods.goodsDesc"></div>
                            <div class="price" v-text="order.goodsPrice"></div>
                        </div>
                    </div>
                </div>
                <div class="amount">
                    <div class="left">购买数量</div>
                    <div class="right" style="color: #323131;font-size: 1.75rem" v-text="order.goodsNum"></div>
                </div>
                <div class="amount">
                    <div class="left">总价</div>
                    <div class="right1">￥<span v-text="order.ordersPrice"></span></div>
                </div>
                <div class="amount">
                    <div class="left">下单时间</div>
                    <div class="right" v-text="order.ordersTime"></div>
                </div>
            </div>

            <div class="btn1">
                <div style="flex: 2"></div>
                <div style="flex: 1" v-if="order">
                    <button class="pay1" v-if="pay" @click.capture.stop="toPay(order)">继续付款</button>
                </div>
                <div style="flex: 1;">
                    <button class="pay" @click.capture.stop="payAgin(order.goods.goodsId)">再购买</button>
                </div>
            </div>
            <div class="backMoney" @click="toservice">联系客服退款</div>

        </div>
    </div>
</template>

<script>


    export default {
        name: "OrderDetail",
        data() {
            return {
                propsData:{},

                order: {},
                tuikuan:true,
                pay:false
            }
        },
        created(){
            this.order= this.$route.query.order;
             console.log('订单想去');
            console.log(this.order);
        },
        computed:{
            ordersExperssState123(){
                if(this.order.ordersExperssState == 1){
                    return '已发货'
                }else if(this.order.ordersExperssState == 0) {
                    return  '未发货'
                }
            },
            ordersPayState123(){
                if(this.order.ordersPayState==0){
                    this.tuikuan=false,
                        this.pay=true
                    return '未支付'
                }else if(this.order.ordersPayState==1){
                    this.tuikuan=true;
                        this.pay=false;
                    return '已支付'
                }
            }
        },
        methods:{
            payAgin(goodId){
                this.$router.push('/MoreTravelOrder/buy/' + goodId);
            },

            createMsg(item){            //构造参数
                console.log(item);
                var detailGood;
                axios.get(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/' + item.goodsId)
                    .then(re =>{
                        detailGood = re.data.data;
                        this.$set(this.propsData,'GoodsList',detailGood);
                        this.$set(this.propsData,'userAddress',item.address);
                        this.$set(this.propsData,'count',item.goodsNum);
                        this.$set(this.propsData,'allPrice',item.ordersPrice);
                        this.$set(this.propsData,'orderID',item.ordersId);

                        this.$router.push({path:'/submitOrder',query:this.propsData});
                    })

            },
            toPay(item){
                this. createMsg(item);
            },
            toservice(){
                this.$router.push('/thehome/service')
            },



        }
    }
</script>

<style scoped>
    .backMoney{
        width: 92%;
        margin: 7% auto;
        font-size: 1.6rem;
        color: #a3a3a3;
        text-align: right;
    }
    #biggest {
        width: 92%;
        height: 100%;
        margin: 2% auto;
        background-color: #ffffff;
    }

    #title {
        width: 100%;
        height: 3%;
        font-size: 1.875rem;
        background-color: #ffffff;
    }

    .logistics {
        width: 100%;
        height: 18.4%;
        /*background-color: #007aff;*/
        margin-top: 6%;
    }

    .logistics1 {
        width: 100%;
        height: 35%;
        display: flex;
        /*background-color: yellow;*/
    }

    .logistics2 {
        width: 100%;
        height: 35%;
        margin-top: 5%;
        display: flex;
        /*background-color: green;*/
    }

    .logistics_Icon {
        width: 10%;
        height: 100%;
        /*background-color: lightgreen;*/
    }

    .logistics_Message1 {
        width: 75%;
        height: 100%;
        /*background-color: #ffbb4d;*/
        font-size: 2rem;
        color: #bbbbbb;
    }

    .logistics_Message {
        width: 75%;
        height: 100%;
        /*background-color: #ffbb4d;*/
        font-size: 2rem;
        /*color: #2C2C2C;*/
    }

    .Detail {
        width: 100%;
        height: 70%;
        background-color: #F6F5F4;
        /*margin-top: 10%;*/
        border-radius: 10px;
        border: 1px solid  #F6F5F4;
    }

    .every {
        width: 92%;
        height: 40%;
        background-color: #ffffff;
        margin: 5% auto;
        border-radius: 10px;
        box-shadow:0px 0px 13px 0px #a8a8a8;

    }

    .store {
        width: 100%;
        height: 14%;
        display: flex;
        font-size: 1.5rem;
        /*background-color: #b3deff;*/

    }

    .picture_message{
        width: 100%;
        height: 50%;
    }

    .picture {
        width: 25%;
        height: 80%;
        margin-left: 5%;
        /*background-color: #ffbb4d;*/
        float: left;
    }

    .message {
        width: 60%;
        height: 100%;
        margin-left: 5%;
        /*background-color: #89fff7;*/
        float: left;
    }

    .amount {
        width: 100%;
        height: 12%;
        font-size: 1.375rem;
        color: #ADADAD;
        display: flex;
        /*background-color: lightgreen;*/
        /*border: 1px solid black;*/
    }

    .left {
        width: 50%;
        height: 100%;
        margin-left: 5%;
        /*background-color: lightpink;*/
    }
    .right1 {
        width: 45%;
        height: 100%;
        text-align: right;
        margin-right: 5%;
        font-size: 2rem;
        color: #ff2b2b;
        /*background-color: #ca60ff;*/
    }

    .right {
        width: 45%;
        height: 100%;
        text-align: right;
        margin-right: 5%;

    }
    .price{
        width: 20%;
        height: 100%;
        float: left;
        font-size: 2rem;
        margin-left: 10%;
        color: #ff2b2b;
        /*background-color: #ffbb4d;*/
    }
    .discript{
        width: 70%;
        height: 100%;
        float: left;
        font-size: 1.375rem;
        color: #ADADAD;
        /*background-color: #0f13ff;*/
    }

    .message_1 {
        width: 100%;
        height: 30%;
        font-size: 1.5rem;
        /*border: 1px solid black;*/

    }

    .message_2 {
        width: 100%;
        height: 70%;
        /*border: 1px solid black;*/
    }
    .btn1{
        width: 92%;
        height: 10%;
        margin: 0 auto;
        display: flex;
    }
    .tuikuan{
        width: 30%;
        height: 20%;
        color: white;
        font-size: 1.2rem;
        background-color: #f40;
        border-radius: 15px;
        border: 0px solid #f40;
        float: right;

    }
    .pay{
        width: 90%;
        height: 70%;
        color: white;
        font-size: 1.8rem;
        background-color: #629ef7;
        border-radius: .7rem;
        display: block;
        float: right;
        border-style: none;

    }
    .pay1{
        width: 90%;
        height: 70%;
        color: white;
        font-size: 1.8rem;
        border-style: none;
        background-color: #fd5b20;
        border-radius: .7rem;
        float: right;
    }
</style>
<template>
    <div id="biggest">
        <div id="title">订单详情</div>
        <div class="logistics">
            <div class="logistics1">
                <div class="logistics_Icon">
                    <img src="../../assets/car.png" height="60%" width="58%"/>
                </div>
                <div class="logistics_Message" v-text="ordersExperssState(goods.ordersExperssState)"></div>
            </div>
            <hr style="background-color: lightgrey">
            <div class="logistics2">
                <div class="logistics_Icon">
                    <img src="../../assets/position.png" height="70%" width="50%"/></div>
                <div class="logistics_Message" v-text="goods.rcAddress"></div>
            </div>
        </div>
        <div class="Detail">
            <div class="every">
                <div class="store">
                    <div class="left" v-text="goods.business_name"></div>
                    <div class="right" v-text="goods.orders_pay_state"></div>
                </div>
                <div class="picture_message">
                    <div class="picture">
                        <img :src="goods.goods_image_url" width="100%" height="100%">
                    </div>

                    <div class="message">
                        <div class="message_1" v-text="goods.goods_name"></div>
                        <div class="message_2">
                            <div class="discript" v-text="goods.goods_desc"></div>
                            <div class="price" v-text="goods.goods_price"></div>
                        </div>
                    </div>
                </div>
                <div class="amount">
                    <div class="left">购买数量</div>
                    <div class="right" v-text="goods.goods_num"></div>
                </div>
                <div class="amount">
                    <div class="left">总价</div>
                    <div class="right" v-text="goods.goods_price"></div>
                </div>
                <div class="amount">
                    <div class="left">下单时间</div>
                    <div class="right" v-text="goods.orders_time"></div>
                </div>
            </div>
            <div class="btn1">
                <button class="tuikuan" @click="toservice">联系客服退款</button>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "OrderDetail",
        data() {
            return {
                goods:
                    {
                        'ordersExperssState': '已发货',
                        'rcAddress': '贵安数字经济产业园',
                        'goods_image_url': require('../../assets/clothse.jpg'),
                        'business_name': '安踏官方旗舰店',
                        'goods_price': '55',
                        'goods_num': '1',
                        'orders_price': '55',
                        'orders_time': '2019.11.11',
                        'orders_pay_state': '已支付',
                        'goods_name': '表情包T恤',
                        'goods_desc': '这是一件很骚的表情包T恤不吃白不吃举措啥时间你不压车'
                    },

            }
        },
        created(){
            let newGoods= this.$route.query.goods;
            this.goods = newGoods;
            console.log(this.goods);
        },
        methods:{
            toservice(){
                this.$router.push('/service')
            },
            ordersExperssState(){
                if(this.ordersExperssState=='1'){
                    ordersExperssState='已发货'
                }else if(this.ordersExperssState=='0') {
                    ordersExperssState='未发货'
                }
            }
        }
    }
</script>

<style scoped>
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
        height: 50%;
        display: flex;
        /*background-color: yellow;*/
    }

    .logistics2 {
        width: 100%;
        height: 50%;
        margin-top: 5%;
        display: flex;
        /*background-color: green;*/
    }

    .logistics_Icon {
        width: 25%;
        height: 100%;
        /*background-color: lightgreen;*/
    }

    .logistics_Message {
        width: 75%;
        height: 100%;
        /*background-color: #ffbb4d;*/
        font-size: 1.5rem;
        /*color: #2C2C2C;*/
    }

    .Detail {
        width: 100%;
        height: 80%;
        background-color: #F6F5F4;
        margin-top: 10%;
        border-radius: 10px;
        border: 1px solid  #F6F5F4;
    }

    .every {
        width: 92%;
        height: 35%;
        background-color: #ffffff;
        margin: 5% auto;
        border-radius: 10px;
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
        width: 75%;
        height: 100%;
        margin-left: 5%;
        /*background-color: lightpink;*/
    }

    .right {
        width: 15%;
        height: 100%;
        text-align: right;
        /*background-color: #ca60ff;*/
    }
    .price{
        width: 20%;
        height: 100%;
        float: left;
        font-size: 1.5rem;
        margin-left: 10%;
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
        margin: 0 auto;


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
        /*margin-right: 5%;*/
    }
</style>
<template>
    <div id="biggest">
        <div id="title">订单详情</div>
        <div class="logistics">
            <div class="logistics1">
                <div class="logistics_Icon">
                    <img src="../../assets/car.png" height="36%"/>
                </div>
                <div class="logistics_Message" v-text="ordersExperssState123"></div>
            </div>
            <hr style="background-color: lightgrey">
            <div class="logistics2">
                <div class="logistics_Icon">
                    <img src="../../assets/position.png" height="48%"/></div>
                <div class="logistics_Message" v-text="order.address.rcAddress"></div>
            </div>
        </div>
        <div class="Detail">
            <div class="every">
                <div class="store">
                    <div class="left" v-text="order.businessName"></div>
                    <div class="right" v-text="ordersPayState123"></div>
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
                    <div class="right" v-text="order.goodsNum"></div>
                </div>
                <div class="amount">
                    <div class="left">总价</div>
                    <div class="right" v-text="order.ordersPrice"></div>
                </div>
                <div class="amount">
                    <div class="left">下单时间</div>
                    <div class="right" v-text="order.ordersTime"></div>
                </div>
            </div>
            <div class="btn1">
                <button class="tuikuan" @click="toservice" v-show="tuikuan">联系客服退款</button>
            </div>
            <div class="btn1">
                <button class="pay" @click="toSubmitPage" v-show="pay">继续付款</button>
            </div>
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
            let neworder= this.$route.query.order;
            this.order = neworder;
            console.log(this.order);
        },
        computed:{
            ordersExperssState123(){
                if(this.order.ordersExperssState=='1'){
                    return '已发货'
                }else if(this.order.ordersExperssState=='0') {
                    return  '未发货'
                }
            },
            ordersPayState123(){
                if(this.order.ordersPayState=='0'){
                    this.tuikuan=false,
                        this.pay=true
                    return '未支付'
                }else if(this.order.ordersPayState=='1'){
                    this.tuikuan=true;
                        this.pay=false;
                    return '已支付'
                }
            }
        },
        methods:{
            toservice(){
                this.$router.push('/service')
            },

            toSubmitPage(){
                axios.get(process.env.VUE_APP_URL + 'order/payOrder/' + this.order.ordersId)
                    .then(re => {
                        if(re.data.code == 200 ){       //支付成功后跳至订单详情页面
                            alert(re.data.message);
                            this.$router.push('/thehome/Order/My/AllOrder')
                        }
                    })
                    .catch(err => {
                        alert('网络错误');
                    })

            },

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
        width: 50%;
        height: 100%;
        margin-left: 5%;
        /*background-color: lightpink;*/
    }

    .right {
        width: 45%;
        height: 100%;
        text-align: right;
        margin-right: 5%;
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

    }
    .pay{
        width: 30%;
        height: 20%;
        color: white;
        font-size: 1.2rem;
        background-color: #f40;
        border-radius: 15px;
        border: 0px solid #f40;
        float: right;
        margin-left: 50%;

    }
</style>
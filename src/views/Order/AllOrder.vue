<template>
    <div id="box1">
        <loading-b v-if="inRequest"></loading-b>
        <div v-if="goods == null || goods.length == 0" class="noContent">        <!--空页-->
            <div style="flex: 2;"></div>
            <div style="flex: 1;display: flex;align-items: flex-end"><span class="tipsFont">您还没有下过订单哟。</span></div>
            <div style="flex: 2"></div>
        </div>
        <div class="goods" v-if="goods.length != 0" v-for="(good,i) in goods"  @click="Todetail(good)">
            <div class="goodImg" :style="{backgroundImage:'url(' + good.goods.goodsImageUrl + ')'}"></div>
            <div id="message">
                <div class="theNameRow">
                    <span class="name" v-text="good.goods.goodsName"></span>
                    <span class="price">￥<span v-text="good.ordersPrice"></span></span>
                </div>
                <div class="theNameRow">
                    <span class="goodDesc" v-html="good.goods.goodsDesc"></span>
                    <span class="state" v-text="payState(good.ordersPayState)">未支付</span>
                </div>
                <div style="display:flex;flex: 4;">
                    <span style="flex: 1"><div class="createTime" style="clear: both;" v-text="createTime(good.ordersTime)">2020-12-09</div></span>
                    <span class="one"><button class="but" style="margin-right: 0" v-if="good.ordersPayState != 1" @click.capture.stop="toPay(good)">去支付</button></span>
                    <span class="two"><button class="but" @click.capture.stop="payAgin(good.goodsId)">再购买</button></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingD from "../../components/loadingD";
    import LoadingF from "../../components/loadingF";
    import LoadingB from "../../components/loadingB";
    export default {
        name: "AllOrder",
        components:{
            LoadingD,
            LoadingF,
            LoadingB
        },
        data(){
            return{
                inRequest:true,


                url:process.env.VUE_APP_URL,
                goods:null,
                propsData:{},
                address:{},
            }
        },
        computed:{
            createTime(){
                return (it) => {
                    return it.split(" ")[0];
                }
            },
            payState(){
                return (it) => {
                    if (it == 1) return '已支付'
                    else return '未支付'
                }
            }
        },
        created() {
            axios.post(process.env.VUE_APP_URL+'order/userQueryOrder',{})
                .then(response => {
                    console.log(response.data);
                    console.log('scnjbscb');
                    console.log(response.data.data);
                    this.inRequest = false      //已经结束请求
                this.goods = response.data.data;

            }).catch(function (err) {
                console.log(err)
            })



        },
        methods:{
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
            payAgin(goodId){
                this.$router.push('/MoreTravelOrder/buy/' + goodId);
            },
            Todetail(order){
                this.$router.push({path: '/theOrderDetail', query: {'order':order}})
            },
        }
    }
</script>

<style scoped>


    .tipsFont{
        color: #d8d8d8;
        font-size: 2rem;
    }
    .noContent{
        width: 100%;
        height: 100%;
        background-image: url("../../assets/空页提示.png");
        background-repeat:no-repeat;
        background-position: center 27%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }



    .createTime{
        width: 150%;
        height: 100%;
        position: relative;
        left: -120%;
        margin-top: 10%;
        font-size:1.8rem;
        font-family:PingFang SC;
        /*font-weight:bold;*/
        color:#b8b8b8;
    }
    .but{
        width:80%;
        height:4.5vh;
        background:rgba(76,144,245,1);
        border-radius:0.6rem;
        border-style: none;
        margin-right: 8%;
        color: white;
    }
    .two{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .one{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .goodDesc{
        flex: 3;
        height: 100%;
        width: 10px;
        font-size:1.6rem;
        font-family:PingFang SC;
        color:#9c9b9b;
        display: flex;
        align-items: center;
        overflow:hidden!important;
        white-space:nowrap;
        text-overflow:ellipsis;
    }

    .state{
        font-family:PingFang SC;
        color:rgba(45,45,45,1);
        font-size: 1.6rem;
        font-weight: bolder;
        flex: 1;
       justify-content: flex-end;
        margin-right: 3%;
        display: flex;
        align-items: center;
    }
    .price{
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(45,45,45,1);
        font-size: 1.875rem;
        flex: 1;
        text-align: right!important;
        margin-top: 3%;
        color: red;
        margin-right: 4%;
    }
    .name{
        flex: 3;
        font-size:1.875rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(45,45,45,1);
        display: flex;
        align-items: center;
        /*background-color:rebeccapurple ;*/
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .theNameRow{
        flex: 3;
        /*background-color: green;*/
        display: flex;
        align-content: center;
    }
    .goodImg{
        width: 30%;
        height: 12vh;
        /*background-color: #4c90f5;*/
        margin-bottom: 80px;
        position: relative;
        top: -16px;
        left: 3%;
        border-radius: 4px;

        background-size: cover;
        background-repeat: no-repeat;
        box-shadow:0px 0px 13px 0px #cccccc;
    }
    #box1{
        height: 88%!important;
        margin: 2% auto;
        font-family: "PingFang SC";
        overflow-y: scroll;
    }
    .goods{
        width: 90%;
        height: 17vh;
        background-color:white;
        border-radius: 0.625rem;
        display: flex;
        font-family: "PingFang SC";
        margin: 8% auto;
        box-shadow:0px 0px 13px 0px #cccccc;
    }
    #picture{
        width: 35%;
        height: 15vh;
    }
    #message{
        width: 80%;
        height: 100%;
        margin-left: 5%;
        font-family: "PingFang SC";
        display: flex;
        flex-direction: column;
        /*background-color: red;*/
    }


</style>
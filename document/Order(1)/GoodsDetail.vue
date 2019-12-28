<template>
    <div style="width: 100%;height: 100%;">
        <div class="goodImg"><img style="width: 100%;height: 100%" :src="detailGood.goods.goodsImageUrl" alt=""></div> <!--展示图-->
        <div class="baseMessege">
            <div class="price_type">
                <span class="rePrice">￥13</span>
                <span class="oldPrice">￥13</span>
                <span class="activeType" @click="toShow = !toShow">领取  优惠券</span>
            </div>
            <div class="tip" v-if="isShow">领取成功</div>

            <div class="name_useType">
                <div class="DianName" v-text="detailGood.goods.goodsName">花溪重庆火锅换句话说几号放假设计费会使肌肤好几十福建省是否火花塞</div>
                <div class="useType"><span v-text="detailGood.goods.consumeType">到店消费</span></div>
            </div>
            <div class="goodDesc" v-text="detailGood.goods.goodsDesc">
                和胜股份公司符合施工方见好就收福建省福建师范是否合适手机号健身房和数据恢复及时发货时
            </div>
            <div class="addressBox">
                <div style="width: 100%;height: 100%;margin-top: 8%">
                    <div class="addressIcon"><img style="width: 100%" src="../../assets/adrressIcon.png"></div>
                    <div class="address" >贵阳市花溪区花溪大学城学富路</div>
                </div>
            </div>
        </div>
        <div class="goodDetailMsg">商品详情</div>
        <div class="goodDetailList" v-for="item in detailGood.goodsDetailsUrl">
            <img class="theImg" src="item">
        </div>

        <div class="carbox" v-if="toShow">
            <div class="car1" v-for="(item1,i) in cards">
                <div class="left">
                    <div class="car_price" v-text="item1.cards_price"></div>
                    <div class="car_condition" v-text="item1.cards_order"></div>
                </div>
                <div class="right">
                    <div class="getBtn">
                        <div class="font" @click="lingqu(),toShow=!toShow" >领取</div>
                    </div>
                </div>
            </div>


        </div>

        <!--没有参与团购的-->
        <purchase-and-share-bottom :price="67"></purchase-and-share-bottom>

        <!--参与了团购的-->
        <!--<purchase-add-togeter :price="67" :isGroupPrice="15"></purchase-add-togeter>-->
    </div>
</template>

<script>
    import PurchaseAndShareBottom from "../../components/PurchaseAndShareBottom";
    import PurchaseAddTogeter from "../../components/PurchaseAddTogeter";
    export default {
        name: "GoodsDetail",
        components: {
            PurchaseAndShareBottom,
            PurchaseAddTogeter
        },
        data(){
            return{
                toShow:false,
                isShow:false,
                cards:[
                    { 'cards_price':'20',
                        'cards_order':'满100可用'},
                    { 'cards_price':'20',
                        'cards_order':'满100可用'},
                    { 'cards_price':'20',
                        'cards_order':'满100可用'},
                ],
                cards_get:[
                    {'cardID':'123'}
                ],
                detailGood:{
                    "goods": {
                        "goodsId": "1",
                        "goodsName": "商品名字",
                        "goodsDesc": "商品描述",
                        "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                        "goodsImageUrl": "商品封面地址",
                        "goodsCount": 98,
                        "consumeType": 1,
                        "businessId": "1",
                        "menuId": "1",
                        "certificatePeriod": 2,
                        "discountType": 1,
                        "goodsDel": 0
                    },
                    "menu": {
                        "menuId": "1",
                        "menuName": "惊天美食",
                        "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                        "menuDel": 0
                    },


                    "business": null,
                    "goodsNormsList": []
                },
                id:'',
            }
        },
        methods:{
            getCar(){
                this.toShow=!this.toShow;
                // console.log(this.toShow)
            },

            lingqu(){
                axios.post('http://123.207.18.77:8090/goods_details/queryGoods',
                    {
                        'cardsID':'123',
                    }).then(response=>{
                    console.log(success)
                }).catch(function (err) {
                    console.log(err)
                });
                this.isShow=true

            }
            },
        created() {
            this.id = this.$route.params;
            console.log(this.$route.params);
            axios.post('http://123.207.18.77:8090/goods_details/queryGoods',{
                "goodsId": "1",
            }).then(response=>{
                this.cards=response.data.data
            }).catch(function (err) {
                console.log(err)
            })
            // axios.get('http://123.207.18.77:8090/goods_details/queryGoodsWithDetailsById/1').then(re => this.detailGood = re.data.data)
        },



    }
</script>

<style scoped>
    .theImg{
        width: 100%;
    }
    .goodDetailList{
        width: 100%;
        margin-top: 4%;
    }
    .goodDetailMsg{
        clear: both;
        height: 6.6%;
        width: 100%;
        background:rgba(231,231,231,1);
        font-size:1.75rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(50,49,49,1);
        display:flex;
        justify-content:center;
        align-items:center;
    }


    .address{
        float: left;
        height: 80%;
        width: 90%;
        font-size:1.8rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(50,49,49,1);
        overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
        margin-top: 2%;
        margin-left: 2%;
    }
    .addressIcon{
        width: 5.7%;
        height: 34%;
        float: left;
        /*background-color: #4c90f5;*/
        /*background-image: url("../assets/adrressIcon.png");*/
        /*background-repeat: no-repeat;*/

    }
    .addressBox{
        width: 100%;
        height: 30%;
        margin-top: 5%;
    }
    .goodDesc{
        clear: both;
        width: 100%;
        height: 22%;
        margin-left: 1.5%;
        margin-top: 8%;

        font-size:1.75rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(117,117,117,1);

        overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
    }
    .useType span{
        font-size:1.5rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(50,49,49,1);

        margin-right: 2%;
    }
    .useType{
        text-align: right;
        width: 28%;
        height: 100%;
        float: left;
        margin-top: 3%;
    }
    .DianName{
        width: 70%;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:1.875rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(20,20,20,1);
        margin-top: 3%;
        margin-left: 1%;
        float: left;
    }
    .name_useType{
        width: 100%;
        height: 16%;

    }
    .activeType{
        float: right;
        color: #141414;
        font-size: 1.75rem;
    }
    .oldPrice{
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(93,93,93,1);
        font-size: 1.375rem;
        margin-left: 3%;
    }
    .rePrice{
        font-size: 1.875rem;
        color: #f33b28;
        font-family:PingFang SC;
        font-weight:bold;

    }
    .price_type{
        width: 100%;
        height: 12.45%;
    }
    .baseMessege{
        height:28.9%;
        width: 92%;
        margin: 2.55% auto 0 auto;
    }
    .goodImg{
        height: 32%;
        width: 92%;
        /*margin: 0 auto;*/
        background-color: #4c90f5;
        margin: 2.32% auto 0 auto;
        border-radius: 3px;
    }
    .carbox{
        width: 90%;
        /*height: 35%;*/
        background-color: #ff8749;
        margin:0 auto;
        border-radius: 8px;
        position: fixed;
        left: 5%;
        top: 39%;
    }
    .car1{
        width: 90%;
        height: 25%;
        display: flex;
        background-color: #ff4400;
        /*border-radius: 6px;*/
        /*border: 1px solid black;*/
        margin: 5% auto;

    }
    .left{
        width: 80%;
        height: 100%;
        background-color: #ffbb4d;
    }
    .right{
        width: 20%;
        height: 100%;
        /*background-color: lime;*/
        /*border: 1px solid black;*/

    }
    .car_price{
        width: 100%;
        height: 70%;
        color: #ff4400;
        font-size: 3rem;
        font-family: "PingFang SC";
        text-align: center;
        line-height: 200%;
        /*background-color: blueviolet;*/
    }
    .car_condition{
        width: 100%;
        height: 30%;
        font-size: 1.5rem;
        font-family: "PingFang SC";
        text-align: center;
        color: #ff4400;
        /*background-color: #67ffc2;*/
    }
    .getBtn{
        width: 100%;
        height: 100%;
        /*background-color:#ff4400;*/
        /*border: 1px solid #ff4400;*/

    }
    .font{

        width: 20%;
        height: 100%;
        margin: 0 auto;
        color: white;
        line-height: 100%;
        margin-top: 10%;
        font-size: 2.5rem;

    }
    .tip{
        width: 40%;
        height: 20%;
        margin: 0 auto;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        background-color: lightgray;
        text-align: center;
        color: #7b7b7b;
        line-height: 310%;
        border-radius: 5px;
        animation: myfirst 5s;
    }
    @keyframes myfirst{
        0%   {opacity:100%;}
        50%   {opacity:50%;}
        100%   {opacity:0%;}
    }
</style>
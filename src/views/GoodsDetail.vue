<template>
    <div style="width: 100%;height: 100%;">
        <div class="goodImg"><img style="width: 100%;height: 100%" :src="detailGood.goods.goodsImageUrl" alt=""></div> <!--展示图-->
        <div class="baseMessege">
            <div class="price_type">
                <span class="rePrice" v-text="detailGood.goodsNorms.currentPrice">￥13</span>
                <span class="oldPrice" v-text="detailGood.goodsNorms.origiPrice">￥13</span>
                <span class="activeType" v-show="card != null" @click="toShow = !toShow">领取  优惠券</span>
            </div>
            <div class="tip" v-if="isShow">领取成功</div>

            <div class="name_useType">
                <div class="DianName" v-text="detailGood.goods.goodsName">花溪重庆火锅换句话说几号放假设计费会使肌肤好几十福建省是否火花塞</div>
                <div class="useType"><span v-text="detailGood.goods.consumeType">到店消费</span></div>
            </div>
            <div class="goodDesc" v-html="detailGood.goods.goodsDesc">
                和胜股份公司符合施工方见好就收福建省福建师范是否合适手机号健身房和数据恢复及时发货时
            </div>
            <div class="addressBox">
                <div style="width: 100%;height: 100%;margin-top: 8%">
                    <div class="addressIcon"><img style="width: 100%" src="../assets/adrressIcon.png"></div>
                    <div class="address" v-text="detailGood.business.businessAddress">贵阳市花溪区花溪大学城学富路</div>
                </div>
            </div>
        </div>
        <div class="goodDetailMsg">商品详情</div>
        <div class="goodDetailList" v-for="item in detailGood.goods.goodsDetailsUrl">
            <img class="theImg" :src="item">
        </div>

        <div class="carbox" v-if="toShow">
            <div class="car1" v-for="(item1,i) in card">
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
        <purchase-and-share-bottom :price="detailGood.goodsNorms.currentPrice" :goodId="detailGood.goods.goodsId"></purchase-and-share-bottom>

        <!--参与了团购的-->
        <!--<purchase-add-togeter :price="67" :isGroupPrice="15"></purchase-add-togeter>-->
    </div>
</template>

<script>
    import PurchaseAndShareBottom from "../components/PurchaseAndShareBottom";
    import PurchaseAddTogeter from "../components/PurchaseAddTogeter";
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
                haveCard:false,

                card:null,
                cards_get:null,
                detailGood:null,
                id:'',
            }
        },
        methods:{
            getCar(){
                this.toShow=!this.toShow;
                // console.log(this.toShow)
            },

            lingqu(){
                axios.post(process.env.VUE_APP_URL+'usercards/addUserCards',
                    {
                        "cardsId":'456'
                    }
                    ).then(response=>{
                    console.log(response)
                }).catch(function (err) {
                    console.log(err)
                });
                this.isShow=true;
                setTimeout(
                    () => {
                        this.isShow=false
                    }
                ,2000)


            }
            },
        created() {
            this.id = this.$route.params.goodsDetail;
			  console.log(this.$route.params.goodsDetail);
			axios.post(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/'+this.id).then(response=>{
					this.cards=response.data.data
				}).catch(function (err) {
					console.log(err)
				})
            axios.get(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/' + this.id)
                .then(re =>{
                    this.detailGood = re.data.data;
                    this.detailGood.goods.goodsDetailsUrl= this.detailGood.goods.goodsDetailsUrl.split(',');
                    this.card= this.detailGood.card;        // 商品的优惠券
                })
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
        position: absolute;
        width: 40%;
        height: 8%;
        left: 50%;
        margin-left: -20%;
        font-family: "PingFang SC";
        font-size: 2.5rem;
        background-color: #e1e7f5;
        text-align: center;
        color: #4c4c4c;
        line-height: 280%;
        border-radius: 5px;
        animation: myfirst 3s;
    }
    @keyframes myfirst{
        0%   {opacity:100%;}
        50%   {opacity:50%;}
        100%   {opacity:0%;}
    }
</style>
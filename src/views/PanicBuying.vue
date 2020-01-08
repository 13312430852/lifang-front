<template>
    <div id="PanicBuying">
        <!--        商品图片-->
        <div class="bigPhoto">
            <img :src="GoodsList.goods.goodsImageUrl" alt="">
        </div>
        <!--        价格-->
        <div class="sell">
            <div class="nowSell">￥<span v-text="GoodsList.goodsNorms.currentPrice"></span></div>
            <div class="edSell">原价￥<span v-text="GoodsList.goodsNorms.origiPrice"></span></div>
        </div>
        <!--        信息-->
        <div class="Goods">
            <div class="GoodsName" v-text="GoodsList.goods.goodsName">花溪重庆火锅</div>
            <div class="distribution" v-text="theCosumType(GoodsList.goods.consumeType)">骑手配送</div>
        </div>

        <div class="goods_desc" v-html="GoodsList.goods.goodsDesc">全国79家连锁店，只为了做最美味的火锅，花溪分店最为美味。</div>
        <!--        地址-->
        <div class="Address">
            <div class="position">
                <img src="../assets/position.png">
            </div>
            <div class="address" v-text="GoodsList.business.businessAddress">贵阳市 花溪区 花溪大学城 学富路</div>
        </div>
        <!--        选择规格-->
        <div class="select">选择</div>
        <!--        数量-->
        <div class="number">
            <div class="number1">数量</div>
            <el-input-number class="number2" size="mini" v-model="count" :min="1" :max="GoodsList.goods.goodsCount" label="描述文字">
                <span role="button" @click="subtract()" class="el-input-number__decrease is-disabled"><i class="el-icon-minus"></i></span>
                <span role="button" @click="add()" class="el-input-number__increase"><i class="el-icon-plus"></i></span>
            </el-input-number>
        </div>
        <!--        线-->
        <div style="margin: 0 auto; width:92%;height: 1px;background-color:#d7d7d7; opacity: 1"></div>
        <!--        规格-->
        <div class="Specification">
            <div class="specification">规格</div>
            <div class=" weight" v-text="GoodsList.goodsNorms.norms">小份</div>
        </div>
        <!--        地址-->

            <!--<div class="toAddAddress" @click="toAddAddress" v-if="userAddress == null">
                <span style="margin-right: 10px">未添加地址&nbsp;&nbsp;</span>
                <img class="addIcon" src="../assets/添加.png">
            </div>
            <select class="Place" v-if="userAddress != null" v-model="selectAddressId" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                     <option v-for="(item) in userAddress" v-text="item.rcAddress" :selected="isDefaultAddress(item)" :value="item.addressId"></option>
            </select>-->


        <el-collapse>
            <el-collapse-item class="collapse_item" title="收货地址">
                <el-radio class="address_item" v-for="(item) in userAddress" :selected="isDefaultAddress(item)" v-model="selectAddressId" :label="item.addressId" border>
                    <div>收货地址：{{item.rcAddress}}</div>
                    <div class="renAtel">
                        <span class="ren">{{item.addressName}}</span>
                        <span class="tel">{{item.addressTel}}</span>
                        <div class="clear"></div>
                    </div>
                </el-radio>
                <div v-if="userAddress==null" class="toAddAddress" @click="toAddAddress">
                    <span style="margin-right: 10px">未添加地址&nbsp;&nbsp;</span>
                    <img class="addIcon" src="../assets/添加.png">
                </div>
            </el-collapse-item>
            <el-collapse-item class="collapse_item" title="优惠券">
                <el-radio class="address_item" v-for="(item) in userGoodCaeds" :selected="isUserCards(item)" v-model="chooseCar" :label="item" border>
                    <div class="renAtel">
                       <span>满<span class="ren">{{item.cardsOrder}}</span><span>减 </span><span v-text="item.cardsPrice">5</span></span>
                        <span class="tel">可用</span>
                        <div class="clear"></div>
                    </div>
                </el-radio>
                <div v-if="userGoodCaeds==null">
                    <span>暂无可用优惠券！</span>
                </div>
            </el-collapse-item>
        </el-collapse>

        <!--        优惠-->
       <!-- <div class="Coupon">
            <div class="couponLeft">优惠券</div>
            <div class="toAddAddress1" @click="toAddAddress" v-if="userAddress == null">没有可使用优惠券</div>
            <select v-if="userGoodCaeds != null" class="Place" v-model="chooseCar" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                <option v-for="item in userGoodCaeds" :disabled="isUserCards(item)" :value="item">
                    <div><span>满</span><span v-text="item.cardsOrder"> 10 </span><span>减 </span><span v-text="item.cardsPrice">5</span> <span>可用</span></div>
                </option>
            </select>

        </div>-->
        <!--        立即购买-->
        <div class="buying" style="position:fixed;bottom: 0" @click="submitOrder">提交订单 ￥<span v-text="allPrice"></span></div>
        <div class="blank"></div>
    </div>

</template>

<script>
    import GoodsList from "../components/GoodsList";

    export default {
        name: "PanicBuying",
        data() {
            return {
                user:null,
                propsData:{},
                goodId:null,
                theBusinessId:null, //商家ID
                orderId:null,

                selectAddressId:null, //用户选择的地址ID
                userAddress:null,

                userGoodCaeds:null,
                cardsPrice:null,
                chooseCar:null,
                chooseCarId:null,
                userMsg:null,

                count:null,  //商品购买数量
                allPrice:null,  //商品的总价
                goodsPrice:null,
                goodsNormsId:null,

                style1: false,
                style2: false,
                showcone: false,

                GoodsList: null,
                createOrder:{       //订单
                    'goodsId':this.goodId, //商品ID

                    'businessId':this.theBusinessId,

                    'ordersPrice':this.allPrice,       //总价
                    'goodsNum':this.count,      //购买数量
                    'goodsPrice':this.goodsPrice,   //商品单价
                    'addressId':this.selectAddressId,         //地址ID
                    'goodsNormsId':this.goodsNormsId, //商品规格
                    'discountId':this.chooseCarId,

                },

                toPayMsg:{
                    'theGoodMsg':this.GoodsList,

                },
            }
        },
        watch:{
            count(newValue){       //当购买数量改变时改变相应的总价
                let origPrice = this.GoodsList.goodsNorms.currentPrice * this.count; //重置价格
                if(this.chooseCar == null || this.chooseCar.cardsOrder <= origPrice){   //判断是否能够使用原选的优惠券,能够使用或者未选择使用优惠券
                    if(this.chooseCar == null) this.allPrice = (newValue * this.GoodsList.goodsNorms.currentPrice);
                    else if(this.chooseCar.cardsOrder <= origPrice) this.allPrice = (newValue * this.GoodsList.goodsNorms.currentPrice) - this.chooseCar.cardsPrice;
                }
                else {
                    //当减少购买数量导致总价下降而不满足使用此优惠券时重置价格为未使用优惠券价格
                    this.allPrice = origPrice;
                }

            },
            chooseCar(newValue){
                this.allPrice = this.GoodsList.goodsNorms.currentPrice * this.count; //重置价格
                this.chooseCarId = newValue.userCards.userCardsId;
                this.allPrice = this.allPrice - newValue.cardsPrice;       //计算使用优惠券后的价格
            }
        },
        computed:{
            theCosumType(){
                return (it) => {
                    if (it == '1') return '包邮'
                    else return '到店消费'
                }
            },
            isUserCards(){      //用来判断是否达到使用此优惠券的
                return (it) => {
                    return !(it.cardsOrder <= this.GoodsList.goodsNorms.currentPrice * this.count);
                }
            },
            isDefaultAddress(){
                return (it) => {
                    if(it.defaultAddress == '1') return true;
                    else{
                        return false
                    }
                }
            }
        },
        methods:{
            toAddAddress(){
                this.$router.push('/addMyAddress');
            },
            add: function (count) {
                if (this.count >= 5) {
                    this.style2 = true;
                    this.showcone = true;
                    this.count = 5
                } else {
                    this.count++;
                    this.style1 = false
                }
            },
            subtract: function (count) {
                if (this.count <= 1) {
                    this.style1 = true;
                    this.showcone = true;
                    this.count = 1
                } else {
                    this.count = this.count - 1;
                    this.style2 = false
                }

            },
            createSubmitOrder(){
                this.$set(this.createOrder,'goodsId',this.goodId);
                // this.$set(this.createOrder,'userId',this.userMsg.userId);
                this.$set(this.createOrder,'ordersPrice',this.allPrice);
                this.$set(this.createOrder,'goodsNum',this.count);
                this.$set(this.createOrder,'goodsPrice',this.goodsPrice);
                this.$set(this.createOrder,'addressId',this.selectAddressId);
                this.$set(this.createOrder,'businessId',this.theBusinessId);
                this.$set(this.createOrder,'goodsNormsId',this.goodsNormsId);
                if(this.chooseCarId == null){
                    this.$set(this.createOrder,'discountId',null);
                }else {
                    this.$set(this.createOrder,'discountId',this.chooseCarId);
                }
            },
            toSubmitPage(){
                var choosedAddress;

                //把选中的这个ID的对象取出来
                this.userAddress.forEach(item => {
                    if(this.selectAddressId == item.addressId)
                        choosedAddress = item;
                });
                    this.$set(this.propsData,'GoodsList',this.GoodsList);
                    this.$set(this.propsData,'userAddress',choosedAddress);
                    this.$set(this.propsData,'userGoodCaeds',this.chooseCar);
                    this.$set(this.propsData,'count',this.count);
                    this.$set(this.propsData,'allPrice',this.allPrice);
                    this.$set(this.propsData,'orderID',this.orderId);

                    console.log(this.propsData);

                this.$router.push({path:'/submitOrder',query:this.propsData});
            },

            submitOrder(){      //提交订单后返回一个订单ID
                // 响应式添加订单对象
                this.createSubmitOrder();
                axios.post(process.env.VUE_APP_URL + 'order/limitAndTimeCreateOrder',this.createOrder)
                    .then(response =>{
                        if (response.data.code == 200){
                            this.orderId = response.data.data.ordersId;          //成功后返回订单ID
                            console.log('hdgfhsgfh');
                            console.log(response);
                            this.$router.push('/submitOrder'+this.orderId);
                            this.toSubmitPage();
                        } else {
                            this.$alert('商品余量不足或抢购已结束。', '抢购失败', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$message({
                                        type: 'info',
                                        message: `action: ${ action }`
                                    });
                                }
                            });
                        }
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {

            this.goodId = this.$route.params.goodId1;   //接收商品ID
            console.log(this.goodId);

            axios.get(process.env.VUE_APP_URL + 'goods_details/queryGoodsWithDetailsById/'+this.goodId).then(response => {  //获取商品的基本信息
                this.GoodsList = response.data.data;
                console.log(this.GoodsList);
                console.log("test");
                this.allPrice = this.GoodsList.goodsNorms.currentPrice;
                this.goodsNormsId = this.GoodsList.goodsNorms.norms;
                this.goodsPrice = this.GoodsList.goodsNorms.currentPrice;
                this.theBusinessId = this.GoodsList.business.businessId;

            }).catch();

            axios.get(process.env.VUE_APP_URL + 'address/findAddressById/')      //获取地址
                .then(re =>{
                    this.userAddress = re.data.data;
                    console.log(this.userAddress);
                    this.userAddress.forEach(item => {      //获取默认地址
                        if(item.defaultAddress == '1'){
                            this.selectAddressId = item.addressId;
                        }
                    })
                }).catch(err => console.log(err));

            axios.get(process.env.VUE_APP_URL + 'usercards/queryValidUserCards/' + this.goodId)       //获取优惠券
                .then(re => {
                    console.log('查询卡用卡券');
                    this.userGoodCaeds = re.data.data;
                    console.log(this.userGoodCaeds);
                }).catch(err => alert('网络错误'))

        }
    }
</script>

<style scoped>
    .addIcon{
        width: 14px;
        height: 14px;
        margin-left: 2%;
        margin-right: 15%;
    }
    .toAddAddress{
        width: 40%;
        font-size: 16px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #bbbbbb;
        margin: 0 auto;

    }
    .collapse_item{
        margin-left: 4%;
    }
    .el-collapse-item__header{
        font-weight: bold !important;
        font-size: 14px !important;
    }
    .blank{
        width: 100%;
        height: 100px;
    }
    .address_nr{
        padding: 10px;
        background-color: #f8f6f6;
        border-radius: 5px;
        margin: 10px;
    }
    .address_item{
        display: flex;
        margin:10px 10px 10px 0px !important;
        height: auto !important;
        padding: 10px 10px !important;
    }
    .renAtel{
        padding: 10px 0px;
    }
    .clear{
        clear: both;
    }
    .ren{
        display: block;
        float: left;
    }
    .tel{
        display: block;
        float: right;
    }
    .address_rcAddress{

    }
    .toAddAddress1{
        width: 40%;
        font-size: 1.8rem;
        display: flex;
        justify-content: flex-end;
        color: #bbbbbb;

    }
    html, body, #PanicBuying {
        width: 100%;
        margin: 0 auto;
        font-family: "PingFang SC";
        /*background-color: rebeccapurple;*/

    }

    .bigPhoto {

        height: 32%;
        width: 92%;
        background-color: rebeccapurple;
        margin: 2.4% auto;
        background-size: cover;

    }
    .bigPhoto img{width: 100%;height: 100%}

    .sell {

        height: 3.0%;
        width: 92%;
        margin: 3% auto;
        display: flex;
    }

    .nowSell {
        font-weight: bold;
        color: red;
        font-size: 1.875em;
        height: 100%;
    }

    .edSell {
        margin-top: 0.6%;
        margin-left: 4%;
        width: 90%;
        height: 100%;
        font-size: 1.5em;
        text-decoration: line-through;
    }

    .Goods {
        margin: 3% auto;
        height: 3.0%;
        width: 92%;
        display: flex;
    }

    .GoodsName {

        height: 100%;
        width: 85%;
        font-size: 1.875em;
        font-weight: bold;
    }

    .distribution {
        margin-top: 0.5%;
        font-size: 1.5em;
        width: 10%;
        text-align: right;
        margin-left: 5%;
    }

    .goods_desc {
        margin: 2% auto;
        height: 5.25%;
        width: 92%;
        font-size: 1.875em;
        font-family: PingFang-SC-Medium;

    }

    .Address {
        margin: 4% auto;
        display: flex;
        height:4%;
        width: 92%;
    }

    .position {
        margin-top: 1%;
        height: 100%;
        width: 6.73%;
        /*background-color: #5f5f5f;*/
    }
        .position img{
            width: 22px;
        }
    .address {
        height: 100%;
        width: 92.27%;
        /*background-color: #4c90f5;*/
        font-family: PingFang-SC-Medium;
        font-size: 1.75em;
        margin-left: 2%;
        padding-top: 2.7%;
        color: #323131;
    }

    .select {
        padding-top: 1%;
        padding-left: 4%;
        width: 100%;
        height: 3.74%;
        background-color: #E7E7E7;
        font-size: 1.875em;
        font-family: "PingFang SC";
        font-weight: bold;

    }

    .Specification {
        display: block;
        width: 92%;
        height: 7%;
        font-family: "PingFang SC";
    }

    .specification {
        padding-top: 4%;
        padding-left: 4%;
        font-size: 1.75em;
        font-weight: bold;
        float: left;
    }

    .weight {
        float: right;
        font-size: 1.75em;
        padding-top: 4%;
        padding-left: 6%;
        cursor: pointer;
        text-align: right;
    }
    .number {
        margin: 0 auto;
        display: flex;
        width: 92%;
        height:7%;
    }

    .number1 {
        padding-top: 4%;
        width: 70%;
        height: 100%;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        font-size: 1.75em;
        color: #323131;

    }

    .number2 {
        margin-top: 2%;
    }

    .digit {
        margin: 0 1%;
        line-height: 265%;
        text-align: center;
        width: 31%;
        height: 100%;
        background-color: #B8D2FB;
    }

    .btn {
        font-size: 1.75em;
        width: 33%;
    }

  /*  .line {
        margin: 0 auto;
        height: 1px;
        width: 92%;
        background-color: #E7E7E7;
    }*/

    .place {
        margin: 1.5% auto;
        display: flex;
        width: 92%;
        height: 5.5%;

    }

    .receipt {
        height: 100%;
        width:60%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
        line-height: 250%;
        color: #323131;
        font-weight: bold;
    }

    .Place {
       border: none;background-color: transparent;outline: none;
        height: 100%;
        width: 61%;
        font-family: PingFang-SC-Medium;
        font-size: 1.5em;
        color: #757575;

    }

    .Coupon {
        padding-top: 2.8%;
        width: 92%;
        height: 5.5%;
        margin: 1% auto;
        display: flex;
    }

    .couponLeft {

        width: 75%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
        color: #323131;
        font-weight: bold;

    }
    .couponRight{
        text-align: center;
        margin-right: 1%;
        display: flex;
        width: 25%;
        height: 100%;
        font-family: PingFang-SC-Medium;
        font-size: 1.75em;
        color: #323131;

    }
    .man{
        width: 25%;
        height: 100%;
    }
    .price{
        line-height:150%;
        text-align: center;
        width: 25%;
        height: 100%;
    }
    .Jian{
        width: 25%;
        height: 100%;
    }

    .buying {
        height: 7.34%;
        width: 100%;
        background-color: #4C90F5;
        margin-bottom: 0;
        font-family: PingFang-SC-Medium;
        font-size: 1.875em;
        color: #ffffff;
        /*line-height:290%;*/
        /*text-align: center;*/
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

    }
</style>

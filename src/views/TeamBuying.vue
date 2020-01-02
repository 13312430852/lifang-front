<template>
    <div id="teamBuy">
        <div class="picture" :style="{backgroundImage:'url(' + goods.goods.goodsImageUrl + ')'}">
            <div class="time" v-text="GoodsAsg[0].times">
                <!--                02:30.27-->
            </div><!--限时-->
        </div>
        <!--        价格-->
        <div class="sell">
            <div class="nowSell" v-text="goods.goodsNorms.currentPrice"><!--￥10--></div>
            <div class="edSell">原价￥<span v-text="goods.goodsNorms.origiPrice"></span>23</div>
        </div>
        <!--        信息-->
        <div class="Goods">
            <div class="GoodsName" v-text="goods.goods.goodsName">
                <!--                花溪重庆火锅-->
            </div>
            <div class="distribution" v-text="consumType(goods.goods.consumeType)">骑手配送</div>
        </div>
        <!--        描述-->
        <div class="goods_desc" v-html="goods.goods.goodsDesc">商品描述</div>

        <hr style="width: 92%;margin: 0 auto">
        <!--数量-->

        <div class="number">
            <div class="number1">数量</div>
            <div class="number2">1
            </div>
        </div>

        <hr style="width: 92%;margin: 0 auto">
        <!--        地址-->
        <div class="place">
            <div class="receipt">收货地址</div>
            <select class="Place" v-model="selectAddressId"
                    style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                <option v-for="(item) in userAddress" v-text="item.rcAddress" :selected="isDefaultAddress(item)"
                        :value="item.addressId"></option>
            </select>
        </div>

        <hr style="width: 92%;margin: 0 auto">
        <!--        团购限制-->
        <div class=" limit">
            <div class="Limit">说明:</div>
            <div class="desc"> 本次团购共十件商品，每个微信号限购一件商品，在时间内没能达到人数，金额会全款退还到账号余额中</div>
        </div>
        <!--        立即参团-->
        <div class="foot" style="position:fixed;bottom: 0" @click="toResult">
            立即参团
        </div>

    </div>
</template>

<script>
    export default {
        name: "TeamBuying",
        data() {
            return {
                theBusinessId:1111, //商家ID
                goodsID: '',
                goods: '',
                //地址
                selectAddressId: null,
                // userList: '',
                address: '',

                allPrice: 13,  //商品的总价
                goodsPrice: null,
                goodsNormsId: null,

                GoodsAsg: [
                    {
                        'goodsId': '',
                        'goods_image_url': '',
                        'times': '02:30:57',
                        'price': '11',
                        'goodsName': '花溪牛肉粉',
                        'goodsDesc': '全国79家连锁店，只为了做最美味的火锅，花溪分店最为美味。',

                    }
                ],


                user: [
                    {'addressID': '01', 'rc_address': '贵州省花溪区花溪大道收拾收拾搜索'},
                    {'addressID': '02', 'rc_address': '花溪锁屏结构解耦我即可搜集都按时将调集大概'},
                    {'addressID': '03', 'rc_address': '花溪是否交接给弄我小轿车现在没刺客列传窘境'},
                    {'addressID': '04', 'rc_address': '贵州省花溪区花溪大道收拾收拾搜索'},
                    {'addressID': '05', 'rc_address': '花溪是否交接给弄我小轿车现在没刺客列传窘境'}

                ],
                createOrder: {
                    'businessId':this.theBusinessId,
                    'goodsPrice': this.goodsPrice,           //价格
                    'goodsId': this.goodId,                  //商品ID
                    'addressId': this.selectAddressId,         //地址ID
                }
            }
        },

        computed: {
            consumType(){
                return (tag) => {
                    if (tag == 1) return '包邮'
                    else return '到店消费'

                }
            },
            isDefaultAddress() {
                return (it) => {
                    if (it.defaultAddress == '1') return true;
                    else {
                        return false
                    }
                }
            }
        },
        methods: {
            toResult() {
                if(this.selectAddressId != null){
                    // alert('hhhh')
                    axios.post(process.env.VUE_APP_URL + 'team/jointeam/' + this.goodsID + '/' + this.selectAddressId)
                        .then(re => {
                            // console.log(re.data);
                            let flag = re.data.flag;
                            this.$router.push({path:'/teamResult',query:{'goodsId':this.goodsID,'flag':flag}})
                        })

                }else {
                    alert('请选择收货地址');
                }

            },
        },
        created() {

            this.goodsID = this.$route.query.goodId;

            console.log(this.$route.query);

            axios.get(process.env.VUE_APP_URL + 'goods_details/queryGoodsWithDetailsById/' + this.goodsID)
                .then(response => {
                    this.goods = response.data.data;
                    console.log(this.goods);
                }).catch(err => alert('网络错误'));

            axios.get(process.env.VUE_APP_URL + 'address/findAddressById/')      //获取地址
                .then(response =>{
                    this.userAddress = response.data.data;
                    console.log(response);
                    this.userAddress.forEach(item => {
                        if(item.defaultAddress == '1'){
                            this.selectAddressId = item.addressId;
                        }
                    })
                }).catch(err => console.log(err));
        }
    }

</script>

<style scoped>

    .picture {
        height: 25%;
        width: 92%;
        /*background-image: url("../assets/panicbuying.png");*/
        background-size: cover;
        /*background-color: #B8D2FB;*/
        margin: 1% auto;
        border-radius: 1%;
        padding: 1px;
    }

    .time {
        height: 13%;
        width: 40%;
        /*background-color: red;*/
        font-family: "PingFang SC";
        font-size: 1.75em;
        color: white;
        text-align: center;
        margin-top: 40%;
        margin-left: 60%;
    }

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
        width: 10%;
        height: 100%;

    }

    .edSell {
        margin-top: 0.6%;
        margin-left: 2%;
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
        width: 15%;
        margin-right: 0;
    }

    .goods_desc {
        margin: 2% auto;
        height: 7.25%;
        width: 92%;
        font-size: 1.875em;
        font-family: PingFang-SC-Medium;

    }

    .number {
        margin: 0 auto;
        display: flex;
        width: 92%;
        height: 5%;
    }

    .number1 {
        padding-top: 1.5%;
        width: 95%;
        height: 100%;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        font-size: 1.75em;
        color: #323131;

    }

    .number2 {
        display: flex;
        width: 5%;
        height: 100%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
        text-align: center;
        line-height: 200%;

    }

    .place {
        margin: 1.5% auto;
        display: flex;
        width: 92%;
        height: 4.5%;

    }

    .receipt {
        height: 100%;
        width: 40%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
        line-height: 250%;
        color: #323131;
        font-weight: bold;
    }

    .Place {
        border: none;
        background-color: transparent;
        outline: none;
        height: 100%;
        width: 60%;
        font-family: PingFang-SC-Medium;
        font-size: 1.5em;
        color: #757575;

    }

    .limit {
        height: 20%;
        width: 92%;
        /*background-color: #4c90f5;*/
        margin: 1% auto;

    }

    .Limit {
        height: 15%;
        width: 100%;
        font-family: PingFang-SC-Medium;
        font-size: 1.75em;
        font-weight: bold;
    }

    .desc {
        width: 100%;
        height: 85%;
        font-family: PingFang-SC-Medium;
        font-size: 1.75em;
        text-indent: 2em;
    }

    .foot {
        height: 7.34%;
        width: 100%;
        background-color: #4C90F5;
        margin-bottom: 0;
        font-family: PingFang-SC-Medium;
        font-size: 1.875em;
        color: #ffffff;
        line-height: 290%;
        text-align: center;
        cursor: pointer;
    }

</style>
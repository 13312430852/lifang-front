<template>
    <div id="teamBuy">
        <div class="picture">
            <div class="time" v-text="GoodsAsg[0].times">
                <!--                02:30.27-->
            </div><!--限时-->
        </div>
        <!--        价格-->
        <div class="sell">
            <div class="nowSell" v-text="GoodsAsg[0].price"><!--￥10--></div>
            <div class="edSell">原价￥23</div>
        </div>
        <!--        信息-->
        <div class="Goods">
            <div class="GoodsName" v-text="GoodsAsg[0].goodsName">
                <!--                花溪重庆火锅-->
            </div>
            <div class="distribution">骑手配送</div>
        </div>
        <!--        描述-->
        <div class="goods_desc" v-text="GoodsAsg[0].goodsDesc">
            <!--            全国79家连锁店，只为了做最美味的火锅，花溪分店最为美味。-->
        </div>

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
            <!--            定好的-->
            <div class="receipt">收货地址</div>
            <!--            获取-->
            <select class="Place" style="  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
                    v-model="userList">
                <option :value="item.addressID" style="font-size: 1.75em;" v-for="item in user"
                        v-text="item.rc_address">
                    <!--贵州省花溪区花溪大道收拾收拾搜索--></option>
                <<!--option value="">花溪锁屏结构解耦我即可搜集都按时将调集大概</option>
                <option value="">花溪是否交接给弄我小轿车现在没刺客列传窘境</option>-->
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
                hours: '02',
                minutes: '30',
                seconds: '00',
                goods: '',
                GoodsAsg: [
                    {
                        'goodsId': 'o1',
                        'goods_image_url': '',
                        'times': '02:30:57',
                        'price': '',
                        'goodsName': '花溪牛肉粉',
                        'goodsDesc': '全国79家连锁店，只为了做最美味的火锅，花溪分店最为美味。',

                    }
                ],

                userList: '',
                user: [
                    {'addressID': '01', 'rc_address': '贵州省花溪区花溪大道收拾收拾搜索'},
                    {'addressID': '02', 'rc_address': '花溪锁屏结构解耦我即可搜集都按时将调集大概'},
                    {'addressID': '03', 'rc_address': '花溪是否交接给弄我小轿车现在没刺客列传窘境'},
                    {'addressID': '04', 'rc_address': '贵州省花溪区花溪大道收拾收拾搜索'},
                    {'addressID': '05', 'rc_address': '花溪是否交接给弄我小轿车现在没刺客列传窘境'}

                ]
            }
        },

        methods: {
            /*toTeam() {
                console.log(this.userList);
               /!* axios.post(url + user[0].addressID).then(re => {
                console.log(re.data.data)
                }).catch(err =>alert(err))*!/
            },*/
            toResult() {
                this.$router.push('/TeamBuying/toResult')
            },

            timekeeping() {
                var _this = this;
                var time = window.setInterval(function () {
                    if (_this.seconds === 0 && _this.minutes === 0 && _this.hours !== 0) {
                        _this.seconds = 59;
                        _this.minutes = 59;
                        _this.hours -= 1;
                    } else if (_this.seconds === 0 && _this.minutes !== 0 && _this.hours === 0) {
                        _this.seconds = 59;
                        _this.minutes -= 1;
                        _this.hours = 0;
                    } else if (_this.seconds === 0 && _this.minutes !== 0 && _this.hours !== 0) {
                        _this.seconds = 59;
                        _this.minutes -= 1;
                        _this.hours = this.hours;
                    } else if (_this.seconds === 0 && _this.minutes === 0 && _this.hours === 0) {
                        _this.seconds = 0;
                        _this.minutes = 0;
                        _this.hours = 0;
                        window.clearInterval(time)
                    } else {
                        _this.minutes -= 1;
                        _this.hours -= 1;
                    }

                })

            },
        },
        /* created() {
                 axios.get().then(response =>{
                     this.goods = response.data.data
                 }).catch(err => alert(err));
                 axios.get().then(response =>{
                     this.userList = response.data.data
                 }).catch(err => alert(err))
             }*/
        created() {
            /*this.userList = this.user[0].addressID;
            this.GoodsAsg[0].price = this.$router.query.price*/
        }
    }

</script>

<style scoped>

    .picture {
        height: 25%;
        width: 92%;
        background-image: url("../assets/panicbuying.png");
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
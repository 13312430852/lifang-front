<template>
    <div v-if="detailGood != null" style="width: 100%;height: 100%;">
        <report-start v-if="isReport"></report-start>
        <div class="goodImg" :style="{backgroundImage:'url(' + detailGood.goods.goodsImageUrl + ')'}">
            <span class="report" @click="toRepot">
                举报
            </span>
            <div class="activeType" v-if="istype == 2">
                仅剩：<span style="font-size: 16px" v-text="this.num"></span> 份
            </div>
        </div> <!--展示图-->

        <div class="activeType-time" v-if="istype == 1" style="display: block;z-index: 999">
                 <count-down :time="rushTime">
                                    <template slot-scope="pro">
                                        <span style="margin-left: 1%">活动时间剩余：</span>
                                        <span class="right-time">{{ pro.hours }} : {{ pro.minutes }} : {{ pro.seconds }}</span>
                                    </template>
                 </count-down>
        </div>
        <div class="baseMessege">
            <div class="priceAndCards" >
                <span class="rePrice" v-text="'￥'+detailGood.goodsNorms.currentPrice"></span>
                <s><span class="oldPrice" v-text="'￥'+detailGood.goodsNorms.origiPrice"></span></s>
                <div class="cards">
                    <span class="cardsToGet"  @click="getCar(detailGood.goods.goodsId),drawer = true">领券</span>
                    <div class="tip" v-if="isShow">领取成功</div>
                </div>
            </div>

           <hr class="cards_line"/>

            <div class="good_name_box">
                <div class="good_name" v-text="detailGood.goods.goodsName">花溪牛肉粉</div>
                <div class="consume_type">
                    <span v-text="consumType(detailGood.goods.consumeType)">到店消费</span>
                </div>
            </div>
            <div class="good_desc" v-html="detailGood.goods.goodsDesc">
                和胜股份公司符合施工方见好就收福建省福建师范是否合适手机号健身房和数据恢复及时发货时
            </div>

           <!-- <div style="width: auto;height: auto;padding: 5px 0px">
                <span style="font-size: 14px;">库存: </span>
                <span style="font-size: 14px" v-text="this.detailGood.">  件</span>
            </div>-->
            <div class="norms">
                    <span style="font-size: 14px;">规格:</span>
                    <span style="font-size: 14px; margin-left: 5px;" v-text="detailGood.goodsNorms.norms">大份</span>
            </div>

            <div class="addressBox">
                    <div class="image_icon">
                        <img style="width: 60%" src="../assets/adrressIcon.png">
                    </div>
                    <div class="address" v-text="detailGood.business.businessAddress">贵阳市花溪区花溪大学城学富路</div>
            </div>


        </div>
        <div class="goodDetailMsg">商品详情</div>
        <div class="goodDetailList" v-for="item in detailGood.goods.goodsDetailsUrl">
            <img class="theImg" :src="item">
        </div>

        <!--没有参与团购的-->
        <purchase-and-share-bottom :isbuynum="detailGood.rushList[0].rushNum" :rushtype="istype" :isbuytime="rushTime" v-if="countType != 3" :price="detailGood.goodsNorms.currentPrice" :goodId="detailGood.goods.goodsId"></purchase-and-share-bottom>
        <!--参与了团购的-->
        <purchase-add-togeter v-if="countType == 3" :price="detailGood.goodsNorms.currentPrice" :goodId="detailGood.goods.goodsId" :isGroupPrice="detailGood.goodsTeam.discountPrice"></purchase-add-togeter>

        <!--优惠券drawer-->
            <el-drawer
                    :visible.sync="drawer"
                    :direction="direction"
                    :with-header="false"
                    :before-close="handleClose"
                    :wrapper-closable="true"
                    :append-to-body="true"
                    :show-close="false"
                    size="75%">

                <div style="width: 100%;height: 100%;display: flex;flex-direction: column;">

                    <div style="flex: 0.5;display:flex;width: auto;justify-content: center;padding-top: 10px">
                            <span style="display: block;font-size: 18px;color: red">
                        当前优惠
                    </span>
                    </div>

                    <!--滑动-->
                    <div style="flex: 5;width: auto;height:50%;overflow-y:scroll;">
                        <div class="car1" v-for="(item1,i) in card">
                            <div class="left">
                                <!--满减条件-->
                                <div style="float: left;width: 30%;height: 100%;display:flex;align-items: center;justify-content: center; color: red;">
                                    <div style=" display: block;border:0px black solid;">
                                        <span style="float: left;margin-top: 18px"> ¥</span>
                                        <span style="font-size: 40px;float:right;width: auto;height: auto;" v-text="item1.cardsPrice"/>

                                    </div>

                                </div>

                                <div style="float:left;width: 60%;height: 100%;font-size: 14px;display: flex;align-items: center">
                                    <div style="display: block;">
                                        <div style="color: red;text-align: left">
                                          <span> 满<span  v-text="item1.cardsOrder"></span>减<span  v-text="item1.cardsPrice"></span></span>
                                        </div>
                                        <!--有效期-->
                                        <div style="font-size:10px;border: 0px black solid;text-align: left;color: red">
                                            <span>截止日期：</span>
                                            <span style="color: red" v-text="theTime(item1.endTime)"/>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div class="right">
                                <div class="getBtn">
                                    <div class="font" @click="lingqu(item1.cardsId),toShow=!toShow" >领取</div>
                                </div>
                            </div>
                        </div>
                    </div>
<!--                    <div style="flex: 1;background-color: black"></div>-->

                    <div style="flex:1;background-color: white;width: auto;align-items: center;justify-content: center;display: flex;">
                        <el-button type="warning" round style="width: 80%; " @click="drawer = false">关闭</el-button>
                    </div>
                </div>

            </el-drawer>

    </div>

</template>

<script>
    import PurchaseAndShareBottom from "../components/PurchaseAndShareBottom";
    import PurchaseAddTogeter from "../components/PurchaseAddTogeter";
    import ReportStart from "../components/ReportStart";
    import CountDown from '@chenfengyuan/vue-countdown';
    export default {
        name: "GoodsDetail",
        components: {
            PurchaseAndShareBottom,
            PurchaseAddTogeter,
            ReportStart,
            CountDown
        },
        data(){
            return{
                direction:'btt',
                isReport:false,
                drawer: false,
                pro:{
                    '小时':1,
                    '分钟':1,
                    '秒':1,
                },
                num:0,
                startTime:null,
                endTime:null,
                rushTime:null,
                toShow:false,
                isShow:false,
                haveCard:false,
                card:null,
                cards_get:null,
                detailGood:null,
                cards_get:[
                    {'cardID':'123'}
                ],

                detailGood:null,
                countType:null,
                id:'',
            }
        },
        computed:{
            istype(){
                if(this.countType == 1) return 1;
                else if(this.countType == 2) return 2;
                else return 3;
            },
            theTime(){
                return it => {
                    return it.split(" ")[0];
                }
            },
            discountType(){
                return (it) => {
                    if(it == 1) return '限时抢购'
                    else if(it == 2) return '限量抢购'
                    else if(it == 3) return 'gfgdggfhghghhhhhhhhhhhh'
                }
            },
            consumType(){
                return (tag) => {
                    if (tag == 1) return '包邮'
                    else return '到店消费'

                }
            }
        },
        methods:{
            handleClose(done) {
                        done();
            },
            toRepot(){
                this.isReport = !this.isReport;
                this.$router.push({path:'/reportContent',query:{'goodId':this.id}})
            },
            compte(nowDate,startDate,endDate){
                startDate= this.StringToDate(startDate);
                endDate= this.StringToDate(endDate);
                if(nowDate < endDate) this.rushTime = endDate - nowDate;
                else if(nowDate < startDate) this.rushTime = -1;
                else this.rushTime = 0;
                console.log(this.rushTime);
            },
            StringToDate(date){
                date = date.substring(0,19);
                date = date.replace(/-/g,'/');
                var timestamp = new Date(date).getTime();
                return timestamp;
            },
            getCar(goodid){
                this.toShow = !this.toShow;
                axios.get(process.env.VUE_APP_URL + 'allcards/queryCardsByGoodsId/' + goodid)
                    .then(re => {
                        if(re.data.code == 200){
                            console.log(re.data);
                            this.card = re.data.data;
                        }else {
                            alert(re.data.message)
                        }


                    })

            },

            lingqu(cardsId){
                axios.post(process.env.VUE_APP_URL+'usercards/addUserCards/'+cardsId)
                    .then(response=>{
                        console.log(response.data);
                        if(response.data.flag){
                            this.isShow=true;
                            setTimeout(
                                () => {
                                    this.isShow=false
                                }
                                ,1500)
                            alert(response.data.message);
                        }else{
                            alert(response.data.message);
                        }
                }).catch(function (err) {
                    console.log(err)
                });


            }
            },

        created() {

            this.id = this.$route.params.goodsDetail;

			  console.log(this.$route.params.goodsDetail);

            axios.get(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/' + this.id)
                .then(re =>{
                    this.detailGood = re.data.data;
                    console.log('我是大帥哥')
                    console.log(this.detailGood);
                    this.detailGood.goods.goodsDetailsUrl= this.detailGood.goods.goodsDetailsUrl.split(',');
                    this.countType =  this.detailGood.goods.discountType;
                    this.num = this.detailGood.rushList[0].rushNum;
                    if(this.countType == 1){
                        this.compte(new Date(),this.detailGood.rushList[0].rushStartTime,this.detailGood.rushList[0].rushEndTime)
                    }
                })
        },



    }

</script>

<style scoped>
    .address{
        float: left;
        width: auto;
        height: auto;
        font-size: 14px;
    }
    .image_icon{
        width: auto;
        height: auto;
        float: left;
        display:block;
    }
    .norms{
        width: auto;
        height: 20px;
    }
    .good_desc{
        width: 100%;
        height: 60px;
        margin-top: 5px;
        font-size: 15px;
        letter-spacing: 1px;
    }
    .consume_type{
        float: right;
        display: block;
        font-size: 12px;
        margin-left: auto;
    }
    .good_name{
        float: left;
        display: block;
        font-size: 18px;
        font-weight: bold;
    }
    .good_name_box{
        width:100%;
        height: 12%;
        margin-top: 14px;
        display:flex;
        align-items: center;
    }
    .cards{
        width: auto;
        display:flex;
        height: 20px;
        float: right;
        align-items: center;
    }
    .cardsToGet{
        display:block;
        font-size: 18px;
        color: #4c90f5;
        letter-spacing: 1px;
    }
    .cards_line{
        background-color:#EEEEEE;
        height:1px;
        border:none;
        margin:6px 0 5px 0px;
    }
    .priceAndCards{
        width:100%;
        height: 12%;
    }
    .report{
        font-family: "PingFang SC";
        color: lightblue;
        font-size: 1.8rem;
        /*margin-bottom: 170px;*/
        margin-right: 5px;
        flex: 7;
        /*background-color: red;*/
    }
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
    .addressBox{
        width: 100%;
        height: 15%;
        align-items: center;
        display:flex;
        margin-top: 15px;
    }
    .useType span{
        font-size:1.5rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(50,49,49,1);
        margin-right: 2%;
    }
    .right-time{
        float: right;
    }
    .activeType-time{
        width: 95%;
        margin: 0 auto;
        padding: 5px 10px;
        font-size: 14px;
        background-color: red;
        color: #FFFFFF;
        font-weight: bold;
    }
    .activeType{
        float: left;
        height: auto;
        flex: 1;
        text-align: left;
        font-size: 15px;
        background-color: red;
        color:whitesmoke;
        font-weight: bold;
        padding-left: 5px;

    }
    .oldPrice{
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(93,93,93,1);
        font-size: 1.375rem;
        margin-left: 3%;
    }
    .rePrice{
        font-size: 3rem;
        color: #f33b28;
        font-family:PingFang SC;
        font-weight:bold;

    }
    .baseMessege{
        height:38%;
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
        background-repeat: no-repeat;
        /*background-size: cover;*/
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        text-align: right;
    }
    .car1{
        width: 80%;
        height: 15%;
        display: flex;
        background-color: #ff4400;
        border-radius: .8rem;
        margin: 3% auto;
        font-size: 20px;
        align-items: center;
        box-shadow:4px 4px 10px #BEBEBE;

    }
    .left{
        text-align: center;
        width: 80%;
        height: 100%;
        background-color: #ffbb4d;
        border-radius: .8rem 0 0 .8rem;
        display: block;

    }
    .right{
        border: 0px black solid;
        width: 30%;
        height: auto;
        display: block;
        justify-content: center;
        /*background-color: lime;*/
        /*border: 1px solid black;*/

    }


    .getBtn{
        width: 100%;
        height: 100%;
        /*background-color:#ff4400;*/
        /*border: 1px solid #ff4400;*/

    }
    .font{
        border: 0px black solid;
        width: auto;
        height: 100%;
        margin: 0 20%;
        color: white;
        margin:10%;
        text-align: center;
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

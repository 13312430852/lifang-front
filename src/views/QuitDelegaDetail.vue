<template>
    <div style="width: 100%;height: 100%;">
        <div class="goodImg"><img style="width: 100%;height: 100%" :src="detailGood.goods.goodsImageUrl" alt=""></div> <!--展示图-->
        <div class="baseMessege">
            <div class="Dialog" id="dialog">
                <div><p style="margin-top: 8%;margin-left: 5%">提示</p><br>
                    <p style="margin-top: 5%;margin-left: 25%;color:gray">您确定要退团吗?</p>
                </div>
                <div class="dialog">
                    <button style="font-size: 1.75rem;font-family:PingFang SC;width: 25% ;color:white;border-radius: 3px;height: 5vh;
                    border: solid 1px gray;background: gray; margin-left: 35%;"@click="toSure" >
                        <span class="linkstyle">确定</span>
                    </button>
                    <button style="margin-left: 5%;width: 25% ;font-size: 1.75rem;font-family:PingFang SC; color:white;border-radius: 3px;
                    border: solid 1px #4c90f5;background: #4c90f5;" @click="cancel">取消</button>
                </div></div>
            <div class="price_type">
                <span class="rePrice">￥13</span>
                <span class="oldPrice">￥13</span>
                <span class="activeType">领取  优惠券</span>
            </div>
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
                    <div class="address">贵阳市花溪区花溪大学城学富路</div>
                </div>
            </div>
        </div>
        <div class="goodDetailMsg">商品详情</div>
        <div class="goodDetailList" v-for="item in detailGood.goodsDetailsUrl">
            <img class="theImg" src="item">
        </div>
        <div class="buttomBox">
            <!--商品详情下面的购买按钮，需要传的参数有购买价格（price）,活动类型(isGroupBuy)数据类型暂定-->
            <div style="width: 100%;height: 100%;display: flex;">
                <div class="number">
                    <span style="margin-top: 7%;display: block">人数:<span v-text="teamMsg.nowNumber"></span> / <span v-text="teamMsg.groupNumber"></span></span>
                </div>
                <div class="Quitdele" @click="show"  >
                    <div style="margin-top: 7%;display: block" @click="show">退团</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuitDeleAndNumber from "../components/PurchaseAndShareBottom";

    export default {
        name: "QuitDelegaDetail",
        components: {
            QuitDeleAndNumber
        },
        data(){
            return{
                teamMsg:null,
                detailGood: {
                },
                id:'',
                PeopleNumber:'111'
            }
        },
        methods:{
            toSure(){
                axios.post(process.env.VUE_APP_URL + 'team/outteam/' + this.id)
                    .then(re => {
                        alert(re.data.message);
                        document.getElementById("dialog").style.display="none"

                    })
                // this.$router.push('/QuitDlDetail/QuitDlSuccess');
            },
            show()
            {
                document.getElementById("dialog").style.display="none"
                var value = document.getElementById("dialog").style.display;
                if(value=='none')
                {
                    document.getElementById("dialog").style.display="block";
                }
                else{
                    document.getElementById("dialog").style.display="none";
                }
            },

    cancel()
            {
                var value = document.getElementById("dialog").style.display;
                if(value=="none")
                {
                    document.getElementById("dialog").style.display="block";
                }
                else
                    document.getElementById("dialog").style.display="none";
            },


        },
        created() {
            this.id = this.$route.query.goodId;
            this.teamMsg = this.$route.query.teamMSG;
            console.log(this.$route.query);

            axios.post(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/'+this.id).then(response=>{
                this.cards=response.data.data
            }).catch(function (err) {
                console.log(err)
            })

            axios.get(process.env.VUE_APP_URL +  'goods_details/queryGoodsWithDetailsById/' + this.id)
                .then(re =>{
                    this.detailGood = re.data.data;
                    console.log(this.detailGood);
                    this.detailGood.goods.goodsDetailsUrl= this.detailGood.goods.goodsDetailsUrl.split(',');
                    this.countType =  this.detailGood.goods.discountType;
                    console.log(this.countType);
                    /*let allcards = this.detailGood.cardsList;
                    this.card = */
                    this.card= this.detailGood.cardsList;        // 商品的优惠券
                    if(this.countType == 1){
                        this.compte(new Date(),this.detailGood.rushList[0].rushStartTime,this.detailGood.rushList[0].rushEndTime)
                    }

                })
        }
    }
</script>

<style scoped>
    .linkstyle{
        color: white!important;
    }
    .linkstyle:link{
        text-decoration:none;
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

    .Dialog{
        width: 60%;
        height:30%;
        /*background:#EFF2F7;*/
        background: white;
        box-shadow: lightgrey 0px 0px 5px 5px;
        font-size: 2rem;
        font-family:PingFang SC;
        display: none;
        text-align: left;
        position: absolute;
        left: 22%;
        border-radius:5px;
    }
    .dialog{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 15%;
        font-size: 1.75rem;font-family:PingFang SC;color:white;

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
    .Quitdele{
        flex: 1;
        background-color: #4C90F5;
        color:rgba(239,239,239,1);;
        font-size: 1.875rem;
        font-family:PingFang SC;
        font-weight:500;
        display: flex;
        justify-content: center;
    }
    .number{
        flex: 1;
        background-color: whitesmoke;
        color: #343434;
        font-size: 1.75rem;
        font-family:PingFang SC;
        font-weight:500;
        display: flex;
        justify-content: center;

    }
    .buttomBox{
        width: 100%;
        height: 7.34%;
        position: fixed;
        bottom: 0;
        box-shadow:0px -1px 10px 0px rgba(0,0,2,0.3);
    }
</style>
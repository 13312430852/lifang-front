<template>
    <div style="width: 100%;height: 100%;">
        <div class="goodImg"><img style="width: 100%;height: 100%" :src="detailGood.goods.goodsImageUrl" alt=""></div> <!--展示图-->
        <div class="baseMessege">
            <div class="Dialog" id="dialog">
                <div><p style="margin-top: 8%;margin-left: 5%">提示</p><br>
                    <p style="margin-top: 5%;margin-left: 5%">您确定要退团吗?</p>
                </div>
                <div class="dialog">
                    <button style="font-size: 1.75rem;font-family:PingFang SC;width: 25% ;color:white;border-radius: 3px;
                    border: solid 1px gray;background: gray; margin-left: 35%;"@click="" >
                        <router-link to='/QuitDlDetail/QuitDlSuccess'class="linkstyle">确定
                        </router-link>
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
            <div class="goodDesc" v-text="detailGood.goods.goodsDesc">
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
                    <span style="margin-top: 7%;display: block">人数:{{PeopleNumber}}</span>
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
                detailGood: {
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
                    "business": {
                        "businessId": "05e1586f8515615d207cbacf5b927266",
                        "businessName": "123456",
                        "storeManger": "店长",
                        "business":'贵州省华夏都很高的多岁的闪光点是读后感',
                        "storeMangerTel": "店长电话",
                        "storePrincipal": "负责人",
                        "storePrincipalTel": "负责人电话",
                        "storePrincipalWechat": "负责人微信",
                        "businessDel": 0
                    },
                    "goodsNorms": {
                        "goodsNormsId": "73c39bd647ecebfcfc857ccf64380c2c",
                        "norms": "123456",
                        "currentPrice": 999.99,
                        "origiPrice": 888.88,
                        "goodsId": "2a90ee18d212d2827e795668703a213d",
                        "goodsNormsDel": 0
                    }
                },
                id:'',
                PeopleNumber:'111'
            }
        },
        methods:{
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
            this.id = this.$route.params;
            console.log(this.$route.params);
            axios.get('http://123.207.18.77:8090/goods_details/queryGoodsWithDetailsById/1').then(re => this.detailGood = re.data.data)
            axios.get('http://123.207.18.77:8090/goods_details/queryGoodsWithDetailsById/1').then(re => this.PeopleNumber = re.data.data)
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
        box-shadow: lightgrey 0px 0px 5px 2px;
        font-size: 2rem;
        font-family:PingFang SC;
        display: none;
        text-align: left;
        position: fixed;
        margin-top: 5%;
        margin-left: 20%;
    }
    .dialog{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 28%;
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
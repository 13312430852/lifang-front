<template>
    <div id="box1">
        <loading-b v-if="goods==null"></loading-b>
        <div class="goods" v-for="(good,i) in goods"  @click="Todetail(goods[i])">
            <div class="goodImg" :style="{backgroundImage:'url(' + good.goodsImageUrl + ')'}"></div>

            <div id="message">
                <div class="theNameRow">
                    <span class="name" v-text="good.goodsName"></span>
                    <span class="price">￥<span v-text="good.ordersPrice"></span></span>
                </div>
                <div class="theNameRow">
                    <span class="goodDesc" v-html="good.goodsDesc"></span>
                    <span class="state" v-text="payState(good.ordersPayState)">未支付</span>
                </div>
                <div style="display:flex;flex: 4;">
                    <span style="flex: 1"><div class="createTime" style="clear: both;" v-text="createTime(good.ordersTime)">2020-12-09</div></span>
                    <span class="one"><button class="but" style="margin-right: 0" v-if="good.ordersPayState != 1">去支付</button></span>
                    <span class="two"><button class="but">再购买</button></span>
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
                url:process.env.VUE_APP_URL,
                goods:null,
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
                this.goods = response.data.data;

            }).catch(function (err) {
                console.log(err)
            })
            // if(this.goods==null){
            //     this.$router.push('空值页面')
            // }
        },
        methods:{
            Todetail(goods){
                this.$router.push({path: '/theOrderDetail', query: {'goods':goods}})
            },
        }
    }
</script>

<style scoped>
    .createTime{
        width: 150%;
        height: 100%;
        position: relative;
        left: -120%;
        margin-top: 10%;
        font-size:1.8rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(125,125,125,1);
    }
    .but{
        width:80%;
        height:5vh;
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
        font-size:1.6rem;
        font-family:PingFang SC;
        color:#9c9b9b;
        display: flex;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    #good_title{
        width: 100%;
        color: #2C2C2C;
        font-family: "PingFang SC";
        font-size: 1.9rem;
        margin-top: 3%;
        margin-bottom: 3%;
        font-weight: bold;
    }
    #goodmessage{
        width: 100%;
        /*height: 7vh;*/
        color:#575757;
        font-family: "PingFang SC";
        font-size: 1.75rem;
        overflow: hidden;
        display:table-cell;
        vertical-align:bottom;
        margin-left: 50px;

    }

</style>
<template>
    <div class="root">

        <!--删除按钮-->
        <div class="sc">
            <div class="bt">
                <button class="btn" @click="del">删除已过期</button>
            </div>
            <div class="theDiscountList">
                <div class="theDiscount" v-for="item in CouponList">
                    <div :class="{'money':!isDiscountOut(item.cardsState),'moneyOut':isDiscountOut(item.cardsState)}">
                        <div class="tips">
                            满 <span v-text="item.order">10</span> 减
<!--                            满 <span style="color: white">10</span> 减-->
                        </div>
                        <div class="theMoney">
                            ￥<span v-text="item.price">56</span>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="topMsg">
                            <div class="goodName"><span class="abcde" v-text="item.goods.goodsName">花溪重庆火锅</span></div>
                            <div class="isOut" v-if="item.cardsState != 1"></div>
                            <div class="toUse" v-if="item.cardsState == 1"><button @click="toUse(item.goods.goodsId)">立即使用</button></div>
                        </div>
                        <div style="height: 1px;width: 92%;background-color: #bbbbbb;margin: 0 auto"></div>
                        <div class="botMsg">
                            <span class="timeFont">有效期至：</span>
                            <span class="timeFont">2019-12-09</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<!--        &lt;!&ndash;我的优惠券总的大布局&ndash;&gt;
        <div class="coupon" id="coupon">
            &lt;!&ndash;            单个优惠券&ndash;&gt;
            <div class="coupon1" v-for="item in CouponList">
                    <span style="margin:25% 20%;display: block">
                        <div style="display: flex">
                            <p style="float: left">满</p>
                        <p style="float: left" v-text="item.order"></p>
                        <p style="float: left">减</p>
                        <p style="float: left" v-text="item.price"></p></div>


                        <p style="  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
                           v-text="item.goodsName"></p>

                        <p>有效期至：</p>
                        <p style="  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
                           v-text="item.time"></p>

                        <button style="width: 80%;height: 3%;margin-left: 8%;margin-top: 2%;color: #4C90F5;font-size: 1em;
                        border: none;background-color: transparent;outline: none;" v-text="cardsState(item.cardsState)"></button>

                    </span>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "DiscountCoupon",
        data() {
            return {
                CouponList: '',
            }
        },
        methods:{
            toUse(goodId){
                this.$router.push('/MoreTravelOrder/buy/' + goodId);
            },
            del () {
                axios.post(process.env.VUE_APP_URL + 'usercards/deletePastUserCards')
                    .then(re => {
                        console.log(re.data.message);
                        axios.get(process.env.VUE_APP_URL + 'usercards/queryUserCards')
                            .then(re => {this.CouponList = re.data.data;console.log(re.data.data)})
                            .catch()
                    })
                    .catch(err => alert('网络错误'))
            }
        },
        computed:{
            isDiscountOut(){
                return it => {
                    if(it == 1) return false    //未过期
                    else return true    //已过期
                }
            },
            cardsState(){
                return (tag) => {
                    if(tag == 1) return '立即使用';
                    else return '已过期';
                }

            }
        },

         created() {
               axios.get(process.env.VUE_APP_URL + 'usercards/queryUserCards').then(response =>{
                   console.log(response.data.data);
                   this.CouponList = response.data.data;
               }).catch(err => alert(err))
           }
    }
</script>

<style scoped>
    /*.abc{
        width: 200px;
        height: 100px;
        position: relative;
        background-image: radial-gradient(circle at right top, #fff, #fff 10px, transparent 11px),
        radial-gradient(circle at right bottom, #fff, #fff 10px, transparent 11px);
        background-color: blueviolet;

    }
    .abc:after{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -5px;
        width: 10px;
        height: 100%;
        background: radial-gradient(circle, #fff, #fff 2px, transparent 5px);
        background-size: 10px 10px;
    }


*/


    .toUse button{
        background-color: #4c90f5;
        color: white;
        border-style: none;
        width: 90%;
        height: 55%;
        border-radius: .5rem;
    }
    .toUse{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .tipsImg{

    }
    .timeFont{
        margin-top: 20%;
        margin-left: 3%;
        font-size: 1.6rem;
        color: #999999;
    }
    .isOut{
        flex: 1;
        /*background-color: red;*/
        background-image: url("../assets/timg.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .abcde{
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .goodName{
        flex: 2;
        font-size: 1.8rem;
        font-weight: bold;
        padding-top: 4%;
        padding-left: 3%;
        min-width: 0;
    }
    .botMsg{
        flex: 1;
    }
    .topMsg{
        flex: 2;
        display: flex;

    }
    .theMoney{
        flex: 3;
        font-size: 3rem;
        font-weight: bolder;
        padding-left: 16%;
        color: white;
    }

    .tips{
        flex: 1;
        /*background-color: #B8D2FB;*/
        font-size: 1.75rem;
        margin-left: 10%;
        margin-top: 6%;
        color: #f1f1f1;
    }
    .detail{
        flex: 4;
        display: flex;
        flex-direction: column;
    }
    .moneyOut{
        flex: 2;
        height: 100%;
        background-color: #bbbbbb;
        width: 200px;
        position: relative;
        border-top-left-radius: .65rem;
        border-bottom-left-radius: .65rem;
        display: flex;
        flex-direction: column;
        /*background-image: radial-gradient(circle at right top, #fff, #fff 10px, transparent 11px),*/
        /*radial-gradient(circle at right bottom, #fff, #fff 10px, transparent 11px);*/
    }
    .moneyOut:after{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -5px;
        width: 10px;
        height: 100%;
        background: radial-gradient(circle, #fff, #fff 2px, transparent 0px);
        background-size: 10px 10px;
    }
    .money{
        flex: 2;
        height: 100%;
        background-color: #f54c4c;
        width: 200px;
        position: relative;
        border-top-left-radius: .65rem;
        border-bottom-left-radius: .65rem;
        display: flex;
        flex-direction: column;
        /*background-image: radial-gradient(circle at right top, #fff, #fff 10px, transparent 11px),*/
        /*radial-gradient(circle at right bottom, #fff, #fff 10px, transparent 11px);*/
    }
    .money:after{
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -5px;
        width: 10px;
        height: 100%;
        background: radial-gradient(circle, #fff, #fff 2px, transparent 0px);
        background-size: 10px 10px;
    }
   .theDiscount{
       margin: 4px auto 16px auto;
       border-radius: .65rem;
       width: 92%;
       height: 30%;
       background-color: white;
       display: flex;
       box-shadow:0px 0px 8px 0px #c1c1c1;
   }
   .btn{
       width: 28%;
       height: 50%;
       background-color: #4c90f5;
       color:white;
       border-style: none;
       border-radius: 0.4rem;
       font-size: 1.8rem;
       margin-right: 2%;

   }
   .theDiscountList{
           height: 81%;
           width: 100%;
       overflow-y: scroll;
       }
   .root {
        padding-top: 3%;
        height: 100%;
    }

    .head {
        width: 92%;
        height: 23%;
        margin: 24px auto;
        background-color: #4C90F5;
        background-image: linear-gradient(to right, #4C90F5, #B8D2FB);
        border-radius: 12px;

    }

    #list {
        display: flex;
        height: 5.1%;
        width: 92%;
        background: gray;
        margin: 0 auto;
        font-family: PingFang SC;
        font-size: 1.875em;
    }

    #order {
        width: 25%;
        text-align: center;
        line-height: 230%;
    }

    #share {
        width: 25%;
        text-align: center;
        line-height: 230%;
    }

    #discount {
        width: 25%;
        text-align: center;
        line-height: 230%;
    }

    #address {
        width: 25%;
        text-align: center;
        line-height: 230%;
    }


    .coupon {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        /*flex-wrap: wrap;*/
        width: 92%;
        height: 59%;
        background: #F6F5F4;
        margin: 0 auto;
        font-family: "PingFang SC";
        overflow-y: scroll;
    }

    .coupon1 {
        background: #F6F5F4;;
        width: 33.3%;
        height: 33%;
        float: left !important;
        background: url('../assets/Coupon.png') center;
        background-size: cover;
        text-align: left;
        font-family: PingFang SC;

    }



    .sc {
        height: 54%;
        display: flex;
        width: 92%;
        margin: 0 4%;
        background-color: #F6F5F4;
        font-family: PingFang SC;
        border: none;
        border-radius: 1.2rem;
        flex-direction: column;
    }

    .bt {
        width: 100%;
        height: 10vh;
        /*background-color: blueviolet;*/
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.5em;
        margin-right: 0;


    }
</style>

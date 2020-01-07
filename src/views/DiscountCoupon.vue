<template>
    <div class="root">

        <!--删除按钮-->
        <div class="sc">
            <div class="bt">
                <button  style="
        border: none;
        background-color: transparent;
        outline: none;color:red" @click="del">删除已过期</button>
            </div>
        </div>
        <div class="abc">

        </div>
<!--
        &lt;!&ndash;我的优惠券总的大布局&ndash;&gt;
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
            del () {
                axios.post(process.env.VUE_APP_URL + 'usercards/deletePastUserCards')
                    .then(re => {
                        console.log(re.data.message);
                        axios.get(process.env.VUE_APP_URL + 'usercards/queryUserCards')
                            .then(re => {this.discountCouponList = re.data.data;console.log(re.data.data)})
                            .catch()
                    })
                    .catch()
            }
        },
        computed:{
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
   /* .abc{
        width: 200px;
        height: 100px;
        position: relative;
        background-image: radial-gradient(circle at right top, #fff, #fff 10px, transparent 11px),
        radial-gradient(circle at right bottom, #fff, #fff 10px, transparent 11px);
        background-color: red;

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
    }*/
   .root {
        padding-top: 3%;
        /*height: 100%;*/
       overflow-y: scroll;
        /*background: #4c90f5;*/
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

    span {

        font-family: PingFang SC;
        font-size: 1.5em;
        color: red;
    }


    .sc {
        height: 4.2%;
        display: flex;
        width: 92%;
        margin: 0 4%;
        background-color: #F6F5F4;
        font-family: PingFang SC;
        border: none;
    }

    .bt {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 1.5em;
        margin-right: 0;


    }
</style>
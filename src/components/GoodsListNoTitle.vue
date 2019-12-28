<template>
    <div class="listBox">
            <div class="goodsList">
                <div class="realyGood" v-for="(item,key) in theGoods_2" v-if="key < 4"  @click="toGoodsDetail(item.goods.goodsId)">
<!--                    <img class="goodImg" :src="item.goods.goodsImageUrl" alt="">-->
                    <div class="goodImg" :style="{backgroundImage:'url('+item.goods.goodsImageUrl+')'}"></div>
                    <div class="detail">    <!--信息-->
                        <div class="name_price">
                            <div class="goodName" v-text="item.goods.goodsName"></div>
                            <div class="goodPrice"><span style="margin-right: 4%">￥{{item.current_price}}</span></div>
                        </div>
                        <div class="goodsDesc" v-text="item.goods.goodsDesc"></div>
                        <div class="goodOption">
                            <div class="type" v-text="item.goods.consumeType"></div>
                            <div class="earnMoney"><button class="theButton" @click="toEarnMoney">赚佣金</button></div>
                            <div class="purchase"><button class="theButton1" @click.stop="toBuy">抢购</button></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
    export default {
        name: "GoodsListNoTitle",
        props:{
            theGoods_2:{
                type:Array,
                required:true
            },
        },
        methods:{
            toMore(menuName){
                this.$router.push('/MoreTravel/' + menuName)
            },
            toBuy(){
                this.$router.push('/MoreTravel/buy');
            },
            toEarnMoney(){
                this.$router.push('');
            },
            toGoodsDetail(goodId2){
                this.$router.push('/goodDetail/'+goodId2);
            }
        }
    }
</script>

<style scoped>


    .theButton1{
        width: 90%;
        height: 50%;
        border-radius:4px;
        font-size:1.5rem;
        border-style: none;
        font-family:PingFang SC;
        font-weight:500;
        color:#FFFFFF;
        background-color: #4c90f5;
        margin-right: 4%;
    }
    .theButton{
        width: 90%;
        height: 50%;
        border:1px solid rgba(173,173,173,1);
        border-radius:4px;
        font-size:1.5rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(40,40,40,1);
        margin-right: 4%;
    }
    .purchase{
        flex: 2;
        float: right;
        display: flex;
        justify-content: flex-end;
    }
    .earnMoney{
        flex: 2;
        display: flex;
        justify-content: flex-end;
        /*border: 1px solid red;*/
    }
    .type{
        flex: 2;
        font-size:1.5rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(95,95,95,1);
        margin-left: 2.5%;
    }
    .goodOption{
        height: 100%;
        width: 100%;
        display: flex;
        margin-top: 5%;
    }
    .goodsDesc{
        margin-top: 4%;
        margin-left: 3.5%;
        flex:3;
        width: 92%;
        height: 100%;
        font-size:1.5rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(95,95,95,1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .goodPrice{
        width: 37%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(23,23,23,1);
        font-size: 1.75rem;
        float: right;
        text-align: right;
    }
    .goodName{
        float: left;
        width: 60%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 2%;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(95,95,95,1);
        font-size: 1.75rem;
    }
    .name_price{
        margin-top: 2%;
        flex: 1;
    }
    .detail{
        width: 100%;
        height: 37%;
        display: flex;
        flex-direction: column;
    }
    .goodImg{
        height: 63%;
        width: 100%;
        /*min-height: 116px;*/
        /*border: 1px solid red;*/
        background-repeat: no-repeat;
        background-size: cover;
    }
    .realyGood{
        width: 45%;
        min-height: 192px;
        margin-left: 3%;
        border-radius: 4px;
        border:1px solid rgba(229,229,229,1);
        margin-top: 2%;
    }
    .goodsList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .listBox{
        margin-top: 2.6%;
        margin-bottom: 3.6%;
    }
</style>
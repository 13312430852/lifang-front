<template>
    <div class="buttomBox">
        <!--商品详情下面的购买按钮，需要传的参数有购买价格（price）,活动类型(isGroupBuy)数据类型暂定-->
        <div style="width: 100%;height: 100%;display: flex;">
            <div class="share">
                <span style="margin-top: 7%;display: block">分享赚佣金</span>
            </div>
            <div class="purchase">
                <span style="margin-top: 7%;display: block" @click="toBuy">立即抢购 ￥{{ price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PurchaseAndShareBottom",
        props:{
            price:{
                type:Number,
                required:true
            },
            isGroupBuy:{
                type: String,   //暂定
                // required: true,
            },
            goodId:{        //商品ID
                type:String,
                require:true
            }

        },
        methods:{
            toBuy(){
                this.$router.push('/MoreTravelOrder/buy/'+this.goodId);
            }
        }
    }
</script>

<style scoped>
    .purchase span{
        margin-top: 50%;
        display: block;
    }
    .purchase{
        flex: 1;
        background-color: #4C90F5;
        color:rgba(239,239,239,1);;
        font-size: 1.875rem;
        font-family:PingFang SC;
        font-weight:500;
        display: flex;
        justify-content: center;
    }
    .share{
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
<template>
    <div class="buttomBox">
        <!--商品详情下面的购买按钮，需要传的参数有购买价格（price）,活动类型(isGroupBuy)数据类型暂定
        (isbuytime==-1 && rushtype==1)||(isbuynum==0 && rushtype==2)
        -->
        <el-button-group style="width: 100%;height: 100%;display: flex;">
            <el-button :disabled="(isbuytime==0 && rushtype==1)||(isbuynum==0 && rushtype==2)" class="share">
                分享赚佣金
            </el-button>
            <el-button :disabled="(isbuytime==0 && rushtype==1)||(isbuynum==0 && rushtype==2) || rushtime==1" class="purchase" @click="toBuy">
                立即抢购 ￥{{ price }}
            </el-button>
        </el-button-group>
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

            goodId:{        //商品ID
                type:String,
                require:true
            },
            rushtype:{
                type:Number,
                require:true
            },
            isbuynum:{
                type:Number,
                require:true
            },
            isbuytime:{
                type:Number,
                require:true
            },
            rushtime:{
                type:Number,
                require:true
            }

        },
        methods:{
            toBuy(){
                this.$router.push('/MoreTravelOrder/buy/' + this.goodId);
            }
        }
    }
</script>

<style scoped>
    .el-button{
        border-radius: 0px;
    }
    .purchase span{
        margin-top: 50%;
        display: block;
    }
    .purchase{
        flex: 1;
        background-color: #4C90F5;
        border: 1px solid #4C90F5;
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
        position: fixed;
        bottom: 0;
        box-shadow:0px -1px 10px 0px rgba(0,0,2,0);
    }
</style>

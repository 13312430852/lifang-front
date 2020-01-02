<template>
    <div class="buttomBox">
        <!--商品详情下面的购买按钮，需要传的参数有购买价格（price）,活动类型(isGroupBuy)数据类型暂定-->
        <div class="content">
            <div class="purchase share">
                <span style="margin-top: 1px;display: block">分享赚佣金</span>
            </div>
            <div class="purchase purchaseTogether" @click="toTeam">
                <span style="margin-top: 1px;display: block">立即参团 ￥{{ isGroupPrice }}</span>
            </div>
            <div class="purchase" @click="toBuy">
                <span style="margin-top: 1px;display: block">立即抢购 ￥{{ price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PurchaseAddTogeter",

        props: {
            price: {
                type: Number,
                required: true
            },
            goodId: {        //商品ID
                type: String,
                require: true
            },
            isGroupPrice: {
                type: Number,   //团购价
                required: true,
            }

        },
        methods: {
            toTeam() {
                let price123 = this.goodId;
                // console.log(price123);

                this.$router.push({path:'/TeamBuying', query:{'goodId':price123}});
            },
            toBuy() {
                this.$router.push('/MoreTravelOrder/buy/' + this.goodId);
            }
        }
    }
</script>

<style scoped>
    .purchaseTogether {
        background-color: rgba(6, 170, 250, 1) !important;
        color: #141414 !important;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .purchase span {
        margin-top: 50%;
        display: block;
    }

    .purchase {
        flex: 1;
        background-color: #4C90F5;
        color: rgba(239, 239, 239, 1);;
        font-size: 1.875rem;
        font-family: PingFang SC;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .share {
        flex: 1;
        background-color: whitesmoke;
        color: #343434;
    }

    .buttomBox {
        width: 100%;
        height: 7.34%;
        position: fixed;
        bottom: 0;
        box-shadow: 0px -1px 10px 0px rgba(0, 0, 2, 0.3);
    }
</style>
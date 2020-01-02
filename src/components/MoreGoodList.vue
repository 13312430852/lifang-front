<template>
    <div class="listBox">
        <LoadingE v-if="theGoods_more == null || theGoods_more == undefined">
        </LoadingE>
        <div v-for="item in theGoods_more" class="goodsList">
            <coming-soon v-if="item.length == 0 || item == undefined">
            </coming-soon>
            <el-card class="realyGood_more" :body-style="{ padding: '0px' }">
                <div @click="toGoodsDetail(item.goods.goodsId)">
                    <el-image
                            class="goodImg_more"
                            :src="item.goods.goodsImageUrl"
                    >
                        <div slot="error"  >
                            <el-image  :lazy="true"  fit="cover"  src="../assets/imageError.jpg" >
                            </el-image>
                        </div>
                        <div slot="placeholder"  >
                            <loading-e>
                            </loading-e>
                        </div>
                    </el-image>
                    <div style="padding: 14px;">
                        <div class="detail">    <!--信息-->
                            <div class="name_price">
                                <div class="goodName" v-text="item.goods.goodsName"></div>
                                <div class="goodPrice"><span style="margin-right: 4%">￥{{item.goodsNorms.currentPrice}}</span></div>
                            </div>
                            <el-divider></el-divider>
                            <!--                            <div class="goodsDesc">合适的时光飞逝</div>-->
                            <div class="goodOption">
                                <div class="type" v-text="consuType(item.goods.consumeType)"></div>
                                <div class="earnMoney">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>

</template>

<script>
    import LoadingE from "./loadingE";
    import ComingSoon from "./ComingSoon";
    // 需要传递商品列表参数，格式为：分为几大菜单，每一菜单的data里面都有属于这个菜单下面的数据
    export default {
        name: "MoreGoodList",
        components:{
            LoadingE,
            ComingSoon
        },
        props:{
            theGoods_more:{
                type:Array,
                required:true
            },

        },
        computed:{
            consuType(){
                return (tag) => {
                    if (tag == 1){
                        return '包邮'
                    }
                    else if(tag == 2){
                        return '到店消费'
                    }
                    else {
                        return null;
                    }
                }
            }
        },
        methods:{
            toGoodsDetail(goodId2){
                this.$router.push('/goodDetail/'+goodId2);
            }
        },
    }
</script>
<style scoped>

    .earnMoney{
        flex: 2;
        display: flex;
        justify-content: flex-end;
        /*border: 1px solid red;*/
    }
    .type{
        flex: 2;
        font-size:12px;
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
    .goodPrice{
        width: 37%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(23,23,23,1);
        font-size: 12px;
        color: red;
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
        font-weight:bold;
        color:rgba(95,95,95,1);
        font-size: 14px;
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
    .goodImg_more{
        height: 20em;
        width: 100%;
        /*min-height: 116px;*/
        /*border: 1px solid red;*/
        background-repeat: no-repeat;
        background-size: cover;
    }

    .realyGood_more{
        width: 100%;
        border-radius: 4px;
        border:1px solid rgba(229,229,229,1);
        margin-top: 10px;
    }
    .goodsList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .listBox{
        margin-top: 2.6%;
        margin-bottom: 3.6%;
        /*height: 34.5%;*/
        /*min-height:460px;*/
        /*overflow: hidden;*/
        /*min-height: 239px;*/
    }
</style>
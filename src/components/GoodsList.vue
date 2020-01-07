<template>
    <div class="listBox" v-if="theGoods_2 != null">
        <div v-if="typeList.menuName!=null || typeList.menuName!=undefined" v-for="typeList in theGoods_2" style="height: 100%;margin-top: 3.5%">
            <div style="height: 4%;width: 100%;">
                <el-divider direction="vertical">
                </el-divider>
                <span class="theMenuTitle" v-text="typeList.menuName">惊天美食</span>
                <span class="moreGoods" @click="toMore(typeList.menuName)"><i class="el-icon-more"></i></span>
            </div>
            <div class="goodsList">
                <coming-soon v-if="typeList.data.length==0 || typeList.data==undefined"></coming-soon>
                        <el-card class="realyGood" v-for="(item,key) in typeList.data" v-if="key < 4" :body-style="{ padding: '0px' }">
                            <div @click="toGoodsDetail(item.goods.goodsId)">
                                <el-image
                                        class="goodImg"
                                        :src="item.goods.goodsImageUrl"
                                        >
                                    <div slot="error"  >
                                        <el-image   :lazy="true"  fit="cover"  src="../assets/imageError.jpg" >
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
                                                <el-button class="theButton el-button el-button--primary" @click="toEarnMoney"  type="primary" icon="el-icon-share">
                                                </el-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
            </div>
        </div>
        <div v-for="typeList in theGoods_2" class="goodsList">
            <coming-soon v-if="typeList.length==0 || typeList == undefined">
            </coming-soon>
            <el-card class="realyGood" v-for="(item,key) in typeList" v-if="key < 4" :body-style="{ padding: '0px' }">
                <div @click="toGoodsDetail(item.goods.goodsId)">
                    <el-image
                            class="goodImg"
                            :src="item.goods.goodsImageUrl"
                    >
                        <div slot="error"  >
                            <el-image   :lazy="true"  fit="cover"  src="../assets/imageError.jpg" >
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
                                    <el-button class="theButton el-button el-button--primary" @click="toEarnMoney"  type="primary" icon="el-icon-share">
                                    </el-button>
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
        name: "GoodsList",
		components:{
			LoadingE,
            ComingSoon
		},
        props:{
            theGoods_2:{
                type:Array,
                default:null,
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

            toMore(menuName){
                this.$router.push('/MoreTravel/' + menuName)
            },
            toBuy(){
                this.$router.push('/MoreTravelOrder/buy');
            },
            toEarnMoney(){
                this.$router.push('');
            },
            toGoodsDetail(goodId2){
                this.$router.push('/goodDetail/'+goodId2);
            }
        },

    }
</script>

<style scoped>
    .el-divider--horizontal{
        margin: 4px 0;
    }
    .moreGoods{
        display: block;
        float: right;
        margin-right: 20px;
        margin-top: 5px;
        font-size: 18px;
        color: #409EFF;
    }
    .theMenuTitle{
        font-size: 18px;
        color: #5f5f5f;
    }
    .el-divider--vertical{
        margin: 0 5px 0 15px;
        height: 1.3em;
    }

    .theButton{
        width: 40%;
        height: 100%;
        border:1px solid rgba(173,173,173,1);
        border-radius:4px;
        font-size:1.5rem;
        font-family:PingFang SC;
        margin-right: 4%;
        padding: 1px 5px 1px 5px;
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
        /*background-color: red;*/
        /*z-index: 999;*/
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
    .goodImg{
        height: 13em;
        width: 100%;
        /*min-height: 116px;*/
        /*border: 1px solid red;*/
        background-repeat: no-repeat;
        background-size: cover;
    }
    .realyGood{
        width: 45%;
        height: 192px;
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
        /*height: 34.5%;*/
        /*min-height:460px;*/
        /*overflow: hidden;*/
        /*min-height: 239px;*/
    }
</style>
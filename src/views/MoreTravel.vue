<template>
    <div>
        <div class="root" id="MoreTravel">
            <!--搜索部分-->
            <div class="searchBox">
                <!--            <input class="search" type="text" @click="toSearch" v-model="searchInitValue">-->
                <input class="search" type="text" v-model="searchInitValue" @click="toSearch">

            </div><!--搜索部分-->


            <!--轮播部分-->
            <div style="height: 20.5%">
                <LoadingD v-if="maiGoods == null">
                </LoadingD>
                <swiper :options="swiperOption" style="height: 100%;width: 100%; border-radius: 0.6rem">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in maiGoods" :key="index">
                        <div class="banner" @click="toDetail(item.goods.goodsId)" :style="{backgroundImage:'url(' +item.goods.goodsImageUrl + ')'}"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <!--标题-->
            <div class="TLimit" v-text="menuName"></div>
            <el-divider></el-divider>
            <!--            商品展示页面-->

            <more-good-list :theGoods_more="maiGoods">
            </more-good-list> <!--商品展示-->
            <!--<div id="list">
                <div id="row1" v-for="item in maiGoods" @click="toGoodsDetail(item.goods.goodsId)">
                    <div class="photo1" :style="{backgroundImage:'url(' +item.goods.goodsImageUrl + ')'}">
                        &lt;!&ndash;                        <img :src="i.url">&ndash;&gt;
                    </div>

                    <div id="place">
                        <div id="park" v-text="item.goods.goodsName"></div>
                        <div id="sell" v-text="item.current_price"></div>
                    </div>

                    &lt;!&ndash;                    简介&ndash;&gt;
                    <div class="intro" v-html="item.goods.goodsDesc">

                    </div>
                    &lt;!&ndash;                    底部内容&ndash;&gt;
                    <div class="bottom_s">
                        <div class="ef_postage">包邮</div>
                        <div class="earn">
                            <button id="earn">赚佣金</button>
                        </div>
                        <div class="reserve">
                            <button id="reserve" @click="tobuy">购买</button>
                        </div>
                    </div>
                </div>
            </div>-->


        </div>


    </div>
</template>

<script>
    import MoreGoodList from "../components/MoreGoodList";

    export default {
        name: "MoreTravel",
        components: {
            MoreGoodList,
        },
        data() {
            return {
                menuName: 'hhhhh',
                menuId: null,
                searchInitValue: '花溪重庆火锅',

                slide: '',
                //设置属性
                swiperOption: {
                    //自动轮播
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 1500
                    },
                    //开启循环模式
                    loop: true,
                    //开启鼠标滚轮控制Swiper切换
                    mousewheel: true
                },
                maiGoods: null,
                Goods: [
                    {
                        'picture': '01',
                        'url': require('../assets/logo.png'),
                        'goodsName': '花溪公园',
                        'current_price': '￥9.9',
                        'goods_desc': '风流倜傥'
                    },
                    {
                        'picture': '02',
                        'url': require('../assets/girl.png'),
                        'goodsName': '花溪公园',
                        'current_price': '￥9.9',
                        'goods_desc': '风流倜傥'
                    },
                    {
                        'picture': '03',
                        'url': require('../assets/medicine.png'),
                        'goodsName': '花溪公园',
                        'current_price': '￥9.9',
                        'goods_desc': '风流倜傥'
                    }
                ]


            }
        },
        methods: {
            toSearch() {
                this.$router.push('/searchgoods');
            },
            toGoodsDetail(goodId2) {
                this.$router.push('/goodDetail/' + goodId2);
            },
            tobuy() {
                this.$router.push('/MoreTravel/buy');
            },
            toDetail(id) {
                // console.log(data);
                this.$router.push('/goodDetail/' + id)      //url传参
            },
        },
        created() {
            this.menuName = this.$route.params.menuName;
            console.log(this.menuName);
            this.menuId = this.$route.params.menuId;
            console.log(this.menuId);
//获取banner
           /* axios.get(process.env.VUE_APP_URL + 'banner/queryMenuBannerList/' + this.menuId)
                .then(re => {
                    this.slide = re.data.data.data;
                    console.log('我爱你');
                    console.log(re)
                }).catch();*/
//获取商品信息
            axios.get(process.env.VUE_APP_URL + 'goods_details/queryGoodsWithDetailsByMenuName/' + this.menuName)
                .then(response => {
                    this.maiGoods = response.data.data;
                    console.log("More");
                    console.log(this.maiGoods)
                }).catch(err => alert(err))
        }
    }
</script>

<style scoped>

    .searchBox {
        display: flex;
        justify-content: center;
        height: 6.74%;
        /*height: 100%;*/
        width: 100%;
        margin-top: 3%;
        /*background-color: #4C90F5;*/
    }

    .search {
        width: 76%;
        height: 98.7%;
        background-color: rgba(231, 231, 231, 1);
        border-style: none;
        border-radius: 0.75rem;
        margin-top: 1.2%;

        background-image: url("../assets/search.png");
        background-size: 7%;
        background-repeat: no-repeat;
        background-position: 5%;

        color: rgba(138, 138, 138, 1);
        font-size: 1.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        padding-left: 16%;
    }


    html, body, .root {
        margin: 0 auto;
        display: block;
        width: 92%;
        height: 100%;
        /*background-color: green;*/
    }

    .searchBox {
        display: flex;
        justify-content: center;
        height: 6.74%;
        width: 100%;
    }

    .search {
        width: 76%;
        height: 67.7%;
        background-color: rgba(231, 231, 231, 1);
        border-style: none;
        border-radius: 12px;
        margin-top: 1.2%;

        background-image: url("../assets/search.png");
        background-repeat: no-repeat;
        background-position: 5%;

        color: rgba(138, 138, 138, 1);
        font-size: 1.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        padding-left: 16%;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        font-size: 50px;
        text-align: center;
        background-color: blanchedalmond;
        overflow: hidden;
        background-size: cover;
    }

    .banner {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;

    }

    .TLimit {
        margin-top: 30px;
        width: 92%;
        color: #141414;
        font-weight: bold;
        font-size: 24px;
        font-family: "PingFang SC";
    }

    #list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 59.2%;
        /*background-color: rebeccapurple;*/
    }

    #row1 {
        margin-top: 1.5%;
        margin-left: 2%;

        width: 46%;
        height: 48%;
        border: #8a8a8a solid 1px;
        background-color: white;
    }

    .photo1 {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 64%;
        background-color: #4c90f5;
        background-size: cover;
    }

    /*.photo1 img{width: 100%}*/

    #place {
        width: 100%;
        height: 7.6%;
        font-family: "PingFang SC";
        font-size: 1.75em;
        color: #5f5f5f;
        display: flex;
    }

    #park {
        width: 75%;
        height: 100%;
    }

    #sell {
        width: 25%;
        height: 100%;
    }

    .intro {
        width: 100%;
        height: 7.6%;
        margin-top: 6%;
        font-family: "PingFang SC";
        font-size: 1.5em;
    }

    .bottom_s {
        display: flex;
        width: 100%;
        height: 10.1%;
        margin-top: 6%;
        /*background-color: green;*/
    }

    .ef_postage {
        width: 15%;
        height: 100%;
        font-family: "PingFang SC";
        font-size: 1.375em;

    }

    .earn {
        width: 30%;
        height: 100%;
        border-radius: 10px;
        margin-left: 25%;
    }

    #earn {
        width: 100%;
        height: 100%;
        font-family: "PingFang SC";
        font-size: 1.5em;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        outline: none;
        color: red
    }

    .reserve {
        width: 30%;
        height: 100%;
        border-radius: 10px;
    }

    #reserve {
        width: 100%;
        height: 100%;
        font-family: "PingFang SC";
        font-size: 1.5em;
        border-radius: 10px;

        border: none;
        background-color: transparent;
        outline: none;
        color: red
    }
</style>
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
                <swiper :options="swiperOption" style="height: 100%;width: 100%">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                        <div class="banner" :style="{backgroundImage:'url(' + item.url + ')'}"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <!--标题-->
            <div class="TLimit" v-text="menuName"></div>
            <!--            商品展示页面-->
            <div id="list">
                <div id="row1" v-for="i in Goods" @click="toGoodsDetail(i.goods)">
                    <div class="photo1" :style="{backgroundImage: 'url('+ i.url +')'}">
                        <!--                        <img :src="i.url">-->
                    </div>

                    <div id="place">
                        <div id="park" v-text="i.goodsName"></div>
                        <div id="sell" v-text="i.current_price"></div>
                    </div>

                    <!--                    简介-->
                    <div class="intro" v-text="i.goods_desc">

                    </div>
                    <!--                    底部内容-->
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
            </div>


        </div>


    </div>
</template>

<script>
    export default {
        name: "MoreTravel",
        data() {
            return {
                menuName:'hhhhh',
                searchInitValue: '花溪重庆火锅',
                slide: [
                    {'title': '01', 'url': require('../assets/more.png')},
                    {'title': '02', 'url': require('../assets/fish.png')},
                    {'title': '03', 'url': require('../assets/moutain.png')}
                ],
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
                maiGoods: '',
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
            toSearch(){
                this.$router.push('/searchgoods');
            },
            toGoodsDetail(goodId2){
                this.$router.push('/goodDetail/'+goodId2);
            },
            tobuy() {
                this.$router.push('/MoreTravel/buy');
            }
        },
        created() {
            this.menuName = this.$route.params.menuName;
       /*     axios.get('http://123.207.18.77:8090/goods_details/queryGoodsWithDetailsByMenuName'+ this.menuName)
                .then(re => this.maiGoods = re.data.data)
                .catch(err => console.log(err))*/
        }
    }
</script>

<style scoped>

    .searchBox{
        display: flex;
        justify-content: center;
        height: 6.74%;
        /*height: 100%;*/
        width: 100%;
        margin-top: 3%;
        /*background-color: #4C90F5;*/
    }
    .search{
        width:76%;
        height: 98.7%;
        background-color: rgba(231,231,231,1);
        border-style: none;
        border-radius: 0.75rem;
        margin-top: 1.2%;

        background-image: url("../assets/search.png");
        background-size: 7%;
        background-repeat: no-repeat;
        background-position: 5%;

        color: rgba(138,138,138,1);
        font-size: 1.75rem;
        font-family:PingFang SC;
        font-weight:400;
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
        margin-top: 2.5%;
        margin-left: 2.5%;
        width: 92%;
        height: 2.25%;
        color: #141414;
        font-weight: bold;
        font-size: 1.875em;
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
        margin-left: 1%;
        margin-right: 1px;
        width: 48%;
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
    }
</style>
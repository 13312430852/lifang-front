<template>
    <div>
        <div class="searchBox"><!--搜索部分-->
            <!--            <input class="search" type="text" @click="toSearch" v-model="searchInitValue">-->
            <input class="search" type="text" v-model="searchInitValue" @click="toSearch">

        </div><!--搜索部分-->

        <div style="height: 20.5%;margin-top: 4%;margin-bottom: 4%"><!--轮播部分-->
            <swiper :options="swiperOption" style="height: 100%;width: 92%;border-radius: 0.6rem">
                <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                    <div class="banner" @click="toDetail(item.goodsId)" :style="{backgroundImage:'url(' + item.banner.bannerImageUrl + ')'}">

                    </div>
                </swiper-slide>
            </swiper>
        </div><!--轮播部分-->

        <div class="nav"><!--菜单部分-->
            <div class="realyNav" v-for="item in Icon" @click="toMore(item.menuName)">
                <div class="menuIcon"><img style="height: 100%" :src="item.menuIconUrl"></div>
                <div class="menuTitle" v-text="item.menuName"></div>
            </div>
        </div>    <!--菜单部分-->

        <div class="popularBox"><!--限购部分-->
            <div class="hot_col-1">
                <div class="listTitle">热门抢购</div>
                <div class="moreFont" @click="toMore('热门抢购')">更多限购</div>
            </div>
            <div class="noticeListBox">
                <div class="noticeList" v-for="(item,index) in hotGoodsList" @click="toGoodsDetail(item.goods.goodsId)">
                    <div class="hotImg" :style="{backgroundImage:'url(' + item.goods.goodsImageUrl + ')'}">
                        <div class="theCoverBox">
                            <div class="theCoverBox1">
                                <span>限时:</span>
                                <span style="font-size: 1.75rem" v-text="">37:13:09</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--限购部分-->
        <goods-list :theGoods_2="theGoods_1"></goods-list> <!--商品展示-->

        <footer class="footer"></footer>
    </div>
</template>

<script>
    import GoodsList from "../components/GoodsList";

    export default {
        name: "Start",
        components:{
            GoodsList,
        },
        data(){
            return{
                searchInitValue:'花溪重庆火锅',
                theGoods_1:[            //获取所有商品基本数据
                    {
                        "menuName": "热门抢购",
                        "data": [
                            {
                                "goods": {
                                    "goodsId": "77777",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            }
                        ]
                    },
                    {
                        "menuName": "惊天美食",
                        "data": [
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            }
                        ]
                    },
                    {
                        "menuName": "惊天美食",
                        "data": [
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "1",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/time1.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 103,
                                    'goodsDesc': '回家的后代就分手施工方是否公司hsjfh华回到家后福建师范设计费健身房'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            },
                            {
                                "goods": {
                                    "goodsId": "2",
                                    "goodsDetailsUrl": "\"[\"132\",\"4654\",\"654\"]\"",
                                    "goodsCount": 98,
                                    "businessId": "1",
                                    "menuId": "1",
                                    "certificatePeriod": 2,
                                    "discountType": 1,
                                    "goodsDel": 0,
                                    'consumeType': '到店消费', 'goodsImageUrl': require('../assets/h2.png'),
                                    'goodsName': '花溪重庆火锅嘤嘤嘤有多少', 'current_price': 13,
                                    'goodsDesc': '回家的后代就分手施工方是否公司'
                                },
                                "menu": {
                                    "menuId": "1",
                                    "menuName": "惊天美食",
                                    "menuIconUrl": "http://39.108.234.130:8080/images/menuIconUrl/美食.png",
                                    "menuDel": 0
                                },
                                "business": null,
                                "goodsNormsList": []
                            }
                        ]
                    }
                ],





                hotGoodsList:[],    //存放热门抢购商品
                Icon:[
                    {'menuName':'热门抢购',menuIconUrl:require('../assets/navIcon/购物车.png')},
                    {'menuName':'惊天美食',menuIconUrl:require('../assets/navIcon/美食.png')},
                    {'menuName':'休闲娱乐',menuIconUrl:require('../assets/navIcon/玩具.png')},
                    {'menuName':'旅游景点',menuIconUrl:require('../assets/navIcon/旅游.png')},
                    {'menuName':'饱餐住宿',menuIconUrl:require('../assets/navIcon/酒店.png')},
                    {'menuName':'培训机构',menuIconUrl:require('../assets/navIcon/学习教育.png')},
                    {'menuName':'跑腿代购',menuIconUrl:require('../assets/navIcon/生活_跑腿.png')},
                    {'menuName':'敬请期待',menuIconUrl:require('../assets/navIcon/敬请期待.png')}
                ],      //存放菜单

                slide: [
                    {'banner':{'bannerImageUrl':require('../assets/01.jpg')}},
                    {'banner':{'bannerImageUrl':require('../assets/2.jpg')}},
                    {'banner':{'bannerImageUrl':require('../assets/3.jpg')}},
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
                }
            }
        },
        methods:{
            toMore(menuName1){
                this.$router.push('/MoreTravel/' + menuName1)
            },
            toSearch(){
                this.$router.push('/searchgoods');
            },
            toGoodsDetail(goodId2){
                this.$router.push('/goodDetail/'+goodId2);
            },
            toDetail(id){
                // console.log(data);
                this.$router.push('/goodDetail/'+id)      //url传参
            },
            sortHot(){  //将限购的数据整理
                this.theGoods_1.forEach(item => {
                    if(item.menuName == '热门抢购'){
                        this.hotGoodsList = item.data;
                    }
                })
            },
            test(){
                alert("qwe");
            },

        },
        created() {
            /* axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
             axios.defaults.headers.common["userType"] = 'MINE';*/
            axios.get('http://39de9ecd.ngrok.io/menu/queryAllMenu').then(response => {
                this.Icon = response.data.data;
                console.log(response);
            }).catch(err => alert(err))

            axios.get('http://192.168.10.102:8090/banner/queryBannerList')
                .then(re => {this.slide = re.data.data;console.log(this.slide)})
                .catch(err => alert(err));
            /*  axios.get('http://123.207.18.77:8090/goodsWithMenuName/queryGoodsDetailWithMenuName')
                  .then(re => {this.theGoods_1 = re.data.data})
                  .catch(err => alert(err));*/
            this.sortHot();

        }
    }
</script>

<style scoped>
    .menuTitle{
        height: 28%;
        width: 100%;
        margin-left: 20%;
        font-size:1.75rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(85,85,85,1);
        margin-top: 3%;
    }
    .menuIcon{
        height: 65%;
        background-repeat: no-repeat;
        margin-left: 20%;
    }
    .realyNav{
        width: 24%;
        height: 11.5vh;
        float: left;
        margin-left: .7%;
        margin-bottom: 3%;
    }
    .nav{
        width: 100%;
        /*height: 26.83%;*/
        /*height: 27vh;*/
        /*height: 13.4%;*/
        display: flex;
        flex-wrap: wrap;
        margin-top: 2%;
        margin-bottom: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .theCoverBox{
        width: 100%;
        height: 30%;
        background:linear-gradient(0deg,rgba(0,0,0,0.77) 26%,rgba(255,255,255,0) 100%);
        text-align: right;
    }
    .theCoverBox1{
        width: 91.2%;
        height: 100%;
        color: rgba(255,254,253,0.69);
        padding-top: 1%;
    }
    .hotImg{
        max-width: 100%;
        height: 90%;
        background-color:rebeccapurple;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column-reverse;
    }
    .noticeListBox {
        width: 100%;
        height: 100vh;
        margin-left: 4%;
        box-sizing: border-box;
        overflow: scroll;
        white-space: nowrap;
    }

    .noticeListBox::-webkit-scrollbar {
        display: none;
    }

    .noticeList{
        display: inline-block;
        border-radius: 0.4rem;
        /*width:260px;*/
        width:34.6%;
        height:100%;
        /*border: 1px solid red;*/
        margin-right: 2%;
    }

    .hotGoods{
        float: left;
        width:260px;
        height:150px;
        border-radius:2px;
        margin-right: 16px;
        /*background-color: #4c90f5;*/
        /*border: 1px solid red;*/
    }
    .moreFont{
        flex: 1;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(92,92,92,1);
        font-size: 1.75rem;
        text-align: right;
        margin-right: 3.6%;
    }
    .listTitle{
        flex: 1;

        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(20,20,20,1);
        font-size: 1.88rem;
        margin-left: 3.6%;
    }
    .popularBox{
        margin-top: 2%;
        height: 22.4%;
        display: flex;
        flex-direction: column;
    }
    .popularBox::-webkit-scrollbar { width: 0 !important }
    .hot_col-1{
        flex: 1;
        display: flex;
        margin-bottom: 4%;
        /*background-color: #4c90f5;*/
        /*height: 22%;*/
    }
    .hot_col-5{
        flex: 5;
        overflow: scroll;
    }


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

    .swiper-slide {
        width: 100%;
        height: 100%;
        font-size: 50px;
        text-align: center;
        background-color: blanchedalmond;
        overflow: hidden;
    }

    .banner{
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;

    }
    footer{
        height: 98px;
        width: 100%;
    }
    .footer{
        height: 98px;
        width: 100%;
        display: block;
    }

</style>
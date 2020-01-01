<template>
    <div>
        <div class="searchBox"><!--搜索部分-->
            <!--            <input class="search" type="text" @click="toSearch" v-model="searchInitValue">-->
            <input class="search" type="text" v-model="searchInitValue" @click="toSearch">

        </div><!--搜索部分-->
			
        <div style="height: 20.5%;margin-top: 4%;margin-bottom: 4%"><!--轮播部分-->
            <LoadingD v-if="slide == null"></LoadingD>
			<swiper :options="swiperOption" style="height: 100%;max-width: 92%;border-radius: 0.6rem">
                <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                    <div class="banner" @click="toDetail(item.goodsId)">
						<el-image
						      style="width: 100%; height: 100%"
						      :src="item.bannerImageUrl"
						      :fit="fill"></el-image>
					</div>
                </swiper-slide>
            </swiper>
        </div><!--轮播部分-->

        <div class="nav"><!--菜单部分-->
			<LoadingF v-if="Icon == null"></LoadingF>
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
				<LoadingB v-if="hotGoodsList == null"></LoadingB>
                <div class="noticeList" v-for="(item,index) in hotGoodsList" @click="toGoodsDetail(item.goods.goodsId)">
                    <div class="hotImg" :style="{backgroundImage:'url(' + item.goods.goodsImageUrl + ')'}">
                        <div class="theCoverBox">
                            <!--限时-->
                            <div v-if="item.goods.discountType == 1" class="theCoverBox1">
                                <span v-if="item.status == 0">未开始</span>
                                <span v-if="item.status == -1">已抢购结束</span>
                                <count-down v-if="item.status == 1" :time="item.time">
                                    <template slot-scope="pro"><div style="margin-left: 1%">距结束：</div>
                                        <div>{{ pro.hours }} : {{ pro.minutes }} : {{ pro.seconds }}</div>
                                    </template>
                                </count-down>
                            </div>
                            <!--限量-->
                            <div v-if="item.goods.discountType == 2" class="theCoverBox1">
                                仅剩： <span v-text="item.num"></span> 份
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--限购部分-->
		
        <goods-list :theGoods_2="theGoods_1">
		</goods-list> <!--商品展示-->

        <footer class="footer"></footer>
    </div>
</template>

<script>
    import GoodsList from "../components/GoodsList";
    import CountDown from '@chenfengyuan/vue-countdown';
	import LoadingD from "../components/loadingD";
	import LoadingF from "../components/loadingF";
	import LoadingB from "../components/loadingB";
	

    export default {
        name: "Start",
        components:{
            GoodsList,
            CountDown,
			LoadingD,
			LoadingF,
			LoadingB
        },
        data(){
            return{
                pro:{
                    '小时':1,
                    '分钟':1,
                    '秒':1,
                },
                searchInitValue:'花溪重庆火锅',
                theGoods_1:null,

                hotGoodsList:null,    //存放热门抢购商品
                Icon: null/* [
                    {'menuName':'热门抢购',menuIconUrl:require('../assets/navIcon/购物车.png')},
                    {'menuName':'惊天美食',menuIconUrl:require('../assets/navIcon/美食.png')},
                    {'menuName':'休闲娱乐',menuIconUrl:require('../assets/navIcon/玩具.png')},
                    {'menuName':'旅游景点',menuIconUrl:require('../assets/navIcon/旅游.png')},
                    {'menuName':'饱餐住宿',menuIconUrl:require('../assets/navIcon/酒店.png')},
                    {'menuName':'培训机构',menuIconUrl:require('../assets/navIcon/学习教育.png')},
                    {'menuName':'敬请期待',menuIconUrl:require('../assets/navIcon/敬请期待.png')}
                ] */,      //存放菜单

                slide: null /* [
                    {'banner':{'bannerImageUrl':require('../assets/01.jpg')}},
                    {'banner':{'bannerImageUrl':require('../assets/2.jpg')}},
                    {'banner':{'bannerImageUrl':require('../assets/3.jpg')}},
                ] */,
                //设置属性
                swiperOption: {
                    //自动轮播
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2500
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
            /*sortHot(){  //将限购的数据整理
                this.theGoods_1.forEach(item => {
                    if(item.menuName == '热门抢购'){
                        this.hotGoodsList = item.data;
                    }
                })
            },*/
            test(){
                alert("qwe");
            },

        },
        created() {
			if(localStorage.getItem('userToken') != undefined && localStorage.getItem('userToken') != null){
				axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
				axios.defaults.headers.common["userType"] = 'MINE';
				axios.get(process.env.VUE_APP_URL + 'menu/queryAllMenu')
				    .then(response => {
				    this.Icon = response.data.data;
				    console.log(response);
					
				}).catch()
				
				axios.get(process.env.VUE_APP_URL + 'banner/queryBannerList')
				    .then(re => {this.slide = re.data.data;console.log(this.slide)})
				    .catch();
				
				  axios.get(process.env.VUE_APP_URL + 'goodsWithMenuName/queryGoodsDetailWithMenuName')     //获取商品列表的基本信息
				      .then(re => {this.theGoods_1 = re.data.data;console.log(this.theGoods_1)})
				      .catch();
				
				  axios.get(process.env.VUE_APP_URL + 'rush/queryRushAndGoodsList')
				      .then(re => {
				          this.hotGoodsList = re.data.data;
				          console.log(re.data);
				      })
				      .catch(err => console.log('cccc'))
			}
           
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
        margin-left: 25%;
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
        margin-bottom: 6%;
		
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
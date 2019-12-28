<template>
    <div id="moreBuying">
        <!--轮播部分-->
        <div style="height: 20.54%">
            <swiper :options="swiperOption" style="height: 100%;width: 100%">
                <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                    <div class="banner" @click="toDetail(item.goodsId)"
                         :style="{backgroundImage:'url(' + item.url + ')'}">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--            商品图片列表-->
        <div id="list">
            <div class="listLeft"><div class="times" >限时：09:12:30</div></div>
            <div class="listRight"><div class="times">限时：09:12:30</div></div>
        </div>
        <!--        大图片-->
        <div id="bigPhoto">
        </div>
        <!--        更多-->
        <div id="more">更多</div>
        <!--        商品列表-->
        <div class="shopList">
            <div class="shop1">
                <!--                展示图-->
                <div class="picture">
                    <!--                    抢购时间-->
                    <div class="time">限时：09:12:30</div>

                </div>
                <!--                商品详情-->
                <div class="goodsName">
                    <div class="name" v-text="goods[0].goodsName"></div>
                    <div class="sell" v-text="goods[0].price"></div>
                </div>
                <div class="goods_desc" v-text="goods[0].goodsDesc"></div>
                <div class="bottom">
                    <div class="bottom1">包邮</div>
                    <div class="bottom2">赚佣金</div>
                    <div class="bottom3">抢购</div>
                </div>
            </div>

            <!--<div class="shop2">
                <div class="picture">
                    <div class="time"></div>
                </div>
                <div class="goodsName">
                    <div class="name">耐克肉色帽子</div>
                    <div class="sell">￥9.9</div>
                </div>
                <div class="goods_desc">风流倜傥，迷倒万千少女之帽...</div>
                <div class="bottom">
                    <div class="bottom1">包邮</div>
                    <div class="bottom2">赚佣金</div>
                    <div class="bottom3">抢购</div>
                </div>
            </div>-->
        </div>


    </div>
</template>

<script>
    import {AxiosInstance as axios} from "axios";

    export default {
        name: "MoreBuying",
        data() {
            return {
                slide: [
                    {'title': '01', 'url': require('../assets/Straw_hat.png')},
                ],
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
                Goods:'',
                goods: [
                    {'goodsName': '花溪', 'goodsDesc': '我弟弟山东山东师范师范骚操作正常的', 'price': '￥99'}
                ]
            }
        }
       /* created() {

            axios.get('http://123.207.18.77:8090/goods_details/queryGoodsWithDetailsById').then(response =>{
                alert(123);
                this.Goods = response.data.data
            }).catch(err => alert(err))
        }*/

    }
</script>

<style scoped>
    #moreBuying {
        /*background-color: #4c90f5;*/
        font-family: "PingFang SC";
        width: 92%;
        margin: 0 auto;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        font-size: 50px;
        text-align: center;
        background-color: blanchedalmond;
        overflow: hidden;
    }

    .banner {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;

    }

    #list {
        width: 100%;
        height: 15.14%;
        display: flex;
        margin-top: 1.5%;

    }

    .listLeft {
        width: 49%;
        height: 100%;
        background: url('../assets/medicine.png') ;
        background-size: cover;
        /*background-color: #8a8a8a;*/
        margin-right: 1%;
    }
    .times{
        font-family: PingFang-SC-Medium;
        font-size: 1.375em;
        height: 12.65%;
        width: 46.7%;
        margin-left: 50%;
        margin-top: 60%;
        color: white;
    }

    .listRight {
        width: 49%;
        height: 100%;
        background: url("../assets/computer.png");
        background-size: cover;
        /*background-color: #B8D2FB;*/
        margin-left: 1%;
    }

    #bigPhoto {
        height: 18.7%;
        width: 100%;
        background: url("../assets/necklace.png");
        /*background-color: green;*/
        margin-top: 1.5%;
        background-size: cover;
    }

    #more {
        margin-top: 2%;
        padding-top: 2%;
        height: 3.74%;
        width: 100%;
        font-size: 1.875em;
        font-weight: bold;

    }

    .shopList {
        display: flex;
        width: 100%;
        height: 28.1%;
    }

    .shop1 {
        width: 49%;
        margin-right: 1%;
        height: 100%;
        /*background-color: #F6F5F4;*/
        border:1px solid #E5E5E5;
    }

  /*  .shop2 {
        width: 49%;
        height: 100%;
        margin-left: 1%;
        border:1px solid #E5E5E5;
        !*background-color: #323131;*!
    }
*/
    .picture {
        padding-top: 1px;
        height: 64.2%;
        width: 100%;
        background: url('../assets/earphone.png') center;
        background-size: cover;
    }

    .time {
        font-family: PingFang-SC-Medium;
        font-size: 1.375em;
        height: 12.65%;
        width: 46.7%;
        /*background-color: white;*/
        margin-left: 50%;
        color: white;
        margin-top:70%;

    }

    .goodsName {
        height: 8%;
        width: 100%;
        margin-top: 2%;
        display: flex;
    }

    .name {
        width: 80%;
        height: 100%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
    }

    .sell {
        width: 20%;
        height: 100%;
        font-size: 1.75em;
        font-family: PingFang-SC-Medium;
    }

    .goods_desc {
        margin-top: 2%;
        width: 100%;
        height: 9%;
        font-family: PingFang-SC-Regular;
        font-size: 1.74em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .bottom {
        display: flex;
        bottom: 0;
        width: 100%;
        height: 8%;
        margin-top:8%;
    }

    .bottom1 {
        height: 100%;
        width: 55%;
        font-size: 1.5em;
        font-family: PingFang-SC-Regular;
        background-color: white;
    }

    .bottom2 {
        width: 25%;
        height: 100%;
        text-align: center;
        /*background-color: #B8D2FB;*/
        font-family: PingFang-SC-Medium;
        font-size: 1.5em;
        border:1px solid #E5E5E5;
        border-radius: 4px;

    }

    .bottom3 {
        width: 20%;
        height: 100%;
        background-color: #4C90F5;
        text-align: center;
        font-family: PingFang-SC-Medium;
        font-size: 1.5em;
        border-radius: 4px;
    }
</style>
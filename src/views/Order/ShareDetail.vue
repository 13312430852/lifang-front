<template>
    <div>
        <div class="box1">
            <div class="title">分享详情</div>
            <div class="picture">
                <img :src="goods.goods_image_url" width="100%" height="100%">
            </div>
            <div class="price_position">
                <div class="price">
                    <div class="price_icon">
                        <img src="../../assets/money.png" width="60%" height="60%">
                    </div>
                    <div v-text="goods.goods_price" class="price_detail"></div>
                </div>
                <div class="position">
                    <div class="price_icon">
                        <img src="../../assets/position.png" width="60%" height="60%">
                    </div>
                    <div class="price_detail" v-text="goods.shop_address"></div>
                </div>
            </div>
            <div class="name" v-text="goods.goods_name"></div>
            <div class="btn" @click="share_again()">再分享</div>
            <div class="fenxiangzhi" v-if="isShow">再分享至：</div>
            <div class="icon" v-if="isShow">
                <div class="square">
                    <div class="content"></div> <!--头像-->
                </div>
            </div>
            <div class="icon" v-if="isShow">
                <div class="square2">
                    <div class="content"></div> <!--头像-->
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "ShareDetail",
        data(){
            return{
                goods:
                    {'goods_image_url': require('../../assets/biaoqingbao.jpg'),
                        'goods_name':'一件印着很骚的表情包的T恤',
                        'goods_price':'55元',
                        'shop_address':'贵阳市花溪区朝阳村',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'
                    },
                isShow:false
            }
        },
        methods:{
            share_again(){
                this.isShow=!this.isShow
            }
        }
    }
</script>

<style scoped>
.box1{
    width: 92%;
    height: 100%;
    background-color:white;
    margin: 0 auto;
    border: 1px solid white;
}
    .title{
        width: 100%;
        height: 4%;
        margin-top: 2%;
        font-family: "PingFang SC";
        font-size: 1.875rem;
        /*background-color: #ADADAD;*/
    }
    .picture{
        width: 100%;
        height: 25%;
        /*background-color: #007aff;*/
    }
    .price_position{
        width: 100%;
        height: 4%;
        margin-top: 2%;
        display: flex;
        /*background-color: lightpink;*/
    }
    .price{
        width: 50%;
        height: 100%;
        display: flex;
        /*background-color: aqua;*/
    }
    .price_icon{
        width: 20%;
        height: 100%;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        /*background-color: #9fbfff;*/
    }
    .price_detail{
        width: 80%;
        height: 100%;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        /*background-color: blueviolet;*/
    }
    .position{
        width: 50%;
        height: 100%;
        display: flex;
        /*background-color: lightgreen;*/
    }
    .name{
        width: 100%;
        height: 4%;
        display: flex;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        /*background-color:lightyellow;*/
    }
    .btn{
        width: 20%;
        height: 4%;
        margin-top: 2%;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        color: white;
        text-align: center;
        line-height: 250%;
        background-color: #4C90F5;
        border-radius: 8px;
        float: right;
    }
    .fenxiangzhi{
        width: 100%;
        height: 4%;
        margin-top: 25%;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        /*background-color: blueviolet;*/
    }
    .icon{
        width: 15%;
        height: 11%;
        /*background-color: #cddbf5;*/
        float: left;
        margin-left: 5%;
    }
.square {
    width: 100%;
    background-image: url("../../assets/qq.png");
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #E4E4E4;
}
.square2 {
    width: 100%;
    background-image: url("../../assets/wechat.png");
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #E4E4E4;
}

.square:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}
.square2:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.content {
    position: absolute;
    width: 100%;
    height: 100%;
}

</style>
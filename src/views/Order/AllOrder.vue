<template>
    <div id="box1">
        <div class="goods" v-for="(good,i) in goods"  @click="Todetail(goods[i])">
            <div id="picture">
                <img :src="good.goodsImageUrl" width="100%" height="100%">
            </div>
            <div id="message">
                <div id="good_title" v-text="good.goodsName"></div>
                <div id="goodmessage" v-text="good.goodsDesc"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllOrder",
        data(){
            return{
                goods:[
                    {   'ordersId':'1234446',
                        'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {   'ordersId':'sbhab',
                        'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goodsImageUrl': require('../../assets/1235.jpg'),
                        'goodsName':'T恤',
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                ],
            }
        },
        created() {

            axios.post('http://192.168.8.126:8090/order/queryOrder',
                {
                    "userId":"user-001",
                    // "ordersPayState":"1"
                }).then(response => {
                this.goods = response.data.data.records;

            }).catch(function (err) {
                console.log(err);
            })

        },
        methods:{
            Todetail(goods){
                this.$router.push({path: '/OrderDetail', query: {'goods':goods}})
            },
        }
    }
</script>

<style scoped>
    #box1{
        width: 100%;
        height: 100%;
        margin: 13% auto;
        font-family: "PingFang SC";
        background-color:white;
        overflow-y: scroll;
    }
    .goods{
        width: 100%;
        height: 13%;
        background-color: #F6F5F4;
        display: flex;
        font-family: "PingFang SC";
        margin: 6% auto;
    }
    #picture{
        width: 28%;
        /*height: 100%;*/
        /*margin-left: 2%;*/
        /*background-color: green;*/
    }
    #message{
        width: 60%;
        height: 100%;
        margin-left: 10%;
        font-family: "PingFang SC";
        /*background-color: red;*/
    }
    #good_title{
        width: 100%;
        height: 50%;
        color: #2C2C2C;
        font-family: "PingFang SC";
        font-size: 1.75rem;
        /*background-color: yellow;*/
    }
    #goodmessage{
        width: 100%;
        height: 50%;
        color:#2C2C2C;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        margin-top: 15%;
        /*background-color: blueviolet;*/
        overflow: hidden;
    }

</style>
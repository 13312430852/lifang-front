<template>
    <div id="box1">
        <div class="goods" v-for="(good,i) in goods"  @click="Todetail(goods[i])">
            <div id="picture">
                <img :src="good.goodsImageUrl" width="100%" height="100%">
            </div>
            <div id="message">
                <div id="good_title" v-text="good.goodsName"></div>
                <div id="goodmessage" v-html="good.goodsDesc"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoFinish",
        data(){
            return{
                //url:process.env.VUE_APP_URL,
                goods:[
                    /*{   'ordersId':'1234446',
                        'goodsImageUrl': 'http://ww1.sinaimg.cn/large/0069q4eTgy1gaactp9rlbj30dw0agt97.jpg',
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
                        'goodsDesc':'是出版发挥不出事多年的时间成本事多年的时间成本'},*/
                ],
            }
        },
        created() {
            axios.post(process.env.VUE_APP_URL+'order/userQueryOrder',{
                "ordersPayState":"0"
            })
                .then(response => {
                    console.log(response.data);
                    this.goods = response.data.data;
                }).catch(function (err) {
                console.log(err)
            })
            // if(this.goods==null){
            //     this.$router.push('空值页面')
            // }
        },
        methods:{
            Todetail(goods){
                this.$router.push({path: '/theOrderDetail', query: {'goods':goods}})
            },
        }
    }
</script>

<style scoped>
    #box1{
        width: 100%;
        height: 92%;
        margin: 2% auto;
        /*background-color: red;*/
        font-family: "PingFang SC";
    }
    .goods{
        width: 100%;
        height: 13%;
        background-color:#f6f5f4;
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
        /*background-color: green;*/
    }
    #good_title{
        width: 100%;
        height: 50%;
        color: #2C2C2C;
        font-family: "PingFang SC";
        font-size: 1.75rem;
        margin-top: 2%;
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
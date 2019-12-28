<template>
    <div id="box1">
        <div class="goods" v-for="(good,i) in goods">
            <div id="picture">
                <img :src="good.goodsImageUrl" width="100%" height="100%" alt="">
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
        name: "NoFinish",
        data(){
            return{
                goods:[]
            }
        },
        created() {

            axios.post('http://192.168.10.66:8090/order/queryOrder',
                {
                    "userId":"user-001",
                    "ordersPayState":"0"
                }).then(response => {
                this.goods = response.data.data.records;

            }).catch(function (err) {
                console.log(err);
            })

        }
    }
</script>

<style scoped>
    #box1{
        width: 100%;
        height: 100%;
        margin: 13% auto;
        background-color:#F6F5F4;
    }
    .goods{
        width: 100%;
        height: 13%;
        /*background-color: lightgray;*/
        display: flex;
        margin: 5% auto;
    }
    #picture{
        width: 28%;
        height: 100%;
        margin-left: 2%;
        /*background-color: green;*/
    }
    #message{
        width: 60%;
        height: 100%;
        margin-left: 10%;
        /*background-color: red;*/
    }
    #good_title{
        width: 100%;
        height: 50%;
        color: #2C2C2C;
        font-size: 1.75rem;
        /*background-color: yellow;*/
    }
    #goodmessage{
        width: 100%;
        height: 50%;
        color:#2C2C2C;
        font-size: 1.5rem;
        /*background-color: blueviolet;*/
        overflow: hidden;
    }

</style>
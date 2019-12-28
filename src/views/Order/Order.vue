<template>
    <div class="theOrderBox">
        <my-page></my-page>
        <router-view class="over" />
    </div>

</template>

<script>
    import MyPage from "../../components/MyPage";
    export default {
        name: "Order1",
        components: {MyPage},
        data() {
            return {
                goods:[
                    {'goods_image_url': require('../../assets/1235.jpg'),
                    'goods_name':'T恤',
                    'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/1235.jpg'),
                        'goods_name':'T恤',
                        'goods_desc':'是出版发挥不出事多年的时间成本'},
                    {'goods_image_url': require('../../assets/1235.jpg'),
                        'goods_name':'T恤',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/1235.jpg'),
                        'goods_name':'T恤',
                        'goods_desc':'是出版发挥不出事多年的时间成本'},
                    {'goods_image_url': require('../../assets/1235.jpg'),
                        'goods_name':'T恤',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/1235.jpg'),
                        'goods_name':'T恤',
                        'goods_desc':'是出版发挥不出事多年的时间成本'},
                ],
                }

            },

    }
</script>

<style scoped>
    .over{
        overflow-y: scroll;
    }
    .theOrderBox{
        height: 100%;
        overflow-y: hidden;

    }

    #navList li{
        flex: 1;
        font-size: 1.875rem;
        text-align: center;
    }
    #order_list{
        position: relative;
        width: 92%;
        height: 100%;
        border-radius: 12px;
        background-color: #F6F5F4;
        margin: 5% auto;
    }

    #sort{
        width: 66.6%;
        height:3.4%;
        display: flex;
        margin: 4.1% auto;
        border-radius: 24px;
        /*border:1px solid #4C90F5;*/
        position: relative;
        top: 4.1%;
        /*background-color: #007aff;*/


    }

</style>
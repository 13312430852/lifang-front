<template>
<div>
        <div id="order_list">
            <div id="sort">
                <ul>
                    <li>
                        <router-link active-class="checkted" class="uncheckted" to="/thehome/Order/My/AllOrder">
                            全部订单
                        </router-link>
                    </li>
                    <li>
                        <router-link active-class="checkted" class="uncheckted" to="/thehome/Order/My/NoFinish">
                            未支付
                        </router-link>
                    </li>
                    <li>
                        <router-link active-class="checkted" class="uncheckted" to="/thehome/Order/My/Finished">
                            已支付
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-view style="overflow-y: scroll;height: 100%"/>
        </div>

    </div>
</template>

<script>
    import MyPage from "../components/MyPage";
    export default {
        name: "Order1",
        components: {MyPage},
        data() {
            return {
                user:{
                    'head_picture': require('../assets/headPicture1.png'),
                    'user_name': '用户昵称',
                    'user_sex': '男',
                    'user_tel': '1515****621',
                    'user_regist_time':'2019.12.12'
                },




            }

        },

    }
</script>

<style scoped>

    #navList li{
        flex: 1;
        font-size: 1.875rem;
        text-align: center;
    }
    #order_list{
        /*position: relative;*/
        width: 92%;
        /*height: 100%;*/
        border-radius: 12px;
        margin: 10% auto;
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
    ul{
        width: 100%;
        height: 100%;
        border-radius: 24px;
        display: flex;
        border: 1px solid #4C90F5;
        list-style: none;
        font-family: "PingFang SC";

    }
    li{
        margin:0 auto;
        height: 100%;
        width: 33.333%;
        font-family: "PingFang SC";

    }
    .uncheckted{
        text-decoration: none;
        color: black;
        width: 100%;
        height: 100% ;
        line-height: 270%;
        font-size: 1.5rem;
        border-radius: 24px;
        font-family: "PingFang SC";
        text-align: center;
        display: block;
    }
    .checkted{
        text-decoration: none;
        color: white;
        width: 100%;
        font-family: "PingFang SC";
        height: 100% ;
        font-size: 1.5rem;
        line-height: 290%;
        border-radius: 24px;
        text-align: center;
        background-color: #4C90F5;
        display: block;
    }
</style>
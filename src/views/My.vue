<template>
    <div id="box1">
        <div style="width: 82%;padding-top: 6%;margin-left: auto;margin-right: auto">
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
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "My",
    }
</script>

<style scoped>

    .uncheckted{
        text-decoration: none;
        color: black;
        width: 100%;
        height: 100% ;
        line-height: 270%;
        border-radius: 1.5rem;
        text-align: center;
        display: block;
        font-size: 1.8rem;
    }
    .checkted{
        text-decoration: none;
        color: white;
        width: 100%;
        height: 100% ;
        line-height: 290%;
        border-radius: 24px;
        text-align: center;
        background-color: #4C90F5;
        display: block;
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

    #box1{
        width: 100%;
        height: 100%;
        background-color: #F6F5F4;
    }

</style>
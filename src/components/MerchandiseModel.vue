<template>
    <div style="height: 100%; width: 100%;">
        <div class="shareFirst">
            <img :src="sharImage" width="100%">
        </div>
        <div style="width: 94.5%; height: 2.63%; display: flex; margin: 1.8% auto;">
            <div style="font-size: 187.5%; color: #f33b28; ">
                ￥{{Earnprice}}
            </div>
            <div style="font-size: 175%; color: #5d5d5d; margin-left: 4.65%; text-decoration: line-through;">
                原价：￥{{originalPrice}}
            </div>
        </div>
        <div style="width: 94.5%; height: 3%; margin: 1.8% auto; ">
            <div class="merchant">
                {{merchantName}}
            </div>
            <div class="distribution">
                {{distribution}}
            </div>

        </div>
        <div class="message">
            {{merchantMessage}}
        </div>
        <div class="local">
            <div class="localPhoto">
                <img src="../assets/service/矢量智能对象.png" width="100%"/></div>
            <div v-text="merchantLocal"  class="localSize">

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "merchandiseModel"
    }
</script>

<style scoped>
    .shareFirst{
        width: 94.5%;
        height: 32%;
        margin: 1.8% auto;

    }
    .merchant{
        width: 80.37%;
        font-size: 175px;
        color: #323131;
    }
    .distribution{
        margin-left: 2.8%;
        font-size: 150%;color: #323131;
    }
    .message{
        width: 94.5%;
        font-size: 175%;
        color: #5d5d5d;
    }
    .local{
        width: 94.5%; height: 4.5%;
        margin: 1.8% auto;
    }
    .localPhoto{
        width: 4.513%;
        height: 65%;
        margin: auto 1.8%;

    }
    .localSize{
        font-size: 150%;
        color: #323131;
        margin: auto 1.8%;
    }
</style>
<template>
    <div>
        <div class="item2" v-for="moneyItem in moneyList" ><!--顶部-->
            <ol class="item1" @click="toDeatils">
                <li class="item3" v-text="moneyItem.moneyTime"></li>
                <li class="item3" v-text="moneyItem.moneyPrice"></li>
                <li class="item3" v-text="moneyItem.moneyDetails"></li>
            </ol>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WalletRouter2"
    }
</script>

<style scoped>

    .item3{
        flex: 1;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 150%;
    }
    .item1{
        display: flex;
        width: 92%;
        /*background-color: green;*/
        margin: 2.7% auto;
        list-style-type: none;

    }
    .item2{
        margin-top: 2.2%;
    }
</style>
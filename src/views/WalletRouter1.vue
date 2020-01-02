<template>
    <div>
        <div v-if="moneyOutList.length==0" style="text-align: center" >
            <div class="falseShow">
                <img src="../assets/service/没有订单.png"  width="100%"/>
                暂无订单
            </div>

        </div>
        <div class="item2" v-for="moneyItem in moneyOutList" v-if="moneyOutList!=null"><!--顶部-->
            <ol class="item1" >
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
        name: "WalletRouter1",
        data(){
          return{
              outMoney:null,
              moneyOutList:[
                  /*{'moneyTime':'我是大傻逼','moneyPrice':676676,'moneyDetails':'有多少'}*/
              ],
          }
        },
        created() {
            axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryOutMoney')
                .then(response => {
                    this.moneyOutList = response.data.data.moneyList;
                    this.outMoney = response.data.data.countMoney;
                    console.log(this.moneyOutList);
                })
                .catch(err => alert('网络错误'))
        }

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
    .falseShow{
        width: 54%;
        height: 30%;
        margin: 10% auto;
        font-size: 2rem;
        font-weight: bold;
    }

</style>
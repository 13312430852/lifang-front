<template>
    <div>
        <div v-if="moneyList.length==0" style="text-align: center" >
            <div class="falseShow">
                <img src="../assets/service/没有订单.png"  width="100%"/>
                暂无订单
            </div>
        </div>
        <el-table
                v-else
                :data="moneyList"
                stripe
                lazy>
            <el-table-column
                    class="daytime"
                    label="日期"
                    align="center">
                <template slot-scope="scope">
                    <span style="color: #409EFF" v-html="scope.row.moneyTime">
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    label="金额(元)"
                    align="center">
                <template slot-scope="scope">
                    <span style="color: #F56C6C">
                        -
                        <span v-html="scope.row.moneyPrice">
                        </span>
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    label="详情"
                    align="center">
                <template slot-scope="scope">
                    <span style="color: #606266">
                        <span v-html="scope.row.moneyDetails">
                        </span>
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "WalletRouter2",
        data(){
            return{
                countMoney:null,
                moneyList:[],
            }
        },
        created() {
            axios.get(process.env.VUE_APP_URL+ 'mineWallet/queryInMoney')
                .then(response => {
                    this.moneyList = response.data.data.moneyList;
                    for (let i = 0; i < this.moneyList.length; i++) {
                        this.moneyList[i].moneyTime =  this.moneyList[i].moneyTime.replace(/\s+|&nbsp;/ig, '<br/>');
                    }
                    this.countMoney = response.data.data.countMoney;
                    console.log(this.moneyList);
                    console.log(this.countMoney);
                })
                .catch(err => null)
        }
    }
</script>

<style scoped>

    .item1{
        display: flex;
        width: auto;
        flex-direction: row;
        /*background-color: green;*/
        margin: 2.7% auto;
        list-style-type: none;

    }
    .item2{
        margin-top: 2.2%;
    }
    .item3{
        text-align: center;
        flex: 3;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 150%;
    }
    .item4{
        text-align: center;
        flex: 2;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 150%;
    }
    .item5{
        text-align: center;
        flex: 3;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(110,110,110,1);
        font-size: 150%;
        overflow-x: hidden;
    }
    .falseShow{
        width: 54%;
        height: 30%;
        margin: 10% auto;
        font-size: 2rem;
        font-weight: bold;
    }
</style>

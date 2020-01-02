<template>
    <div class="joinAll">
        <div v-if="flag" style="height: 100%; width: 100%">
            <div class="firstImage">

                <img src="../assets/true.png"width="100%"/></div>
            <!--图片部分-->
            <div class="joinTex">
                <div class="joinTex1">
                    参团成功！
                </div>
                <div class="joinTex1">
                    当前参团人数：<span v-text="teamMsg.nowNumber"></span> / <span v-text="teamMsg.groupNumber"></span>
                </div>

            </div>
            <div class="joinBtn">
                <button class="joinBtn1" @click="toCheck">
                    查看参团详情
                </button>
            </div>

        </div>
        <div v-else style="height: 100%; width: 100%">
            <div class="firstImage">

                <img src="../assets/error.png"  width="100%"/></div>
            <!--图片部分-->
            <div class="joinTex">
                <div class="joinTex1">
                    参团失败！
                </div>
                <div class="joinTex1">
                    当前参团人数已满或者团购不存在！
                </div>
                <div class="joinTex1">
                    付款金额已退还到钱包
                </div>
            </div>
            <div class="joinBtn">
                <button class="joinBtn1" @click="toHome">
                    返回首页
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JoinResult",
        data(){
            return{
                state:1,
                teamMsg:null,
                flag: false,
                goodsId:null
            }
        },
        methods:{
            toCheck(){
                this.$router.push({path:'/teamResult/quit',query:{'goodId':this.goodsId,'teamMSG':this.teamMsg}});
            },
            toHome(){
                console.log('去首页');
                this.$router.push('/thehome')
            }
        },
        created() {

            this.flag = this.$route.query.flag;
            this.goodsId = this.$route.query.goodsId;
            console.log(this.flag);
            console.log(this.goodsId);

            axios.get(process.env.VUE_APP_URL + 'team/getMyTeam/' + this.goodsId)
                .then(re => {
                    // console.log(re.data);
                    this.teamMsg = re.data.data;
                }).catch(err => {
                    alert('网络错误');
            })
        }
    }
</script>

<style scoped>
    .joinAll{
        font-family:PingFang SC; font-weight:400;
    }
    .firstImage{
        width: 19.34%;
        height: 10.869%;
        margin: 5% auto;

    }
    .joinTex{
        font-size: 1.875rem;
        color: black;
    }
    .joinTex1{
        height: 23.98%;
        text-align: center;
        margin: 5% auto;
    }
    .joinBtn{
        height: 6.8%;
        width: 60%;
        margin:  8% auto;

    }
    .joinBtn1{
        width: 100%; height: 100%;
        color: #ffffff; font-size: 1.75rem;
        background-color: #4c90f5;
        border-radius: 5px; border-style: none;
    }
</style>
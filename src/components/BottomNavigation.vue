<template>
    <div id="foot">
        <div class="col-1" style="height: 100%;" @click="toHome">
            <div class="col-7"><div :class="[{'homeIcon':isHome,'homeIcon-no':!isHome}]"></div></div>
            <div :class="[{'coll-2':true,'font-color':isHome}]">首页</div>
        </div>
        <div class="col-1" style="height: 100%;" @click="toWallet">
            <div class="col-7"><div :class="[{'walletIcon':isWallet,'walletIcon-no':!isWallet}]"></div></div>
            <div :class="[{'coll-2':true,'font-color':isWallet}]">钱包</div>
        </div>
        <div class="col-1" style="height: 100%;" @click="toService">
            <div class="col-7"><div :class="[{'serviceIcon':isService,'serviceIcon-no':!isService}]"></div></div>
            <div :class="[{'coll-2':true,'font-color':isService}]">客服</div>
        </div>
        <div class="col-1" style="height: 100%;" @click="toMe">
            <div class="col-7"><div :class="[{'meIcon':isMe,'meIcon-no':!isMe}]"></div></div>
            <div :class="[{'coll-2':true,'font-color':isMe}]">我</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomNavigation",
        data(){
            return{
                isHome:true,
                isWallet:false,
                isService:false,
                isMe:false,
            }
        },
        methods:{
            toHome(){
                this.$router.push('/thehome');
                this.isHome=true,
                    this.isWallet=false,
                    this.isService=false,
                    this.isMe=false
            },
            toWallet(){
                this.$router.push('/wallet');
                this.isHome=false,
                    this.isWallet=true,
                    this.isService=false,
                    this.isMe=false
            },
            toService(){
                this.$router.push('/service');
                this.isHome=false,
                    this.isWallet=false,
                    this.isService=true,
                    this.isMe=false
            },
            toMe(){
                this.$router.push('/Order/AllOrder');
                this.isHome=false,
                    this.isWallet=false,
                    this.isService=false,
                    this.isMe=true
            }
        }
    }
</script>

<style scoped>
    #foot{
        height: 9.4%;
        /*height: 88px;*/
        width: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0px -1px 10px 0px rgba(0,0,2,0.3);
        position: absolute;
        bottom: 0;
        display: flex;
        z-index: 999;
    }
    .col-1{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
    }
    .col-7{
        flex: 8;
        /*background: black;*/
        width: 100%;
        display: flex;
        justify-content: center;
        /*height: 76.2%;*/
    }
    .coll-2{
        flex: 2;
        text-align: center;
        font-size: 1.5rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(20,20,20,1);
    }
    .font-color{
        color: #4c90f5;
    }
    .homeIcon-no{
        background-image: url("../assets/bottom/首页.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .homeIcon{
        background-image: url("../assets/bottom/首页-选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .walletIcon-no{
        background-image: url("../assets/bottom/钱包-01.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 74% 74%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .walletIcon{
        background-image: url("../assets/bottom/钱包-选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 74% 74%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .serviceIcon-no{
        background-image: url("../assets/bottom/客服.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 78% 86%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .serviceIcon{
        background-image: url("../assets/bottom/客服 选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 78% 86%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .meIcon-no{
        background-image: url("../assets/bottom/我.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 64% 94%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .meIcon{
        background-image: url("../assets/bottom/我 -选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 44%;
        background-size: 64% 94%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
</style>
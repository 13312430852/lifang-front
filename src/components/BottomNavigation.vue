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
                theUrl:null,
                isHome : false,
                isWallet:false,
                isService:false,
                isMe:false
            }
        },

        created(){
            this.judggUrl();

        },
        methods:{
            judggUrl(){
                this.theUrl = window.location.pathname;
                if(this.theUrl.indexOf("/Order") != -1) {
                    this.isHome=false;
                    this.isWallet=false;
                    this.isService=false;
                    this.isMe=true;
                }
                else if (this.theUrl.indexOf("/start") != -1){
                    this.isHome=true;
                    this.isWallet=false;
                    this.isService=false;
                    this.isMe=false;
                }
                else if (this.theUrl.indexOf("/service") != -1){
                    this.isHome=false;
                    this.isWallet=false;
                    this.isService=true;
                    this.isMe=false;
                }else if (this.theUrl.indexOf("/wallet") != -1){
                    this.isHome=false;
                    this.isWallet=true;
                    this.isService=false;
                    this.isMe=false;
                }else {
                    this.isHome=true;
                    this.isWallet=false;
                    this.isService=false;
                    this.isMe=false;
                }

            },
            toHome(){
                this.$router.push('/thehome/start');
                this.isHome=true,
                    this.isWallet=false,
                    this.isService=false,
                    this.isMe=false
            },
            toWallet(){
                this.$router.push('/thehome/wallet');
                this.isHome=false,
                    this.isWallet=true,
                    this.isService=false,
                    this.isMe=false
            },
            toService(){
                this.$router.push('/thehome/service');
                this.isHome=false,
                    this.isWallet=false,
                    this.isService=true,
                    this.isMe=false
            },
            toMe(){
                this.$router.push('/thehome/Order/My/AllOrder');
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
        box-shadow:0px -1px 10px 0px rgba(0,0,2,0.1);
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
        font-size: 14px;
        font-family:PingFang SC;
        font-weight:200;
        /*margin-top: 5px;*/
        color:rgba(20,20,20,1);
    }
    .font-color{
        color: #4c90f5;
    }
    .homeIcon-no{
        background-image: url("../assets/bottonmIcon/首页-未选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .homeIcon{
        background-image: url("../assets/bottonmIcon/首页.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .walletIcon-no{
        background-image: url("../assets/bottonmIcon/钱包未选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .walletIcon{
        background-image: url("../assets/bottonmIcon/钱包.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .serviceIcon-no{
        background-image: url("../assets/bottonmIcon/客服未选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .serviceIcon{
        background-image: url("../assets/bottonmIcon/客服.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .meIcon-no{
        background-image: url("../assets/bottonmIcon/我的-未选中.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .meIcon{
        background-image: url("../assets/bottonmIcon/我的.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 40px;
        width: 40px;
        background-size: 80% 80%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
</style>
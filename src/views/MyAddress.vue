<template>
    <div style="width: 100%;height: 100%;padding-top: 3%">
        <div :class="{'adrressBox':! isNullAddrress,'borderNotRadius':isNullAddrress}">
            <div class="tips"><span class="theTitle">收货地址</span></div>
            <div class="butBox">
                <button class="button" @click="addMyAddress">
                    新增
                </button>
            </div>
        </div>
        <div class="line"></div>

        <div class="haveAddressBox" v-if="address == null || address.length == 0">
                <div class="noContent">        <!--空页-->
                    <div style="flex: 2;"></div>
                    <div style="flex: 3;display: flex;align-items: flex-end"><span class="tipsFont">您还未添加地址哟。</span></div>
                    <div style="flex: 2"></div>
                </div>
        </div>

        <div class="haveAddressBox" v-if="address.length > 0">
            <div class="itemBox">
                <div
                        v-for="(item,index) in address"
                        :class="{'addressList':true, 'addressListBorder':item.isOption,move:candelete.addressId==item.addressId}"
                        @touchstart="touchStart(item)"
                        @touchend="touchEnd(item,index)"
                        ref="addressList"
                >

                    <div class="addressMesBox" @click="toUpdate(item)">
                        <div class="col-1 nameAndNum">
                            <span class="name" v-text="item.addressName">况某人</span>
                            <span class="number" v-text="item.addressTel">16626374892</span>
                        </div>
                        <div class="col-2">
                            <div class="addressDetail" v-text="item.rcAddress">
                                回家会发生手机号福建省手机号发送福建股东会是个是否关函数的符合施工方师范设计费后视镜福建师范就是
                            </div>
                        </div>
                    </div>
                    <div class="option" v-if="item.isOption"><span @click="deleteAdd(item.addressId)">删除</span></div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import MyPage from "../components/MyPage";

    export default {
        name: "MyAddress",
        components:{
            MyPage
        },
        data(){
            return{
                a:true,
                willOption:false,
                userMsg:{userId:1},
                address:[],
                clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
                candelete: {},
            }
        },
        methods:{
            touchStart(item) {
                let touchs = event.changedTouches[0];
                // 记录开始滑动的鼠标位置
                this.clientNum.x1 = touchs.pageX;
                //this.candelete = {};
            },
            touchEnd(item,i) {
                let touchs = event.changedTouches[0];
                // 记录结束滑动的鼠标位置
                this.clientNum.x2 = touchs.pageX;
                this.candelete = {};
                // 判断滑动距离大于50，判定为滑动成功，否则失败
                if (
                    this.clientNum.x2 < this.clientNum.x1 &&
                    Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 20
                ) {
                    event.preventDefault();
                    //this.$refs.addressList.style.transform  = 'translateX('+(-Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2))+'px)';
                    this.candelete = item;
                    item.isOption = true;
                    for(let j=0;j<this.address.length;j++){
                        if(j != i) this.$set(this.address[j],'isOption',false);
                    }
                } else if (
                    this.clientNum.x2 > this.clientNum.x1 &&
                    Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
                ) {
                    event.preventDefault();
                    this.candelete = {};
                    // item.isOption = false;
                    this.address.forEach(it => {
                        this.$set(it,'isOption',false);
                    })
                }
            },
            deleteAdd(addressID){
                //请求删除
                axios.delete(process.env.VUE_APP_URL + 'address/deteleByAddressId/' + addressID)
                    .then(re => {
                        axios.get(process.env.VUE_APP_URL + 'address/findAddressById')
                            .then(re => {
                                this.address = re.data.data;
                                console.log(this.address);
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err))
            },
            toUpdate(address){
                console.log("toUpdateAddress");
                console.log(address);
                this.$router.push({path:'/updateAd',query:address});
            },
            addMyAddress(){
                this.$router.push('/addMyAddress');
            },
        },
        computed:{
            isNullAddrress(){
                if(this.address.length <= 0) return false;  //没有地址
                else return true;               //有地址
            }
        },
        created() {
            console.log(process.env.VUE_APP_URL);

            //获取用户的基本信息

            axios.get(process.env.VUE_APP_URL + 'address/findAddressById')
                .then(re => {
                    this.address = re.data.data;
                    if(this.address.length > 0){
                        this.address.forEach(item =>{
                            this.$set(item,'isOption',false)
                        })
                    }
                    console.log(this.address);
                })
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>


    .tipsFont{
        color: #d8d8d8;
        font-size: 2rem;
    }
    .noContent{
        width: 100%;
        height: 100%;
        background-image: url("../assets/空页提示.png");
        /*background-color: red;*/
        background-repeat:no-repeat;
        background-position: center 27%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }



    .noTouch{
        width: 0;
    }
    .isToch{
        width: 60px;
    }
    .itemBox{
        border-radius: 0.625rem;
        width: 90%;
        /*overflow-x: hidden;*/
        margin-left: 5%;
        background-color: rgb(246,245,244);
    }
    .addressList.move {
        transform: translateX(-60px); /*滑动后x轴位移-60px,使其可见*/
    }
    .line{
        height: 1px;
        width: 80%;
        /*background-color: red;*/
        margin-left:auto;
        margin-right:auto;
        z-index: 999;
    }
    .deleteBut{
        margin-top: 14%;
        width: 98%;
        height: 60%;
        background-color: #f33b28;
        border-style: none;
        border-radius: .15rem;
        color: whitesmoke;
        border-style: none;
        font-size: 1.75rem;
        font-family:PingFang SC;
    }
    .updataBut{
        margin-top: 14%;
        width: 98%;
        height: 60%;
        background-color: #4C90F5;
        border-style: none;
        border-radius: .15rem;
        color: whitesmoke;
        border-style: none;
        font-size: 1.75rem;
        font-family:PingFang SC;
    }
    .col_1{
        flex: 1;
        display: flex;
        /*justify-content: center;*/
        align-content: center;
        width: 100%;
    }
    .theTitle{
        display: block;
        margin-top: 10%;
        margin-left: 8%;
        color: #141414;
        font-size: 2rem;
        font-family:PingFang SC;
        font-weight: bold;
    }
    .addressDetail{
        margin-left: 4%;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(20,20,20,0.5);
        font-size: 1.8rem;
        line-height: 200%;
        overflow: hidden;
        border-bottom-right-radius: 0.625rem;
        width: 80%;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .number{
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(20,20,20,1);
        font-size: 1.8rem;
        margin-left: 4%;
    }
    .name{
        margin-left: 5%;
        font-family:PingFang SC;
        font-weight:400;
        color:#141414;
        font-size: 1.8rem;
        border-top-right-radius:0.625rem;
    }
    .col-2{
        flex: 2;
    }
    .nameAndNum{
        display: flex;
        align-items: center;
        border-top-left-radius:0.625rem;
    }
    .col-1{
        flex: 1;
    }
    .option span{
        line-height: 580%;
        font-size:1.63rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(20,20,20,1);
    }

    .option{
        flex: 2;
        height: 100%;
        border-top-right-radius:0.625rem;
        border-bottom-right-radius:0.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #f6f5f4;
        box-shadow: 0px 3px 0px 0px #E9E9E9;
        position: absolute;
        top: 0;
        right: -1px;
        z-index: 3;
        width: 60px;
        height: 100%;
        text-align: center;
        color: #fff;
        background-color: #ff5b45;
        transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
    }
    .addressMesBox{
        flex: 7;
        height: 100%;
        border-top-left-radius:0.625rem;
        border-bottom-left-radius:0.625rem;
        display: flex;
        flex-direction: column;
    }
    .haveAddressBox{
        height: 43%;
        width: 92%;
        background-color: #f6f5f4;
        margin-right: auto;
        margin-left: auto;
        padding-top: 5%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow-x: hidden;
        overflow-y: scroll!important;
        -webkit-overflow-scrolling: touch;

    }
    ul{
        width: 90%;
        overflow: hidden;
    }
    .addressListBorder{
        border-top-right-radius:0!important;
       border-bottom-right-radius:0!important;
        box-shadow: 0 0 5px 3px #E0E0E0;
    }
    .addressList{
        height: calc(9vh + 1px);
        background-color: rgba(254,254,254,1);
        margin: 0 auto 4% auto;
        border-radius: 0.625rem;
        display: flex;
        box-shadow: 0 0 5px 3px #E0E0E0;
        padding-top: 10px;
        position: relative;
        transform: translateX(0px);
        transition: all .3s; /*滑动效果更生动*/
    }
    .button{
        margin-top: 5%;
        margin-right: 4%;
        width: 29.5%;
        height: 58%;
        border-radius: 0.4rem;
        background-color: #4C90F5;
        color: whitesmoke;
        border-style: none;
        font-size: 1.75rem;
        font-family:PingFang SC;
        float: right;
    }
    .butBox{
        float: right;
        height: 100%;
        width: 59%;
    }
    .tips{

        float: left;
        display: flex;
        align-content: center;
        width: 40%;
    }
    .adrressBox{
        width: 92%;
        height: 7.5vh;
        background-color:#f6f5f4;
        margin: 0 auto;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .borderNotRadius{
        width: 92%;
        height: 7.5vh;
        background-color:#f6f5f4;
        margin: 0 auto;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }

</style>
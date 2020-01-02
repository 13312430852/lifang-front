<template>
    <div style="width: 100%;height: 100%;padding-top: 3%">
        <div :class="{'adrressBox':! isNullAddrress,'borderNotRadius':isNullAddrress}">
            <div class="tips"><span class="theTitle">我的收获地址</span></div>
            <div class="butBox">
                <button class="button" @click="addMyAddress">
                    新增
                </button>
            </div>
        </div>
        <div class="haveAddressBox" v-if="address.length > 0">
            <div class="addressList" v-for="item in address">
                <div class="addressMesBox">
                    <div class="col-1 nameAndNum">
                        <span class="name" v-text="item.addressName">况某人</span>
                        <span class="number" v-text="item.addressTel">16626374892</span>
                    </div>
                    <div class="col-2">
                        <div class="addressDetail" v-text="item.rcAddress">回家会发生手机号福建省手机号发送福建股东会是个是否关函数的符合施工方师范设计费后视镜福建师范就是</div>
                    </div>
                </div>
                <div class="option" v-if="!willOption"><span @click="option">编辑</span></div>
                <div class="option" v-if="willOption">
                    <div class="col_1"><button class="updataBut" @click="toUpdate(item)">修改</button></div>
                    <div class="col_1"><button class="deleteBut" @click="deleteAdd(item.addressId)">删除</button></div>
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
                willOption:false,
                userMsg:{userId:1},

                address:[],
            }
        },
        methods:{
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
            option(){
                this.willOption = true;
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
                    console.log(this.address);
                })
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>
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
        margin-left: 4%;
        color: #141414;
        font-size: 2rem;
        font-family:PingFang SC;
    }
    .addressDetail{
        margin-left: 4%;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(20,20,20,0.5);
        font-size: 1.8rem;
        line-height: 200%;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
        height: 50%;
        width: 92%;
        background-color: #f6f5f4;
        margin-right: auto;
        margin-left: auto;
        /*margin-top: 10%;*/
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        overflow-x: scroll;
        overflow-y: scroll!important;
        -webkit-overflow-scrolling: touch;

    }

    .addressList{
        /*margin-top: 4%;*/
        height: calc(31% + 1px);

        width: 89.6%;
        background-color: rgba(254,254,254,1);
        margin: 0 auto 4% auto;
        border-radius: 0.625rem;
        display: flex;
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
        border-radius: 12px;
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
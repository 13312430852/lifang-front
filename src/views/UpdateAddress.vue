<template>
    <div style="height: 100%;width: 100%; ">
        <div class="headline_add-address">修改收货地址</div>
        <div class="div_content">
            <div class="list1">
                <div class="makecenter">
                    <div style=" width: 20%; ">
                        姓名：
                    </div>
                    <input type="text" placeholder="请输入收货人姓名" class="text" v-model="address.addressName">
                </div>
                <div class="addHr">

                </div>
            </div>
            <div class="list1">
                <div class="makecenter" >
                    <div style="width: 20%; ">
                    联系电话：
                    </div>
                <input type="tel" placeholder="请输入收货人联系电话" maxlength="11" minlength="11"
                                                               class="text" v-model="address.addressTel">
            </div>
                <div class="addHr">

                </div>
            </div>
            <div class="list2">
                <div class="list2-1" >
                    <div class="address_name" style="  width: 20%; ">
                        地址:
                    </div>
                    <textarea placeholder="请输入收货人地址" @input="gengxin" class="textarea1" v-model="address.rcAddress" >

                    </textarea>
                </div>

            </div>
            <div class="list1" style="padding-top: 8%">
                <div class="makecenter">
                    设为默认地址
                    <div class="switch-btn">
                        <input
                                type="checkbox"
                                class="hidden-checkbox"
                                name="checkbox"
                                v-model="defaultAddress123"
                        />
                        <span class="switch-area"></span>
                        <span class="switch-toggle"></span>
                    </div>
                </div>
            </div>

            <div class="btn_position">
                <button type="submit" class="btn2" @click="save">确认修改</button>
            </div>

        </div>
    </div>
</template>

<script>
    // import { AxiosInstance as axios } from "axios";

    import ElementUI from "element-ui";

    export default {
        name: "add_address",

        data() {
            return {
                defaultAddress123:false,
                address_old:null,     //要修改的地址id
                userMsg:null,       //用户基本信息
                address: {
                    addressId:'',
                    addressName: "",
                    addressTel: null,
                    rcAddress: "",
                    defaultAddress:0,
                },
            };
        },
        watch:{
            defaultAddress123(newValue){
                if(newValue) this.address.defaultAddress = 1;
                else if (!newValue) this.address.defaultAddress = 0;
            }
        },
        methods: {
            save() {
                let address = this.address;
                console.log(address);
                axios.put(
                    process.env.VUE_APP_URL + "address/updateAddress",
                    JSON.parse(JSON.stringify(address))
                )
                    .then(response => {
                        if (response.data.code != 400){
                            this.$router.push("/thehome/Order/myaddress");
                        }else {
                            ElementUI.Message.error("地址修改失败！");
                        }
                        console.log(response.data);
                    });
            },
            gengxin(e){
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }

        },
        created() {
            this.address = this.$route.query;      //获取要修改的地址ID
            console.log("address_old");
            console.log(this.address);
       /*     //获取用户的基本信息
            axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
            axios.defaults.headers.common["userType"] = 'MINE';
            axios.get('http://50558287.ngrok.io/mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    this.userMsg = re.data.data;
                })
                .catch(err => alert('未请求到用户基本数据错误为：'+err))*/
        }
    };
</script>

<style scoped>
    .address_name{
        margin:auto 0;
    }
    .list2-1{
        background-color: white;
        height: auto;
        margin-left: 5%;
        width: 100%;
        font-size: 1.75rem;
        display: flex;
    }
    .addHr{
        background-color:#b8b8b8;
        height: 1px;
        width: 92%;
        margin: 0 auto;
    }
    .saveFont{
        color: white!important;
    }
    .saveFont:link{
        text-decoration:none;

    }

    .headline_add-address{
        height: 6.8%;
        width: 100%;
        background-color: #ECECEC;
        text-align: center;
        font-size: 1.875rem;
        font-weight:400;
        color:rgba(20,20,20,1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div_content{
        width: 100%;
        height: 93.2%;
        background:#ECECEC;
    }
    .text{
        height: 50%;
        width: 60%;
        margin: auto 2%;
        border-style: none;
        outline: none;
    }
    .list1{
        height: 8%;
        width: 100%;
        list-style-type: none;
        background:white;
        font-size: 1.5rem;
    }
    .list2{
        height: auto;
        width: 100%;
        background: white;
        font-size: 1.75rem;
        display: flex;

    }
    .makecenter{
        height: 80%;
        margin-left: 5%;
        width: 100%;
        font-size: 1.75rem;
        display: flex;
        align-items: center;
    }
    .textarea1{
        width: 60%;
        min-height: 40px;
        outline: none;
        margin: 4% 0% 2% 2%;
        border-radius: 2px;

    }
    .btn_position{
        display: flex;
        text-align: center;
        margin-top: 5%;
        height: 15%;
    }
    .btn2{
        border-style: none;
        justify-content: center;
        width: 86.7%;
        height: 47%;
        background:rgba(76,144,245,1);
        border-radius:.8rem;
        margin-top: 6.2%;
        margin-left: 6.65%;
    }
    .switch-btn{
        width: 45px;
        height: 25px;
        position: relative;
        top: 1px;
        margin-left: 50%;
    }
    .hidden-checkbox,
    .switch-area,
    .switch-toggle{
        position: absolute;
        top: 0;
        left: 0;
    }
    .hidden-checkbox{
        width: 45px;
        height: 25px;
        opacity: 0;
        z-index: 10;
        cursor: pointer;
    }
    .switch-area{
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-color: #B3B3B3;
    }
    .switch-toggle{
        width: 25px;
        height: 25px;
        border: 1px solid #B3B3B3;
        border-radius: 50%;
        background-color: #fff;
    }
    .hidden-checkbox:checked ~ .switch-area{
        background-color: #4084F1;
    }
    .hidden-checkbox:checked ~ .switch-toggle{
        border: 1px solid #4084F1;
        left: 40%;
    }
    .switch-area,
    .switch-toggle{
        -webkit-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        transition: All 0.3s ease;
    }
</style>
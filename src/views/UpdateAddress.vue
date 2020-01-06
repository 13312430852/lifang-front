<template>
    <div style="height: 100%;width: 100%; font-family: 'PingFang SC'">
        <div class="headline_add-address">添加收货地址</div>
        <div class="div_content">
            <div class="baseMSG">
                <div class="makecenter" style="border-top-left-radius: 0.8rem;border-top-right-radius: 0.8rem;">
                    <span class="col-1">
                          收货人:
                    </span>
                    <input type="text" placeholder="请输入您的姓名" class="text col-3" v-model="address.addressName"/>

                </div>
                <div class="line"></div>
                <div class="makecenter" style="border-bottom-left-radius: 0.8rem;border-bottom-right-radius: 0.8rem;">
                     <span class="col-1">
                         手机号码:
                     </span>
                    <input type="tel" class="text col-3" maxlength="11" minlength="11" placeholder="请输入11位手机号"
                           v-model="address.addressTel"/>
                </div>
            </div>

            <div class="address">
                <div class="addArea col-2">
                    <div class="col-1 addressTitle">所在地区:</div>
                    <textarea class="textarea1 col-3" placeholder="请输入您的正确地址" v-model="address.rcAddress"
                              @input="zishiying"></textarea>
                </div>

                <div class="col-1 makecenter optiongToDefault">
                    <div class="col-1 addressTitle">设为默认地址</div>
                    <div></div>
                    <div class="switch-btn">
                        <input type="checkbox" class="hidden-checkbox" name="checkbox" v-model="defaultAddress123"/>
                        <span class="switch-area"></span>
                        <span class="switch-toggle"></span>
                    </div>
                </div>

            </div>

            <div class="btn_position">
                <button type="submit" class="btn2" @click="save"><span class="saveFont">保存</span></button>
            </div>
        </div>
    </div>
</template>

<script>

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
            zishiying(e){
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }

        },
        created() {
            this.address = this.$route.query;      //获取要修改的地址ID
            console.log("address_old");
            console.log(this.address);
        }
    };
</script>

<style scoped>
    .optiongToDefault{
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
    }

    .addressTitle{
        font-size: 1.8rem;
        margin-top: 6px;
    }
    .col-2{
        flex: 2;
    }
    .address{
        width: 92%;
        margin: 8% auto 0 auto;
        height: 26%;
        background-color: white;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        font-size: 1.8rem;
        box-shadow:0px 0px 13px 0px #d4d4d4;

    }
    .col-1{
        flex: 1;
        /*background-color: red;*/
        text-align: center;
    }
    .col-3{
        flex: 3;

    }
    .line{
        height: 1px;
        width: 90%;
        margin: 0 auto;
        background-color: #bbbbbb;
        clear: both;
    }
    .baseMSG{
        box-shadow:0px 0px 13px 0px #d4d4d4;
        margin: 0 auto;
        width: 92%;
        height: 20%;
        border-radius: 0.8rem;
        background-color: white;
    }
    .saveFont{
        color: white!important;
    }
    .saveFont:link{
        text-decoration:none;

    }
    .headline_add-address {
        height: 6.8%;
        width: 100%;
        background-color: #ececec;
        text-align: center;
        font-size: 1.875rem;
        font-weight: 400;
        color: rgba(20, 20, 20, 1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div_content {
        width: 100%;
        height: 93.2%;
        background: #ececec;
    }
    .text {
        height: 50%;
        width: 60%;
        font-size: 1.75rem;
        color: #8f8f8f;
        margin : auto 2%;
        outline: none;
        border-style: none;
    }

    .makecenter {
        height: 50%;
        width: 100%;
        background: white;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
    }
    .textarea1 {

        border: 1px solid #e9e9e9;
        height: 70%;
        padding-left: 2%;
        padding-top: 1%;
        max-height: 70%;
        margin-top: 2.5%;
        margin-right: 4%;
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
    .switch-btn {
        width: 45px;
        height: 25px;
        position: relative;
        top: 1px;
        margin-left: 50%;
        margin-right: 5%;
    }
    .hidden-checkbox,
    .switch-area,
    .switch-toggle {
        position: absolute;
        top: 0;
        left: 0;
    }
    .hidden-checkbox {
        width: 45px;
        height: 25px;
        opacity: 0;
        z-index: 10;
        cursor: pointer;
    }
    .switch-area {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-color: #b3b3b3;
    }
    .switch-toggle {
        width: 25px;
        height: 25px;
        border: 1px solid #b3b3b3;
        border-radius: 50%;
        background-color: #fff;
    }
    .hidden-checkbox:checked ~ .switch-area {
        background-color: #4084f1;
    }
    .hidden-checkbox:checked ~ .switch-toggle {
        border: 1px solid #4084f1;
        left: 40%;
    }
    .switch-area,
    .switch-toggle {
        -webkit-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        transition: All 0.3s ease;
    }
    .addUnderline{
        background-color:#b8b8b8;
        height: 1px;
        width: 92%;
        margin: 1% auto;
    }
    .addArea{
        display: flex;
    }
</style>
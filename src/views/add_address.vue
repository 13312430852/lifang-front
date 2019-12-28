<template>
    <div style="height: 100%;width: 100%; ">
        <div class="headline_add-address">添加收货地址</div>
        <div class="div_content">
            <div class="list1">
                <div class="makecenter">
                    用户ID:
                    <span v-text="address.userId" style="margin-left: 4%;font-size: 1.75rem"></span>
                </div>
            </div>
            <div class="list1">
                <div class="makecenter">
                    收货人:
                    <input
                            type="text"
                            placeholder="请输入您的姓名"
                            class="text"
                            style="font-size: 1.75rem"
                            v-model="address.addressName"
                    />
                </div>
            </div>
            <div class="list1">
                <div class="makecenter">
                    手机号码:
                    <input
                            type="text"
                            class="text"
                            maxlength="11"
                            minlength="11"
                            placeholder="请输入11位手机号"
                            style="font-size: 1.75rem"
                            v-model="address.addressTel"
                    />
                </div>
            </div>
            <div class="list2">
                <div class="makecenter">
                    所在地区:
                    <textarea
                            class="textarea1"
                            placeholder="请输入您的正确地址"
                            style="font-size: 1.75rem"
                            v-model="address.rcAddress"
                    ></textarea>
                </div>
            </div>

            <div class="list1">
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
                <button type="submit" class="btn2" @click="save"><router-link to="/address/addSuccess" class="saveFont">保存</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
    // import { AxiosInstance as axios } from "axios";

    export default {
        name: "add_address",

        data() {
            return {
                defaultAddress123:false,
                address: {
                    userId: null,
                    addressName: null,
                    addressTel: null,
                    rcAddress: null,
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
            save: function() {
                let address = this.address;
                axios.post("http://39de9ecd.ngrok.io/address/addAddress",JSON.parse(JSON.stringify(address))).then(response => {
                        console.log(response.data);
                    }).catch(err => alert(err));
            },

        }
    };
</script>

<style scoped>
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
    }
    .list1 {
        height: 7.3%;
        width: 100%;
        list-style-type: none;
        background: white;
        font-size: 1.75rem;
    }
    .list2 {
        height: 24%;
        width: 100%;
        background: white;
        font-size: 1.75rem;
        display: flex;
        align-items: center;
    }
    .makecenter {
        height: 100%;
        margin-left: 5%;
        width: 100%;
        background: white;
        font-size: 1.75rem;
        display: flex;
        align-items: center;
    }
    .textarea1 {
        width: 50%;
        height: 70%;
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
        margin-left: 55%;
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
</style>
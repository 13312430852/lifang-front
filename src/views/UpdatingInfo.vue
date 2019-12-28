<template>
    <div style="width: 100%;height: 100%">
        <div class="infobox">
            <div>
                <ul>
                    <li  >
                        用户名：<span v-text="user.user_name"></span>
                    </li>
                    <li>ID：<span v-text="user.user_id"></span></li>
                    <li>用户性别：<span v-text="user.user_sex"></span></li>
                    <li>手机：<input type="text" v-model="tel" maxlength="11" minlength="11" >
                        <img src="../assets/修 改 (1) 拷贝 3.png" height="27" width="25"style="margin-left: 20%"/></li>
                    <li>注册时间：<span v-text="user.user_regist_time"></span></li>
                </ul></div>
        </div>
        <div class="divbottom">
            <button class="btnUD" @click="save"><router-link to='/updatesuccess'> 确认修改</router-link></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdatingInfo",
        tel:123,

        data(){
            return {
                user:{
                    'user_name':'铁憨憨',
                    'user_id':'007',
                    'user_sex':'男',
                    'user_tel':null,
                    'user_regist_time':'2019-8-15'
                },
            }
        },
        methods:{
            save: function() {

                this.axios.post(
                    "http://localhost:8090/address/addAddress",
                    {'Tel':this.tel}
                )
                    .then(response => {
                        console.log(response.data);
                    });
            },

        },
        created() {
            axios.get('http://50558287.ngrok.io/mine/getUserInfo::'+userID).then(re => this.user = re.data.data).catch(err=> console.log(err));
        }
    }
</script>

<style scoped>
    .infobox{
        width: 92%;
        height: 64%;
        background:rgba(246,245,244,1);
        border-radius:1.5%;
        margin-top: 3%;
        margin-left: 4%;
    }
    li{
        font-size: 1.75rem;
        font-weight:400;
        color:rgba(20,20,20,1);
        margin-top: 10%;
        margin-left: 3.2%;
    }
    ul li{
        list-style-type: none;
    }

    .divbottom{
        width:100%;
        height: 36%;
    }
    .btnUD{
        width: 86.7%;
        height: 15%;
        background:rgba(76,144,245,1);
        border-radius:4.8%;
        margin-top: 6.2%;
        margin-left: 6.65%;
    }
</style>
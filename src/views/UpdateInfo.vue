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
                    <li>手机：<input type="text" :value="user.user_tel" maxlength="11" minlength="11" >
                    </li>
                    <li>注册时间：<span v-text="user.user_regist_time"></span></li>
                </ul></div>
        </div>
        <div class="divbottom">
            <button class="btnUD"><router-link to='update/updating' >点击修改</router-link></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateInfo",

        data() {
            return {
                userMsg:null,
                user: {
                    'user_name': '铁憨憨',
                    'user_id': '007',
                    'user_sex': '男',
                    'user_tel': '82082088201',
                    'user_regist_time': '2019-8-15'
                },
            }
        },
        created() {
            //获取用户的基本信息
           /* axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
            axios.defaults.headers.common["userType"] = 'MINE';
            axios.get('http://50558287.ngrok.io/mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    this.userMsg = re.data.data;
                })
                .catch(err => alert('未请求到用户基本数据错误为：'+err))*/

            axios.get('http://50558287.ngrok.io/mine/getUserInfo'+user.user_id).then(re => this.user = re.data.data).catch(err=> console.log(err));
        }}
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
        font-size:1.75rem;
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
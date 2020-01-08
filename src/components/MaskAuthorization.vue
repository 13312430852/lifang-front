<template>
    <div class="mask">
		<transition name="fade">
		    <loading v-if="isLoading"></loading>
		</transition>
        <div class="ensure">
            <div class="ensure_back">
                <div class="loginTitle">
                    <span class="loginAuth">登录授权</span>
                    <img src="../assets/login_close.png" class="loginImage" @click="cancelIn"/>
                </div>

                <div class="loginIconBox">
                    <img src="../assets/logo.png" class="loginIcon" />
                </div>
                <div class="loginWelcome">
                    <span> 爱立方，爱生活</span>
                </div>

            </div>

            <div class="toButton">
                <div class="buttonContent">
                    <span class="AuthContent">授权<span style="font-weight: bold;margin: 0 2px;">立方生活</span>获取以下信息提供服务</span>
                    <ul style="list-style-type: circle;font-size: 10px;margin:5px;color: #b8b8b8">
                        <li>获取您的公开信息(昵称、头像、性别等)</li>
                    </ul>
                    <div style="border:0px black solid;height: 30px;display: flex;align-items: center;padding-left: 9px">
                        <span style="font-size: 12px;border: 0px black solid;display: block;">同意<a href="">《用户授权协议》</a> </span>
                    </div>

                </div>
<!--                <div class="col-1 buttonBox"><button class="button1" @click="cancelIn">取消</button></div>-->
                <div class="buttonBox"><button class="button" @click="isSure">确认</button></div>
            </div>
        </div>
    </div>
</template>

<script>
	import Loading from "./loading";

    export default {
		components: {
			Loading
		},
        name: "MaskAuthorization",
        data(){
            return{
                // showThisComponent:2,
                url:null,
                ip:process.env.VUE_APP_URL,
				isLoading: true
            }
        },
        methods:{
            cancelIn(){
                window.location.href = 'http://localhost:8080/thehome/?token=ajdhj';
            },
            isSure(){
                /*当用户点击了确认后，跳转至授权链接*/
                window.location.href = this.url;   //跳转至外部 url
                this.isLoading = true;
            },
            getURL(){
                axios.get(process.env.VUE_APP_URL + 'wechat/login')  //获取授权链接
                    .then(re => {
                        this.url = re.data;
                        this.isLoading = false;
                    }).catch(err=>{
                        this.getURL();
                    });
            }
        },
        created() {
            console.log(this.ip);
            this.getURL();
        }
    }
</script>

<style scoped>
    .AuthContent{
        border: 0px black solid;
        font-size: 12px;
        width: 100%;
        height: auto;

    }

    .loginIconBox{
        width: auto;
        border: 0px black solid;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loginIcon{
        display: block;
        border: 0px black solid;
        height:50px;
        width:50px;
    }
    .loginTitle{
        border: 0px red solid;
        display: flex;
        flex-direction:row;
        align-items: center;
        width: auto;
        height: 20%;

    }
    .loginAuth{
        display: block;
        border: 0px black solid;
        flex: 3;
        text-align: center;
        margin-left: 27px;
        font-size: 14px;
        color: white;
    }
    .loginImage{
        height:24px;
        width:24px;
        border: 0px red solid;
        display: block;float: right;
        margin-right: 5px;
        color: white;
    }
    .loginWelcome{
        border: 0px rebeccapurple solid;
        width: auto;
        height: 30px;
        text-align: center;
        font-size: 12px;
        color: white;
        padding-top: 10px;
    }
    .buttonBox{
        border: 0px red solid;
        display: flex;
        flex:3;
        width: auto;
        height: 20%;
        justify-content: center;
        align-items: center;
    }
    .buttonContent{
        border: 0px saddlebrown solid;
        text-align: center;
        padding: 6px 3px;
        flex: 4;
    }
    .button1{
        width: 50%;
        height: 52%;
        border-radius: 3px;
        font-size: 1.75rem;
        color: darkgrey;
        border: 1px solid gray;

    }
    .button{
        display: block;
        border-style: none;
        background-color: #409EFF;
        width: 80%;
        height: 70%;
        border-radius: 6px;
        font-size: 1.75rem;
        color: white;
        margin-bottom: 10px;
    }
    .col-1{
        flex: 1;
    }
    .toButton{
        border: 0px blue solid;
        width: 100%;
        height: 48%;
        /*background-color: #343434;*/
        display: flex;
        flex-direction: column;
    }
    .tips1{
        border: 1px black solid;
        font-size: 1.9rem;
        margin-left: 30%;

    }
    .tips{
        border: 1px black solid;
        font-size: 1.9rem;
        margin-left: 6%;
    }
    .ensure{
        border: 0px red solid;
        width: 60%;
        height: 45%;
        border-radius: 10px;
        background-color: rgba(255,255,240,1);
        margin: 30% auto 0 auto;

    }
    .ensure_back{
        background-color: #409EFF;
        border: 0px black solid;
        width: auto;
        height: 53%;
        border-radius: 10px 10px 0 0;
    }
    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba(1,1,1,0.7);
        /*opacity: 0.6;*/
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }
</style>

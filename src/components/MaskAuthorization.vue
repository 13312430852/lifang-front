<template>
    <div class="mask">
        <div class="ensure">
            <div class="tips">亲，您还没有登录，</div>
            <div class="tips1">请同意微信授权哦。</div>
            <div class="toButton">
                <div class="col-1 buttonBox"><button class="button1" @click="cancelIn">取消</button></div>
                <div class="col-1 buttonBox"><button class="button" @click="isSure">确认</button></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "MaskAuthorization",
        data(){
            return{
                // showThisComponent:2,
                url:null,
                ip:process.env.VUE_APP_URL,
            }
        },
        methods:{
            cancelIn(){
                window.location.href = 'http://localhost:8080/thehome/?token=ajdhj';
            },
            isSure(){
                /*当用户点击了确认后，跳转至授权链接*/
                window.location.href = this.url;   //跳转至外部 url
            },
            getURL(i){
                axios.get('http://dfc88cd8.ngrok.io/wechat/login')  //获取授权链接
                    .then(re => {
                        this.url = re.data;
                    })
                    .catch(err=>{
                        if(i<0){
                            alert('请求链接失败:'+err);
                        }else {
                            this.getURL(i-1)  //失败后再继续请求
                        }
                    });
            }
        },
        created() {
            console.log(this.ip);
            this.getURL(4);
        }
    }
</script>

<style scoped>
    .buttonBox{
        display: flex;
        justify-content: center;
        align-content: center;
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
        border-style: none;
        background-color: #4C90F5;
        width: 50%;
        height: 52%;
        border-radius: 3px;
        font-size: 1.75rem;
        color: whitesmoke;
    }
    .col-1{
        flex: 1;
    }
    .toButton{
        margin-top: 20%;
        width: 100%;
        height: 30%;
        /*background-color: #343434;*/
        display: flex;
    }
    .tips1{
        font-size: 1.9rem;
        margin-left: 30%;
        margin-top: 4%;
    }
    .tips{
        font-size: 1.9rem;
        margin-left: 6%;
    }
    .ensure{
        width: 80%;
        height: 30%;
        border-radius: 4px;
        background-color: rgba(255,255,240,1);
        margin: 30% auto 0 auto;
        padding-top: 8%;
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
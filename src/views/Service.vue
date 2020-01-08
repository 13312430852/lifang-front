    <template>
    <div>

        <div class="top">
            <img src="../assets/top.jpg" class="round_icon1"/>
            <div class="line1"></div>
            <img src="../assets/left.jpg" class="round_icon2"/>
            <div class="line2"></div>
            <img src="../assets/kefu.jpg" class="round_icon3"/>
            <div class="line3"></div>
            <img :src="user.headimgurl" class="round_icon4"/>
            <div class="text">
                <div class="kefurexian">客服热线：</div>
                <div class="tel" v-text="service.customerServiceTel"></div>
                <button class="btn">
                    <a href="tel:13007808520" id="aaa" style="text-decoration-line: none;color: white">
                    拨打热线
                </a>
                </button>
            </div>
            <div class="line"></div>
            <div class="code">
                <img :src="service.twoCode" width="100%" height="100%">
            </div>
            <div class="baocun">长按保存二维码</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Service",
        data(){
            return{
                service:{
                    customerServiceId: "0005",
                    customerServiceTel: "",
                    twoCode: null
                },
                user:{
                    headimgurl:'',
                }
            }
        },

        created() {
            axios.get(process.env.VUE_APP_URL + 'service/queryServiceById/123')
                .then(response => {
                this.service = response.data.data;
                console.log(response)
            })
            axios.get(process.env.VUE_APP_URL + 'mine/getUserInfo')                                                 //通过...码获取用户基本信息
                .then(re => {
                    this.user = re.data.data;
                    // console.log(this.user);
                })
                .catch(err => alert('未请求到用户基本数据错误为：' + err))
        }
    }
</script>

<style scoped>
    /*.serviceTime{
        width: 92%;
        height: 10%;
        margin: 11.62% auto 5% auto;
        display: flex;

    }
    .serviceMessage{
        width: 92%;
        background-color: #f8f6f6;
        height: 15%;
        margin: auto;

        display: flex;
    }

    .call{

        background-color: #4c90f5;
        font-size: 159.375%;
        height: 40%;
        width: 160%;
        margin-top: 20%;
        margin-left: 5.98%;
        color: #ffffff;
        text-decoration-line: none;
        border-style: none;
        border-radius: 3px;
    }*/
    .top{
        width: 100%;
        height: 100%;
        background-color: #90D2EB;
    }
    .round_icon1{
        width: 16.1%;
        height: 10%;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: 50%;
        top: 3%;
        margin-left: -8%;
    }
    .round_icon2{
        width: 16.1%;
        height: 10%;;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        left: 10%;
        top: 10%;
    }
    .round_icon3{
        width: 16.1%;
        height: 10%;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: 73%;
        top: -1%;
        z-index: 999;
    }
    .round_icon4{
        width: 16.1%;
        height: 10%;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: 50%;
        top: 2%;
        margin-left: -8%;
    }
    .text{
        width: 100%;
        height: 10%;
        /*background-color: red;*/
    }
    .kefurexian{
        width: 20%;
        height: 50%;
        font-family: "PingFang SC";
        font-size: 1.5rem;
        color: white;
        margin-top: 10%;
        margin-left: 5%;
        /*background-color: red;*/

    }
    .tel{
        width: 50%;
        height:50%;
        font-family: "PingFang SC";
        font-size: 3rem;
        color: white;
        display: inline-block;
        margin-left: 5%;

    }
    .btn{
        width: 30%;
        height: 60%;
        background-color: #4C90F5;
        border-radius: 10px;
        margin-left: 10%;
        margin-top: -15%;
        border: 0px solid #4C90F5;
        font-family: "PingFang SC";
        font-size: 2rem;
        color: white;
    }
    .line{
        width: 95%;
        height: 1.5px;
        background-color: white;
        margin:5% auto;
    }
    .code{
        width: 50%;
        height: 30%;
        margin: 0 auto;
        background: url("../assets/code.jpg");
    }
.baocun{
    width: 50%;
    height: 4%;
    font-size: 1.875rem;
    font-family: "PingFang SC";
    color: white;
    text-align: center;
    margin: 0 auto;
}
    .line1{
        width: 20%;
        height: 1.5px;
        /*background-color: white;*/
        position: absolute;
        left: 20%;
        top: 20%;
    }

    .line1:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: white;
        transform: skew(0deg, 40deg);

    }
    .line2{
        width: 1.3px;
        height: 6%;
        background-color: white;
        position: absolute;
        left: 50%;
        top: 15%;
    }
    .line3{
        width: 20%;
        height: 1.5px;
        /*background-color: white;*/
        position: absolute;
        left: 60%;
        top: 20%;
    }

    .line3:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: white;
        transform: skew(0deg, -40deg);

    }
</style>
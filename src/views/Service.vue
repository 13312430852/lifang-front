    <template>
    <div style="font-family:PingFang SC; font-weight:400;">
        <div class="serviceTime"><!--客服时间-->
            <div style="height: 100%"><!--图片-->
                <img src="../assets/service/客服.png" height="80%" style="margin-top: 11.11%"/>
            </div>
            <div style="margin: auto 6%; font-size: 2.5rem">
                <p v-text="service.customerServiceTime">客服时间：</p>
            </div>
        </div><!--客服时间结束-->
        <div class="serviceMessage">
            <div style="width: 62.61%">
                <div style="font-size: 225%; margin: 3% 18%">
                    客服电话
                </div>
                <div v-text="service.customerServiceTel" style="font-size: 2.75rem; margin: 3% 5% ">
                </div>
            </div>
            <div>
                <button class="call">
                    <a href="tel:13007808520"  style="text-decoration-line: none;">
                        拨打热线
                    </a>
                </button>
            </div>
        </div>
        <div style="width: 95.5%; margin-top: 2.24%">
            <hr>
        </div>
        <div style="width: 46.66%; height: 26.23%;  margin: 15% auto; ">
            <img :src="service.twoCode" style="height: 98%; width: 98%; margin-top: 1%; margin-left: 1%;">
            <div style="color: #141414; font-size: 162.5%; margin-left: 7%">
                长按识别二维码添加客服
            </div>
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
                    customerServiceTel: "17263717361",
                    customerServiceTime: "13:00~14:00",
                    twoCode: null
                }
            }
        },
        methods:{
          testTo(){
              console.log('我是大傻逼');
              this.$router.push('/joinResult')
          }
        },
        created() {
            axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
            axios.defaults.headers.common["userType"] = 'MINE';
            axios.get('http://39de9ecd.ngrok.io/service/queryServiceById/0005').then(response => {
                this.service = response.data.data;
                // console.log(response)
            })
        }
    }
</script>

<style scoped>
    .serviceTime{
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
    }
</style>
<template>
    <div style="font-family:PingFang SC; font-weight:400;">
        <div class="serviceTime"><!--客服时间-->
            <div style="height: 100%"><!--图片-->
                <img src="../assets/service/客服.png" height="80%" style="margin-top: 11.11%"/>
            </div>
            <div style="margin: auto; margin-left: 5.56%; font-size: 187.5%">
                <p v-text="service.customerServiceTime">客服时间：</p>
            </div>
        </div><!--客服时间结束-->
        <div class="serviceMessage">
            <div style="width: 62.61%">
                <div style="font-size: 225%; margin: 2% 3%">
                    客服电话
                </div>
                <div v-text="service.customerServiceTel" style="font-size: 2.75rem; ">
                </div>
            </div>
            <div>
                <button class="dail">
                    <a href="tel:13007808520" style="text-decoration-line: none">
                        拨打热线
                    </a>
                </button>
            </div>
        </div>
        <div style="width: 95.5%; margin-top: 2.24%">
            <hr>
        </div>
        <div style="width: 46.66%; height: 26.23%;  margin: 8% auto; ">
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
        width: 72%;
        height: 6.75%;
        margin: 11.62% auto;
        display: flex;

    }
    .serviceMessage{
        width: 71.3333%;
        background-color: #f8f6f6;
        height: 10.9%;
        margin: auto;

        display: flex;
    }
    .dail{
        background-color: #4c90f5;
        font-size: 159.375%;
        height: 45%;
        width: 160%;
        margin-top: 20%;
        margin-left: 5.98%;
        color: #ffffff;
        text-decoration-line: none;
        border-style: none;

    }
</style>
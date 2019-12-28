<template>
    <div style="background-color: #ececec;font-family:PingFang SC; font-weight:400;">
        <div id="detailsAll">
            <div class="detailsFirst"><!--商品图片和描述-->
                <div class="detailsPhoto">
                    <img src="Url" style="height: 96.56%; width: 96.5%;margin: auto">

                    <!--<img src="../assets/details/商城.png" height="96.5%" width="96.5%"/>-->
                </div>
                <div class="detailsDecrice">

                    <div v-text="detailsName" style="margin-top: 5%" class="detailTex">

                    </div>
                </div>
                <div class="detail-NumSpen">
                    <div class="details-Float" style="margin-top: 17.9%; display: flex; flex-direction: column;" >
                        <div style="display: flex;">
                            <div>￥</div>
                            <div v-text="detailsSpen" ></div>
                        </div>
                        <div style="display: flex; " >
                            <div style="margin-left: 5%">x</div>
                            <div v-text="detailsNum" ></div>
                        </div>



                    </div>
                </div>
            </div>
            <div class="detailsNext"><!--//开始商家信息-->
                <div style="font-family:PingFang SC; font-weight:bold; font-size: 187.5%; ">
                    <div><img src="../assets/details/商城.png" height="30" width="30"/>
                        商家信息
                    </div>
                    <div v-text="mer.merName" class="merNam">

                    </div>

                </div>
                <hr style="margin-top: 2.59%">
                <div>
                    <div style="margin-left: 2.59%" >
                        <div style="margin-top: 3%" class="detailsDuiqi">
                            <div>
                                <img src="../assets/details/定位.png" height="28" width="22"/>
                            </div>
                            <div class="font">
                                <p v-text="mer.merLocal" ></p>
                            </div>

                        </div>
                        <div style="margin-top: 3%" class="detailsDuiqi">
                            <div><img src="../assets/details/电话.png" height="26" width="20"/>
                            </div>
                            <div class="font">
                                <p v-text="mer.merPhone" ></p>
                            </div>
                        </div>
                        <div style="margin-top: 9.68%">
                            <hr >
                        </div>
                    </div>
                    <!--商家信息结束-->
                    <div class="indentMessage"><!--开始订单信息-->
                        <div class="detailsDuiqi">
                            <div class="detailsIndentTex">订单总价:</div>
                            <div class="detailsIndentTex" style="display: flex;">
                                <div>￥</div>
                                <div v-text="detail.detailsSum" ></div>
                            </div>

                        </div>
                        <hr style="margin-top: 2.59%">
                        <div class="detailsDuiqi">
                            <div class="detailsIndentTex">下单时间:</div>
                            <div v-text="detail.detailsTime" class="detailsIndentTex1"></div>
                        </div>
                        <hr style="margin-top: 2.59%">
                        <div class="detailsDuiqi">
                            <div class="detailsIndentTex">配送完成时间:</div>
                            <div v-text="detail.detailsFinash" class="detailsIndentTex1"></div>
                        </div>
                        <hr style="margin-top: 2.59%">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Details",
        data(){
            return{
                detailsName:'我是小山海经',
                detailsNum:'1',
                detailsSpen:'100',
                merName:'花溪大学城重庆火锅店',
                Url:'../assets/details/定位.png',
                detail: {'detailsSum':'110','detailsTime':'2019年11月29日','detailsFinash':'2019年11月29日'}
                ,
                mer:{'merName':'我是啦啦啦','merLocal':'花溪贵州大学','merPhone':'13007808520'}
            }
        }
    }
</script>

<style scoped>
    #detailsAll{
        width: 92%;
        height: 58%;
        background-color: #ffffff;
        margin: auto; margin-top: 2.8%;
    }
    .detailsFirst{
        display: flex;

        height: 18.7%;


    }
    .detailsPhoto{
        height: 96.5%; width: 21.02%;

        margin-left: 0.73%;
        margin-top: 0.3%;

    }
    .detailsDecrice{
        background-color: #ffffff;
        width: 55.07%;
        height: 96.5%;
        font-family: "PingFang SC";
        font-size: 125%;
        margin-left: 0.73%;
        margin-top: 0.3%;

    }
    .detailTex{
        font-family: "PingFang SC";
        font-size: 125%;
        font-weight:bold;
        color: #141414;
    }
    .detail-NumSpen{

        margin-left: 0.73%;
        margin-top: 0.3%;
        width: 14.5%;
        height: 34.5%;
        color: #757575;
        font-size: 125%;
    }
    .details-Float{
        padding-top: 5%;
    }
    /*第一部分的css*/
    .detailsNext{

        height: 68.4%;
        margin-top: 8.78%;
    }
    .merNam{

        margin-top: 7.54%;
        margin-left: 5.07%;
        font-family: "PingFang SC";
        font-size: 85.7%;
        color: #757575;
    }
    .indentMessage{

        margin-top: 2.9%;
        color: #000000;
        font-family:PingFang SC;
        font-weight:400;
        font-size: 137.5%;
        margin-left: 2.89%;
    }
    .detailsIndentTex{
        margin-top: 2.59%;
    }
    .detailsDuiqi{
        display: flex;
    }
    .detailsIndentTex1{
        margin-top: 2.59%;
        margin-left: 2.59%;

    }
    .font{
        font-family:PingFang SC;
        font-weight:bold;
        font-size: 137.5%;
        color: #757575;
        margin-left: 2.59%;
    }

</style>
<template>
    <div style="font-family:PingFang SC; font-weight:bold;">

        <div style="width: 92%; height: 78.71%; margin:0 auto;">
            <div class="content1"><!--举报选项-->
                <div style="font-size: 187.5%; font-weight: bold">举报内容</div>
                <div class="content1-1">
                    <div class="content1-1-1" >
                        <div class="contents1" >
                            <div class="Radio" >
                                <label for="re1">
                                    与宣传内容不符
                                </label>
                            </div>
                            <div class="radioSize">
                                <input type="radio" value="与宣传内容不符" id="re1" v-model="reportChose"
                                style="width: 80%; height: 80%">
                            </div>
                        </div>
                        <div class="contents2">
                            <hr>
                        </div>
                    </div>
                    <div class="content1-1-1" >
                        <div class="contents1" >
                            <div class="Radio" >
                                <label for="re1">
                                    政治敏感
                                </label>
                            </div>
                            <div class="radioSize">
                                <input type="radio" value="政治敏感" id="re2" v-model="reportChose"
                                       style="width: 80%; height: 80%">
                            </div>
                        </div>
                        <div class="contents2">
                            <hr>
                        </div>
                    </div>
                    <div class="content1-1-1" >
                        <div class="contents1" >
                            <div class="Radio" >
                                <label for="re1">
                                    期权违规
                                </label>
                            </div>
                            <div class="radioSize">
                                <input type="radio" value="侵权违规" id="re3" v-model="reportChose"
                                       style="width: 80%; height: 80%">
                            </div>
                        </div>
                        <div class="contents2">
                            <hr>
                        </div>
                    </div>
                    <div class="content1-1-1" >
                        <div class="contents1" >
                            <div class="Radio" >
                                <label for="re1">
                                    欺诈广告
                                </label>
                            </div>
                            <div class="radioSize">
                                <input type="radio" value="欺诈广告" id="re4" v-model="reportChose"
                                       style="width: 80%; height: 80%">
                            </div>
                        </div>
                        <div class="contents2">
                            <hr>
                        </div>
                    </div>
                    <div class="content1-1-1" >
                        <div class="contents1" >
                            <div class="Radio" >
                                <label for="re1">
                                    其他
                                </label>
                            </div>
                            <div class="radioSize">
                                <input type="radio" value="其他" id="re5" v-model="reportChose"
                                       style="width: 80%; height: 80%">
                            </div>
                        </div>
                        <div class="contents2">
                            <hr>
                        </div>
                    </div>


                </div>
            </div>
            <div style="height: auto; width: 100%"><!--举报描述-->
                <div style="margin-top: 2%; font-size: 187.5%; color: #323131">描述信息：</div>
                <div style="height: auto; width: 100%; ">
                    <textarea v-model="describeMessage" placeholder="请输入描述" @input="handImput"
                              style="font-size: 175%; color: #696969;
                               width: 100%;margin: 1% 0px;
                               outline: none; border-radius: 3px;">

                    </textarea>

                </div>
            </div>

            <div style="width: auto;height: auto;height: 40px;display:flex;align-items: center;justify-content: center;">
                <button class="submitReport" @click="pushTo">
                    提交
                </button>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "ReportContent",
        data(){
            return{
                goodsId:null,
                reportChose:'',
                describeMessage:'',
                report:{
                    'reportContent':this.reportChose,
                    'describContent':this.describeMessage,
                    'goodsId':this.goodsId
                }
            }
        },
        methods:{
            handImput(e){
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            },
            pushTo(){
            this.$set(this.report,'reportContent',this.reportChose);
                this.$set(this.report,'describContent',this.describeMessage);
                this.$set(this.report,'goodsId',this.goodsId);
                axios.post(process.env.VUE_APP_URL+'allreport/addReport',this.report).then(re => {
                    if(re.data.flag){
                        this.$router.push({path:'/reportCallBack',query:{'goodsId':this.goodsId}});

                    }else {
                        alert('举报出现错误，请稍后重试！')
                    }
                    console.log(re.data)
                })
            }
        },
        created() {
            this.goodsId = this.$route.query.goodId;
            console.log(this.goodsId);
        }
    }
</script>

<style scoped>
    .submitReport{
        display: block;
        height: 30px;
        width: 56%;
        background-color: #4c90f5;
        color: #ffffff;
        font-size: 175%;
        font-family:PingFang SC;
        font-weight:400;
        outline: none;
        border-radius: 3px;
        border-style: none;
    }
    .content1{
        margin-top: 1.9%;

        height: 60%;
        color: #323131;
    }
    .content1-1{
        margin-top: 4%;

        height: 87.93%;
        display: flex;
        flex-direction: column;
        font-size: 175%;
    }
    .content1-1-1{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .contents1{
        flex: 2;
        display: flex;
        flex-direction: row;

    }
    .contents2{
        flex: 1;
    }
    .Radio{
        display: flex; width: 92%;
        margin-top: 1%;

    }
    .radioSize{
        margin-top: 2%;
        width: 6%;
        background-color: white;
        margin-left: 1%;

    }

</style>

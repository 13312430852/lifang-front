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
                <div style="height: auto; width: 80%; margin: 10% auto;">
                    <textarea v-model="describeMessage" placeholder="这是测试" @input="handImput"
                              style="font-size: 175%; color: #696969;
                              margin-left: 5%; margin-top: 3%;
                               height: auto; width: 100%; outline: none;">

                    </textarea>

                </div>
            </div>
            <button style="height: 5.8%; width: 56%; margin-left: 22%;
            background-color: #4c90f5; color: #ffffff; font-size: 175%;
             font-family:PingFang SC; border-style: none; border-radius: 3px;
             font-weight:400;" @click="pushTo">
                提交
            </button>
        </div>

        <!--这是显示选择的信息{{reportChose}}
        <p>这里是输入框信息：{{describeMessage}}</p>-->
    </div>
</template>

<script>
    export default {
        name: "ReportContent",
        data(){
            return{
                reportChose:'我还不会',
                describeMessage:'请输入描述信息'
            }
        },
        methods:{
            handImput(e){
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }
        }
    }
</script>

<style scoped>
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
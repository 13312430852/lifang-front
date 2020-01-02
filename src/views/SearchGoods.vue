<template>
    <div style="height: 100%">
        <div class="searchBox"><!--搜索部分-->
            <input v-focus class="search" type="text" v-model="searchInitValue">
            <div class="searchClick" @click="search"></div>
        </div><!--搜索部分-->

        <div class="title">搜索结果</div>
        <div class="line"></div>

       <goods-list-no-title :theGoods_2="searchResaultList" v-if="haveResault"></goods-list-no-title>
        <div class="noPage" v-if="!haveResault">
            <img style="width: 100%;" src="../assets/nullPageImg/noContent.png" alt="">
        </div>
    </div>
</template>

<script>
    import GoodsListNoTitle from "../components/GoodsListNoTitle";
    export default {
        name: "SearchGoods",
        components:{
            GoodsListNoTitle
        },
        data(){
            return{

                searchInitValue:null,
                haveResault:false,  //是否搜索到
                searchResaultList:null,
            }
        },
        methods:{
            search(){           //将要搜索的参数给后台搜索，获得数据后传给列表组件显示
                axios.get(process.env.VUE_APP_URL + 'goods_details_search/searchByLikeName?likeName=' + this.searchInitValue)
                    .then(re => {
                        this.searchResaultList = re.data.data;
                        if(this.searchResaultList == null) this.haveResault =false;
                        else this.haveResault =true;
                    })
                    .catch(err => console.log(err))
            }
        },
        directives:{
            focus:{     //自定义指令，加载时获取焦点
                inserted(el,binding){
                    el.focus();
                }
            }
        },

    }
</script>

<style scoped>
    .noPage{
        width: 92%;
        height: 50%;
        /*background-color: #5f5f5f;*/
        margin: 0 auto;
    }
    .searchClick{
        background-color: #f3f3f3;
        width: 14%;
        height: 78%;
        float: left;
        position: absolute;
        right: 3%;
        /*opacity: 0.3;*/

        background-image: url("../assets/search.png");
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: center;
        border-bottom-right-radius:0.75rem ;
        border-top-right-radius:0.75rem ;
        border-left: 1px solid #d6d6d6;
    }

    .line{
        height: 1px;
        width: 92%;
        background-color: #5f5f5f;
        margin: 1.5% auto;
        opacity: 0.1;
    }
    .title{
        width: 100%;
        /*height: 2.2%;*/
        /*background-color: #5f5f5f;*/
        margin-left: 3.87%;
        margin-top: 6%;
        font-size:1.88rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(40,40,40,1);
    }
    .searchBox{
        display: flex;
        justify-content: center;
        height: 6.74%;
        width: 100%;
        padding-top: 3%;
        /*background-color: rebeccapurple;*/
        position: relative;
        top: 0;
        left: 0;

    }
    .search{
        width:88%;
        height: 98.7%;
        background-color: rgba(231,231,231,1);
        border-style: none;
        border-radius: 0.75rem;

       /* background-image: url("../assets/search.png");
        background-size: 7%;
        background-repeat: no-repeat;
        background-position: 95%;*/

        color: rgba(138,138,138,1);
        font-size: 1.75rem;
        font-family:PingFang SC;
        font-weight:400;
        padding-left: 6%;
    }
</style>
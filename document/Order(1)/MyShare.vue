<template>
    <div>
        <div id="box2">
            <div class="Share">
                <div class="edit1">
                    <div class="quanxuan">
                        <div v-if="isShow" class="abc" @click="Allchecked()">
                           全选
                        </div>
                    </div>
                    <div class="edit3">
                        <button class="edit2" @click="modify()">编辑</button>
                        <button class="delete" v-if="isShow" @click="remove()">删除</button>
                    </div>
                </div>
                <div class="Share_box" v-for="(share,i) in goods">
                    <div class="share_detail">
                        <div class="checkted_box">
                            <input type="checkbox" v-show="isShow" class="check" v-model="share.completed">
                        </div>

                        <div class="border">
                            <div class="picture">
                                <img :src="share.goods_image_url" width="100%" height="100%" @click="ToshareDetail">
                            </div>
                            <div class="shareName" v-text="share.goods_name"></div>
                    </div>

                    </div>
                    <div class="share_time">
                        <div class="left">分享时间：</div>
                        <div v-text="share.share_time" class="right"></div>
                    </div>
                </div>


        </div>

        </div>
    </div>
</template>

<script>
    import MyPage from "../../components/MyPage";
    export default {
        name: "MyShare",
        components: {MyPage},
        data(){
            return{
                user:{
                    'head_picture': require('../../assets/headPicture1.png'),
                    'user_name': '用户昵称',
                    'user_sex': '男',
                    'user_tel': '1515****621',
                    'user_regist_time':'2019.12.12'
                },
                goods:[
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤1',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'
                        },
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤2',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤3',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤4',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本'},
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤5',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本',
                    },
                    {'goods_image_url': require('../../assets/clothse.jpg'),
                        'goods_name':'T恤6',
                        'share_time':'2019-12-12',
                        'goods_desc':'是出版发挥不出事多年的时间成本事多年的时间成本',

                    },
                ],
                isShow:false,

            }
        },
        methods:{
            modify(){
              this.isShow=!this.isShow;
                // console.log(this.isShow)
              },
            remove(){
                this.goods=this.goods.filter(item=>!item.completed)

            },
            Allchecked(){
                this.goods.forEach(item => {
                    item.completed=true;
                    console.log(item);
                })
            },
            ToshareDetail(){
              this.$router.push('/ShareDetail')
            }

          },

        created() {
            this.addparam();
            axios.post('http://123.207.18.77:8090/menu/queryAllMenu',
                {
                    "user_id":'user-001',
                    "orders_pay_state":'0'
                }).then(function (response) {
                console.log(response);
                // response => this.user = response.data.data
            }).catch(function (err) {
                console.log(err);
            })

            axios.get('http://123.207.18.77:8090/menu/queryAllMenu')
                .then(re => user = re.data.data)
                .catch();
        }
    }
</script>

<style scoped>
#box2{
    position: relative;
    width: 92%;
    /*height: 100%;*/
    border-radius: 12px;
    background-color: #ffffff;
    margin: 5% auto;
    /*border: 1px solid  #F6F5F4;*/


}
.Share{
    width: 100%;
    /*height: 100%;*/
    margin: 3% auto;
    /*background-color: green;*/
}
.edit1{
    width: 100%;
    /*height: 10%;*/
    display: flex;
    font-family:PingFang SC;
    /*background-color: red;*/


    /*background-color: red;*/
}
.Share_box{
    width: 45%;
    height: 25%;
    margin: 2.5%;
    float: left;
    border-radius: 6px;
    /*border: 1px solid black;*/
    background-color: #F6F5F4;
    font-family:PingFang SC;

}
.quanxuan{
    width: 45%;
    height: 50%;
    /*margin-top: 3%;*/
    margin-left: 2%;
    line-height: 290%;
    font-size: 1.375rem;
    font-family:PingFang SC;

}
.edit3{
    width: 50%;
    height: 100%;
    margin-bottom: 3%;
    margin-left: 2%;
    line-height: 290%;
    font-size: 1.375rem;

    font-family:PingFang SC;

}
    .edit2{
        width: 40%;
        height: 100%;
        margin-top: 3%;
        float: right;
        color: white;
        margin-right: 2%;
        font-family:PingFang SC;
        border-radius: 8px;
        font-size: 1.5rem;
        border: 1px solid #4C90F5;
        background-color: #4C90F5;

    }
    .share_detail{
        width: 95%;
        height: 70%;
        margin: 3% auto;
        font-family:PingFang SC;

        /*background-color: #ADADAD;*/
    }
    .share_time{
        width: 95%;
        height: 20%;
        margin: 2% auto;
        display: flex;
        font-family:PingFang SC;

        /*background-color: yellow;*/
    }
    .checkted_box{
        width: 10%;
        height: 3vh;
        z-index: 999;
        /*background-color: blue;*/
    }
    .border{
        width: 100%;
        height: 55%;
        display: flex;
        /*background-color: lightpink;*/
    }
    .picture{
        width: 45%;
        height: 100%;
        /*background-color: #B8D2FB;*/
    }
    .shareName{
        width: 55%;
        height: 100%;
        font-size: 1.5rem;
        font-family:PingFang SC;
        /*background-color: #f016f6;*/
    }
    .left{
        width: 45%;
        height: 100%;
        /*background-color: brown;*/
        text-align: center;
        font-size: 1.375rem;
        font-family:PingFang SC;

    }
.right{
    width: 55%;
    height: 100%;
    font-size: 1.375rem;
    /*background-color: mediumspringgreen;*/
    text-align: center;
    font-family:PingFang SC;

}
    .delete{
        width: 40%;
        height: 100%;
        margin-top: 3%;
        float: right;
        color: white;
        margin-right: 2%;
        font-family:PingFang SC;
        border-radius: 8px;
        font-size: 1.5rem;
        border: 1px solid #4C90F5;
        background-color: #4C90F5;
    }
.abc{
    cursor: pointer;
    width: 50%;
    height: 100%;
    /*background-color: #ffbb4d;*/
}
.check{
    width: 100%;
    height: 100%;

    /*background-color: red;*/
}

</style>
<template>
    <div>
        <!--    <meta http-equiv="refresh" content="1;url=hello.html">-->
        <div class="success">
            <div>
                <img src="../assets/成功.png" height="96" width="95"/></div>
            <div style="margin-top: 5%">修改成功</div>
            <div id="time">正在自动跳转...
                <div style ="display: flex;
            align-items: center;justify-content: center;">
                    <button type="submit" class="btn2" @click="pushPage">立即跳转</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UpdateSuccess",
        created(){
            //进入页面
            let that=this;
            //定时3s离开页面
            let time=3000;
            this.timeObj=setTimeout(()=>{
                that.pushPage();
            },time)
        },
        destroyed(){
            console.log("清除定时器"+this.timeObj);
            clearTimeout(this.timeObj)
        },
        methods:{
            pushPage:function(){
                this.$router.push({
                    path:'/update'
                })
            }
        },}

</script>

<style scoped>
    .success{
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.75rem;
    }
</style>
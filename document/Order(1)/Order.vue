<template>
    <div>
        <MyPage></MyPage>
        <router-view/>
    </div>

</template>

<script>
    import MyPage from "../../components/MyPage";
    export default {
        name: "Order",
        components: {MyPage},


    }
</script>

<style scoped>

</style>
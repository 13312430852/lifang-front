<template>
    <div>
        <router-view style="height: 100%"/>
        <bottom-navigation></bottom-navigation>
    </div>

</template>

<script>
    import BottomNavigation from "../components/BottomNavigation";
    export default {
        name: "TheHome",
        components:{
            BottomNavigation,
        },

    }
</script>

<style scoped>

</style>
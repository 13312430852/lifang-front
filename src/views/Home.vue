<template>
  <div class="box">
      <router-view style="height: 100%"/>
    <bottom-navigation></bottom-navigation>
  </div>
</template>

<script>

import BottomNavigation from "../components/BottomNavigation";
export default {
  name: 'home',
  components: {
    BottomNavigation
  },

}

</script>

<style scoped>

</style>

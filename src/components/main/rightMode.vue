<template>
  <div class="container_right">
    <div class="right_top">
      <setting-mode></setting-mode>
      <message-mode></message-mode>
    </div>
    <data-mode></data-mode>
  </div>
</template>

<script>
import DataMode from './data/dataMode.vue'

import MessageMode from './message/messageMode.vue'
import settingMode from './setting/settingMode.vue'
export default {
  components: { settingMode, MessageMode, DataMode,  },
  name: 'rightMode',
  
}
</script>

<style scoped>
.container_right {
    width: 20vw;
    height: 95%;
    aspect-ratio: 0.38;
    background: rgb(255, 255, 255);
    border-radius: 3.83vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.right_top {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    /* background-color: red; */
}
</style>
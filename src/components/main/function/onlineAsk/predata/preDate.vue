<template>
  <div class="preDate">
        <div class="preDateTip">
          已预约
        </div>
        <div class="preItem" v-for="item,index in preDateList" :key="index">
          {{ item.time }} {{ item.doctor+'医师' }}
        </div>
      </div>
</template>

<script>
import { ref } from 'vue'
import store from '@/store/store';
export default {
    name:'preDate',
    setup() {
  
const preDateList = ref([
  {
    time:'2024年7月14日下午',
    doctor:'郑妍芯',
  
  },
  {
    time:'2024年7月14日下午',
    doctor:'郑妍芯',
  
  }
])
  store.dispatch('sendPreDateList',preDateList);
  return {
    
    preDateList
  }
},
}
</script>

<style scoped>

.preDate{
  border-radius: 0.8vw;
  width: 100%;
  height: 40%;
  /* background-color: red; */
  background-color: rgb(247, 247, 247, 1);
  overflow: auto;
}
.preDate .preDateTip {
  margin-top: 1vw;
  margin-left: 2vw;
  font-size: 1.6vw;
  margin-bottom: 2vw;
}
.preItem {
  color:rgba(108, 108, 108, 1);
  width: 80%;
  height: 20%;
  margin: 0 auto;
  margin-bottom: 2vw;
  font-size: 1vw;
}
</style>
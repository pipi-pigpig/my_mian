<template>
  <div class="container">
    <div class="today" v-show="todayShow">
      <health-top></health-top>
      <health-today></health-today>
    </div>
    <div class="datatop">
      <div @click="this.$router.push('/healthPage')" :class="{ 'active':( $route.path == '/healthPage')}">
        <p>血氧</p>
      </div>
      <div  @click="this.$router.push('/healthPage/heartHealth')" :class="{ 'active':( $route.path == '/healthPage/heartHealth')}">
        <p>
          血压与心率
        </p>
        
      </div>
      <div  @click="this.$router.push('/healthPage/perfusionIndex')" :class="{ 'active':( $route.path == '/healthPage/perfusionIndex')}">
        <p>
          灌注指数
        </p>
        
      </div>
      <div @click="this.$router.push('/healthPage/weight')" :class="{ 'active':( $route.path == '/healthPage/weight')}">
        <p>
          体重
        </p>
        
      </div>
    </div>
    <div class="datashow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import healthTop from './health/healthTop.vue'
import HealthToday from './health/healthToday.vue';
export default {
  components: { healthTop, HealthToday },
  name: 'healthPage',
  setup() {
    const todayShow = ref(true);
    provide('todayShow', todayShow);
    return {
      todayShow,
    }
  }
  
}

</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.today {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 129, 106);
  border-top-left-radius: 5.3vw;
  border-bottom-left-radius: 5.3vw;
  padding: 0;
  /* border-radius: 10px; */
}
.datatop {
  width: 30.12%;
  height: 5%;
  border-radius: 2.3vw;
  margin: 0 auto;
  margin-top: 2vw;
  display: flex;
   box-shadow: 0px 2px 4px  rgba(0, 0, 0, 1);
}
.datatop .active {
  background-color: rgba(255, 94, 0, 0.432);
}
.datatop div {
  margin-left:0;
  border-radius: 2.3vw;
  height: 100%;
  font-size: 1vw;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.datatop div p{
  margin:0 1.5vw
}
.datashow {
  width: 90%;
  height: 80%;
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 1);
  margin: 0 auto;
  margin-top: 4vw;
  border-radius: 1.2vw
}
</style>
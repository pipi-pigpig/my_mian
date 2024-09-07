<template>
  <div class="mid">
        <div class="icon">

        </div>
        <div class="time">
          {{ time }}
        </div>
      </div>
      <div class="data">
        <div class="dataItem" v-for="item in data" :key="item.name">
          <p class="dataname">
            {{ item.name }}
          </p>
          <p class="datanum">
            {{ item.num }}
          </p>
          <p class="dataunit">
            {{ item.unit }}
          </p>
        </div>
      </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'healthToday',
    setup(){
        const time = ref('2024年7月1日');
    const data= ref([
      {
        name: '收缩压',
        num: '137',
        unit: 'mmHg'
      },
      {
        name: '心率',
        num: '69',
        unit: 'bPm'
      },
      {
        name: '舒张压',
        num: '84',
        unit: 'mmHg'
      },
    ])
    return {
      time,
      data
    }
    }
}
</script>

<style scoped>
.mid{
  width: 100%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 10px; */
}
.mid .icon {
  width: 22vw;
  aspect-ratio: 1;
  background: url(../../assets/images/health/heart.png) no-repeat;
  background-size: 100% 100%;
}
.mid .time {
  margin-top: 2vw;
  font-weight: 400;
  color: white;
  font-size: 1.8vw;
}
.data {
  width: 70%;
  height: 20%;
  /* background-color: white; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 2vw;
}
.dataItem {
  width: 33%;
  height: 100%;
  background-color: rgb(255, 129, 106);
  }
.dataItem p {
  width: 100%;
  height: 25%;
  font-size: 2.2vw;
  color: white;
  text-align: center;
}
.dataItem .dataname {
  height: 50%;
}
</style>
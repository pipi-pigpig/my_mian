<template>
  <div class="top">
        <div class="back" @click="$router.push('/mainMode')">
          <div class="icon">

          </div>
          返回
        </div>
        <div class="next" @click="todayShow = !todayShow">
          
          往期数据
          <div class="icon">

          </div>
        </div>
      </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'healthTop',
    setup() {
        const todayShow = inject('todayShow');
        return {
            todayShow,

        }
    }
}
</script>

<style scoped>
.today .top {
  display: flex;
  width: 100%;
  height: 10%;
  /* border-radius: 10px; */
}
.today .top div {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.today .top .back {
  color: white;
  font-size: 1.8vw;
  text-align: left;
}
.today .top .next {
  color: white;
  font-size: 1.8vw;
  text-align: right;
  justify-content: right;
}
.today .top .icon {
  width: 4.4vw;
  height: 4.4vw;
  background-repeat: no-repeat;
  background-size: 100%;
}
.today .top .back .icon {
  background-image: url(../../assets/images/health/arrow.png);
  margin-left: 5.3vw;
}
.today .top .next .icon {
  background-image: url(../../assets/images/health/next.png);
}
</style>
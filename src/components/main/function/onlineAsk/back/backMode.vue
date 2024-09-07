<template>
  <div class="onlineSearch">
      <router-link to="/mainMode">
      <div class="img">

      </div>
    </router-link>
      
      <div class="text">
        健康 / 线上医生
      </div>
    </div>
</template>

<script>
export default {
name: "backMode"
}
</script>

<style scoped>
.onlineSearch{
  width: 92%;
  height: 10%;
  background-color: rgba(247, 247, 247, 1);
  margin-left: 4vw;
  margin-top: 1vw;
  border-radius: 3.6vw;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2vw;
}
.onlineSearch .img {
  background: url(../../../../../assets/images/online/back.png) no-repeat;
  background-size:cover;
  width: 3vw;
  height: 3vw;
  margin-left: 1vw;
}
.onlineSearch .text{
  position: absolute;
  right: 2vw;
  font-size: 1.5vw;
  font-weight: 600;
  color:rgba(163, 197, 125, 1);
}
</style>
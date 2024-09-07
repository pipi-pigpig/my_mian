<template>
  <div class="calendarShell">
          <div class="text">
            可选日期
          </div>
        <vc-calendar
          expanded 
          class="calendar"
          type="week"
          locale="zh-cn"
          :attributes="attributes"
          @dayclick = getDay
          style="background-color: rgba(247, 247, 247, 1); border: none;"
          ></vc-calendar>
        </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'calendarMode',
    setup() {
  var first = ref('2024,8,12')
  var last = ref('2024,8,17')
  function getWeek() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 月份是从 0 开始的，所以需要加 1
    const day = today.getDate();
    const weekday = today.getDay(); 
    const firstDay =year +','+ month +','+(day-weekday+1);
    const lastDay = year +','+ month +','+(day+6-weekday+1);
     first.value = firstDay;
     last.value = lastDay;
    //  console.log(first,last)
  }
    getWeek();
    function getDay(day){
      console.log(day.label)
    }
  const attributes=ref( [
      {
        highlight:{ color:'orange',fillMode:'light'},       
        // bar: 'red', 
        dates: [
          new Date(),
        ],
        order: 7
      },
      {
        highlight:{ color:'green',fillMode:'light',inclusive:true},       
        dates: [
           { start: new Date(first.value), end: new Date(last.value)},
        ],
        order: 6
      },
    ])
  return {
    attributes,
    getWeek,
    getDay
  }
},
    
}
</script>

<style scoped>
.calendarShell{
  width: 100%;
  margin-bottom: 3vw;
  background-color: rgb(247, 247, 247, 1);
}
.calendarShell .text{
  width: 100%;
  height: 15%;
  /* text-align: center; */
  margin-left: 1vw;
  font-size: 1.5vw;
  font-weight: 600;
  color:rgb(0, 0, 0);
  margin-top: 1vw;
}
.calendarShell
.calendar{
  display: flex;
  font-size: 50px;
  background: rgba(247, 247, 247, 1);
}
</style>
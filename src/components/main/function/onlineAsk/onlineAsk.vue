<template>
  <div class="onlineAskShell">
    <back-mode></back-mode>
    <div class="main">
      <doctor-mode></doctor-mode>
      <div class="calendar_and_pre">
        <calendar-mode></calendar-mode>
        <pre-date></pre-date>
      </div>
    </div>
    
    
  </div>
        
</template>

<script scoped>
import CalendarMode from './calendar/calendarMode.vue'
import BackMode from './back/backMode.vue'
import DoctorMode from './doctor/doctorMode.vue'
import PreDate from './predata/preDate.vue'
export default {
name: 'onlineAsk',
components: {
CalendarMode,
BackMode,
DoctorMode,
PreDate
},

}
</script>
<style >
.onlineAskShell{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: auto;
  border-top-left-radius: 5.2vw;
  border-bottom-left-radius: 5.2vw;
  position: relative;
}

.main{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  /* background-color: aquamarine; */
}

.calendar_and_pre{
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(131, 60, 60); */
}

</style>

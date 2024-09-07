<template>
  <div class="edit">
        <div class="title">编辑</div>
        <div class="time">
          <div class="hour">
            <div class="num" @wheel="hourWheel">
              <div class="hourNum">{{ hour[0] }}</div>
              <div class="hourNum">{{ hour[1] }}</div>
              <div class="hourNum">{{ hour[2] }}</div>
              <div class="hourNum">{{ hour[3] }}</div>
              <div class="hourNum">{{ hour[4] }}</div>
            </div>
            <div class="text">
              时
            </div>
          </div>
          <div class="minute">
            <div class="num" @wheel="minuteWheel">
              <div class="minuteNum">{{ minute[0] }}</div>
              <div class="minuteNum">{{ minute[1] }}</div>
              <div class="minuteNum">{{ minute[2] }}</div>
              <div class="minuteNum">{{ minute[3] }}</div>
              <div class="minuteNum">{{ minute[4] }}</div>
            </div>
            <div class="text">
              分
            </div>
          </div>
          <div class="week">
            <div class="weekItem">
              <label for="Mon">周一</label>
              <input type="checkbox" id="Mon" value="周一" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Tues">周二</label>
              <input type="checkbox" id="Tues" value="周二" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Wed">周三</label>
              <input type="checkbox" id="Wed" value="周三" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Tes">周四</label>
              <input type="checkbox" id="Tes" value="周四" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Fry">周五</label>
              <input type="checkbox" id="Fry" value="周五" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Sat">周六</label>
              <input type="checkbox" id="Sat" value="周六" v-model="week">
            </div>
            <div class="weekItem">
              <label for="Sun">周日</label>
              <input type="checkbox" id="Sun" value="周日" v-model="week">
            </div>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="text">
          闹钟<br>
          <button class="sure" v-if="ifedit" @click="save">保存</button>
          <button class="add" v-if="!ifedit" @click="add">新增</button>
          <br>
          <button class="back" @click="ifShow = false">返回</button>
        </div>
        <div class="clocklist">
          <div class="clockItem" v-for="item,index in clock" :key="index" @click="edit($event)">
            <div class="infor">
              <div class="time">{{ item.time }}</div>
              <div class="day">
                {{ item.day }}
              </div>
            </div>
            <div class="open">
              <div class="round" @click="open($event,item)"></div>
            </div>

          </div>
        </div>
      </div>
</template>

<script>
import { ref,onMounted, inject } from 'vue'
export default {
    name:'colockEdit',
    setup(){
    const weekday = ['','周一','周二','周三','周四','周五','周六','周日'];
    const week = ref([])
    const clockitem = ref(null)
    const ifShow = inject('ifShow')
    const ifedit = ref(false)
    const hour = ref(['23','0','1','2','3'])
    const minute = ref(['59','0','1','2','3'])
    const clock = ref([
        {
        time:'08:00',
        day:'周二 周三 周四 周五',
        open:false
    },
    {
        time:'11:30',
        day:'周一',
        open:false
    },
    {
        time:'11:30',
        day:'周一',
        open:false
    }
])
    function addZerohour(){
      hour.value.forEach( (item,index) =>{
        let str = parseInt(item)
        if(str <10){
          item = '0' + item
          console.log(item)
          hour.value.splice(index,1,item)
          console.log(hour.value)
        }
      })
      
    }
    function addZerominute(){
      minute.value.forEach( (item,index) =>{
        let str = parseInt(item)
        if(str <10){
          item = '0' + item
          console.log(item)
          minute.value.splice(index,1,item)
          console.log(minute.value)
        }
      })
    }
    function hourWheel(event){
    if(event.deltaY > 0){
      hour.value.forEach( (item,index) =>{
        let str = parseInt(item)
        str-=event.deltaY/100
        if(str < 0 ){
          str = 24 +str
        }
        item = str.toString()
        hour.value.splice(index,1,item)
        })
        addZerohour();
    }
    if(event.deltaY < 0){
      hour.value.forEach( (item,index) =>{
        let str = parseInt(item)
        str-=event.deltaY/100
        if(str >=24  ){
          str = 0
        }
        item = str.toString()
        hour.value.splice(index,1,item)
        })
        addZerohour();
    }
    //   console.log(event.deltaY)
    }
    function minuteWheel(event){
    if(event.deltaY > 0){
      minute.value.forEach( (item,index) =>{
        let str = parseInt(item)
        str-=event.deltaY/100
        if(str < 0 ){
          str = 60 +str
        }
        item = str.toString()
        minute.value.splice(index,1,item)
        })
        addZerominute();
    }
    if(event.deltaY < 0){
      minute.value.forEach( (item,index) =>{
        let str = parseInt(item)
        str-=event.deltaY/100
        if(str >60  ){
          str = 1
        }
        item = str.toString()
        minute.value.splice(index,1,item)
        })
        addZerominute();
    }
    //   console.log(event.deltaY)
    }
    function edit(event){
        // event.stopPropagation();
        ifedit.value =true
        clockitem.value = event.target.parentNode
        console.log(clockitem.value)
    }
    function save(){
        ifedit.value = false
        clockitem.value.querySelector('.time').innerHTML = hour.value[2] + ':' + minute.value[2]
        clockitem.value.querySelector('.day').innerHTML = week.value.join(' ')
        console.log(week.value)
    }
    function add(){
        let clockitem = {
            time:hour.value[2] + ':' + minute.value[2],
            day:week.value.join(' '),
            open:false
        }
        clock.value.push(clockitem)
        
    }
    function open(event,item){
        event.stopPropagation();
        if(item.open == false){
        event.target.style.marginLeft = 55 + '%';
        event.target.parentNode.style.background = 'green'
        item.open = true
        }else{
            event.target.style.marginLeft = 0;
        event.target.parentNode.style.background = '#ccc'
        item.open = false
        }
        
    }
    function count() {
       setInterval(()=>{
        console.log(1)
        let now = new Date()
        let hour = now.getHours()
        let minute = now.getMinutes()
        let day = now.getDay()
        console.log(hour,minute,day)
        clock.value.forEach((item)=>{
          if(item.day.includes(weekday[day])){
            let arr = item.time.split(':')
            let clockhour = parseInt(arr[0])
            let clockminute = parseInt(arr[1])
            if(hour == clockhour && minute == clockminute){
              if(item.open == true){
                alert("吃药啦")
              }
            }
          }
        })
      },60000)
    }
    onMounted(()=>{
      addZerohour();
      addZerominute();
      count();
    }
    )
    return {
      
      hour,
      minute,
      hourWheel,
      minuteWheel,
      clock,
      ifShow,
      ifedit,
      edit,
      week,
      save,
      add,
      open
    }
    }
}
</script>

<style scoped>
.remindsetting .edit {
  width: 50%;
  height: 100%;
  background: white;
}
.remindsetting .edit .title {
  width: 100%;
  height: 15%;
  font-size: 2.1vw;
  /* background: red; */
  display: flex;
  align-items: center;
  padding-left: 1vw;
}
.remindsetting .edit .time {
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3vw;
}
.remindsetting .edit .time .hour {
  user-select: none;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right:1px solid #ccc ;
}
.remindsetting .edit .time .hour .num {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
  /* margin-right: 0.5vw; */
}
.remindsetting .edit .time .hour .num .hourNum {
  display: flex;
  align-items: center;
  justify-content: center;
}
.remindsetting .edit .time .hour .num .hourNum:nth-child(1),
.remindsetting .edit .time .hour .num .hourNum:nth-child(5) {
  font-size: 2.17vw;
}
.remindsetting .edit .time .hour .num .hourNum:nth-child(2),
.remindsetting .edit .time .hour .num .hourNum:nth-child(4) {
  font-size: 2.69vw;
}
.remindsetting .edit .time .hour .num .hourNum:nth-child(3) {
  font-size: 3.11vw;
}


.remindsetting .edit .time .minute {
  user-select: none;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.remindsetting .edit .time .minute .num {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
  /* margin-right: 0.5vw; */
}
.remindsetting .edit .time .minute .num .minuteNum {
  display: flex;
  align-items: center;
  justify-content: center;
}
.remindsetting .edit .time .minute .num .minuteNum:nth-child(1),
.remindsetting .edit .time .minute .num .minuteNum:nth-child(5) {
  font-size: 2.17vw;
}
.remindsetting .edit .time .minute .num .minuteNum:nth-child(2),
.remindsetting .edit .time .minute .num .minuteNum:nth-child(4) {
  font-size: 2.69vw;
}
.remindsetting .edit .time .minute .num .minuteNum:nth-child(3) {
  font-size: 3.11vw;
}
.remindsetting .edit .time .week {
  margin-left: 3vw;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.66vw;
  /* border-right:1px solid #ccc ; */
}
.remindsetting .edit .time .week .weekItem {
  width: 100%;
  line-height: 2.8vw;
}
.remindsetting .edit .time .week .weekItem input {
  margin-left: 0.5vw;
  width: 1.4vw;
  height: 1.4vw;
}
.remindsetting .show {
  width: 50%;
  height: 100%;
  display: flex;
}
.remindsetting .show .text {
  width: 20%;
  height: 100%;
  font-size: 2.1vw;
  padding-left: 0.5vw;
  padding-top: 0.5vw;
  /* background: red; */
}
.remindsetting .show .text button {
    writing-mode: vertical-lr;
    width: 20%;
    height: 30%;
    margin-left: 1vw;
    margin-top: 1vw;
}
.remindsetting .show .clocklist {
  width: 80%;
  height: 100%;
  display: flex;
  padding: auto;
  flex-direction: column;
  padding-top: 3vw;
  overflow-y:auto;
}
.remindsetting .show .clocklist .clockItem {
  width: 80%;
  height: 25%;
  background: rgba(247, 247, 247, 1);
  border-radius: 1.8vw;
  display: flex;
  align-items: center;
  /* line-height: 30%; */
  margin-bottom: 2vw;
}
.remindsetting .show .clocklist .clockItem .infor {
  width: 80%;
  height: 100%;
}
.remindsetting .show .clocklist .clockItem .infor .time {
  padding-left: 2vw;
  font-size: 2.5vw;
}
.remindsetting .show .clocklist .clockItem .infor .day {
  padding-left: 2vw;
}
.remindsetting .show .clocklist .clockItem .open {
  width: 15%;
  height: 25%;
  background: #ccc;
  border-radius: 2vw;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-left: 0.11vw;
}
.remindsetting .show .clocklist .clockItem .open .round {
  height: 90%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
}
</style>
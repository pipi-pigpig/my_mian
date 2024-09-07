<template>
    <div class="container_tip">
        <div class="headphoto">

        </div>
        <div class="greet">
            <p class="hello">王奶奶 {{ greet }}</p>
            <p class="date">{{ time.year }}年{{ time.month }}月{{ time.day }}日 星期{{ time.week }}</p>
        </div>
        <div class="time">
            <p class="hour">{{ time.hour }}:{{ time.minute }}</p>
        </div>
        <div class="wealth">

        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    name: 'tipMode',
    setup() {
        const time = ref({
            year:0,
            month: 0,
            day: 0,
            hour: 0,
            week: 0,
            minute: 0,
        })
        const weekarry = ['日', '一', '二', '三', '四', '五', '六']
        const greet = ref('')
        function update(){
            const nowtime = new Date()
            time.value.year = nowtime.getFullYear()
            time.value.month = nowtime.getMonth() + 1
            time.value.day = nowtime.getDate()
            time.value.hour = nowtime.getHours()
            time.value.minute = nowtime.getMinutes()
            time.value.week = weekarry[nowtime.getDay()]
            if (time.value.hour < 10) {
                time.value.hour = '0' + time.value.hour
            }
            if (time.value.minute < 10) {
                time.value.minute = '0' + time.value.minute
            }
            if (time.value.hour > 6 && time.value.hour < 9) {
                greet.value = '早上好'
            } else if (time.value.hour < 12) {
                greet.value = '上午好'
            } else if (time.value.hour < 18) {
                greet.value = '下午好'
            } else {
                greet.value = '晚上好'
            }
        }
        update()
        onMounted(()=>{
            setInterval(update, 500)
            
        })
        return {
            time,
            greet
        }
    }
}
</script>

<style scoped>
.container_tip {
  width: 50.2vw;
  aspect-ratio: 6;
  background-color: #fff;
  border-radius: 4.9vw;
  box-shadow: 0 0.55vw 0.20vw rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
flex-direction: row;
  align-items: center;
  padding: auto;
  
}
.headphoto {
    width: 5.58vw;
    aspect-ratio: 0.958;
    background: url(../../../assets/images/headphoto.png) no-repeat;
    background-size: cover;
    margin-right: 1.5vw;
}
.greet {
    width: 23vw;
}
.greet .hello {
    font-size: 1.86vw;
    font-weight: 400;
}
.greet .date {
    font-size: 1.24vw;
    font-weight: 400;
}
.time {
    width: 6.5vw;
    font-size: 2.6vw;
    font-weight: 400;
    margin-right: 2vw;
}
.wealth {
    width: 6.85vw;
    aspect-ratio: 1.4;
    background: url(../../../assets/images/wealthe.png) no-repeat;
    background-size: cover
}
</style>
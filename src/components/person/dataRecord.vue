<template>
  <div class="dataRecord">
            <div class="icon">
                <div class="back_icon">

                </div>
                <p>
                    检测记录
                </p>
                
            </div>
            <div class="recordData">
                
                <p>上次记录</p>
                <p class="time">{{data.time}}</p>
            </div>
            <div class="arrow">

            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
export default {
name:'dataRecord',
setup(){
        const data = ref({
            isDone:false,
            time:'2024.7.15 11:30'//后端获取
        })
        return {
            data
        }
    }
    
}
</script>

<style  scoped>
.dataRecord {
    width: 40%;
    height: 100%;
    margin: 0 auto;
    background-color: rgb(252, 246, 243);
    /* background-color: linear-gradient(270deg, rgba(252, 246, 243, 1) 0%, rgba(252, 246, 243, 0) 100%); */
    border-radius: 1.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    background: linear-gradient(90deg,  rgba(252, 246, 243, 1) 0%, rgba(252, 246, 243, 0) 100%);
}
.dataRecord .icon {
    width: 4.5vw;
    height: 4.5vw;
    background: white;
    /* background-color: white; */
    border-radius: 0.8vw;
    box-shadow: 0px 2.5px 2.5px  rgba(0, 0, 0, 0.25);
    margin-left:1vw;
    margin-right: 1vw;
}
.dataRecord .icon p {
    height: 1vw;
    font-size: 1vw;
    text-align: center;
    margin-top: 0.5vw;
}
.dataRecord .icon .back_icon {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/person/computer.png);
    background-size: cover;
    background-position: center;
}

.recordData{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.recordData p {
    font-size: 1vw;
    line-height: 2vw;
}
.recordData .time {

    color: rgba(52, 52, 52, 1);
}
.arrow {
    width: 0.8vw;
    height: 1.2vw;
    background: url(../../assets/images/person/allow.png);
    background-size: cover;
    background-position: center;
}
</style>
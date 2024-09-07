<template>
    <div class="heartrate">
        <div class="messure">心率</div>
        <div class="data">{{ heartRatedata }}</div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
name: 'heartRate',
    setup(){
        const heartRatedata = ref(74);
        return {
            heartRatedata
        }
    }
}
</script>
<style scoped>
.heartrate {
    width: 14.5vw;
    height: 3.11vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(242, 250, 241, 1);
    border-radius: 1.56vw;
    box-shadow: 0px 0.93vw 0.93vw rgba(0, 0, 0, 0.05);
}

.heartrate .messure {
    width: 60%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    margin-left: 1vw;
}

.heartrate .data {
    width: 40%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    text-align: center;
    margin-right: 1vw;
}
</style>
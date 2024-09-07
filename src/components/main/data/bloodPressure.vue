<template>
    <div class="bloodpressure">
        <div class="messure">血压</div>
        <div class="data">{{bloodPressuredata.high}}/{{ bloodPressuredata.low }}</div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'bloodPressure',
    setup() {
        const bloodPressuredata = ref({
            high: 120,
            low: 80
        })
        return {
            bloodPressuredata
        }
    }
  
}
</script>

<style scoped>
.bloodpressure {
    width: 14.5vw;
    height: 3.11vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(242, 250, 241, 1);
    border-radius: 1.56vw;
    box-shadow: 0px 0.93vw 0.93vw rgba(0, 0, 0, 0.05);
}

.bloodpressure .messure {
    width: 60%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    margin-left: 1vw;
}

.bloodpressure .data {
    width: 40%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    text-align: center;
    margin-right: 1vw;
}
</style>
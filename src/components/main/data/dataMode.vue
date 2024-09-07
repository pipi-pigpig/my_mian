<template>
    <div class="datashow">
        <p>今日数据</p>
        <data-warn></data-warn>
        <div class="showorign">
            <blood-pressure></blood-pressure>
            <blood-oxygen></blood-oxygen>
            <heart-rate></heart-rate>
            <per-index></per-index>
        </div>
    </div>
</template>

<script>
import BloodOxygen from './bloodOxygen.vue'
import BloodPressure from './bloodPressure.vue'
import DataWarn from './dataWarn.vue'
import HeartRate from './heartRate.vue'
import PerIndex from './perIndex.vue'
export default {
    //后续在各个数据组件中添加检测数据是否正常功能，并设定样式
    name:'dataMode',
    components:{
        BloodPressure, BloodOxygen, HeartRate, PerIndex, DataWarn
    }

}
</script>

<style scoped>
.datashow {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.showorign {
    width: 100%;
    height: 70%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vw;
}
</style>
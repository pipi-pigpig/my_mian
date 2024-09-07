<template>
  <div class="personPage">
    <person-information></person-information>
    <div class="person_main">
        <medecine-list></medecine-list>
        <health-score></health-score>
    </div>
    <div class="person_bottom">
        <health-report></health-report>
        <data-record></data-record>

    </div>
</div>
  
</template>

<script>
import HealthScore from './person/healthScore.vue'
import MedecineList from './person/medecineList.vue'

import personInformation from './person/personInformation.vue'
import HealthReport from './person/healthReport.vue'
import DataRecord from './person/dataRecord.vue'
export default {
  components: { personInformation, MedecineList, HealthScore, HealthReport, DataRecord },
    name:'personPage',
    
}
</script>

<style scoped>
.personPage {
    width: 100%;
    /* height: 1000px; */
    display: flex;
    flex-direction: column;
    padding: auto;
}

.person_main{
    width: 72vw;
    height: 22.3vw;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2vw;
}

.person_bottom{
    width: 100%;
    height: 9.5vw;
    /* background-color: rgb(19, 13, 13); */
    display: flex;
}


</style>
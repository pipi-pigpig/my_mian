<template>
  <div class="doctorItems">
        <div class="serveTip">
          请选择您要预约的医生
        </div>
        <div class="docItem" v-for="doc,index in doctors" :key="index" @click="sure($event,doc.name)">
          <div class="avator" :style="{ backgroundImage: 'url(' + doc.avator + ')' }">
            
        </div>
        <div class="information">
          <div class="top">
            <div class="docName">
            {{ doc.name }}
          </div>
          <div class="docPosition">
            {{ doc.position }}
          </div>
          <div class="docLable" v-if="doc.label.if">
            {{ doc.label.text }}
          </div>
          </div>
          
          <div class="docAddress">
            {{ doc.address }}
          </div>
          <div class="serBox">
            <div class="docServe" v-for="serve,index in doc.serve" :key="index">
            {{ serve }}
          </div>
          </div>
          
        </div>
        
        </div>
      </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed,} from 'vue'
export default {
name: 'doctorMode',
setup() {
    const year = ref('');
    const month = ref('');
    const day = ref('');
    const moon = ref('');
    const doctors = ref([
    {
    avator:require('@/assets/images/online/doctor_lin.png'),
    name:'林煜皓',
    position:'主任医师',
    address:'广州市南方医科大学附属第三医院',
    label:{
      if:true,
      text:'三甲医院'
    },
    serve:['线上问诊预约','门诊预约'],
  },
  {
    avator:require('@/assets/images/online/doctor_chen.png'),
    name:'陈洋洋',
    position:'副主任医师',
    address:'广州市南方医科大学附属第三医院',
    label:{
      if:true,
      text:'专业专心'
    },
    serve:['线上问诊预约','门诊预约'],
  },{
    avator:require('@/assets/images/online/doctor_zheng.png'),
    name:'郑妍芯',
    position:'副主任医师',
    address:'广州市南方医科大学附属第三医院',
    label:{
      if:false,
      text:'三甲医院'
    },
    serve:['线上问诊预约','门诊预约'],
  }
]);
function getDate(){
  let date = new Date();
   year.value = date.getFullYear();
   month.value = date.getMonth() + 1;
   day.value = date.getDate();
   if(date.getHours>6 && date.getHours<12){
     moon.value = '上午'
   }else if(date.getHours>12 && date.getHours<18){
     moon.value = '下午'
   }else{
     moon.value = '晚上'
   }
}
  const store = useStore();
  const receivedData = computed(() => store.state.preDateList);

  function sure(event,doc){
    let is = confirm('您确定预约吗？');
    if(is){
      alert('预约成功！')
      getDate();
      const obj = {
        time:year.value + '年' + month.value + '月' + day.value + '日'+moon.value,
        doctor:doc,
      }
      receivedData.value.push(obj);
    }
  }
return {
    doctors,
    sure
}
}
}
</script>

<style scoped>
.serveTip {
  font-size: 0.8vw;
  margin-top: 2vw;
  margin-left: 4vw;
  margin-bottom: 3vw;
}
.doctorItems{
  width: 55.8vw;
  height: 100%;
  /* background-color: yellow; */
  margin-left: 4vw;
  margin-right: 2vw;
  border-radius: 1.2vw;
  background-color: rgb(247, 247, 247, 1);
}
.docItem {
  width: 90%;
  height: 20%;
  border-radius: 2.8vw;
  background-color: rgba(253, 253, 253, 1);
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2vw;
}
.docItem .avator {
  width: 5.8vw;
  height: 5.8vw;
  background:  no-repeat;
  background-size: cover;
  margin-left: 1.5vw;
}
.information {
  margin-left: 1vw;

}
.information .top {
  display: flex;
  align-items: baseline;
}
.information .docName {
  font-size: 1.4vw;
  font-weight: 600;
  margin-right: 0.8vw;
}
.information .docPosition {
  font-size: 0.8vw;
  color: rgb(0, 0, 0);
  margin-right: 1vw;
}
.information .docLable {
  width: 6.35vw;
  height: 1.66vw;
  border-radius: 0.8vw;
  background-color: rgba(182, 214, 130, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1vw;
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
}
.information .docAddress {
  margin-top: 0.5vw;
  font-size: 0.7vw;
  color: rgb(131, 131, 131);
}
.serBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-top: 0.8vw; */
  
}
.information .docServe {
  width: 10vw;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1vw;
  background-color: rgba(249, 235, 227, 1);
  margin-top: 1vw;
  font-size: 1.2vw;
  margin-right: 1vw;
}
</style>
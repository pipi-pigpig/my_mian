<template>
  <div class="container_fun">
    <div class="functionItem" >
        <div class="fun_img" :style="{backgroundImage:'url(' + functionList[0].src + ')'}">
        </div>
    </div>
    <div class="functionItem" @click="ifShow = true">
        <div class="fun_img" :style="{backgroundImage:'url(' + functionList[1].src + ')'}">
        </div>
    </div>
    <div class="remindsetting" v-if="ifShow">
      <colock-edit ></colock-edit>
      
    </div>
    <div class="functionItem" >
        <div class="fun_img" :style="{backgroundImage:'url(' + functionList[2].src + ')'}">
        </div>
    </div>
    <div class="functionItem" >
        <div class="fun_img" :style="{backgroundImage:'url(' + functionList[3].src + ')'}">
        </div>
    </div>
  </div>
</template>

<script>

import { provide, ref } from 'vue'
import ColockEdit from './remid/colockEdit.vue'
export default {
  name: 'allFunction',
  components: {
    ColockEdit
  },
  setup(){
    const ifShow = ref(false)
    provide('ifShow',ifShow)
    const functionList = ref([
      { src:require("../../../assets/images/maiyao.png") , 
        to:''
      },
       
      { src: require("../../../assets/images/chiyao.png"),
        to:''
      } , 
      { src:require("../../../assets/images/xianshang.png"),
        to:'/onlineAsk'
      }  , 
     { src:require("../../../assets/images/zhengzhuang.png"),
        to:''
     }  
    ])
    return {
      functionList,
      ifShow
    }
  }
}
</script>

<style scoped>
.container_fun {
    width: 52vw;
    /* height: 10.05vw; */
    aspect-ratio: 5.2;
    background: rgb(255, 255, 255);
    border-radius: 5.58vw;
    box-shadow: 0 0.55vw 0.20vw rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 3vw;
    padding-right: 3vw;
    position: relative;
    /* margin-bottom: 2vw */
}
.functionItem {
  width: 7vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.fun_img {
  width: 6vw;
  height: 7vw;
  background-size: cover;
  /* background-position: center; */
}
.remindsetting {
  position: absolute;
  left:0;
  bottom: 0;
  width: 145%;
  height: 280%;
  background-color: rgb(255, 255, 255);
  border-radius: 2.8vw;
  box-shadow: 0px 10.76px 4px  rgba(171, 171, 171, 0.25);
  overflow: hidden;
  display: flex;
}

</style>
<template>
  <div class="container_todo">
    <out-mode v-show="ifShow" @click="changeShow($event)"></out-mode>
    <in-mode v-show="!ifShow"></in-mode>
    
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import OutMode from './outMode.vue'
import InMode from './inMode.vue'
export default {
  components: { OutMode, InMode },
  name: 'todoList',
  setup() {
    const todolist = ref(['早上空腹吃药','下午线上问诊','饭后走一走','晚上和崽崽视频通话','吃饭','睡觉','打豆豆'])//后续从数据库查
    const ifShow = ref(true)
    function changeShow(event) {
      event.stopPropagation();
      ifShow.value = !ifShow.value
    }
    provide('todolist', todolist)
    provide('ifShow', ifShow)
    return {
      todolist,
      ifShow,
      changeShow
    }
  }
}
</script>

<style scoped>
.container_todo {
    width: 52.8vw;
    /* height: 7.26vw; */
    aspect-ratio: 7.28;
    border-radius: 2.79vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0.55vw 0.20vw rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
    /* overflow-y: auto; */
    position: relative;
}
</style>
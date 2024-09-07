<template>
    <div class="todo_item_container">
        <div class="index_round">
            {{index+1}}
        </div>
        <div class="infor_box">
            {{ item }}

        </div>
        <div class="delete" @click="deleteItem">
            -
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
name: "todoItem",
  props: {
    index:Object,
    item:Object
  },
  setup() {
    const todolist = inject('todolist');
    function deleteItem(event){
        event.stopPropagation();
        todolist.value.splice(this.index+1,1);
    }
    return {
      deleteItem
    }
  }

}
</script>

<style scoped>
.todo_item_container{
  width: 100%;
  height: 3vw;
  display: flex;
  padding: auto;
  align-items: center;
}
.infor_box{
    width: 25.6vw;
    height: 1.8675vw;
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 0.5vw;
    margin-left: 0.5vw;
    background-color: #ccc;
    border-radius: 0.518vw;
}
.index_round{
    width: 2.075vw;
    height: 2.075vw;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
.delete {
    width: 2.075vw;
    height: 2.075vw;
    border-radius: 50%;
    background-color: #ffffff;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #ccc 2px solid;
    user-select: none;
    cursor: pointer;
}
</style>
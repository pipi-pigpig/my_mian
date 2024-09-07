<template>
    <div class="container">
        <tip-mode></tip-mode>
        <show-photo></show-photo>
        <todo-list></todo-list>
        <all-function></all-function>
    </div>

</template>

<script>
import AllFunction from './function/allFunction.vue'
import ShowPhoto from './show/showPhoto.vue'

import tipMode from './tip/tipMode.vue'
import TodoList from './todo_list/todoList.vue'
export default {
    name: 'midMode',
    components: {
        tipMode,
        ShowPhoto,
        TodoList,
        AllFunction,

    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1vw;
}
</style>
<template>

        <div class="out">
            <div class="table">
                今日事项
            </div>
            <div class="todo_out">
                <div v-for="(item, index) in todolist" :key="index" class="todoitem">
                    {{ index + 1 }}.{{ item }}
                </div>
            </div>
        </div>
</template>

<script>
import { inject,  } from 'vue'
// import todoItem from './list/todoItem.vue'
export default {
    // components: { todoItem },
    name: 'outMode',
    setup() {
        const todolist = inject('todolist')
        return {
            todolist,
        }
    }
}
</script>

<style scoped>

.out {
    display: flex;
    align-items: center;
    justify-content: center;
}

.table {
    color: rgba(122, 161, 78, 1);
    font-size: 1.85vw;
    font-weight: 400;
    width: 8.92vw;
    margin-right: 2vw;
    /* position: sticky; */
}

.todo_out {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    width: 35vw;
    height: 7.26vw;
    /* max-width: 30vw; */
    /* column-count: auto; */
    column-gap: 1.5vw;
    column-fill: auto;
    padding: auto;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

.todoitem {
    font-size: 1.25vw;
    width: 12.6vw;
    height: 3.1vw;
    display: flex;
    text-align: left;
    align-items: center;
    break-inside: avoid;
    /* justify-content: center; */
}
</style>
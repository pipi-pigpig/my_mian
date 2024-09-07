<template>
    <div class="todo_in">
        <div class="table_in" @click="changeShow">
            今日事项
            <span>
                (点击此处返回)
            </span>

        </div>
        <div class="item_in">
            <todo-item v-for="(item, index) in todolist" :key="index" :index='index' :item="item"></todo-item>
            <div class="add_item">
                <div class="add_icon" @click="addNew"></div>
                <div class="add_text" ref="NewItem">
                    <input type="text" v-model="addItem" placeholder="请在此输入">
                    <div class="add_btn" @click="makeSure">确定</div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { inject, ref } from 'vue'
import todoItem from './list/todoItem.vue'
export default {
    components: { todoItem,},
    name: 'inMode',
    setup() {
        const todolist = inject('todolist')
        const addItem = ref('')
        const NewItem = ref(null)
        function addNew(event) {
            console.log(NewItem.value)
            event.stopPropagation();
            NewItem.value.style.display = 'flex'
        }
        function makeSure(event) {
            event.stopPropagation();
            todolist.value.push(addItem.value)
            addItem.value = ''

        }
        const ifShow = inject('ifShow')
        function changeShow() {
            ifShow.value = true
        }
        return {
            todolist,
            addItem,
            NewItem,
            addNew,
            makeSure,
            changeShow

        }
    }
}
</script>

<style scoped>


.todo_in {
    position: absolute;
    width: 150%;
    height: 18.5vw;
    background-color: #ffffff;
    left: 0;
    top: 0;
    border-radius: 2.6vw;
    display: flex;
    box-shadow: 0 0.55vw 0.20vw rgba(0, 0, 0, 0.1);
    border: 0.16vw solid rgba(242, 244, 245, 1);
    padding-top: 1vw;
    padding-bottom: 1vw;
    align-items: center;
}

.table_in {
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: rgb(0, 255, 0); */
    color: rgba(122, 161, 78, 1);
    font-size: 1.85vw;
    font-weight: 400;
    writing-mode: vertical-lr;
    user-select: none;
    cursor: pointer;
}
.table_in span {
    writing-mode: vertical-lr;
    user-select: none;
    cursor: pointer;
    font-size:0.85vw ;
}
.item_in {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    column-count: 2;
    column-gap: 1.5vw;
    column-fill: auto;
    padding: auto;
    align-items: center;
    justify-content: center;
}

.add_item {
    width: 100%;
    height: 3vw;
    display: flex;
    padding: auto;
    align-items: center;
}

.add_icon {
    width: 2.075vw;
    height: 2.075vw;
    border-radius: 50%;
    /* background-color: #ccc; */
    background: url(../../../assets/images/icon_add.png) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_text {
    width: 25.6vw;
    height: 1.8675vw;
    display: none;
    align-items: center;
    /* justify-content: center; */
    text-align: left;
    padding-left: 0.5vw;
    margin-left: 0.5vw;
    /* background-color: #ccc; */
    border-radius: 0.518vw;
}

.add_text input {
    width: 90%;
    border: none;
    outline: none;
    border-bottom: #ccc 2px solid;
}

.add_btn {
    user-select: none;
    color: rgba(122, 161, 78, 1);
    cursor: pointer;
}
</style>
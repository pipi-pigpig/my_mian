<template>
    <div class="messageShell">
        <message-inside v-show="ifShow"></message-inside>
        <div class="message" @click="change">

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import MessageInside from './messageInside.vue'
export default {
name:'messageMode',
    setup() {
        const ifShow = ref(false);
        function change() {
            ifShow.value = !ifShow.value
            console.log(ifShow.value)
        }
        return {
            ifShow,
            change,
        }
    },
components:{
    MessageInside
}
}
</script>


MessageInside<style scoped>
.messageShell {
    position: relative;
}
.message {
    width: 3vw;
    height: 3vw;
    background: url(../../../assets/images/message.png) no-repeat;
    background-size: cover;
    margin-right: 1vw;
    /* position: absolute; */
}
</style>
<template>
    <div class="perfusion">
        <div class="messure">灌注指数</div>
        <div class="data">{{ perfusionIndexdata }}</div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
name: 'perIndex',
    setup(){
        const perfusionIndexdata = ref(4.5)
        return {
            perfusionIndexdata
        }
    }
}
</script>
<style scoped>
.perfusion {
    width: 14.5vw;
    height: 3.11vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(242, 250, 241, 1);
    border-radius: 1.56vw;
    box-shadow: 0px 0.93vw 0.93vw rgba(0, 0, 0, 0.05);
}

.perfusion .messure {
    width: 60%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    margin-left: 1vw;
}

.perfusion .data {
    width: 40%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    text-align: center;
    margin-right: 1vw;
}
</style>
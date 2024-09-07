<template>
    <div class="bloodoxygen">
        <div class="messure">血氧</div>
        <div class="data">{{ bloodOxygendata }}</div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'bloodOxygen',
    setup() {
        const bloodOxygendata=ref(95)
        return {
            bloodOxygendata
        }
    }
}
</script>

<style scoped>
.bloodoxygen {
    width: 14.5vw;
    height: 3.11vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(242, 250, 241, 1);
    border-radius: 1.56vw;
    box-shadow: 0px 0.93vw 0.93vw rgba(0, 0, 0, 0.05);
}

.bloodoxygen .messure {
    width: 60%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    margin-left: 1vw;
}

.bloodoxygen .data {
    width: 40%;
    font-size: 1.2vw;
    font-weight: 400;
    color: #000000;
    text-align: center;
    margin-right: 1vw;
}
</style>
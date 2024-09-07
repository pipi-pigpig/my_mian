<template>
    <div class="settingShell">
        <setting-inside v-show="ifShow"></setting-inside>
        <div class="setting" @click="change">

        </div>

    </div>

</template>

<script>
import { ref } from 'vue'
import settingInside from './settingInside.vue'
export default {
  components: { settingInside },
    name:'settingMode',
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
    }
}
</script >

<style scoped>
.settingShell {
    position: relative;
}
.setting {
    width: 3vw;
    height: 3vw;
    background: url(../../../assets/images/setting.png) no-repeat;
    background-size: cover;
    margin-left: 10vw;
    /* left: 10vw; */
    
    /* position: absolute; */
    display: flex;
    /* z-index: 3; */
}

</style>
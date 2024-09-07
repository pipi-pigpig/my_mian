<template>
    <div class="mid">
        <mid-mode></mid-mode>
    </div>

    <right-mode></right-mode>
</template>

<script>
import midMode from './midMode.vue'
import rightMode from './rightMode.vue'
export default {
  name: 'mainMode',
    components: {
        midMode,
        rightMode
    }
}
</script>

<style scoped>
.mid {
    margin-right: 3vw;
}
</style>
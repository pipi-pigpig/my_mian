<template>
    <div class="datashow_icon">
        <div class="warn_icon">

        </div>
        <p class="warn">
            今日血压偏高
        </p>
    </div>
</template>

<script>
export default {
name:'dataWarn'
}
</script>

<style scoped>
.datashow_icon {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.5vw;
}

.warn_icon {
    width: 3.2vw;
    height: 2.5vw;
    background: url(../../../assets/images/warn.png) no-repeat;
    background-size: cover;
}

.warn {
    width: 100%;
    color: red;
    text-align: center;
    margin-top: 1.5vw;
}
</style>
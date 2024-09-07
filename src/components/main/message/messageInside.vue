<template>
    <div class="messageshow">
        <div class="messageitem">
            <div class="messageTopInfor">
                通知
            </div>
            <message-item></message-item>
        </div>
        <div class="trangle"></div>
    </div>
</template>

<script>
import messageItem from './messageItem.vue'
export default {
    components: { messageItem },
    name: 'messageInside',
}
</script>

<style scoped>
.messageshow {
    position: absolute;
    display: flex;
    left: -23vw;
    top: -1.3vw;
}

.messageTopInfor {
    width: 90%;
    height: 12.5%;
    display: flex;
    align-items: center;
    justify-content: left;
    /* border-bottom: 1px solid #ccc; */
    margin: 0 auto;
    font-size: 1.8vw;
    margin-left: 1vw;
}

.messageitem {
    position: absolute;
    width: 21vw;
    height: 46vw;
    background-color: rgba(247, 247, 247, 1);
    /* right: 0; */
    border-radius: 1.3vw;
    overflow-y: auto;
}

.trangle {
    top: 2vw;
    left: 21vw;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1vw solid transparent;
    border-left: 2vw solid rgba(247, 247, 247, 1);
    border-right: 1vw solid transparent;
    border-bottom: 1vw solid transparent;
    /* z-index: -1; */
}
</style>
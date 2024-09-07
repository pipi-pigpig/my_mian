<template>
    <div class="message_item_shell" v-for="item,index in messages" :key="index"
        :style="{ backgroundColor: item.ifSystem ? 'rgba(248, 252, 255, 1)' : 'transparent'}">
        <div class="avatar_shell" :style="{ backgroundImage: 'url(' + item.avatar + ')' }">

        </div>
        <div class="message_shell">
            <p class="message">
                {{ item.content }}
            </p>
            <p class="time">
                {{ item.time }}
            </p>
        </div>
        <div class="ifComplete_yes" v-if="item.ifComplete && item.ifSystem">
            已完成
        </div>
        <div class="ifComplete_no" v-if="!item.ifComplete && item.ifSystem">
            已取消
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'messageItem',
    setup() {
        const messages = ref([
            {
                name: '张三',//姓名
                avatar: require('../../../assets/images/avt.png'),//头像
                content: '您于2024年7月21日上午11:30与王小样医生的预约已完成，您于2024年7月21日上午11:30与王小样医生的预约已完成。',//消息内容
                time: '3分钟前',//时间
                ifSystem: true,//是否是系统消息
                ifComplete:true,//完成或取消
            },
            {
                name: '张三',//姓名
                avatar: require('../../../assets/images/avt.png'),//头像
                content: '您于2024年7月21日上午11:30与王小样医生的预约已取消。',//消息内容
                time: '3分钟前',//时间
                ifSystem: false,//是否是系统消息
                ifComplete: false,//完成或取消
            },
        ])
        return {
            messages
        }
    }
}
</script>

<style scoped>
.message_item_shell {
    width: 90%;
        height: 12.5%;
        display: flex;
        /* align-items: center; */
        /* justify-content: center; */
        /* border-bottom: 1px solid #ccc; */
        /*  background-color: rgba(248, 252, 255, 1); */
        margin: 0 auto;
        margin-top: 1.5vw;
}

.avatar_shell {
    width: 2.9vw;
    height: 2.9vw;
    /* border-radius: 50%; */
    /* background-color: #ccc; */
    margin-right: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.message_shell {
    width: 70%;
    height: 100%;
    /* background-color: red; */
    color:rgba(17, 41, 80, 1);
}

.message {
    font-size: 0.62vw;
}

.time {
    display: flex;
    font-size: 0.62vw;
    color:rgba(15, 98, 249, 1);
    margin-bottom: 0;
    margin-top: 1.2vw;
}
.ifComplete_yes {
    width: 3.1vw;
    height: 0.93vw;
    background-color: rgba(12, 224, 122, 1);
    color: white;
    border-radius: 0.62vw;
    font-size: 0.62vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20%;
    margin-bottom: 0;
}
.ifComplete_no {
    width: 3.1vw;
        height: 0.93vw;
        background-color: rgba(243, 48, 96, 1);
        color: white;
        border-radius: 0.62vw;
        font-size: 0.62vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20%;
        margin-bottom: 0;
}
</style>
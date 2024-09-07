<template>
    <div class="settingItemShell" v-for="item,index in settingItem" :key="index">
        <div class="settingItemImg" :style="{ backgroundImage: 'url(' + item.back + ')' }">

        </div>
        <div class="setting_infor">
            {{ item.infor }}
        </div>
        <div class="setting_allow" :style="{ backgroundImage: 'url(' + item.allow + ')' }">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'settingItem',
    setup() {
        const settingItem = ref([
            {
                back:require('../../../assets/images/updateinfor.png'),
                infor:'修改个人信息',
                allow:require('../../../assets/images/allow.png')
            },
            {
                back:require('../../../assets/images/Chat.png'),
                infor:'聊天设置',
                allow:require('../../../assets/images/allow.png')
            },
            {
                back: require('../../../assets/images/font.png'),
                infor: '字体大小',
                allow: require('../../../assets/images/allow.png')
            },
            {
                back: require('../../../assets/images/Document.png'),
                infor: '条款政策',
                allow: require('../../../assets/images/allow.png')
            },
            {
                back: require('../../../assets/images/user.png'),
                infor: '切换用户',
                allow: require('../../../assets/images/allow.png')
            },
    ])
        return {
            settingItem,
        }
    }
}
</script>

<style scoped>
.settingItemShell{
    width: 90%;
    height: 12.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
    user-select: none;
    cursor: pointer;
}
.settingItemImg{
    width: 2.625vw;
    height: 2.5vw;
    background-size: cover;
    background-repeat: no-repeat;
    /* margin-left: 10px; */
}
.setting_infor{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.2vw;
    margin-left: 1vw;
}
.setting_allow{
    width: 1.3vw;
    height: 1.245vw;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
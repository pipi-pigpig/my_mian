<template>
    <div :class="{ 'child-active': isActive }">
        <div class="main">
        <div class="img">

        </div>
        <div class="infor">
            个人信息
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    name: 'personNav',
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
.child-active {
    background: rgb(255, 255, 255);
    border-radius: 1.9vw;
    color: rgba(163, 197, 125, 1);
}
.child-active .main {
    background: rgb(255, 255, 255);
    color: rgba(163, 197, 125, 1);
}
.child-active .main .img {
    background: url(../../../assets/images/text1.png) no-repeat;
    background-size: cover;
}
.main {
    display: flex;
    flex-direction: row;
    width: 13.3vw;
    height: 3.6vw;
    /* aspect-ratio: 3.68 / 1; */
    border-radius: 1.9vw;
    align-items: center;
    justify-content: center;
    color: rgba(255, 128, 0, 1);
    /* margin-top: 2vw; */
    /* background: rgb(255, 255, 255); */
}

.img {
    width: 2vw;
    /* height: 2vw; */
    aspect-ratio: 0.915 / 1;
    background: url(../../../assets/images/text.png) no-repeat;
    background-size: cover;
    /* margin: auto; */
    margin-left: 2vw;
}

.infor {
    font-size: 1.55vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.07vw;
    width: 8.6vw;
}
</style>
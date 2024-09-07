<template>
    <div :class="{ 'child-active': isActive }">
        <div class="main">

            <div class="img" ref="imgdiv">

            </div>
            <div class="infor">
                首页
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'indexNav',
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
    background: url(../../../assets/images/home.png) no-repeat;
    background-size: cover;
}
.main {
    display: flex;
    flex-direction: row;
    width: 13.3vw;
    aspect-ratio: 3.68 / 1;
    border-radius: 1.9vw;
    align-items: center;
    justify-content: center;
    color: rgba(255, 128, 0, 1);
    /* color: rgba(255, 128, 0, 1); */
    /* background: rgb(255, 255, 255); */
}
.img {
    width: 2vw;
    /* height: 2vw; */
    aspect-ratio: 0.915 / 1;
    background: url(../../../assets/images/home1.png) no-repeat;
    background-size: cover;
    /* margin: auto; */
    margin-left: 2vw;
}
.infor {
    
    /* margin-right: 2.07vw; */
    font-size: 1.55vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.07vw;
    width: 8.6vw;
}
</style>
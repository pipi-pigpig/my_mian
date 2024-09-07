<template>
    <div class="back">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="side">
            <side-nav></side-nav>
        </div>
        <div class="main">
            <div class="show">
                    <router-view>
                    </router-view>
                
                    
                
            </div>

        </div>
    </div>
</template>

<script>
// import mainModeVue from './main/mainMode.vue'
import sideNav from './side/sideNav.vue'
export default {
    name: 'indexPage',
    components: {
        sideNav,
        // mainModeVue
    }
}
</script>

<style scoped>
.back {
    height: 100vh;
    width: 100vw;
    background-color: rgba(249, 235, 227, 1);
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;
}
.side {
    width: 17vw;
    height: 100vh;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.main {
    width: 83vw;
    height: 100vh;
    background-color: white;
    border-top-left-radius: 5.18vw;
    border-bottom-left-radius: 5.18vw;
    display: flex;
}
.show {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    /* padding: auto; */
}
.back .round {
    position: absolute;
    width: 23.96vw;
    aspect-ratio:  1/ 1;
    border-radius: 50%;
    background-color: rgba(242, 250, 241, 1);
    z-index: 1;
    /* padding: auto; */
}
.back .round:nth-child(1) {
    top: 45.3vw;
    left: 96.8vw;
    transform: translate(-50%, -50%);
}
.back .round:nth-child(2) {
    top: 9.25vw;
    left: 100.75vw;
    transform: translate(-50%, -50%);
}
.back .round:nth-child(3) {
    top: 46vw;
    left: 32.3vw;
    transform: translate(0%, -50%);
}
.back .round:nth-child(4) {
    top: -13.25vw;
    left: 48vw;
    /* transform: translate(-50%, -50%); */
}
.back .round:nth-child(5) {
    width: 20.2vw;
    aspect-ratio: 1 / 1;
    top: 18.18vw;
    left: 43.5vw;
    transform: translate(-50%, -50%);
}
</style>
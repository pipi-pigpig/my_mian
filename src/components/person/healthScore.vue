<template>
  <div class="score">
            <div class="back">
                <p>73</p>
            </div>
        </div>
</template>

<script>
export default {
name:'healthScore'
}
</script>

<style scoped>
.score {
    margin-left: 10%;
    width: 45%;
    height: 100%;
    /* background-color: rgba(243, 25, 25, 0.65); */
    border-radius: 1.2vw;
    /* margin: auto; */
    margin-top: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.back {
    width: 21.58vw;
    height: 21.58vw;
    background: url(../../assets/images/person/healthScore.png) no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(77, 77, 77, 1);
    font-size: 4.5vw;
    font-weight: 400;
    padding: auto;
}
.back p {
    margin-bottom: 15%;
}
</style>
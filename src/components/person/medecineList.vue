<template>
  <div class="medecineList">
            <div class="top">
                <div class="icon">
                    <div class="back">

                    </div>
                </div>
                <div class="linkBox">
                    <div class="text">
                        用药清单
                    </div>
                    <div class="arrow">

                    </div>
                </div>
            </div>
            
            <div class="listShow">
                <div class="item" v-for="item in medecines" :key="item.name">
                    <div class="medecineInfor">
                        <p class="med_name">
                            {{item.name}}
                        </p>
                        <p class="med_use">
                            {{item.eatTime}} {{item.times}} {{item.count}}
                        </p>
                    </div>
                    <div class="med_fun">
                        {{ item.function }}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'medecineList',
    setup(){
        const medecines = ref([
            {
                name:'盐酸二甲双弧片',
                eatTime:'饭前服用',
                times:'一日两次',
                count:'一次一粒',
                function:'降血糖',
            },
            {
                name:'盐酸二甲双弧片',
                eatTime:'饭前服用',
                times:'一日两次',
                count:'一次一粒',
                function:'降血糖',
            }
        ])
        return {
            medecines
        }
    }
}
</script>

<style scoped>
.medecineList {
    width: 45%;
    height: 100%;
    background-color: rgba(247, 247, 247, 0.65);
    border-radius: 1.2vw;
    /* margin: auto; */
    margin-top: 1vw;
    /* background-color: rgb(255, 0, 0); */
}
.medecineList .top {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    /* background-color: blue; */
}
.medecineList .top .linkBox {
    width: 75%;
    height: 50%;
    background-color: rgb(255, 255, 255);
    border-radius: 1.2vw;
    margin-left:1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
}
.medecineList .top .linkBox .text {
    width: 70%;
    font-size: 1.2vw;
}
.medecineList .top .linkBox .arrow {
    width: 0.8vw;
    height: 1.2vw;
    background: url(../../assets/images/person/allow.png);
    background-size: cover;
    background-position: center;
}
.medecineList .top .icon {
    width: 4.5vw;
    height: 4.5vw;
    background: white;
    /* background-color: white; */
    border-radius: 0.8vw;
    box-shadow: 0px 2.5px 2.5px  rgba(0, 0, 0, 0.25);
    margin-left:1vw
}
.medecineList .top .icon .back {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/person/medicine.png);
    background-size: cover;
    background-position: center;
}
.medecineList .listShow {
    width: 90%;
    height: 70%;
    margin: 0 auto;
    /* background-color: rgba(255, 0, 0, 0.65);
     */
     background: url(../../assets/images/person/back.jpg) no-repeat;
    background-size: 100%;
    background-position: center;
    border-radius: 1.2vw;
    overflow-y: auto;
}
.medecineList .listShow .item {
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    padding: 2vw;
}
.medecineList .listShow .item .medecineInfor {
    width: 80%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
}
.medecineList .listShow .item p {
    width: 100%;
    text-align: left;
}
.med_name {
    font-size: 1.2vw;
}
.med_use {
    font-size: 0.8vw;
    color: rgba(166, 166, 166, 1);
}
.med_fun {
    width: 6.35vw;
  height: 1.66vw;
  border-radius: 0.8vw;
  background-color: rgba(124, 198, 121, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1vw;
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
}
</style>
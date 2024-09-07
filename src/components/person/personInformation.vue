<template>
  <div class="person_top">
        <div class="icon_infor">
            <div class="icon">
            <div class="back_icon">

            </div>
            
        </div>
        <div class="infor">
            个人基本信息
        </div>
        </div>
        
        <div class="information">
            <div class="edit" v-show="ifShow">
                <div>
                姓名：    <input type="text" name="name" v-model="input.name">
                </div>
                <div>
                年龄：    <input type="text" name="age" v-model="input.age">
                </div>
                <div>
                体重：    <input type="text" name="weight" v-model="input.weight">
                </div>
                <div>
                身高：    <input type="text" name="height" v-model="input.height">
                </div>
                <div>
                联系电话：    <input type="text" name="phone" v-model="input.phone">
                </div>
                <div>
                所在地区：    <input type="text" name="address" v-model="input.address">
                </div>
                <div><button @click="update">确定</button></div>
                
            </div>
            <div class="base" @click="show">
                <p class="personname">
                    {{ person.name }}
                </p>
                <p class="age">
                    年龄：{{ person.age }}
                </p>
                
                <p class="weight">
                    体重：{{ person.weight }}
                </p>
                <p class="height">
                    身高：{{ person.height }}
                </p>
            </div>
            <div class="address_phone" @click="show">
                <p class="phone">
                    联系电话：{{ person.phone }}
                </p>
                <p class="address">
                    所在地区：{{ person.address }}
                </p>
            </div>
        </div>
        
        <div class="record">
            <p class="disease">
                患病记录：{{ person.record.disease }}
            </p>
            <p class="medecine">
                用药记录：{{ person.record.medecine }}
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'personInformation',
    setup() {
        const input = ref({
            name:'',
            age:'',
            height:'',
            weight:'',
            phone:'',
            address:'',
        })
        const person = ref({
            name:'王莺莺',
            age:'18',
            height:'180cm',
            weight:'80kg',
            phone:'12345678910',
            address:'北京市海淀区',
            record:{
                disease:'轻度高血压',
                medecine:'高血压药物',
            }
        })
        const ifShow = ref(false)
        function show() {
            ifShow.value = !ifShow.value
        }
        function init() {
            input.value.name = person.value.name
            input.value.age = person.value.age
            input.value.height = person.value.height
            input.value.weight = person.value.weight
            input.value.phone = person.value.phone
            input.value.address = person.value.address
        }
        init();
        function update() {
            person.value.name = input.value.name
            person.value.age = input.value.age
            person.value.height = input.value.height
            person.value.weight = input.value.weight
            person.value.phone = input.value.phone
            person.value.address = input.value.address
            alert('修改成功')
            ifShow.value = false
        }
        return {
            person,
            input,
            update,
            ifShow,
            show
        }
    }
}
</script>

<style scoped>
.person_top{
    margin: 0 auto;
    margin-top: 1vw;
    width: 72vw;
    height: 12.9vw;
    background-color: rgba(252, 246, 243, 1);
    box-shadow: 0px 6.65px 13.3px  rgba(0, 0, 0, 0.1);
    border-radius: 1.6vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.person_top .icon {
    width: 6vw;
    height: 6vw;
    background-color: white;
    border-radius: 0.8vw;
    box-shadow: 0px 2.5px 2.5px  rgba(0, 0, 0, 0.25);
    margin-bottom: 0.5vw;
}
.back_icon {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/person/baseInformation.png) no-repeat;
    background-size: 80%;
    background-position: center;
}
.information {
    display: flex;
    margin-left: 4vw;
    align-items: center;
    position: relative;
}
.edit {
    top: 120%;
    position: absolute;
    width:100%;
    /* height: 12vw; */
    background-color: white;
    /* border-radius: 15%; */
    box-shadow: 0px 2.5px 2.5px  rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.edit div {
    width: 80%;
    line-height: 3vw;
}
.edit div input {
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 1px black solid;
}
.edit div button {
    width: 20%;
    background-color: rgb(168, 193, 86);
}
.infor {
    font-size: 1.2vw;
}
.base {
    width: 12.45vw;
    height: 9.3vw;
    background: white;
    border-radius: 0.8vw;
    display: flex;
    flex-direction: column;
    margin-right: 3vw;
    padding: 0.5vw;
}
.base p {
    font-size: 1vw;
    line-height: 1.8vw;
    text-align: left;
    margin: auto;
    width: 60%;
}
.base .personname {
    font-size: 1.2vw;
    font-weight: 600;
}
.address_phone {
    width: 19.5vw;
    height: 8.3vw;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
}
.address_phone p {
    font-size: 1.245vw;
    line-height: 2vw;
    width: 80%;
    text-align: left;
    margin: auto;
}
.record {
    width: 19.5vw;
    height: 8.3vw;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.record p {
    font-size: 1.245vw;
    line-height: 2vw;
    width: 80%;
    text-align: left;
    margin: auto;
}
</style>
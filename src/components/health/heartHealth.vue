<template>
    <div class="show">
        <div class="tip">
          <div class="tipItem">
            <div class="round" id="shousuo"></div>
            <div class="tiptext">
              收缩压
            </div>
          </div>
          <div class="tipItem">
            <div class="round" id="shuzhang"></div>
            <div class="tiptext">
              舒张压
            </div>
          </div>
          <div class="tipItem">
            <div class="round" id="xinlv"></div>
            <div class="tiptext">
              心率
            </div>
          </div>
          
        </div>
        <div class="changebuttom">
            <div class="male" name="male"  @click="changecss($event)" ref="male">
                男
            </div>
            <div class="female" name="female" @click="changecss($event)">
                 女
            </div>
        </div>
        <div class="agechange">
          <div class="changeItems">
            <div class="changeItem" v-for="item,index in divs" :key="index" @click="changeage($event,index)">
              {{ item }}
            </div>
          </div>
        </div>
        <div ref=chart style="width: 100%; height: 100%;"></div>
    </div>
  
</template>

<script>
import * as echarts from 'echarts';
import { ref } from 'vue';
import {onMounted} from 'vue';
export default {
    name:'heartHealth',
    setup() {
    const perIndex = ref({
      time: ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50','10:00', '10:10', '10:20', '10:30', '10:40', '10:50',],
      saturation1: [96, 95, 94, 93, 95, 96, 97,99,98,96,97,95,95, 94, 93, 95, 96, 97,],
      saturation2: [88, 85, 84, 83, 85, 88, 87,88,88,88,87,85,85, 84, 83, 85, 88, 87,],
      saturation3: [100, 107, 77, 76, 107, 100, 79,100,100,100,79,140,120, 77, 76, 110, 100, 79,],
      

    });
    const divs = ref(['16-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '65-',])
    const malewarn = ref({
      hign:[115,115,115,117,120,120,1210,134,137,148,150],
      low:[73,73,75,76,80,81,82,84,84,86,90]
    })
    const femalewarn = ref({
      hign:[110,110,112,114,116,112,128,130,139,145,147],
      low:[70,71,73,74,77,78,79,80,82,83,86]
    })
    const marklineList = ref(null)
    const ageindex = ref(0)
    const male = ref(null)
    const chart = ref(null);
    const myChart = ref(null);
    const divIndex=ref('')
    const initChart = () => {
      if (chart.value) {
        myChart.value = echarts.init(chart.value);
        const option = {
            
          tooltip: {
            trigger: 'axis'
          },
          grid:{
            left:'10%',
            top:'10%'
          },
          dataZoom: [
            {
            
              type:'inside',
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              start: 0,
              end: 50
            }
          ],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: perIndex.value.time,
            
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:20
            }
            
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function (value) {
                
                return value;
              },
              offset:23,
              fontSize:16,
              margin:20
            },
            min: 40,//设置 y 轴最小值
            max: 200,//设置 y 轴最大值
            interval: 20,//设置 y 轴刻度间隔
            splitNumber: 11,//设置 y 轴刻度数量
          },
          series: [
            {
              name: 'spo2',
              type: 'line',
              lineStyle: {
                color: 'blue',
                width:1
              },
              symbol:'circle',//设置节点为圆形
              data: perIndex.value.saturation1,
              areaStyle: {
                color:'transparent'
              },//设置填充
              markLine: {
                silent: true,
                data: [
                  {
                    yAxis: 95,
                    lineStyle: {
                      color: 'orange'
                    },
                    label: {
                      position: 'start',
                      formatter: '95%',
                      color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              }
            },
            {
              name:'1',
              type: 'line',
              lineStyle: {
                color: 'red',
                width:1
              },
              symbol:'circle',//设置节点为圆形
              data: perIndex.value.saturation2,
              areaStyle: {
                color:'transparent'
              },
            },
            {
              name:'1',
              type: 'line',
              lineStyle: {
                color: 'rgba(73, 242, 174, 1)',
                width:1
              },
              symbol:'circle',//设置节点为圆形
              data: perIndex.value.saturation3,
              itemStyle: {
                color: 'rgba(73, 242, 174, 1)',
                width:1
              },
              areaStyle: {
                color:'transparent'
              },
            }
          ],
          
        };


        myChart.value.setOption(option);
      }
    };
    function changeage(event,index){
      ageindex.value = index
      var div = document.getElementsByClassName("changeItem");
      for(var i=0;i<div.length;i++){
        div[i].style.backgroundColor = "rgb(242, 250, 241)";
      }
      event.target.style.backgroundColor = "rgba(255, 94, 0, 1)";
      myChart.value.setOption({
                xAxis: {
                    data: perIndex.value.time
                },
                series:[{
                    // data:perIndex.value.saturation1,
                    markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.hign[index],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.hign[index],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              }
                    
                },
                {
              type: 'line',
              lineStyle: {
                color: 'red',
                width:1
              },//设置折线颜色
              
              // symbol:'circle',//设置节点为圆形
              // data: perIndex.value.saturation2,
              itemStyle:{
                color:'red'
              },
              markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.low[index],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.low[index],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              },
              
              areaStyle: {
                color:'transparent'
              },//设置填充
            }
                ]
            })
    }
    function changecss(event){
        var div = document.getElementsByName("male");
        var div2 = document.getElementsByName("female");
        console.log(div[0])
        div[0].style.backgroundColor = "rgb(242, 250, 241)";
        div2[0].style.backgroundColor = "rgb(242, 250, 241)";
        event.target.style.backgroundColor = "rgba(255, 94, 0, 1)";
        var name = event.target.className;
        if(name == 'male'){
          marklineList.value = malewarn.value
            myChart.value.setOption({
                xAxis: {
                    // data: perIndex.value.time
                },
                series:[{
                    // data:perIndex.value.saturation1,
                    lineStyle: {
                      color: 'blue',
                      width:1
                    },//设置折线颜色
                    markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.hign[ageindex.value],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.hign[ageindex.value],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              }
                    
                },
                {
              type: 'line',
              lineStyle: {
                color: 'red',
                width:1
              },//设置折线颜色
              
              symbol:'circle',//设置节点为圆形
              // data: perIndex.value.saturation2,
              itemStyle:{
                color:'red'
              },
              markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.low[ageindex.value],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.low[ageindex.value],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              },
              areaStyle: {
                color:'transparent'
              },//设置填充
            }
                ]
            })
        }else{
          marklineList.value = femalewarn.value
            myChart.value.setOption({
                // xAxis: {
                //     // data: perIndex.value.time//不写dataZoom报错
                // },
                series:[{
                    // data:perIndex.value.saturation1,
                    markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.hign[ageindex.value],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.hign[ageindex.value],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              }
                    
                },
                {
              type: 'line',
              lineStyle: {
                color: 'red',
                width:1
              },//设置折线颜色
              
              // symbol:'circle',//设置节点为圆形
              // data: perIndex.value.saturation2,
              markLine: {
                      silent: true,
                      data: [
                        {
                          yAxis: marklineList.value.low[ageindex.value],
                          lineStyle: {
                          color: 'orange'
                        },
                        label: {
                        position: 'end',
                        formatter:  marklineList.value.low[ageindex.value],
                        color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              },
              itemStyle:{
                color:'red'
              },
              areaStyle: {
                color:'transparent'
              },//设置填充
            }
                ]
            })
        }
    }
    onMounted(() => {
      // console.log(chart.value)
      initChart();
      male.value.click()//模拟用户点击防止报错
      var first = document.getElementsByClassName("changeItem")[0];
      first.click();
    });

    return {
      perIndex,
      chart,
      male,
      initChart,
      changecss,
      divs,
      malewarn,
      femalewarn,
      divIndex,
      changeage,
      marklineList,
      ageindex
    };
  }
}
</script>

<style scoped>
.show {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.tip {
  margin-top: 2.5%;
  margin-left: 6%;
  width: 20vw;
  height: 2vw;
  /* background-color: black; */
  display: flex;
}
.tipItem {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
}
.tipItem .round{
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  background-color: red;
  margin-right: 0.5vw;
}
#shousuo {
  background-color: rgba(36, 132, 242, 1);
}
#shuzhang {
  background-color: rgba(73, 242, 174, 1);
}
#xinlv {
  background-color: rgba(255, 105, 105, 1);
}
.tiptext {
  font-size: 1.2vw;
}
.changebuttom {
    position: absolute;
    width: 5.6vw;
    aspect-ratio: 2;
    /* background-color: red; */
    top: -10%;
    border-radius: 2.5vw;
    overflow: hidden;
    display: flex;
}
.agechange {
  position: absolute;
    width: 75%;
    height: 2.8vw;
    /* background-color: red; */
    top: -10%;
    left: 15%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.agechange .changeItems {
  width: 100%;
  height: 60%;
  display: flex;
  /* background-color: blue; */
  border-radius: 3vw;
  overflow: hidden;
  
}
.agechange .changeItems .changeItem {
  width: 9.1%;
  height: 100%;
  background-color: rgb(242, 250, 241);
  display: flex;
  justify-content: center;
    align-items: center;
    font-size: 1.2vw;
    box-shadow: 0px 18.1px 18.1px  rgba(0, 0, 0, 0.05);
    user-select: none;
    cursor: pointer;
}
.changebuttom div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    background-color: rgb(242, 250, 241);
    font-size: 1.2vw;
}
.changebuttom .child {
    background-color: rgba(255, 94, 0, 1);
}
</style>
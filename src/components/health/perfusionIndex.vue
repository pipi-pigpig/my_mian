<template>
    <div class="show">
        <div class="changebuttom">
            <div class="child" name="child"  @click="changecss($event)" ref="child">
                幼儿
            </div>
            <div class="adult" name="adult" @click="changecss($event)">
                 成人
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
    name:'perfusionIndex',
    setup() {
    const perIndex = ref({
      time: ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50','10:00', '10:10', '10:20', '10:30', '10:40', '10:50',],
      saturation: [96, 95, 94, 93, 95, 96, 97,99,98,96,97,95,95, 94, 93, 95, 96, 97,]
    });
    const child = ref(null)
    const chart = ref(null);
    const myChart = ref(null);

    const initChart = () => {
      if (chart.value) {
        myChart.value = echarts.init(chart.value);
        const option = {
            title:{
                text:'PI',
                left:'4%',
                top:'10%'
            },
          tooltip: {
            trigger: 'axis'
          },
          grid:{
            left:'10%',
            top:'20%'
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
                if (value === 95) {
                  return '{orange|' + value + '%}';
                }
                return value + '%';
              },
              rich: {
                orange: {
                  color: 'orange',
                  fontSize:16
                }
              },
              offset:23,
              fontSize:16,
              margin:20
            },
            min: 82,//设置 y 轴最小值
            max: 100,//设置 y 轴最大值
            interval: 2,//设置 y 轴刻度间隔
            splitNumber: 11,//设置 y 轴刻度数量
          },
          series: [
            {
              name: 'spo2',
              type: 'line',
              lineStyle: {
                color: 'blue',
                width:1
              },//设置折线颜色
              // smooth: true,//设置折线图平滑
              // symbol: 'none',//设置无节点
              symbol:'circle',//设置节点为圆形
              data: perIndex.value.saturation,
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
            }
          ],
          
        };


        myChart.value.setOption(option);
      }
    };
    function changecss(event){
        var div = document.getElementsByName("child");
        var div2 = document.getElementsByName("adult");
        console.log(div[0])
        div[0].style.backgroundColor = "rgb(242, 250, 241)";
        div2[0].style.backgroundColor = "rgb(242, 250, 241)";
        event.target.style.backgroundColor = "rgba(255, 94, 0, 1)";
        var name = event.target.className;
        // console.log(event.target.className)
        if(name == 'child'){
            // console.log('child');
            myChart.value.setOption({
                xAxis: {
                    data: perIndex.value.time
                },
                series:[{
                    data:perIndex.value.saturation,
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
                    
                }
                ]
            })
        }else{
            myChart.value.setOption({
                xAxis: {
                    data: perIndex.value.time//不写dataZoom报错
                },
                series:[{
                    data:perIndex.value.saturation,
                    markLine: {
                silent: true,
                data: [
                  {
                    yAxis: 98,
                    lineStyle: {
                      color: 'orange'
                    },
                    label: {
                      position: 'start',
                      formatter: '98%',
                      color: 'orange',
                        fontSize:16,
                        distance:20
                    },
                    
                  }
                ],
                symbol: ['none', 'none']
              }
                }
                ]
            })
        }
    }
    onMounted(() => {
      // console.log(chart.value)
      initChart();
      child.value.click()//模拟用户点击防止报错
    });

    return {
      perIndex,
      chart,
      child,
      initChart,
      changecss,
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
.changebuttom {
    position: absolute;
    width: 9.6vw;
    aspect-ratio: 3;
    /* background-color: red; */
    top: -10%;
    border-radius: 2.5vw;
    overflow: hidden;
    display: flex;
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
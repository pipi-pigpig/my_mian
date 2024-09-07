<template>
    <div class="show">
        <div ref=chart style="width: 100%; height: 100%;"></div>
        
    </div>
  
</template>

<script>
import * as echarts from 'echarts';
import { ref } from 'vue';
import {onMounted} from 'vue';
export default {
    name:'healthOxygen',
    setup() {
      const myChart = ref(null);
    //测试 6666

    // const oxygenData = ref({
    //   time: ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50','10:00', '10:10', '10:20', '10:30', '10:40', '10:50',],
    //   saturation: [96, 95, 94, 93, 95, 96, 97,99,98,96,97,95,95, 94, 93, 95, 96, 97,]
    // });
      const oxygenData = ref({
      time: [],
      saturation: []
    });
    const chart = ref(null);

    const initChart = () => {
      if (chart.value) {
         myChart.value = echarts.init(chart.value);

        const option = {
            title:{
                text:'SpO2',
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
            data: oxygenData.value.time,
            
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
            min: 92,//设置 y 轴最小值
            max: 100,//设置 y 轴最大值
            interval: 1,//设置 y 轴刻度间隔
            splitNumber: 10,//设置 y 轴刻度数量
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
              data: oxygenData.value.saturation,
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
                      position: 'end',
                      formatter: '警戒线: 95%'
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
    var ws = new WebSocket("ws://localhost:8084/chat")
      ws.onopen = function(){
        console.log("已连接")
      }
      ws.onmessage = function (evt) {
        var dataStr = evt.data;
        console.log(dataStr)
        var json = JSON.parse(dataStr);
        let spo2 = json.spo2;
        let time = json.time;
        oxygenData.value.time.push(time);
        oxygenData.value.saturation.push(spo2);
        console.log(oxygenData.value)
       myChart.value.setOption({
          xAxis:{data:oxygenData.value.time},
          series:[
            {data: oxygenData.value.saturation,}
          ]
       })
    }
    onMounted(() => {
      // console.log(chart.value)
      initChart();
      
    });

    return {
      oxygenData,
      chart,
      initChart,
      myChart
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
}
</style>
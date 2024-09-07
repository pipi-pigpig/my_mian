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
    name:'healthWeight',
    setup() {
    const oxygenData = ref({
      time: ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50','10:00', '10:10', '10:20', '10:30', '10:40', '10:50',],
      saturation: [51,51.4,51,52,51,52,51,52,51,52,51,52,51,52,51,52,51,52]
    });

    const chart = ref(null);

    const initChart = () => {
      if (chart.value) {
        const myChart = echarts.init(chart.value);

        const option = {
            title:{
                text:'体重/kg',
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
            //   type: 'slider',//设置数据缩放类型为滑动条
              type:'inside',//设置数据缩放类型为内置
              start: 0,
              end: 80,
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
                
                return value ;
              },
              offset:23,
              fontSize:16,
              margin:20
            },
            min: 30,//设置 y 轴最小值
            max: 70,//设置 y 轴最大值
            interval: 5,//设置 y 轴刻度间隔
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
            }
          ],
          
        };

        myChart.setOption(option);
      }
    };

    onMounted(() => {
      // console.log(chart.value)
      initChart();
    });

    return {
      oxygenData,
      chart,
      initChart
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
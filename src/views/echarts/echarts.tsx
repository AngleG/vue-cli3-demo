import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import eCharts from 'echarts';
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
@Component
export default class Echarts extends Vue {
  // eslint-disable-next-line
  myChart: any = null;

  option = {
    baseOption: {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    },
    media: [
      {
        query: {
          maxAspectRatio: 1,
        },
        option: {
          legend: {
            right: 'center',
            bottom: 0,
            orient: 'horizontal',
          },
        },
      },
    ],
  };

  mounted() {
    this.$nextTick(() => {
      this.myChart = eCharts.init(this.$refs.myChart);
      this.myChart.setOption(this.option);
      // false: 事件为冒泡传递(由内到外)、 true：事件为捕获传递
      window.addEventListener('resize', this.chartResize, false);
    });
  }

  chartResize() {
    (this.$throttle(() => {
      this.myChart.resize();
    }, 200))();
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.chartResize, false);
  }

  render() {
    return <div>
      <div ref="myChart" style="height: 400px;"/>
    </div>;
  }
}

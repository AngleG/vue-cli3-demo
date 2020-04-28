import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import eCharts from 'echarts';
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');

const chartList = ['barChart', 'lineChart'];

@Component
export default class Echarts extends Vue {
  // eslint-disable-next-line
  barChart: any = null;
  // eslint-disable-next-line
  lineChart: any = null;

  barOption = {
    baseOption: {
      title: {
        text: '入门示例',
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
  };

  lineOption = {
    baseOption: {
      title: {
        text: '堆叠区域图',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    },
    // media: [
    //   {
    //     query: {
    //       maxWidth: 400,
    //     },
    //     option: {
    //       legend: {
    //         bottom: 0,
    //         right: 'center',
    //         orient: 'horizontal',
    //       },
    //     },
    //   },
    //   {
    //     option: {
    //       legend: {
    //         top: 0,
    //         orient: 'horizontal',
    //       },
    //     },
    //   },
    // ],
  };

  mounted() {
    this.$nextTick(() => {
      this.barChart = eCharts.init(this.$refs.barChart);
      this.lineChart = eCharts.init(this.$refs.lineChart);
      this.barChart.setOption(this.barOption);
      this.lineChart.setOption(this.lineOption);
      // false: 事件为冒泡传递(由内到外)、 true：事件为捕获传递
      window.addEventListener('resize', this.chartResize, false);
    });
  }

  chartResize() {
    (this.$throttle(() => {
      chartList.forEach((key) => {
        this[key].resize();
      });
    }, 200))();
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.chartResize, false);
    chartList.forEach((key) => {
      this[key].dispose();
    });
  }

  render() {
    return <el-row>
      <el-col xs={24} sm={12} md={12} lg={12} xl={12}>
        <div ref="barChart" style="width: 100%; height: 400px;"/>
      </el-col>
      <el-col xs={24} sm={12} md={12} lg={12} xl={12}>
        <div ref="lineChart" style="width: 100%; height: 400px;"/>
      </el-col>
    </el-row>;
  }
}

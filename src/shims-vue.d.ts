declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}
declare const echarts: any;
declare module 'echarts' {
  export = echarts;
}

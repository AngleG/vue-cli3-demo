import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './lib/vue-component';
import './lib/global';
import './lib/vue-directive';

declare module 'vue/types/vue' {
  // 声明为Vue补充的东西
  interface Vue {
    // eslint-disable-next-line
    [propsName: string]: any;
  }
}

Vue.config.productionTip = false;

Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');

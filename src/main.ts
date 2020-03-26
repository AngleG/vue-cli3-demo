import Vue from 'vue';
import Element from 'element-ui';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

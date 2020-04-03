import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface BreadcrumbOptions {
  path: string;
  name: string;
}
const defaultBreadcrumbList: BreadcrumbOptions[] = [];

export default new Vuex.Store({
  state: {
    breadcrumbList: defaultBreadcrumbList,
  },
  // getter可以认为是 store 的计算属性
  getters: {
    BREADCRUMBLIST(state) {
      return state.breadcrumbList;
    },
  },
  mutations: {
    NEW_BREADCRUMB_LIST(state, newValue) {
      console.log(newValue, '===提交的修改state');
      const { name, path, type } = newValue;
      if (type === 'add') {
        state.breadcrumbList.push({ name, path });
      } else if (type === 'delete') {
        state.breadcrumbList = state.breadcrumbList.filter((item) => item.path !== path);
      }
    },
  },
  actions: {
    updateBreadcrumblist(state, newVal) {
      state.commit('NEW_BREADCRUMB_LIST', newVal);
      console.log(state.state, '前端全局状态属性...');
    },
  },
  modules: {
  },
});

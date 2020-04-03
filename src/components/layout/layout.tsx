import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AppHeader from './header';
import AppSidebar from './sidebar';
import AppBreadcrumb from './breadcrumb';
import '../../assets/styles/layout.scss';

@Component({
  components: {
    AppHeader,
    AppSidebar,
    AppBreadcrumb,
  },
})
export default class Layout extends Vue {
  render() {
    return <el-container class="app-container">
      <app-header/>
      <el-container>
        <app-sidebar/>
        <el-main>
          <app-breadcrumb/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>;
  }
}

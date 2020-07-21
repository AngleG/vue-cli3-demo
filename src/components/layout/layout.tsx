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
  show = true;

  render() {
    return <el-container class="app-container">
      <app-header/>
      <el-container>
        <app-sidebar/>
        <el-main>
          <app-breadcrumb/>
          <el-col span={24} class="app-main-content">
            <transition name="slide-fade">
              {this.show ? <router-view/> : null}
            </transition>
          </el-col>
        </el-main>
      </el-container>
    </el-container>;
  }
}

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '../../assets/logo.png';

@Component
export default class AppHeader extends Vue {
  render() {
    return <el-header>
      <el-row>
        <el-col span={12} class="tl">
          <img src='../../assets/logo.png' width="34" alt="abc"/>
          <span>小呆哞，大容量</span>
        </el-col>
        <el-col span={12} class="tr">
          <el-avatar src="../../assets/avatar.png" size="medium"/>
        </el-col>
      </el-row>
    </el-header>;
  }
}

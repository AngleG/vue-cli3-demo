import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

@Component
export default class AppHeader extends Vue {
  render() {
    return <el-header>
      <el-row>
        <el-col span={12} class="tl">
          <img src={logo} width="34" alt="ABC"/>
          <span class="slogan">小呆哞，大容量</span>
        </el-col>
        <el-col span={12} class="tr">
          <el-avatar src={avatar} size="medium"/>
        </el-col>
      </el-row>
    </el-header>;
  }
}

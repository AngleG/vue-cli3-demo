import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

@Component
export default class AppHeader extends Vue {
  handleCommand(command: string) {
    console.log(command, '-=-=-=');
    if (command === 'signOut') {
      this.$router.push('/login');
    }
  }

  render() {
    return <el-header>
      <el-row>
        <el-col span={12} class="tl">
          <img src={logo} width="34" alt="ABC"/>
          <span class="slogan">小呆哞，大容量</span>
        </el-col>
        <el-col span={12} class="tr">
          <el-dropdown onCommand={this.handleCommand}>
            <el-avatar src={avatar} size="medium"/>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="signOut">退出登录</el-dropdown-item>
              <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>;
  }
}

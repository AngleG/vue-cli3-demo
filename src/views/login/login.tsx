import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import './login.scss';

@Component

export default class Login extends Vue {
  userName = '';

  userPassword = '';

  loginHandle() {
    if (!this.userName) {
      return this.$message({
        message: '请输入用户名！',
        type: 'warning',
      });
    }
    if (!this.userPassword) {
      return this.$message({
        message: '请输入密码！',
        type: 'warning',
      });
    }
    return this.$router.push('/welcome');
  }

  render() {
    const { userName, userPassword } = this.$data;
    const { loginHandle } = this;
    return <div class="login">
      <div class="login-box">
        <p><i class="el-icon-user-solid"/></p>
        <el-input size="medium" prefix-icon="el-icon-user" value={userName} onInput={(val: string) => { this.userName = val; }} placeholder="请输入用户名"/>
        <el-input size="medium" prefix-icon="el-icon-lock" value={userPassword} onInput={(val: string) => { this.userPassword = val; }} placeholder="请输入密码"/>
        <el-button type="primary" onClick={loginHandle} size="medium">登 录</el-button>
      </div>
    </div>;
  }
}

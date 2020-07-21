import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

const defaultFormData = {
  oldPassword: null,
  newPassword: null,
  confirmPassword: null,
};

@Component
export default class AppHeader extends Vue {
  visible = false;

  form = { ...defaultFormData };

  handleCommand(command: string) {
    if (command === 'signOut') {
      this.$router.push('/login');
    } else if (command === 'changePassword') {
      this.visible = true;
    }
  }

  closeDialog() {
    this.visible = false;
    this.form = { ...defaultFormData };
  }

  submitHandle() {
    this.$message({
      message: '修改成功',
      type: 'success',
    });
    this.visible = false;
  }

  render() {
    const { visible, form } = this.$data;
    const { oldPassword, newPassword, confirmPassword } = form;
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
      <el-dialog
        title="修改密码"
        visible={visible}
        {...{ on: { 'update:visible': (val: boolean) => { this.visible = val; } } }}
        width="500px"
        onClose={this.closeDialog}>
        <div class="dialog-content">
          <el-form label-position="right" label-width="80px">
            <el-form-item label="旧密码:">
              <el-input placeholder="请输入旧密码" value={oldPassword} onInput={(val: string) => {
                form.oldPassword = val;
              }}/>
            </el-form-item>
            <el-form-item label="新密码:">
              <el-input placeholder="请输入新密码" value={newPassword} onInput={(val: string) => {
                form.newPassword = val;
              }}/>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-input placeholder="请确认新密码" value={confirmPassword} onInput={(val: string) => {
                form.confirmPassword = val;
              }}/>
            </el-form-item>
          </el-form>
        </div>
        <span>
          <el-button onClick={this.closeDialog}>取消</el-button>
          <el-button type="primary" onClick={this.submitHandle}>确定</el-button>
        </span>
      </el-dialog>
    </el-header>;
  }
}

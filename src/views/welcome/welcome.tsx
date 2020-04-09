import { Vue, Component } from 'vue-property-decorator';
import avatar from '../../assets/avatar.png';
import './welcome.scss';

@Component
export default class Welcome extends Vue {
  render() {
    return <div class="welcome">
      <div class="welcome-content">
        <p class="welcome-title">WELCOME</p>
        <p class="welcome-tips">欢迎来到呆哞中心</p>
        <span class="avatar"><img src={avatar} width="160px"/></span>
      </div>
    </div>;
  }
}

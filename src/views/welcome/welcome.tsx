import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
  render() {
    return <div>欢迎回家</div>;
  }
}

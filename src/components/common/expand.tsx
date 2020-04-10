import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Expand extends Vue {
  @Prop({ type: Function })
    // eslint-disable-next-line
  renderFn!: (h: CreateElement, params: any) => VNode | string;

  @Prop({ type: Object })
  options!: object;

  render(h: CreateElement) {
    const { renderFn, options } = this.$props;
    return renderFn(h, options || {});
  }
}

import { Route } from 'vue-router';
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

interface TagOptions {
  path: string;
  name: string;
}

@Component
export default class AppBreadcrumb extends Vue {
  /* eslint-disable */
  @Getter BREADCRUMBLIST: any;

  @Mutation('NEW_BREADCRUMB_LIST') newBreadcrumbList: any;

  @Watch('$route')
  changeHandle(val: Route, oldVal: Route) {
    const { fullPath } = val;
    this.path = fullPath;
  }

  path = '';

  created() {
    this.path = this.$route.fullPath;
  }

  closeTagHandle(path: string) {
    const deleteBreadcrumb = this.BREADCRUMBLIST.find((item: TagOptions) => item.path === path);
    const result = Object.assign({}, deleteBreadcrumb, {type: 'delete'});
    this.newBreadcrumbList(result);
    if(this.path === path) {
      const length = this.BREADCRUMBLIST.length-1;
      const lastRoutePath = this.BREADCRUMBLIST[length].path;
      this.$router.push(lastRoutePath);
    }
  }

  clickHandle(path: string) {
    this.$router.push(path);
    this.path = path;
  }

  render() {
    const { path } = this.$data;
    const { BREADCRUMBLIST } = this;
    const { closeTagHandle, clickHandle } = this;
    return <div class="breadcrumb-tag">
      {BREADCRUMBLIST.length ? BREADCRUMBLIST.map((tag: TagOptions, index: number) => <el-tag
        key={tag.path}
        closable={tag.path !== '/welcome'}
        type={`${path === tag.path ? 'primary' : 'info'}`}
        size="medium"
        color={`${path === tag.path ? '#ECF5FF' : '#ffffff'}`}
        effect="plain"
        onClose={closeTagHandle.bind(this, tag.path)}
        onClick={clickHandle.bind(this, tag.path)}>{tag.name}</el-tag>) : null}
    </div>;
  }
}

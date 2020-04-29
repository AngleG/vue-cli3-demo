import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import subMenus from '../base/sub-menus.vue';

@Component({
  components: {
    subMenus,
  },
})
export default class AppSidebar extends Vue {
  /* eslint-disable */
  @Watch('$route')
  changeHandle(val: Route, oldVal: Route) {
    const { fullPath } = val;
    this.path = fullPath;
  }

  path = '';

  menus: RouteConfig[] = [];

  isCollapse = false;

  created() {
    this.path = this.$route.fullPath;
    this.getMenuList(this.$router);
  }

  getMenuList($router: VueRouter) {
    const router: any = $router;
    const { options: { routes } } = router;
    this.menus = routes.filter((route: RouteConfig) => route.children && route.children.length);
    console.log(this.menus, '菜单...');
    // this.menus = this.menus.map((menu: RouteConfig) => (
    //   {
    //     ...menu,
    //     children: (menu as any).children.filter((submenu: RouteConfig) => submenu.meta.isMenu),
    //   }
    // ));
  }

  render() {
    const { menus, path, isCollapse } = this.$data;
    return <el-aside style="width: auto;">
      <div class="sidebar-collapse">
        <span class={`iconfont iconzhankaishousuo ${isCollapse ? 'fold' : ''}`} title={`${isCollapse ? '展开' : '收起'}`} onclick={() => this.isCollapse = !isCollapse}/>
      </div>
      <div class={`sidebar-menu-box${isCollapse ? '-fold' : ''}`}>
        <el-menu
          collapse={isCollapse}
          default-active={path}
          unique-opened
          router
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#001529">
          { menus.map((menu: RouteConfig, index: number) => (
            <sub-menus menu={menu} index={index + ''} key={index} />
          ))}
        </el-menu>
      </div>
    </el-aside>;
  }
}

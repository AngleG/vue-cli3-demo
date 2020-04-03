import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import VueRouter, { RouteConfig, Route } from 'vue-router';

@Component
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
    // eslint-disable-next-line
    /* eslint-disable */
    const router: any = $router;
    const { options: { routes } } = router;
    this.menus = routes.filter((route: RouteConfig) => route.children && route.children.length);
    this.menus = this.menus.map((menu: RouteConfig) => (
      {
        ...menu,
        children: (menu as any).children.filter((submenu: RouteConfig) => submenu.meta.isMenu),
      }
    ));
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
            <el-submenu index={`${index}+1`} key={menu.name}>
              <template slot="title">
                <i class={menu.meta.icon}/>
                <span slot="title">{menu.name}</span>
              </template>
              { menu.children && menu.children.map((submenu: RouteConfig) => (
                <el-menu-item
                  index={submenu.path}
                  key={submenu.path}>
                  {submenu.name}
                  </el-menu-item>))}
            </el-submenu>
          ))}
        </el-menu>
      </div>
    </el-aside>;
  }
}

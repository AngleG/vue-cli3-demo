import { Vue, Component, Prop } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
// error: Import declaration conflicts with local declaration of 'SubMenus'. Consider adding a separate 'export default SubMenus' declaration instead.
// import SubMenus from './sub-menus';
//改为小写开头 引入不到该组件 此处为了暂时解决报错问题
import subMenus from './sub-menus';

@Component({
  components: {
    subMenus,
  },
})
export default class SubMenus extends Vue {
  @Prop(Object) readonly menu!: {};

  @Prop({ type: String, default: null }) index!: string;

  name = 'subMenus';

  render() {
    const { menu, index } = this.$props;
    return <template>
      {!menu.meta.isCatalog ? <el-menu-item index={menu.path} key={menu.path}>
        {menu.meta.icon ? <i class={menu.meta.icon}/> : null}
        <span slot="title">{menu.name}</span>
      </el-menu-item> : <el-submenu index={index} key={menu.name}>
        <template slot="title">
          <i class={menu.meta.icon}/>
          <span slot="title">{menu.name}</span>
        </template>
        {menu.children && menu.children.length ? menu.children.map((subMenu: RouteConfig, subMenuIndex: number) => <sub-menus menu={subMenu} index={`${index}-${subMenuIndex}`} key={subMenuIndex} />) : null}
      </el-submenu>}
    </template>;
  }
}

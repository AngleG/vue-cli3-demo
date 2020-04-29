<template>
  <el-menu-item v-if="!menu.meta.isCatalog" :index="menu.path" :key="menu.path">
    <i v-if="menu.meta.icon" :class="menu.meta.icon"></i>
    <span slot="title">{{menu.name}}</span>
  </el-menu-item>
  <el-submenu v-else :index="index" :key="menu.name">
    <template slot="title">
      <i :class="menu.meta.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <template v-if="menu.children && menu.children.length">
      <sub-menus
        v-for="(subMenu, subIndex) in menu.children"
        :menu="subMenu"
        :index="`${index}-${subIndex}`"
        :key="subIndex"/>
    </template>
  </el-submenu>
</template>

<script>
import subMenus from './sub-menus.vue';

export default {
  name: 'sub-menus',
  components: {
    subMenus,
  },
  props: {
    menu: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    index: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~element-ui/lib/theme-chalk/index.css';
  @import "./assets/iconfont/iconfont.css";
  @import "assets/styles/reset.scss";
  @import "assets/styles/utils.scss";
  @import "/assets/styles/element-customize.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>

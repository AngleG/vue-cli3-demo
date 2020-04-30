const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  // css: {
  //   requireModuleExtension: false
  // },
  configureWebpack: config => {
    if(process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/login', '/welcome', '/echarts', '/staff', '/users', '/change-password'],
          renderer: new Renderer({
            inject: {},
            // Display the browser window when rendering. Useful for debugging.
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          }),
        }),
      ]
    };
    // config.resolve.extensions = ['.js', '.json', '.css', '.scss', '.vue', '.ts', '.tsx'];
    // const rules = [];
    // const plugins = [];
    // rules.push({
    //   test: /\.tsx?$/,
    //   exclude: /node_modules/
    // });
    // config.module.rules = [...config.module.rules, ...rules];
    // config.plugins = [...config.plugins, ...plugins];
  }
};

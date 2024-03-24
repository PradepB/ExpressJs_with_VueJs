// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

//   pluginOptions: {
//     express: {
//       shouldServeApp: true,
//       serverDir: './server'
//     }
//   }
// })


const path = require("path");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/main.js")
      .end();
    config.resolve.alias
      .set("@", path.join(__dirname, "./src"));
  },
  devServer: {
    port: process.env.PORT,
    // proxy: `http://localhost:${process.env.SERVER_PORT}`
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      },
    }
  }
};

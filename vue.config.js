const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src//scss/common.scss";' // 全局公共样式
    }
  }
})

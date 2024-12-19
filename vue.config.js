const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist/my-custom-output', // 自定义输出目录
  indexPath: 'index.html' // 生成在 dist/my-custom-output/index.html
})

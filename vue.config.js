const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	indexPath: 'index.html',
	lintOnSave: false,
  transpileDependencies: true,
  transpileDependencies: ['@vue'],
  lintOnSave: false,
  publicPath: './',
  chainWebpack: (config) => { 
    //设置index.html  的title   
    config.plugin('html').tap(args => {
      args[0].title = '蘅峰科技'
      return args
    })
  }
})

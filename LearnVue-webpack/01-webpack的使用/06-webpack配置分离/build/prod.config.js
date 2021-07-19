const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge.merge(baseConfig,{
  plugins: [
    //丑化插件
    new UglifyWebpackPlugin()
  ],

})
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，顺序从右向左
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 10000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
       {
         test: /\.js$/,
             // exclude: 排除
             // include: 包含
             exclude: /(node_modules|bower_components)/,
           use: {
           //将ES6转换为ES5
         loader: 'babel-loader',
             options: {
           presets: ['es2015']
         }
       }
       },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
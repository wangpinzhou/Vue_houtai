const path = require('path'); // 有些配置必须是绝对路径
const htmlWebapckPlugin = require('html-webpack-plugin');

// 配置文件要求我们必须导出一个配置对象
module.exports = {

  // 入口
  entry: './src/main.js',

  // 输出
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  //  插件配置
  plugins: [

    // 自动注入打包好的js文件到body里
    new htmlWebapckPlugin({
      template: './src/index.html',        // 要处理的html
      filename: 'index.html',                 // 处理后的html名称
      inject: 'body',                               // 自动注入js到什么地方
      titel:"商场后台管理"
    }),
  ],

  // loader的作用是为了让webpack可以打包其他类型的模块
  module: {

    // 配置loader, 该配置选项是必须的
    rules: [

      // 打包css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // 打包less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      // 打包url文件 ,解析图片字体等;
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          // 指定小于10kb的图片才转为base64编码打包
          { loader: 'url-loader', options: { limit: 10240 } }
        ]
      },

      // 转换特殊语法编写的js文件
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/  // 如果项目引入了node-modules的东西,不转换它们
      },

      // 解析vue文件
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },

      // 解析 ES6 
      {
        test:/\.js$/,
        exclude:/node_modules/,  // 排除第三方js文件  在main.js 入口中导入的第三包不需要解析;
        loader:'babel-loader'
      }
      
    ]
  },

  // webpack-dev-server工具配置
  devServer: {
    contentBase: 'dist',
    port: 7777,
    open: true,
    inline: true,
    progress: true,
  }
};
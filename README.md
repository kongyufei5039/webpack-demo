# webpack
## 核心概念之entry
- entry用来指定webpack的入口
- 依赖图的入口是entry，对于非代码，比如图片、字体依赖也会不断加入到依赖图。
- entry用法：
1. 单入口entry是一个字符串
```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
2. 多入口entry是一个对象
```
module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```
## 核心概念之output
- output用来告诉webpack如何将编译后的文件输出到磁盘
- output的用法：
1. 单入口配置
```
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'bundle.js',
    path: _dirname + '/dist'
  }
};
```
2. output多入口配置
```
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};
```
## 核心概念之loaders
- webpack开箱即用只支持js和json两种文件类型，通过loaders去支持其他文件类型，并把它们转化成有效的模块，并且可以添加到依赖图中。
- loaders本身是一个函数，接受源文件作为参数，返回转换的结果。
- 常见的loaders有哪些：

名称 | 描述
------ | ------
babel-loader | 装换ES6、ES7等JS新语法特性
css-loader | 支持.css文件的加载和解析
less-loader | 将less文件转换为css
ts-loader | 将TS装换为JS
file-loader | 运行图片、字体等的打包
raw-loader | 将文件以字符串形式导入
thread-loader | 多进程打包JS和CSS

- loaders的用法：
1. test - 指定匹配规则
2. use - 指定使用的loader名称
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```
## 核心概念之plugins
- 插件用于bundle文件的优化，资源管理和环境变量注入
- 作用域整个构建过程
- 常见的plugins有哪些：

名称 | 描述
------ | ------
CommonsChunkPlugin | 将chunks相同的模块代码提取为公共js
CleanWebpackPlugin | 清理构建目录
ExtractTextWebpackPlugin | 将CSS从bundle文件提取成一个独立的CSS文件
CopyWebpackPlugin | 将文件或者文件夹拷贝到构建的输出目录
HtmlWebpackPlugin | 创建Html去承载输出的bundle
UglifyjsWebpackPlugin | 压缩js
ZipWebpackPlugin | 将打包的资源生成一个zip包

- plugins的用法：
```
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
## 核心概念之mode
- mode用来指定当前的构建环境是：production、development还是none
- 设置mode可以使用webpack内置的函数，默认值为production
- mode内置函数概念：

选项 | 功能
------ | ------
development | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
production | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。
none | 退出任何默认优化选项

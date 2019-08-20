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

## 解析ES6
- 使用babel-loader
- babel的配置文件是：.babelrc
```
module: {
  rules: [
    {
      test: /\.js$/,
      use: 'babel-loader'
    }
  ]
}
```
- 增加ES6的babel parset配置
```
{
  "presets": [
    [
      "@babel/preset-env",
      "plugins": ["@babel/plugin-transform-classes"]
    ]
  ]
}
```
## 解析CSS
- css-loader用于加载.css文件，并且转换成common.js对象
- style-loader将样式通过<style>标签插入到head中
```
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
```

## 解析less和sass
- sass-loader用于将sass装换成css
```
module: {
  rules: [{
    test: /\.scss$/,
    use: [
        "style-loader", // 将 JS 字符串生成为 style 节点
        "css-loader", // 将 CSS 转化成 CommonJS 模块
        "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
    ]
  }]
}
```

## 解析图片
- file-loader用于处理文件
```
module: {
  rules: [{
    test: /.(png|jpg|gif|jpeg)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name]_[hash:8].[ext]'
            }
        }
    ]
  }]
}
```

## 解析字体
- file-loader也可以用于处理字体
```
module: {
  rules: [{
    test: /.(woff|woff2|eot|ttf|otf)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name]_[hash:8][ext]'
            }
        }
    ]
  }]
}
```

## 使用url-loader
- url-loader也可以处理图片和字体
- 可以设置较小资源自动base64
```
module: {
  rules: [
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }
      ]
    }
  ]
}
```

## webpack中监听文件
- 文件监听是发现源码发生变化时，自动重新构建出新的输出文件
- webpack 开启监听模式，有两种方式：
1. 启动webpack命令时，带上 --watch参数
2. 在配置webpack.config.js中设置watch:true
- 唯一缺陷：每次需要手动刷新浏览器
- 原理分析：
1. 轮询判断文件的最后编辑时间是否变化
2. 某个文件发生变化，并不会立刻告诉监听者，而是先缓存起来，等aggregateTimeout
```
module.exports = {
  // 默认false, 也就是不开启
  watch: true,
  // 只有监听模式时，watchOptions才有意义
  watchOptions: {
    // 默认为空，不监听的文件或文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听到变化发生后等待300秒再去执行，默认300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll: 1000
  }
};
```

## 热更新：webpack-dev-server
- WDS 不刷新浏览器
- WDS 不输出文件，而是放在内存中
- 使用HotModuleReplacementPlugin插件

## 热更新：使用webpack-dev-middleware
- WDM 将 webpack 输出的文件传输给服务器
- 适用于灵活的定制场景

## 热更新的原理分析
- Webpack Compile：将JS编译成Bundle
- HMR Server：将热更新的文件输出给 HMR Runtime
- Bundle server：提供文件在浏览器的访问
- HMR Runtime：会被注入到浏览器，更新文件的变化
- bundle.js：构建输出的文件

## 文件指纹
- Hash：和整个项目的构建相关，只要相关文件有修改，整个项目构建的hash值就会更改
- Chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值
- Contenthash：根据文件内容来定义hash，文件内容不变，则contenthash不变

## JS的文件指纹设置
- 设置output的filename，使用[chunkhash]

## CSS的文件指纹设置
- 设置MiniCssExtractPlugin的filename，使用[contenthash]

## 图片的文件指纹设置
- 设置file-loader的name，使用[hash]

## JS文件的压缩
- 内置了uglifyjs-webpack-plugin

## CSS文件压缩
- 使用 optimize-css-assets-webpack-plugin
- 同时使用cssnano
```
plugins: [
  new OptimizeCSSAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano')
  })
]
```

## html文件压缩
- 修改html-webpack-plugin，设置压缩参数
```
plugins: [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    filename: 'index.html',
    chunks: ['index'],
    inject: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      minifyCSS: true,
      minifyJS: true,
      removeComments: false
    }
  })
]
```

# webpack-demo
## webpack核心概念之entry
- entry用来指定webpack的入口
- 依赖图的入口是entry，对于非代码，比如图片、字体依赖也会不断加入到依赖图。
- entry用法
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
## webpack核心概念之output
- output用来告诉webpack如何将编译后的文件输出到磁盘
- output的用法
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

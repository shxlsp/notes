/*
    因为一个项目内可能会包含多个 node_modules 文件夹（Node.js 比较失败的设计），第三方模块查找过程会遵循就近原则逐层上溯（可以在程序中打印 module.paths 查看具体查找路径），直到根据 NODE_PATH 环境变量查找到文件系统根目录，具体过程可以参考官方文档
此外，Node.js 还会搜索以下的全局目录列表：
    • $HOME/.node_modules
    •  $HOME/.node_libraries
    •  $PREFIX/lib/node
    其中 $HOME 是用户的主目录， $PREFIX 是 Node.js 里配置的 node_prefix。强烈建议将所有的依赖放在本地的 node_modules 目录，这样将会更快地加载，且更可靠
文件路径
    模块还可以可以使用文件路径加载，这是项目内自定义模块的通用加载方式，路径可以省略拓展名，会按照 .js、.json、.node 顺序尝试
    • 以 '/' 为前缀的模块是文件的绝对路径，按照系统路径查找模块
    • 以 './' 为前缀的模块是相对于当前调用 require 方法的文件，不受后续模块在哪里被使用到影响
*/


/*
单次加载 & 循环依赖
    模块在第一次加载后会被缓存到 Module._cache ，如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象，同时多次调用 require(foo) 不会导致模块的代码被执行多次。 Node.js 根据实际的文件名缓存模块，因此从不同层级目录引用相同模块不会重复加载。
理解的模块单次加载机制方便我们理解模块循环依赖后的现象
*/
debugger
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);


/**
 * Node.js 每个文件都是一个模块，模块内的变量都是局部变量，不会污染全局变量，在执行模块代码之前，Node.js 会使用一个如下的函数封装器将模块封装
 *  */
//  const exports = module.exports;
//  (function(exports, require, module, __filename, __dirname) {
//     // 模块的代码实际上在这里
//   });



// Node中使用ES Module
// 使用babel构建
// node v12版本之后，支持原生ES Module
// 1. 开启 --experimental-modules 
// 2. 模块名修改为 .mjs （强烈不推荐使用）或者 package.json 中设置 "type": module


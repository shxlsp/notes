const {log} = require('../../common/index')
/**
 * Windows 与 POSIX 对比
 *  path 模块在不同操作系统处理会有所差异， 
 *      当在 Windows 操作系统上运行时， path 模块会假定正被使用的是 Windows 风格的路径（C:\\temp\\myfile.html），
 *      而在 POSIX 操作系统会默认使用 POSIX 的路径风格（/tmp/myfile.html），路径风格和操作系统不一致会出现意外的结果
 * 
 *  POSIX，Portable Operating System Interface，是 UNIX 系统的一个设计标准，很多类 UNIX 系统也在支持兼容这个标准，如 Linux 和 Mac OS 所基于的 FreeBSD
 */

//  path.basename
//  path.basename() 方法用于返回一个路径的 basename

// Windows 下执行
// path.basename('C:\\temp\\myfile.html'); // myfile.html

// POSIX 下执行
// path.basename('C:\\temp\\myfile.html'); //C:\\temp\\myfile.html

/**
 * 如果希望在不同操作系统都返回指定系统的结果，需要使用
 * • path.win32.method
 * • path.posix.method
 */


//以下为win环境执行代码结果

const path = require('path');
// parse(path)
// path.parse() 方法用来解析文件路径，返回 对应的元信息对象
const pathObj = path.parse('D:\\myProject/notes/README.md');
console.log(
    'parse',
    pathObj,
);
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// format(parseObject)
// path.format() 方法从对象返回路径字符串，是 path.parse 的反操作
const pathStr = path.format(pathObj);
log(
    'format',
    pathStr, 
);
// 返回: 'D:myProject/notes/README.md'

// path.normalize('') 方法规范化给定的 path，解析 ..   和 .
log(
    'normalize',
    path.normalize( '/data/www//arena/src/component/../' ),
);
//输出 => \data\www\arena\src\


// path.join([...paths]) 使用操作系统规定的分隔符将参数中的 path 片段连接，并且规范化
log(
    'join',
    path.join( '/data', 'www', 'arena', 'src' ), 
);
//输出 => \data\www\arena\src


// path.relative(from, to) 方法根据当前工作目录返回 from 到 to 的相对路径
log(
    'relative',
    path.relative( 'D:\\myProject/notes/node入门/2.调试', 'D:\\myProject/notes/node入门/3.path' ),
);
//输出 => \data\www\arena\src

// path.resolve([...paths]) 方法将路径或路径片段的序列解析为绝对路径
log(
    'resolve',
    path.resolve( '/data', './3.path' ),
    path.resolve( './3.path' ),
    path.resolve( './3.path' ),
);
//输出 => \data\www\arena\src

/*
    path.basename: 返回 path 最后一部分
    path.delimiter: 返回操作系统路径界定符，Windows 返回 ; POSIX 返回 : 
    path.dirname: 返回文件目录名
    path.extname: 返回路径的拓展名（jquery.min.js 拓展名是 .js）
    path.isAbsolute 检测路径是否是绝对路径
    path.sep: 返回路径分隔符，Windows 返回 \ POSIX 返回 /
 */
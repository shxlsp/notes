const _ = require('lodash')

//提供柯里化后的方法 函数优先参数滞后
const fp = require('lodash/fp')

//  'the world's not perfect but it's not that bad' => T.W.N.P.B.I.N.T.B
//  提取首字母并大写
const str = 'the world\'s not perfect but it\'s not that bad';

// const getTheFirstUpper = fp.flowRight( fp.toUpper, fp.join('.'), fp.map(fp.slice(0,1) ), fp.split(' '));

// const getTheFirstUpper = fp.flowRight( fp.toUpper, fp.join('.'), fp.map(fp.first() ), fp.split(' '));

//视频方法
// const getTheFirstUpper = fp.flowRight( fp.join('.'), fp.map(fp.first ), fp.map(fp.toUpper ), fp.split(' '));
const getTheFirstUpper = fp.flowRight( fp.join('.'), fp.map( fp.flowRight(fp.first, fp.toUpper) ), fp.split(' '));

console.log(getTheFirstUpper(str));
function sum(a,b,c,d){
    return a+b+c+d;
}

//柯里化👇
const curry = function(func, ...args){
    console.log(func.length, args.length)
    if( func.length !== args.length ){
        return function (...argsb){
            return curry(func, ...[...args, ...argsb])
        }
    }
    return func.apply(func, args)
}

const sum6Add = curry(sum, 6);
console.log(sum6Add(4)(7)(9))


//组合函数
//管道 { a => b => c => d } => {  a ==> d  }

const getFirst = arr => arr[0];
const toUpper = str => str.toUpperCase();

//组合获取数组中第一个元素的第一个大写字母；

const arrStr = ['rbc', 'efg'];

// console.log( getFirst(toUpper(getFirst(arrStr))) );

//组合函数方法👇
// function compose (...funcs){
//     //一般都是从右到左
//     function dg( funcs ,data){
//         if( funcs.length === 1 ){
//             return funcs[0](data)
//         }
//         return dg( funcs, funcs.splice(-1)[0](data) )
//     }
//     return function(data){
//         console.log(data, funcs);
//         return dg(funcs, data)
//     }
// }
//视频提供的方法
function compose (...funcs){
    return function ( values ){
        return funcs.reverse().reduce( ( acc, fn ) => {
            return fn(acc)
        }, values )
    }
}

console.log( compose( getFirst, toUpper, getFirst )(arrStr) )
const fs = require('fs');
const fp = require('lodash/fp');

class IO{
    static of (value){
        return new IO(function (){
            return value;
        })
    }

    constructor( fn ){
        this._value = fn
    }

    map (fn){
        return IO.of( fp.flowRight( fn, this._value ) )
    }
    
}

const readFile = ( pathName ) => {
    return new IO(function(){
        return fs.readFileSync( pathName, 'utf-8' );
    })
}

const print = ( value ) => {
    return new IO( function(){
        console.log(value,';;')
        return value
    } )
}
//这个有bug的  理论上实现的是 先读取文件内容，再打印文件内容，实际没有实现这个功能
let cat = fp.flowRight( print, readFile )

let r = cat('../package.json')._value()._value();


//Monad函子
class Monad{
    static of (value){
        return new Monad(function (){
            return value;
        })
    }

    constructor( fn ){
        this._value = fn
    }

    map (fn){
        //这里有个bug，  Monad.of 来创建的时候 报错
        // Monad.of 会给value多嵌套一层 function
        return new Monad( fp.flowRight( fn, this._value ) )
    }

    join (){
        return this._value();
    }

    flatMap (fn){
        return this.map(fn).join();
    }
}
//还是有问题 会多次调用printN

const readFileN = ( pathName ) => {
    return new Monad(function(){
        return fs.readFileSync( pathName, 'utf-8' );
    })
}

const printN = ( value ) => {
    return new Monad( function(){
        console.log(value,';;')
        return value
    } )
}
const test = readFileN('../package.json')
                .flatMap(printN)
                .join()
// console.log(test);
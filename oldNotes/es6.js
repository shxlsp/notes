// Proxy
// const obj = {
//     name: 'xiaoming',
//     age: 123
// }
// const objProxy = new Proxy( obj, {
//     get ( target, property ) {
//         console.log('get',target, property)
//         // 官方提供对象操作方式
//         return Reflect.get( target, property )
//     },
//     set ( target, property, value ) {
//         console.log( 'set', target, property, value )
//         return Reflect.set( target, property, value )
//     },
//     //删除对象属性调用
//     deleteProperty ( target, property ) {
//         console.log( 'delete', target, property )
//         return Reflect.deleteProperty( target, property )
//     }
// } );
// /**
//  * get                  读取某个属性
//  * set                  设置某个属性
//  * has                  in操作符
//  * deleteProperty       delete操作符
//  * getProperty          Object.getPropertypeOf()
//  * setProperty          Object.setPropertypeOf()
//  * isExtensivble        Object.isExtensible()
//  * preventExtensions    Object.preventExtensions()
//  * defineProperty       Object.defineProperty()
//  * ownKeys              Object.keys() || Object.getOwnPropertyNames() || Object.getOwnPropertySymbols()
//  * apply                调用一个函数
//  * construct            用new调用一个函数
//  */
// objProxy.age = 333;
// console.log( objProxy.age );
// delete objProxy.name;
// console.log(objProxy)













// class
// class Person {
//     constructor( name, age ){
//         this.name = name;
//         this.age = age
//     }

//     say( word ){
//         const text = `${this.name}说：${word}`;
//         console.log( text );
//         return text;
//     }

//     static create( name, age ){
//         console.log(this, '------');
//         return new Person(name, age)
//     }

//     static nothing( word ){
//         return word
//     }
// }

// // var person = new Person( 'xiaoming', 33 );
// // person.say('hi');
// // var person1 = Person.create.call( this,'li', 33 );
// // var person2 = Person.create('li', 33 );
// // person1.say('yoo')
// // console.log(Person.nothing('???'))

// class Student extends Person{
//     constructor( name, age, id ){
//         super(name, age);
//         this.id = id;
//     }
//     hi(){
//         super.say('hi')
//     }
// }

// var student = new Student('haha', 11, 134);

// student.hi()
















// Set 数据结构
// const s = new Set();
// s.add(1).add(2).add(3).add(2);
// console.log(s);
// s.forEach( item => {
//     console.log(item)
// } )
// for( let i of s ){
//     console.log(i)
// }
// console.log(
//     s.size,
//     s.has(12),
//     s.delete(3),
//     s,
//     s.clear(),
//     s
// )

//数组去重
// const arr = [1,2,3,4,5,6,5,6];
// console.log(arr);
// const res = Array.from( new Set(arr) );
// const res = [...new Set(arr)];
// console.log(res);
















//Map 数据结构
//为了解决对象的 键值对 的限制，原来对象会把左侧键进行toString保存，Map是两个键值内存地址的映射。 说的可能不太对

// const obj = {};
// obj[true] = 123;
// obj[123] = 465;
// obj[{ a: 1 }] = 567;
// console.log(Object.keys(obj));
// console.log(obj[ '[object Object]' ]);
// console.log(obj[true]);

// const mapObj = new Map();
// const tom = { a: 1 }
// const ezz = { a: 1 }
// mapObj.set(tom, 'value');
// mapObj.set(ezz, 'value ezz');
// console.log(mapObj)
// console.log(
//     mapObj.get(tom),
//     mapObj.delete(tom),
//     mapObj,
//     mapObj.clear(),
//     mapObj,
// );
// mapObj.forEach( ( value, key ) => {
//     console.log( value, key );
// } )















//Symbol
//Symbol 目的 =》 创建一个独一无二的值， 传参 约等于 为这个独一无二的值添加的注释

// const a1 = Symbol('a1');
// const a2 = Symbol('a2');
// const a2_1 = Symbol('a2');
// console.log( a1 === a2, a2 === a2_1 );

//可以为对象添加私有属性    因为Symbol可以作为Object的key，而又是唯一值
// 例如一个模块a.js
// const name = Symbol('name');
// const person = {
//     [name]: 'xiaoming',
//     say (){
//         return this[name] + ': hi'
//     },
//     setName(newName){
//         this[name] = newName; 
//     }
// }
// //b.js
// console.log(person.say());
// console.log(person.setName('xiaoS'));
// console.log(person.say());


//补充
// console.log(
//     Symbol() === Symbol(),
//     Symbol('hi') === Symbol('hi'),
// )
// const a1 = Symbol('hi');
// const a2 = Symbol('hi');
//Symbol.for 的方法返回的是全局定义好的，预设Symbol,和自己调用的Symbol的返回值不同，
//且for方法只接收字符串，若参数为非字符串，则会调用toString
// const s3 = Symbol.for(true);
// const s4 = Symbol.for('true');
// console.log( s3 === s4 );
// const s1 = Symbol.for('hi');
// const s2 = Symbol.for('hi');
// console.log(
//     a1 === a2,
//     s1 === s2,
//     s1 === a2,
//     s1 === a1,
//     a1, a2, s1, s2,
// );

// console.log( Symbol.iterator );
// console.log( Symbol.hasInstance );
//Symbol.toStringTag
// const obj = {};
// console.log(obj.toString());

// //自定义ToString 返回值
// obj[Symbol.toStringTag] = 'ShObject';
// console.log(obj.toString());

// const obj1 = {
//     [Symbol.toStringTag]: 'ShObject'
// }
// console.log(obj1.toString())

//无法被常规方法获取
// const obj = {
//     key: 'value',
//     [Symbol('key')]: 'symbol key',
// };
// for( let key in obj ){
//     console.log( key, obj[key] )
// }
// console.log( Object.keys(obj) );
// console.log( JSON.stringify(obj) );
// //可通过 Object.getOwnPropertySymbols方法获取到
// console.log( Object.getOwnPropertySymbols( obj ) ); //方法返回一个数组















// for..of..循环
// const arr = [1,2,3,4];
// for( let i of arr ){
//     //数组循环不能获取下标
//     console.log(i, 'arr');
// }
// const setData = new Set( [ 1, 2, 3, 4 ] );
// for( let i of setData ){
//     console.log(i, 'set');
// }
// const mapData = new Map();
// mapData.set( 'key1', 'value1' );
// mapData.set( 'key2', 'value2' );
// for( let data of mapData ){
//     console.log(data, 'map');
// }
// for( let [ key, value ] of mapData ){
//     console.log(key, value, 'map');
// }















// 迭代器  iterable iterator iterationRes
//最基础迭代器
// const obj = {
//     [Symbol.iterator]: function(){
//         return {
//             next: function(){
//                 return {
//                     value: 'aa',
//                     done: true
//                 }
//             }
//         }
//     }
// }

//举个例子
// const obj = {
//     data: [1,2,3,4,5,6],
//     [Symbol.iterator]: function (){
//         let index = 0,
//             self = this;
//         return {
//             next: function(){
//                 const res = {
//                     value: [ index, self.data[index] ],
//                     done: index >= self.data.length
//                 }
//                 index++
//                 return res;
//             }
//         }
//     }
// }
// for(let [ key, value ] of obj  ){
//     console.log( key, value );
// }














//生成器  generator
// 简单实现
// function *func(){
//     console.log(1123);
//     yield 1123;
    
//     console.log(2234);
//     yield 2234;
    
//     console.log(3345);
//     yield 3345;

//     console.log('done')
//     return 'done'
// }
// const funcGenerator = func();
// console.log( funcGenerator.next() );
// console.log( funcGenerator.next() );
// console.log( funcGenerator.next() );
// console.log( funcGenerator.next() );

// 发号器
// function *func(){
//     let id = 0;
//     while(true){
//         yield ++id
//     }
// }
// const funcGenerator = func();
// console.log( funcGenerator.next().value );
// console.log( funcGenerator.next().value );
// console.log( funcGenerator.next().value );
    // "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
// console.log( funcGenerator.next().value );
// console.log( funcGenerator.next().value );

//配合迭代器 iterator 使用
// const obj = {
//     arr: [ 1, 2, 3, 4, 5 ],
//     arr1: [ 1, 2, 3, 4, 5 ],
//     arr2: [ 1, 2, 3, 4, 5 ],
//     [Symbol.iterator]: function *(){
//         const arr = [ ...this.arr, ...this.arr1, ...this.arr2 ];
//         for( let item of arr ){
//             yield item
//         }
//     }
// }

// for( let i of obj ){
//     console.log(i)
// }



// ECMAScript 2016

// arr.includes 返回值为 Boolean
// 和indexOf类似，但能查找 NaN
// const arr = [1,2,NaN];
// console.log( arr.indexOf(1) )
// console.log( arr.indexOf(NaN) )
// console.log( arr.includes(1) )
// console.log( arr.includes(NaN) )

// 指数运算符 -- 快捷指数运算
// console.log( Math.pow(2,10) );
// console.log( 2 ** 10 );
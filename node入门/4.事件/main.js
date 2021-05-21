const {log} = require('../../common/index')
const EventEmitter = require('events');
const evt = new EventEmitter();
const that = this;
//监听事件
evt.on('listen', () => {
    log('listen1')
});
// 通过 prependListener 可以把 listener 添加到 listener 数组头部
evt.prependListener('listen', (data, ...otherData) => {
    log('listen2', data, otherData)
});

evt.on('listen', () => {
    log('listen3', this === evt, this == that)
});

//once 只触发一次
evt.once('listen', function(){
    log('listen4 once', this === evt)
});
//事件执行顺序
//1次触发   2 -> 1 -> 3 -> 4
//2次触发   2 -> 1 -> 3 

//this 指向默认为 => 当前事件实例


//触发事件
// evt.emit('listen', 'first', 2,3,4);

// evt.emit('listen', 'first', 2,3,4);


//事件卸载
//removeListener 等同于 off（语法糖）
const cb = () => {log('cb')}
const cb1 = () => {log('cb1')}
const cb2 = () => {log('cb2')}
//监听 队列 3条
evt.on('test', cb);
evt.on('test', cb1);
evt.on('test', cb2);
//触发 打印3条Log
evt.emit('test');
//移除 队列item => cb
evt.removeListener('test', cb);
// evt.off('test', cb);
//触发 打印2条
evt.emit('test', cb);
//移除所有监听事件
evt.removeAllListeners('test');
//触发 打印0条
evt.emit('test', cb);



//同步执行事件问题 =》 监听事件切换异步模式

//触发的监听事件，会同步的按照事件列表顺序执行。
//若有一个任务同步耗时过长，可能会导致后续事件被阻塞
//可以在监听事件里使用setImmediate() 和 process.nextTick() 方法，切换到异步的操作模式
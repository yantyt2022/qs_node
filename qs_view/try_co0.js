// co 顺序执行异步 ，自动化方案
//生成器函数--内部可以去添加一些异步的操作，做到同步化运行
function* fn(a) {
    // yield 停下来  , 后面接promise对象
    a = yield a
    let b = yield 2;
    let c = yield 3;
    return a + b + c;
}
// 迭代器手动完成异步
let g = fn();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
//输出的value 是上一次yield的值
// 第一次输出--->{ value: undefined, done: false }
// 第二次输出--->{ value: 2, done: false }
// 第三次输出--->{ value: 3, done: false }
// 第四次输出--->{ value: NaN, done: true }
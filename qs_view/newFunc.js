function new2(func) {
    // 1 func 构造函数执行
    // 2 obj 原型链对象为func
    // 3 返回一个obj
    let o = Object.create(func.prototype);
    let k = func.call(o)
    // 私有的__proto__属性指向
    return typeof k === 'object' ? k : o;
}
function M() {
    this.name = 'ff';
}
M.prototype = {

}
// let m = new M();
let m = new2(M);
console.log(m instanceof M);
console.log(m instanceof Object);
console.log(m.__proto__ === M.prototype);
console.log(m.__proto__.constructor === M);

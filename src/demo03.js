/**
 * 
 *  验证对象是否是特定构造函数的实例
 *  通过使用 instanceof 操作符，可以确定一个对象是否是特定构造函数的实例
 *  instanceof 只适用于构造函数返回的复杂对象和实例
 */

let CustomConstructor = function() {
    this.foo = 'bar';
}
let instanceOfCustomConstructor = new CustomConstructor();

console.log(instanceOfCustomConstructor instanceof CustomConstructor);  // true

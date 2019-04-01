/**
 *  如何存储以及复制复杂值
 *  
 *  原生对象构造函数 Object() Array() Function() Date() Error() RegExp() 是复杂类型
 *  复杂值通过引用进行存储操作，创建一个包含复杂值得变量时，值就是内存中的一个引用地址。
 *  若想复制复杂值，需要从旧对象中提取值然后注入新的对象
 * 
 *  复杂值比较
 *  复杂值只有在引用相同的对象(引用相同的地址)才会相等
 * 
 *  复杂对象具有动态属性
 *  复杂对象可以根据多个需求有任意多个引用，即使对象改变，他们也总是指向同一个对象
 */

let obj = {age: 11};
let obj1 = obj;
let obj2 = obj1;
let myObj = {};
let copyMyObj = myObj;

myObj.foo = 'bar';
obj.age = 12;

// 均会输出 foo属性，myObj copyMyObj 引用的是相同的对象
console.log(myObj, copyMyObj);  // { foo: 'bar' } { foo: 'bar' }

console.log(myObj === copyMyObj);   // true，myObj和copyMyObj引用的相同的对象，所以相等

console.log(obj, obj1, obj2);   // { age: 12 } { age: 12 } { age: 12 }







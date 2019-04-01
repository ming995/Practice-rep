/**
 * 
 *  js 构造函数构建返回对象实例
 */

let Person = function Person(living, age, gender) {
    // this 表示即将创建的新对象，this = new Object();
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {
        return this.gender;
    }
}

// 实例化Person对象
let cody = new Person(true, 33, 'male');

console.log(typeof cody)    
console.log(cody); 
console.log(cody.constructor);

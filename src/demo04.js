/**
 * 
 *  闭包
 *  以下依次打出 1 2 3 4因为匿名函数引用了count，从而形成了闭包，导致count变量没有被销毁
 */

var countUpFormZero = function() {
    var count  = 0;
    return function() {
        return ++count;
    }
}();

console.log(countUpFormZero());
console.log(countUpFormZero());
console.log(countUpFormZero());
console.log(countUpFormZero());

/**
 * 
 *  for 循环
 */
let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let icuObj = {
    repName: '996ICU',
    star: 142503,
}

function Icu() {
    this.fork = 10349
}

Icu.prototype = icuObj;

let newIcuObj = new Icu();


// for 循环
for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}

// for in   一般使用 for-in 循环对象

for(let key in newIcuObj) {
    console.log(key, newIcuObj[key]);
}


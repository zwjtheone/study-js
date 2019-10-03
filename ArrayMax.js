/**
 * study-js
 * Created on 2019/10/3.~
 * Talk is cheap. Show me the code.
 *
 * @author: by Jay99, email:zwjtheone@vip.qq.com
 * ==============================================
 * 求数组最大最小值
 */


/*
    循环遍历方法
 */
var arr = [6, 4, 1, 8, 2, 11, 23];

var result = arr[0];
for (var i = 1; i < arr.length; i++) {
    result =  Math.max(result, arr[i]);
}
console.log(result);


var arr2 = [6, 4, 1, 8, 2, 11, 23];

function max(prev, next) {
    return Math.max(prev, next);
}
console.log(arr2.reduce(max));
//---------------------------------

/*
    排序
 */

var arr3 = [6, 4, 1, 8, 2, 11, 23];

arr3.sort(function(a,b){return a - b;});
console.log(arr3[arr3.length - 1])


/*
    apply
 */

var arr4 = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null, arr4))

/*
    es6
 */

var arr5 = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max(...arr5))

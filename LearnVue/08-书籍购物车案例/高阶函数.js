
//编程范式:命令时编程/声明式编程
//编程范式:面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
//filter/map/reduce

//filter中的回调函数有一个要求:必须返回一个boolean值
//true:函数内部自动将这次回调的返回值加入到新的数组中
//false:此次值被函数过滤掉
const nums = [10,20,40,263,200,136,50];

let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue,n) {
  return preValue + n;
});
console.log(total);
//filter函数的使用
// let num = nums.filter(function (n) {
//   return n < 100;
// });
// console.log(num);
//
// //map函数的使用
// let num1 = num.map(function (n) {
//   return 2 * n;
// });
// console.log(num1);
//
// //reduce函数的使用
// //reduce作用对数组中所有的内容进行汇总
// num1.reduce(function (preValue,n) {
//   return preValue + n;
// },0);
//第一次:preValue:0,n:20
//第一次:preValue:20,n:40
//第一次:preValue:60,n:80
//第一次:preValue:140,n:100
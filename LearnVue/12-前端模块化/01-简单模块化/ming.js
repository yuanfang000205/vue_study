; var moduleA =  (function () {
  //1.定义一个对象
  var obj = {};
  //在对象内部添加变量和方法
  obj.name = '小明'
  obj.sum = function sum(num1,num2) {
    return num1 * num2
  }
  obj.flag = true;

  if (obj.flag){
    console.log(obj.sum(1, 2));
  }
  //3.将对象返回
  return obj
})()
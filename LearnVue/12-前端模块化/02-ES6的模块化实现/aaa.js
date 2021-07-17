var name = '小明'
var age = 18
function sum(num1,num2) {
  return num1 + num2
}
var flag = true
if (flag){
  console.log(name);
  console.log(sum(2, 3));
}

//1.导出方式一:导出{}中定义的变量
export {
  flag,sum
}

//2.导出方式二:导出定义的数据
export var sex = '男';
export var height = 1.88;

//3.导出函数
export function mul(num1,num2) {
  return num1 * num2;
}
//4.导出类
export class Person{
  eat(){
    console.log('吃东西');
  }
}
//5.导出默认值
// const address = '北京市'
// export {
//   address
// }
// export const address = '北京市'
// const address = '北京市'
//
// export default address

export default function (argument) {
  console.log(argument);
}

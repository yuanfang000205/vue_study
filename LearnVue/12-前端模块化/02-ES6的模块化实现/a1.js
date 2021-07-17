import {flag,sum} from "./aaa.js";
if (flag){
  console.log('小明是天才，哈哈哈');
}


import {sex,height} from "./aaa.js";
console.log(sex);
console.log(height);


import {mul} from "./aaa.js";
console.log(mul(10, 20));


import {Person} from "./aaa.js";
var p = new Person();
p.eat();


import arg from "./aaa.js"
arg('你是谁')


//统一全部导入数据
import * as nb from "./aaa.js"
nb.default('我nb不');
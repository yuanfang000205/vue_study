//1.使用commonjs的模块化规范
const {sum} = require('./mathUtils.js')

console.log(sum(10, 20));

//2.使用ES6的模块化规范
import {name,age} from "./info";

console.log(name);
console.log(age);


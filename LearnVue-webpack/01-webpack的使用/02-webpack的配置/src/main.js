//1.使用commonjs的模块化规范
const {sum} = require('./js/mathUtils.js')

console.log(sum(10, 20));

//2.使用ES6的模块化规范
import {name,age} from "./js/info";

console.log(name);
console.log(age);


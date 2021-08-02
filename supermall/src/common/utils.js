// 返回一个函数，如果它被不间断地调用，它将不会得到执行。该函数在停止调用 N 毫秒后，再次调用它才会得到执行。
// 如果有传递 ‘immediate' 参数，会马上将函数安排到执行队列中，而不会延迟。
export function debounce(func, wait,immediate) {
  let timeout = null;
  return function(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this,args)
    },wait);}
}

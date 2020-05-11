// let 和 var
// 不存在变量提升 
// 暂时性死区: 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”,也意味着typeof不再是一个百分之百安全的操作
// 不允许重复声明
// 块级作用域: 外层不受内层定义影响，内外层可定义同个变量名，允许在块级作用域之中声明函数
// 块级作用域内部，优先使用函数表达式，块级作用域必须有大括号

// const
// const声明一个只读的常量。一旦声明，常量的值就不能改变
// 一旦声明变量，就必须立即初始化，不能留到以后赋值
// 不存在变量提升
// 不允许重复声明
// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
const obj = {}
obj.hello = "world"
const obj1 = Object.freeze({})  // 冻结
// obj = 'hello'  error
const arr = []
arr.length = 3
arr[0] = 'hello'
// arr = []       error

// es6声明变量： var let function const class import
// 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象
// var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
// ES2020 在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this
global.a = 2
console.log(a)
b = 3
console.log(global.b);
let c = 5
console.log(global.c);

// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

console.log(getGlobal().a);



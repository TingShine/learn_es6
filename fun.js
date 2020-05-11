// 函数参数的默认值,参数默认值是惰性求值的
// 与解构赋值默认值结合使用
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果

// 函数的 length 属性: 将返回没有指定默认值的参数个数, 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了

// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域
let x = 1;

function f(y = x) {
  console.log(y);
}

f() // 1

var x2 = 1;
function foo2(x2, y2 = function() { x2 = 2; }) {
  x2 = 3;
  y2();
  console.log(x2);
}

foo2() // 2
console.log(x2);

// 应用

// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误
// 可以将参数默认值设为undefined，表明这个参数是可以省略的
function throwIfMissing() {
  throw new Error('Missing parameters')
}
function foo3(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}
// foo3();   // Error: Missing parameters

// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
  let sum = 0;
  for(let i of values) {
    sum += i
  }
  return sum;
}
console.log(add(2, 3, 5));

// arguments变量的写法
function sortNumbers1() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers2 = (...numbers) => numbers.sort();

console.log(sortNumbers1(3, 1, 8));
console.log(sortNumbers2(2, 6, 1));

// 改写push
function push(array, ...items) {
  items.forEach((item) => {
    array.push(item)
  })
  console.log(array);
}
let array = []
push(array, 1, 4, 7, 9)

// 函数的name属性，返回该函数的函数名
console.log(foo2.name);


// ES6 允许使用“箭头”（=>）定义函数
// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

var test1 = hello => hello;
console.log(test1("helloworld"));

var test2 = () => 'ok';
console.log(test2());

var sum = (sum1, sum2) => sum1 + sum2;
console.log(sum(2, 3));

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
let getTempId = id => ({id: id});
console.log(getTempId('hello'));

// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了
let fn = () => void doesNotReturn();

const isEven = n => n % 2 === 0;
const square = n => n * n;
console.log(square(5));

console.log([1, 3, 5].map(item => item * item));

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

// 箭头函数里面根本没有自己的this，而是引用外层的this
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

// 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target
// 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向

// 尾调用优化
// ES2017 允许函数的最后一个参数有尾逗号（trailing comma）

// toString()方法返回函数代码本身，以前会省略注释和空格。
// ES2019 做出了改变，允许catch语句省略参数。
// 数组对解构赋值
// 如果解构不成功，变量的值就等于undefined
// 解构数组若为空则为空数组[]
// 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
// 解构赋值允许指定默认值
let [a, b, c] = [1, 2, 3]
let [foo, [[bar], baz]] = [1, [[2], 3]];
let [ , , third] = ["foo", "bar", "baz"];
let [x1, , y1] = [1, 2, 3];
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
let [x2, y2, z2] = new Set(['a', 'b', 'c']);
console.log(y2);    // 集合也可以解构

// 数组形式对解构赋值
function* fibs() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
} 
let [first, second, third2, fourth, firth] = fibs()
console.log(first, second, third2, fourth, firth);

// 默认值，只有当一个数组成员严格等于undefined，默认值才会生效
let [a2 = 'hello'] = [true]
let [a3 = 'yes', b3 = 'no', c3 = 'gg'] = [, undefined, null]
console.log(b3, c3);  // no null

function f1() {
    console.log('aaa');
}

// 懒加载
let [x = f1()] = [];

// 引用其他变量 
let [x3 = 1, y3 = x3] = [4, 3]
console.log(y3);


// 对象的解构赋值
// 如若赋值失败，则为undefined
// 与数组一样，解构也可以用于嵌套结构的对象。
// 支持嵌套解构
let {foo1, bar1} = {foo1: 'hello', bar1: 'world'}

// 如变量名与属性名不同，必须写成以下格式
let {foo2: baz2} = {foo2: 'helloworld'}
console.log(baz2);

let obj2 = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
let {p: [x4, {y: y4}]} = obj2   // 此时p为模式
let {p, p: [x5, {y: y5}]} = obj2 
console.log(p, x4, y4);

// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first2, [arr.length - 2] : last} = arr;
console.log(first2, last);

// 字符串的解构赋值
let {length : len} = 'hello';  
console.log(len);

// 数值和布尔值的解构赋值
let {toString: s1} = 123;
console.log(s1 === Number.prototype.toString );

let {toString: s2} = true;
console.log( s2 === Boolean.prototype.toString);

// 函数参数的解构赋值
let c5 = [[1, 2], [3, 4]].map(([a5, b5], index) => a5 + b5 + index);
console.log(c5);

function move({x = 0, y = 0} = {}) {
  console.log([x, y]);
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
function move1({x, y} = { x: 0, y: 0 }) {
  console.log([x, y]);
}
move1({x: 3, y: 8}); // [3, 8]
move1({x: 3}); // [3, undefined]
move1({}); // [undefined, undefined]
move1(); // [0, 0]

// 用途
// 交换变量的值
// 从函数返回多个值
// 函数参数的定义
// 提取 JSON 数据
// 函数参数的默认值
// 遍历 Map 结构
// 输入模块的指定方法

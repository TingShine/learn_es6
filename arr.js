// 扩展运算符（spread）是三个点（...）该运算符主要用于函数调用 替代函数的 apply 方法

function add(x, y) {
    return x+y;
}
console.log(add(...[3, 4]));

// 扩展运算符的应用 
// （1）复制数组
// （2）合并数组  [...arr1, ...arr2, ...arr3]
// （3）与解构赋值结合 [a, ...rest] = list
// （4）字符串 [...'hello']
console.log([..."hello"].length);
// （5）实现了 Iterator 接口的对象

// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
// map函数返回的是操作后的结果，Array.from.filter还是对该iterable对象的筛选
// 任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
let temp1 = Array.from([3, 6, 9]).filter(p => { return p > 5 });
console.log(temp1);

// Array.of方法用于将一组值，转换为数组。

// 数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。

// 数组实例的 find() 和 findIndex()

// fill方法使用给定值，填充一个数组。

// 数组实例的 entries()，keys() 和 values()

// 数组实例的 includes()

// 数组实例的 flat()，flatMap() 默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
console.log([1, [2, [3]]].flat(Infinity));

// flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

// 数组的空位

// Array.prototype.sort() 的排序稳定性
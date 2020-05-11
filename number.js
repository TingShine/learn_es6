// 二进制和八进制表示法  0b 0B 0o 
// 转化为十进制
console.log(Number('0b111'));

// Number.isFinite(), Number.isNaN() 检查是否有限  检查是否为数字的不存在
// Number.parseInt(), Number.parseFloat() 向下取整

// Number.isInteger() 判断是否为整数  其中25和25.0都为整数，精度超过53位会被舍弃
// 安全整数和 Number.isSafeInteger()


// Math 对象的扩展
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.trunc = Math.trunc || function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };

//   Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
Math.sign = Math.sign || function(x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
      return x;
    }
    return x > 0 ? 1 : -1;
  };

//   Math.cbrt()方法用于计算一个数的立方根
// Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1
// Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
// Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
// Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN

// ES2016 新增了一个指数运算符（**）
console.log(2 ** 3);
console.log(2 ** 3 ** 2);   // 从最右边开始计算

// 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）

let a = 2
a **= 3
console.log(a);


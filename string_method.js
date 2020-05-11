// String.fromCodePoint()
// String.raw()
// 实例方法：codePointAt()
// 实例方法：normalize()
// 实例方法：includes(), startsWith(), endsWith()
// 实例方法：repeat()
// 实例方法：padStart()，padEnd()
// 实例方法：trimStart()，trimEnd()
// 实例方法：matchAll()

console.log(String.fromCodePoint(0x20BB7));
console.log(String.raw`Hi\n${2+3}!`);

let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

console.log('hello '.repeat(3));

console.log('hello'.padStart(10));
console.log('hello'.padEnd(10));
console.log('123'.padStart(7, 66214));
console.log('123'.padStart(7, true));

console.log('12'.padStart(10, 'YYYY-MM-DD') );
console.log('09-12'.padStart(10, 'YYYY-MM-DD'));// "YYYY-09-12"

const s1 = '   abc    '
console.log(s1.trim());
console.log(s1.trimStart());
console.log(s1.trimEnd());


const my_module = require('./My_modules');
const sum = my_module.arithmetic.add(10,5);
console.log(`加算結果: ${sum}`); //加算結果を表示する

const difference = my_module.arithmetic.subtract(10,5);
console.log(`減算結果: ${difference}`); //減算結果を表示する

const concat = my_module.string_concat.concat('Hello','Node.js'); // string_concat.jsから関数をインポートする
console.log(`結合結果: ${concat}`); // 文字列を連結して表示する
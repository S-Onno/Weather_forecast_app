const arithmetic = require('./arithmetic.js'); //arithmetic.jsから関数をインポートする
const string_concat = require('./string_concat.js'); //string_concat.jsから関数をインポートする
const sum = arithmetic.add(5,3);
console.log(`加算結果: ${sum}`); //加算結果を表示する


const difference = arithmetic.subtract(10,5);
console.log(`加算結果: ${difference}`);

const concat = string_concat.concat('Hello', 'World'); //string_concat.jsから関数をインポートして文字列を連結する
console.log(`結合結果: ${concat}`); //連結した文字列を表示する
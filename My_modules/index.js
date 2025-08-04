// My_modules/index.js
const arithmetic    = require('./arithmetic');
const string_concat = require('./string_concat');

module.exports = {
  arithmetic,
  string_concat
};
// このファイルは、他のモジュールからarithmeticとstring_concatをまとめてインポートできるようにするためのエントリーポイントです。
// これにより、他のファイルでは以下のようにインポートできます
function concat(a,b) { //ファンクションは関数を定義する //文字列を連結する関数
    return `${a} ${b}`;
}

module.exports = { //モジュールエクスポートは他のファイルからこの関数を使えるようにする
    concat
};
const { format } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, //ユーザー入力する場所！
    output: process.stdout　//ユーザーに出力する
});

rl.question('郵便番号を入力してください(半角で数字7桁): ', (answer) => {
    console.log(`入力された郵便番号は: ${answer}`);    // ここで郵便番号を使った処理
    if(!zip || isNaN(zip) || zip.length !== 7){
        console.log('郵便番号は半角数字7桁で入力してください。');
    } else {
        format_zip = `${zip.slice(3)}-${zip.slice(0, 3)}`;
        console.log(`入力された郵便番号は: ${format_zip}`);        // ここで天気情報を取得する処理を追加
    }
    rl.close(); // 入力が完了したらインターフェースを閉じる
});
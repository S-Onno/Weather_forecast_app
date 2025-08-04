const axios = require('axios'); // axiosを使ってHTTPリクエストを送るためのライブラリ
const { format } = require('path');
const readline = require('readline');

const api_key = 'ee5a92ae32656419f18b3c3f4d7896ea'; // OpenWeatherMapのAPIキー
// 天気情報を取得するためのAPIキーを設定
// APIキーを公開するのは、良くないから、

const rl = readline.createInterface({
    input: process.stdin, //ユーザー入力する場所！
    output: process.stdout　//ユーザーに出力する
});

function get_weather_by_zip_code(formatted_zip) {
    const url =`https://api.openweathermap.org/data/2.5/weather?zip=${formatted_zip},JP&appid=${API_key}&lang=jp`;
    // 天気情報を取得するためのURLを設定

    axios.get(url)
        .then(function(response) {
            const weather_datea = response.data; 
            console.log(weather_datea);
        })
        .catch(function(error) {
            console.error('エラーが発生しました。');
        });
}
    

rl.question('郵便番号を入力してください(半角で数字7桁): ', (zip) => {
    console.log(`入力された郵便番号は: ${zip}`);    // ここで郵便番号を使った処理
    if(!zip || isNaN(zip) || zip.length !== 7){
        console.log('郵便番号は半角数字7桁で入力してください。');
    } else {
        format_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
        console.log(`入力された郵便番号は: ${format_zip}`);   
        get_weather_by_zip_code(formatted_zip);    // ここで天気情報を取得する処理を追加
    }
    rl.close(); // 入力が完了したらインターフェースを閉じる
});
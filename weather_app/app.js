const axios   = require('axios');
const readline = require('readline');

const api_key = 'ee5a92ae32656419f18b3c3f4d7896ea';  // 前後に不要なスペースが入らないように

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

function get_weather_by_zip_code(formatted_zip) {
  // lang=ja が正しい日本語コードです
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${formatted_zip},jp&appid=${api_key}&lang=ja`;

  axios.get(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('天気情報取得でエラーが発生しました。', error);
    });
}

rl.question('郵便番号を入力してください(半角数字7桁): ', zip => {
  if (!zip || isNaN(zip) || zip.length !== 7) {
    console.log('郵便番号は半角数字7桁で入力してください。');
    rl.close();
    return;
  }

  // ハイフン入りを作る変数名を「formatted_zip」と一致させ、const で宣言
  const formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
  console.log(`ハイフン付き郵便番号: ${formatted_zip}`);

  get_weather_by_zip_code(formatted_zip);

  rl.close();
});

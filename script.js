const API_KEY = 'VAXKEBTB0U53HPZF';
const SYM = 'DIS';
const API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DIS&interval=5min&apikey=${API_KEY}';

// Get initial stock data
getStockData(API_URL);



async function getStockData(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  //showStockData(data.results);
}

/*
function showStockData() {
  
}
*/





/*
'use strict';
var request = require('request');

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});
*/

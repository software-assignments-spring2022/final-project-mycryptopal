// Initial setup
const express = require('express');
const app = express();
const path = require('path');

// Useful libraries
require('dotenv').config({ silent: true}); // loads environmental variables from hidden file
const axios = require('axios'); // makes requests to API
const morgan = require('morgan'); // handles HTTP POST requests with file uploads
const multer = require('multer'); // logs incoming HTTP requests

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // serves static files
app.use(express.json()); // parses incoming JSON requests
app.use(express.urlencoded({ extended: true})); // parses incoming requests with urlencoded payloads
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log("Example custom middleware function");
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Example route');
});

app.get('/portfolio/:symbol', (req, res, next) => {
    
    const API_TOKEN = "c8qd4eiad3ienapjjc9g";
    const CRYPTO_SYMBOLS = ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:DOGEUSDT", "SOL", "BINANCE:SHIBUSDT"]
    const INTERVAL_OPTIONS = [30, 60, 90, 120]
    const API_URL = "https://finnhub.io/api/v1/crypto/candle"
    const RESOLUTION = "D"

    function getUnixTime(date) {
        return date.getTime() / 1000 | 0;
      }
      
      function transformData(data) {
        return data.c.map((item, index) => ({
          close: Number(item).toFixed(2),
          open: Number(data.o[index]).toFixed(2),
          timestamp: new Date(data.t[index] * 1000).toLocaleDateString()
        }))
      }

        function to() {
          return getUnixTime(new Date())
      }
        function from() {
        let d = new Date();
        d.setDate(d.getDate() - INTERVAL_OPTIONS[0]); //this will be modified to whatver is passed from front end
        return getUnixTime(d);
      }


    
      axios
      .get(`https://finnhub.io/api/v1/crypto/candle?from=${from()}&resolution=D&symbol=${req.params.symbol}&to=${to()}&token=c8qd4eiad3ienapjjc9g`)
      .then(apiResponse => res.json(apiResponse.data))
      .catch(err => next(err));


});

app.get('/userdata', (req, res) => {
  axios
  .get(`https://my.api.mockaroo.com/users.json?key=4c156a80&limit=1`)
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err=> next(err));
})

app.get('/crypto/:symbol', (req, res) => {
  axios
  .get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${req.params.symbol}`, { headers: { 'X-CMC_PRO_API_KEY': '528926c7-6726-45a1-9add-dcb670893b40' }})
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err => console.log(err))
});

    // https://www.mockaroo.com/docs
    // All these API requests should be "GET" Requests based on the Input
    // Name of clicked Crypto <--- Will be filled in based on results of "GET" Request
    // Price of clicked Crypto <--- Will be filled in based on results of "GET" Request
    // Picture of Crypto <--- Will be filled in based on results of "GET" Request
    // Stock Graph of Crypto <--- Will be filled in based on results of "GET" Request
    // Crypto information <--- Will be filled in based on results of "GET" Request

    // Add a picture of a cryptocurrency to the right of these headers

// route for crypto analytics page
// app.get()

module.exports = app;
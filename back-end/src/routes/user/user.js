const {Router} = require('express');
const router = new Router({mergeParams: true});
const axios = require('axios');
const path = require('path');
require('dotenv').config({
  silent: true, path: path.join('../..', '.env'),
}); // Stores custom environmental variables

router.get('/assets', (req, res) => {
  const COINS = ['BTC', 'ETH', 'DOGE', 'SOL', 'XMR'];
  const FRACTIONS = new Array(COINS.length).fill(0).map(() => {
    return parseInt((Math.random() * 200)) + 20;
  });
  const ALLOCATIONS = COINS.reduce((current, element, index) => {
    current[element] = FRACTIONS[index];
    return current;
  }, {});
  res.json(ALLOCATIONS);
});

router.get('/data', (req, res) => {
  axios
      .get(`https://my.api.mockaroo.com/users.json?key=4c156a80&limit=1`)
      .then((apiResponse) => res.json(apiResponse.data));
});

module.exports = router;

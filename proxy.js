const express = require('express');
const config = require('./config.js');

const proxy = express();
let port = 442;
const mode = process.env.NODE_ENV;

let configURL = {};
if (mode === "development") {
  configURL = config.dev;
  // proxy.use(express.static('public_dev'));
  port = 3000;
} else {
  configURL = config.production;
  // proxy.use(express.static('public_prod'));
}
proxy.use(express.static('dist'));

proxy.listen(port, () => {
  console.log(`Proxy listening at ${configURL.proxy}`)
});

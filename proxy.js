const express = require('express');
const config = require('./config.js');

const proxy = express();
const port = 80;

let configURL = {};
if (process.env.NODE_ENV === "development") {
  configURL = config.dev;
  proxy.use(express.static('public_dev'));
} else {
  configURL = config.production;
  proxy.use(express.static('public_prod'));
}

proxy.listen(port, () => {
  console.log(`Proxy listening at ${configURL.proxy}`)
});

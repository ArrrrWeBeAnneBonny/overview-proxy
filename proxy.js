const express = require('express');
const config = require('./config.js');

const proxy = express();
const port = 3000;

let configURL = {};
if (process.env.NODE_ENV === "production") {
  configURL = config.production;
} else {
  configURL = config.dev;
}

proxy.listen(port, () => {
  console.log(`Proxy listening at ${configURL.proxy}`)
});
proxy.use(express.static('public'));
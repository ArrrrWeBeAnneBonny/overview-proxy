const express = require('express');

const proxy = express();
const port = 3000;

proxy.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
proxy.use(express.static('public'));
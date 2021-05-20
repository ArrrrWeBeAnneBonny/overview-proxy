const express = require('express');
const servicePorts = require('./config.js')

const proxy = express();
const port = 8000;

proxy.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
proxy.use(express.static('/public'))

proxy.get('/', (req, res) => {
    console.log('proxy request query: ', req.query);
    let campId = parseInt(req.query.campId);
    if (typeof campId !== 'number' || campId === undefined) {
      campId = 0;
    }
    console.log('Camp ID: ', campId);

})
const express = require('express');
const app = express();

const ipAddress = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
  res.send('welcome to  Hello World!');
});

app.listen(port, ipAddress, () => {
  console.log(`Example app listening on http://${ipAddress}:${port}`);
});

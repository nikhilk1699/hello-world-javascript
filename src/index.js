require('dotenv').config();

const express = require('express');
const app = express();

const ipAddress = process.env.IP_ADDRESS || '0.0.0.0';
const port = process.env.PORT || 3000;

//task 1
//const ipAddress = '0.0.0.0';
//const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, ipAddress, () => {
  console.log(`Example app listening on http://${ipAddress}:${port}`);
});


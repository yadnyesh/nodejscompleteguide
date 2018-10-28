const http = require('http');
const routes = require('./routes');

const express = require('express');

const app = express();

app.use('/product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<html><h1>Hello From Product express</h1></html>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<html><h1>Hello From Express</h1></html>');
});

app.listen(3000);
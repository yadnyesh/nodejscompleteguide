const express = require('express');
const router = express.Router();


app.use('/', (req, res, next) => {
  console.log('In root middleware');
  res.send('<html><h1>Hello From Express</h1></html>');
});
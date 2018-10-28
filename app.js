const http = require('http');


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form><body></html>');
});

app.use('/product', (req, res, next ) =>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('In root middleware');
  res.send('<html><h1>Hello From Express</h1></html>');
});

app.listen(3000);
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');



const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);



app.use('/', (req, res, next) => {
  console.log('In root middleware');
  res.send('<html><h1>Hello From Express</h1></html>');
});

app.listen(3000);
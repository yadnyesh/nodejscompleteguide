const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  console.log('In root middleware');
  res.sendFile('/views/shop.html');
});

module.exports = router
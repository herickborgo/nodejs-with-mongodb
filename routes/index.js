'use strict';

const express = require('express');
const router = express.Router();
const colors = require('./color');

router.get('/', (req, res) => {
  res.status(200).send({
    title: 'Node Api',
    version: '0.1.0',
  });
});
router.use('/colors', colors);

module.exports = router;
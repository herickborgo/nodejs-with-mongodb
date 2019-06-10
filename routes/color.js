'use strict';

const express = require('express');
const router = express.Router();
const ColorController = require('../src/controllers/ColorController');

router.get('/', ColorController.index);
router.get('/:id', ColorController.show);
router.post('/', ColorController.store);
router.put('/:id', ColorController.update);
router.delete('/:id', ColorController.destroy);

module.exports = router;

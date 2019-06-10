'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  hexadecimal: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
});

module.exports = mongoose.model('Color', schema);

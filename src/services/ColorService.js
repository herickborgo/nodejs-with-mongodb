'use strict';

const mongoose = require('mongoose');
require('../models/Color');
const Color = mongoose.model('Color');

exports.all = () => {
  return Color.find();
};

exports.create = async (data) => {
  const color = new Color();
  color.name = data.name;
  color.hexadecimal = data.hexadecimal;
  await color.save();
  return color;
};

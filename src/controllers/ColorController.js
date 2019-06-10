'use strict';

const ColorService = require('../services/ColorService');

exports.index = (req, res, next) => {
  res.status(200).send(ColorService.all());
};

exports.show = (req, res, next) => {
  res.status(200).send({
    id: req.params.id,
    name: 'Blue',
  });
}

exports.store = (req, res, next) => {
  res.status(201).send(ColorService.create(req.body));
};

exports.update = (req, res, next) => {
  res.status(200).send({
    id: req.params.id,
    name: 'Blue',
  });
};

exports.destroy = (req, res, next) => {
  res.status(204).send(null);
};

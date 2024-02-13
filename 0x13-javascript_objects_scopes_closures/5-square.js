#!/usr/bin/node
/* a class Square that defines a square and inherits from Rectangle of 4-rectangle.js */
const Rectangle = require('./4-rectangle.js');
module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
};

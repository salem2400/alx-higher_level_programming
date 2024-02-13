#!/usr/bin/node
/* A class Rectangle that defines a rectangle */
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      [this.width, this.height] = [w, h];
    }
  }
};

#!/usr/bin/node
/* a function that converts a number from base 10 to another base passed as argument */
exports.converter = function (base) {
  return function (val) {
    return (val.toString(base));
  };
};

#!/usr/bin/node
/* a function that returns the reversed version of a list */
exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
  /* const tempList = [];
  let len = 0;
  for (let i = 1; i < list.length; i++) {
    len += 1;
  }
  for (let j = len; j >= 0; j--) {
    tempList.push(list[j]);
  }
  return (tempList); */
};

#!/usr/bin/node
/* script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer */
const arg = process.argv[2];
const value = parseInt(arg);
if (!isNaN(value)) {
  console.log('My number: ' + value);
} else {
  console.log('Not a number');
}

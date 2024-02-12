#!/usr/bin/node
/* script that prints a message depending of the number of arguments passed */
const arg = process.argv.length;
if (arg <= 2) {
  console.log('No argument');
}
if (arg === 3) {
  console.log('Argument found');
}
if (arg > 3) {
  console.log('Arguments found');
}

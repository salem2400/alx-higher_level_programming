#!/usr/bin/node
/* script that prints a asquare */
const arg = parseInt(process.argv[2]);
if (isNaN(arg)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < arg; i++) {
    let row = '';
    for (let j = 0; j < arg; j++) {
      row += 'X';
    }
    console.log(row);
  }
}

#!/usr/bin/node
/* script that prints the addition of 2 integers */
function add (a, b) {
  /* Sum function */
  const sum = a + b;
  return (sum);
}
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);
console.log(add(arg1, arg2));

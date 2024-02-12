#!/usr/bin/node
/* A script that prints a factorial */
const arg = parseInt(process.argv[2]);
function factorial (n) {
  /* a recursive factorial resolver */
  if (isNaN(n) || n === 0) {
    return (1);
  } else {
    return (n * factorial(n - 1));
  }
}
console.log(factorial(arg));

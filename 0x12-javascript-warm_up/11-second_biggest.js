#!/usr/bin/node
/* a script that searches the second biggest integer in the list of arguments */
const len = process.argv.length;
if (len <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number).slice(2, len).sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}

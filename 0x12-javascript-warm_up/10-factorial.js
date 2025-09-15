#!/usr/bin/node

const args = process.argv.slice(2);
const num = parseInt(args[0]);

function factorial (n) {
  if (isNaN(n)) return 1;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

if (args[0] === undefined) {
  console.log('1');
} else if (isNaN(num)) {
  console.log(1);
} else if (num < 0) {
  console.log('Factorial is not defined for negative numbers');
} else {
  console.log(factorial(num));
}

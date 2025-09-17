#!/usr/bin/node

const args = process.argv.slice(2);
const nums = args.map(num => parseInt(num)).filter(num => !isNaN(num));

function findSecondBiggest (arr) {
  if (arr.length < 2) return null;

  let biggest = -Infinity;
  let secondBiggest = -Infinity;

  for (const num of arr) {
    if (num > biggest) {
      secondBiggest = biggest;
      biggest = num;
    } else if (num > secondBiggest && num < biggest) {
      secondBiggest = num;
    }
  }
  return secondBiggest === -Infinity ? null : secondBiggest;
}

if (nums.length < 2) {
  console.log('0');
} else {
  const result = findSecondBiggest(nums);
  if (result === null) {
    console.log('No second biggest integer found');
  } else {
    console.log(result);
  }
}

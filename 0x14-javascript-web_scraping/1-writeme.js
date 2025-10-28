#!/usr/bin/node

const fs = require('fs');
const path = process.argv[2];
const content = process.argv[3];

if (!path) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1);
}
if (content === undefined) {
  console.error('Please provide a string to write as the second argument.');
  process.exit(1);
}
fs.writeFile(path, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});

#!/usr/bin/node
const Square = require('./5-square');

class printSquare extends Square {
  charPrint (c) {
    if (this.width && this.height) {
      const char = c === undefined ? 'X' : c;
      for (let i = 0; i < this.height; i++) {
        console.log(char.repeat(this.width));
      }
    }
  }
}
module.exports = printSquare;

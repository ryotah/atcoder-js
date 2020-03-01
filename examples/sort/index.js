'use strict';

const main = input => {
  console.log(input, '\n---'); // for debug
  input = input.split('\n');
  // If spaces are included in input,
  // input = input.split('\n').map(v => v.trim()).filter(v => v);
  input = input.map(Number);
  input.sort(numberSorter);

  console.log(input.join('\n'));
};

const numberSorter = (a, b) => a - b;

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

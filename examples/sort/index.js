'use strict';

const main = input => {
  console.log(input, '\n---'); // for debug
  input = input.split('\n');
  input = input.map(v => parseInt(v, 10));
  input.sort(numberSorter);

  console.log(input.join('\n'));
};

const numberSorter = (a, b) => a - b;

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

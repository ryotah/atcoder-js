'use strict';

const main = input => {
  input = input.split('\n').map(Number);
  input.sort((a, b) => a - b);
  console.log(input.join('\n'));
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

'use strict';

const main = input => {
  console.log(input, '\n---'); // for debug
  const A = input
    .split('\n')[0]
    .split(' ')
    .map(toNumber);
  const B = input
    .split('\n')[1]
    .split(' ')
    .map(toNumber);
  let count = 0;
  B.forEach(v => binaryIndexOf(A, v) !== -1 && count++);
  console.log(count);
};

const toNumber = str => Number(str);

const binaryIndexOf = (arr, key) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] > key) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

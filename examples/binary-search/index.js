'use strict';

const main = input => {
  console.log(input, '\n---'); // for debug
  const A = input.split('\n')[0].split(' ');
  const B = input.split('\n')[1].split(' ');
  let count = 0;
  B.forEach(v => {
    if (binarySearch(A, v)) {
      count += 1;
    }
  });
  console.log(count);
};

const binarySearch = (arr, key) => {
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
  return null;
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

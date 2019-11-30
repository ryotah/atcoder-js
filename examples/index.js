const main = input => {
  input = input.split('\n');
  console.log(input);
  input = input.map(v => parseInt(v, 10));
  console.log(input);
  input.sort();
  console.log(input);
  console.log(input.join('\n'));
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

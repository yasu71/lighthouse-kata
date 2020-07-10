const multiplicationTable = function(maxValue) {
  let output = '';

  for (let row = 1; row <= maxValue; row++) {
      for (let column = 1; column <= maxValue; column++) {
        output = output + (row * column) + " ";
    }
    output = output + "\n";
  }
  return output
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

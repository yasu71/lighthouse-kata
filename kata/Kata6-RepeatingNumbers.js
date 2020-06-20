const repeatNumbers = function(data) {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i][1]; x++) {
      output += data[i][0];
    }
    if (i < data.length - 1) {
      output +=  ', ';
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
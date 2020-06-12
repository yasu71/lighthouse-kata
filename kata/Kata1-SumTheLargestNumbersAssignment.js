const sumLargestNumbers = function(data) {
  // Put your solution here
  const sortedData = data.sort(function(a, b){return a-b});
  const arrayLength = sortedData.length;
  const sum = sortedData[arrayLength - 1] + sortedData[arrayLength - 2] 
  return sum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
const camelCase = function (input) {
  const inputArray = input.split("");
  const output = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i - 1] === " ") {
      output.push(inputArray[i].toUpperCase());
    } else if (inputArray[i] !== " ") {
      output.push(inputArray[i]);
    }
  }
  return output.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

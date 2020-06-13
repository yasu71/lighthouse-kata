const numberOfVowels = function (data) {
  const vowels = ["a", "i", "u", "e", "o"];
  const convertToArray = data.split("");
  let sum = 0;
  for (vowel of vowels) {
    for (datum of data) {
      if (datum === vowel) {
        sum++;
      }
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

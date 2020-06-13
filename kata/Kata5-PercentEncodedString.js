// const urlEncode = function (text) {
//   const textArray = text.split("");
//   let textWithPercentage = "";

//   for (word of textArray) {
//     if (" " === word) {
//       textWithPercentage += "%20";
//     } else {
//       textWithPercentage += word;
//     }
//   }

//   return textWithPercentage;
// };

//======== #2 Method ========

// const urlEncode = function (text) {
//   const textArray = text.split(" ").join("%20");
//   return textArray;
// };


//======== #3 Method ========

// const urlEncode = function (text) {
//   const textWithPercentage = text.replace(/ /g, "%20");
//   return textWithPercentage;
// };

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

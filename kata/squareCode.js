const squareCode = function(message) {
  // Put your solution here
  let removeSpace = message.split(' ').join('');
  let output = Math.ceil(Math.sqrt(removeSpace.length));
  // output => 3
  let arr = [];
  for (let i = 0; i < removeSpace.length; i+3){
    arr.push(removeSpace.slice(i, output-1));
    // removeSpace.splice();
    // arr.push(removeSpace.slice(output, output + output));
    // arr.push(removeSpace.slice((output+1),output));
    // console.log("b :" + arr);
  }

  // arr.push(removeSpace.slice(0,output));
  // console.log("a :" + arr);
  // arr.push(removeSpace.slice((output+1),output));
  // console.log("b :" + arr);
  // for (let i = 0; i < removeSpace.length; i++) {
    
    console.log("a :" + arr);
    // }
};

console.log(squareCode("chill out"));
// clu hlt io  
console.log(squareCode("feed the dog"));
// fto ehg ee dd
console.log(squareCode("have a nice day"));
// hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


// 7
// clu <- length
// hlt
// io
// ^ roundUp

// 10

// fto
// ehg
// ee
// dd

// 11
// hae
// and
// via
// ecy

// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
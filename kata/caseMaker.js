const makeCase = function(input, case1) {
  // Put your solution here
  // let removeSpace = input.split(" ").join("");

  let output = "";

  const camel = function(input) {
    // if (case1 === "camel") {
      for (let i = 0; i < input.length; i++) {  
        if (input[i] === " ") {
          output += input[i + 1].toUpperCase();
          i++;
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }   

  const pascal = function() {
    // if (case1 === "pascal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += input[i + 1].toUpperCase();
          i++;
        } else if (i === 0) {
          output += input[i].toUpperCase();
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }

  const snake = function() {
    // if (case1 === "snake") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "_";
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }


  const kebab = function() {
    // if (case1 === "kebab") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "-";
        } else {
          output += input[i];
        }
      }
    // }
    output; 
  }

  const title = function(input) {
    // if (case1 === "title") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += input[i]
          output += input[i+1].toUpperCase();
          i++;
        } else if (i === 0) {          
          output += input[i].toUpperCase();
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }

  const vowel = function(input) {
    // if (case1 === "vowel") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "a" || input[i] === "i" || input[i] === "u" || input[i] === "e" || input[i] === "o" ) {
          output += input[i].toUpperCase();
            // i++;
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }

  const consonant = function() {
    // if (case1 === "consonant") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== "a" && input[i] !== "i" && input[i] !== "u" && input[i] !== "e" && input[i] !== "o" ) {
          output += input[i].toUpperCase();
            // i++;
        } else {
          output += input[i];
        }
      }
    // }
    output;
  }

  const upper = function() {
    // if (case1 === "upper") {
      output = input.toUpperCase();
    // }
  }

  const lower = function() {
    // if (case1 === "lower") {
      output = input.toLowerCase();
    // }
  }

  // let x = camel();

  const caseStyles = {
    camel: camel,
    pascal: pascal,
    snake: snake,
    kebab: kebab,
    title: title,
    vowel: vowel,
    consonant: consonant,
    upper: upper,
    lower: lower
  }

  // for (let style in caseStyles) {
  //   if (case1){
  //     // console.log(case1);
  //     console.log(caseStyles[style]);
  //     output = caseStyles[style]();
  //     // console.log(output);
  //   } else if (Array.isArray(case1)) {
      
  //   }
  // }
console.log("caesStyle: " + caseStyles.snake)

  if (Array.isArray(case1)) {
    let tmp = input;
    // loop {
    for (let i = 0; i < case1.length; i++){
    //  tmp = caseStyles[???](tmp);
    console.log("aaa: " + caseStyles[case1[i]]);
      tmp = caseStyles[case1[i]](tmp);
    }
    output = tmp;
  } else if (caseStyles[case1]) {
    console.log("123 :" + caseStyles[case1](input));
    output = caseStyles[case1](input);
  } 
  // else {
  //   // freak out
  // }
  return output;
};

// console.log(makeCase(input, case1));
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["snake", "snake"]));


// == Expected Output ==
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

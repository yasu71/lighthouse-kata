const calculateChange = function(total, cash) {
  const twentyDollar = 2000;
  const tenDollar = 1000;
  const fiveDollar = 500;
  const twoDollar = 200;
  const oneDollar = 100;
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;
  const changes = {};

  let change = cash - total;
  console.log("change1: ", change)

  if (change >= twentyDollar) {
    changes.twentyDollar = Math.trunc(change / twentyDollar);
    change = change - Math.trunc(change / twentyDollar) * 2000;
  } 
  if (change >= tenDollar) {
    changes.tenDollar = Math.trunc(change / tenDollar);
    change = change - Math.trunc(change / tenDollar) * 1000;
  } 
  if (change >= fiveDollar) {
    changes.fiveDollar = Math.trunc(change / fiveDollar);
    change = change - Math.trunc(change / fiveDollar) * 500;
  } 
  if (change >= twoDollar) {
    changes.twoDollar = Math.trunc(change / twoDollar);
    change = change - (Math.trunc(change /  twoDollar)) * 200;
    console.log("change2: ", change)
  } 
  if (change >= oneDollar) {
    changes.oneDollar = Math.trunc(change / oneDollar);
    change = change - (Math.trunc(change /  oneDollar)) * 100;
    console.log("change3: ", change)
  } 
  if (change >= quarter) {
    changes.quarter = Math.trunc(change / quarter);
    change = change - (Math.trunc(change /  quarter)) * 25;
  } 
  if (change >= dime) {
    changes.dime = Math.trunc(change / dime);
    change = change - (Math.trunc(change /  dime)) * 10;
  } 
  if (change >= nickel) {
    changes.nickel = Math.trunc(change / nickel);
    change = change - (Math.trunc(change /  nickel)) * 5;
  } 
  if (change >= penny) {
    changes.penny = Math.trunc(change / penny);
  } 

 return changes;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
// Twenty dollars = 2000
// Ten dollars = 1000
// Five dollars = 500
// Two dollars = 200
// One dollar = 100
// Quarter (25¢)= 25
// Dime (10¢) = 10
// Nickel (5¢) = 5
// Penny (1¢) = 1
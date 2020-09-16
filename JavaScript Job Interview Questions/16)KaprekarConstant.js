// Kaprekar's Constant
// Facebook

//  3210 - 123 = 3087
//  8730 - 0378 = 8352
//  8532 - 2358 = 6174 (3 iterations)

function countSteps(val) {
  var result = 0;
  while (val != 6174) {
    val = newNum(val);
    if (val === 0) break;
    result++;
  }
  if (val === 0) result = -1;
  return result;
}

function newNum(num) {
  num = num.toString();
  num = num.split("");

  if (num.length < 4) {
    num.push("0");
  }
  num = num.sort();

  let numAsc = Number(num.join(""));
  let numDsc = Number(num.reverse().join(""));
  num = numDsc - numAsc;
  return num;
}

console.log(countSteps(123));
console.log(countSteps(7777));
let i = 0;

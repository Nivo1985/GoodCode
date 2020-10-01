// Apple
// Convert to base ... 2 ... 16

function convertToBaseTwo(num) {
  let result = "";

  do {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  } while (num > 0);

  return result;
}

function convertToBaseN(num, N) {
  let result = "";

  do {
    result = (num % N) + result;
    num = Math.floor(num / N);
  } while (num > 0);

  return result;
}

function convertToBaseNFull(num, N, dictionary) {
  let result = "";

  do {
    result = dictionary[num % N] + result;
    num = Math.floor(num / N);
  } while (num > 0);

  return result;
}

//console.log(convertToBaseTwo(123));
// console.log(convertToBaseN(123, 2));
// console.log(convertToBaseN(124, 3));
console.log(
  convertToBaseNFull(270, 16, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ])
);

let i = 0;

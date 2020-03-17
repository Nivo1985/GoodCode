let arr09 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr10_13 = [10, 11, 12, 13];
let arr14_17 = [14, 15, 16, 17];
let arr18_20 = [18, 19, 20];
let result;

result = arr09.concat(arr10_13);
result = arr09.concat(arr10_13, arr14_17, arr18_20);
result = arr09.concat(arr10_13, arr14_17, arr18_20, 21, 22);
result = arr09.concat(1, 2, 3, null, undefined, "String", true, x => x, {});
result = arr09
  .concat(arr10_13)
  .concat(arr14_17)
  .concat(arr18_20);
console.log(arr09);

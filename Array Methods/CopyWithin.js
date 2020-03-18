let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result;
//result = arr.copyWithin(4);
//result = arr.copyWithin(-4);
//result = arr.copyWithin(4, 2); // start is also optional
result = arr.copyWithin(4, 2, 6); // replacing the elements not inserting them that is why len stays the same
console.log(arr);

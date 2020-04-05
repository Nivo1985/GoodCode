// var x = 1,
//   y = 2,
//   z;

// z = y;
// y = x;
// x = z;

// console.log(x, y);

// var x = 1,
//   y = 2;
// [x, y] = [y, x];
// console.log(x, y);

var x = 1,
  y = 2,
  z = 3;
[z, x, y] = [x, y, z];
console.log([x, y, z]);

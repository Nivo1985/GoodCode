Number.prototype[Symbol.iterator] = function*() {
  for (var i = 0; i <= this; i++) {
    yield i;
  }
};

// for (let i of [...10]) {
//   console.log(i);
// }

console.log([...10]);

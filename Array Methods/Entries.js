let arr = ["zero", "one"];

let result = arr.entries();
let nextResult = result.next();
console.log(nextResult.value);
console.log(nextResult.done);
nextResult = result.next();
console.log(nextResult.value);
console.log(nextResult.done);
nextResult = result.next();
console.log(nextResult.value);
console.log(nextResult.done);

for (let iteration of arr.entries()) {
  console.log(iteration);
}

for (let [ind, ele] of arr.entries()) {
  console.log(ind, ele);
}

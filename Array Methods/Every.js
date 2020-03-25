let arr1 = [0, 1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
function check(a, i, arr) {
  return a === i; // this,arr  check
}

let result;

result = arr1.every(x => x < 10);
result = arr1.every(x => x > 0);
result = arr1.every(x => x); // :(
result = arr2.every(x => x); // :(
result = arr1.every((x, i) => x === i);
result = arr2.every((x, i) => x === i);
result = arr1.every(check);
result = arr1.every(check, arr1);
result = arr1.every(check, arr2);

console.log(result);

// Facebook
// First Missing Positive Number
// [3, 4, -1, 1] -> 2
// [19,5,9] -> 1
// [-4, -5, 100] -> 1

function NoExtraMemory(input) {
  input = input.filter((a) => a > 0).sort((a, b) => a - b);
  for (let i = 1; ; i++) if (input.indexOf(i) === -1) return i;
}

function ExtraMemory(input) {
  let tempHash = {};
  input.filter((a) => a > 0).forEach((a) => (tempHash[a] = a));
  for (let i = 1; ; i++) if (tempHash[i] === undefined) return i;
}

console.log(NoExtraMemory([3, 4, -1, 1]));
console.log(ExtraMemory([3, 4, -1, 1]));

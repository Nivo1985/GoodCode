// Facebook

// Input: [4, 3, 2, 4, 1, 3, 2] // only one
// Output: 1

// Cost Memory vs Complixity

function NonDupMemoryLinear(input) {
  //n^2
  for (let i = 0; i < input.length; i++) {
    // n
    for (let j = 0; j < input.length; j++) {
      // n
      if (i != j && input[i] == input[j]) break;
      if (j === input.length - 1) return input[i];
    }
  }
}

function NonDupLinearComplexity(input) {
  let hTable = [];
  for (let i = 0; i < input.length; i++) {
    hTable[input[i]] = AddMark(hTable[input[i]]);
  }

  for (let i = 0; i < hTable.length; i++) {
    if (hTable[i] === 1) return i;
  }

  function AddMark(val) {
    if (val === undefined) val = 0;
    return ++val;
  }
}

let arr = [4, 3, 2, 4, 1, 3, 2];
console.log(NonDupMemoryLinear(arr));
//console.log(NonDupLinearComplexity(arr));

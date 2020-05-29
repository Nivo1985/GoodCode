// Google

// Input: [3, 6, 3, 4, 1]
// Output: [6, 4, 1]

// 36341          x (murder scene)
// O(n) - cost

function getWitnesses(input) {
  let result = [];
  let max = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    let currentValue = input[i];
    if (currentValue > max) {
      max = currentValue;
      result.unshift(currentValue);
    }
  }

  return result;
}

console.log(getWitnesses([3, 6, 3, 4, 1]));

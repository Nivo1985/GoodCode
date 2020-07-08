// UBER

//[0,1,0,2,1,0,1,3,2,1,2,1]
//       X
//   X███XX█X
// X█XX█XXXXXX
// result: 6

let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function Solution(input) {
  let result = 0;
  let max = Math.max(...input);

  for (let i = 1; i <= max; i++) {
    // n
    let leftIndex = input.length;
    let rightIndex = 0;
    for (let j = 0; j < input.length; j++) {
      // n
      if (input[j] >= i) {
        if (leftIndex > j) leftIndex = j;
        if (rightIndex < j) rightIndex = j;
      }
    }

    for (let j = leftIndex + 1; j < rightIndex; j++) {
      // n
      if (input[j] < i) result++;
    }
  }

  return result;
}

console.log(Solution(input));

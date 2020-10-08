// Facebook
// (1 - ((2 + 3) * 2)) = -9
// 1 2 3 + 2 * - = -9
// 0(n)

let input = [1, 2, 3, "+", 2, "*", "-"];

function SolveRPN(input) {
  for (let i = 0; ; ) {
    let currernt = input[i];
    if (input.length === 1) return input[0];
    if (!Number.isInteger(currernt)) {
      input.splice(
        i - 2,
        3,
        OperationGenerator(currernt)(input[i - 2], input[i - 1])
      );

      i--;
      continue;
    }
    i++;
  }
}
function OperationGenerator(operator) {
  switch (operator) {
    case "+":
      return (x, y) => x + y;
    case "*":
      return (x, y) => x * y;
    case "-":
      return (x, y) => x - y;
    case "/":
      return (x, y) => x / y;
  }
}

console.log(SolveRPN(input));

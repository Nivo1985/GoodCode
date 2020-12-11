//Amazone
// No converting to string :)

function ReverseInteger(x) {
  let result = 0;
  let helper = 0;
  let isNegative = x < 0;

  if (isNegative) x *= -1;

  for (let i = 10; i < x * 10; i *= 10) {
    let modulo = (x % i) - helper;
    modulo /= i / 10;
    helper = modulo * (i / 10) + helper;
    result = result * 10 + modulo;
  }

  if (isNegative) result *= -1;

  return result;
}

console.log(ReverseInteger(123));
//console.log(ReverseInteger(-123));

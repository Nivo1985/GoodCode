//Nth Fibonacci Number
//Apple

function fibR(n, a = 1, b = 0) {
  if (n === 0) {
    return b;
  } else {
    return fibR(n - 1, b, a + b);
  }
}

function fibI(n, a = 1, b = 0) {
  do {
    if (n === 0) return b;

    let temp = a;
    a = b;
    b += temp;
    --n;
  } while (n >= 0);
}

const fibArrow = (n, a = 1, b = 0) => (n === 0 ? b : fibArrow(n - 1, a + b, a));

console.log(fibI(6));
console.log(fibR(6));
console.log(fibArrow(6));

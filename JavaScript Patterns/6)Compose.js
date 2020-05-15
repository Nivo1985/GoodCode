function Mul1(x) {
  return x * 1;
}
function Mul2(x) {
  return x * 2;
}
function Mul3(x) {
  return x * 3;
}

// function compose2(g, f) {
//   return function(x) {
//     return g(f(x));
//   };
// }

// let compo2Funcs = compose2(Mul2, Mul3);
// console.log(compo2Funcs(2));

// function compose3(h, g, f) {
//   return function(x) {
//     return h(g(f(x)));
//   };
// }

// let compo3Funcs = compose3(Mul2, Mul3, Mul2);
// console.log(compo3Funcs(2));

function composeRecurent(...funcs) {
  return function(x) {
    if (funcs.length) {
      return funcs.pop()(composeRecurent(...funcs)(x));
    }
    return x;
  };
}

let compFunc = composeRecurent(Mul1, Mul2, Mul3);
console.log(compFunc(2));

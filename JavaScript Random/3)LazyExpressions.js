// // 1
// function defValu() {
//   console.log("defValu");
// }

// function foo(x = defValu()) {} // no call

// //2
// function defValu() {
//   console.log("defValu");
// }

// function foo(x = defValu()) {}

// foo("test"); // no call

// // 3
// function defValu() {
//   console.log("defValu");
// }

// function foo(x = defValu()) {}

// foo(); // first call
// foo(); // second call

// // 4
// function defValu() {
//   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); // rng generator
// }

// function foo(x = defValu()) {
//   console.log(x);
// }
// foo();
// foo();

// // 5
// function defValu() {
//   throw "Par is required";
// }

// function foo(x = defValu()) {}
// foo();
// foo();

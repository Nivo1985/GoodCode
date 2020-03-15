//1
// class Person {
//   constructor() {
//     this.name = "Peter";
//     this.age = 25;
//   }
// }
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1 === person2);
//2
// let instance = null;
// class Person {
//   constructor() {
//     if (instance) {
//       return instance;
//     }
//     instance = this;
//     this.name = "Peter";
//     this.age = 25;
//     return instance;
//   }
// }
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1 === person2);
//3
// class Person {
//   constructor() {
//     this.name = "Peter";
//     this.age = 25;
//   }
// }

// const singleton = (function() {
//   let instance;
//   function init() {
//     return new Person();
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = init();
//       }

//       return instance;
//     }
//   };
// })();

// const instanceA = singleton.getInstance();
// const instanceB = singleton.getInstance();

// console.log(instanceA === instanceB);

// 4
// const singleton = (function() {
//   let instance;
//   function init() {
//     return new Person();
//   }

//   class Person {
//     constructor() {
//       this.name = "Peter";
//       this.age = 25;
//     }
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = init();
//       }

//       return instance;
//     }
//   };
// })();

// const instanceA = singleton.getInstance();
// const instanceB = singleton.getInstance();

// console.log(instanceA === instanceB);

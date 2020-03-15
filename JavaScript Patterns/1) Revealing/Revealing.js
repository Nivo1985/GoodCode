const myRevealingModule = (function() {
  let privateName = "Peter";
  const publicVar = "Hello World";

  function privateFunction() {
    return privateName;
  }

  function publicSetName(name) {
    privateName = name;
  }

  function publicGetName() {
    console.log("Executing private function...");
    return privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();

console.log(myRevealingModule);

myRevealingModule.setName("Mark");
let name = myRevealingModule.getName();
console.log(name);

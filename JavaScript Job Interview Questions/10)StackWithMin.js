// Uber

// Stack With Extra Min
// complexity and memory cost O(1)

//push(x) -- Push element x onto stack.
//pop() -- Removes the element on top of the stack.
//getMin() -- Retrieve the minimum element in the stack.
//isEmpty() -- Gives info if stack is empty.

class SpecialStack {
  constructor() {
    this.stack = [];
    this.minElem = undefined;
  }

  push(x) {
    if (!this.stack.length) {
      this.stack.push(x);
      this.minElem = x;
    } else {
      if (x >= this.minElem) this.stack.push(x);
      else {
        this.stack.push(2 * x - this.minElem);
        this.minElem = x;
      }
    }
  }

  pop() {
    if (!this.stack.length) return;

    let popedElement = this.stack.pop();

    let result = popedElement < this.minElem ? this.minElem : popedElement;

    if (popedElement < this.minElem)
      this.minElem = 2 * this.minElem - popedElement;

    return result;
  }

  getMin() {
    if (!this.stack.length) return;
    return this.minElem;
  }

  isEmpty() {
    return !this.stack.length;
  }
}

let specialStack = new SpecialStack();
specialStack.push(2);
specialStack.push(1);
specialStack.push(3);
specialStack.push(-1);
specialStack.push(5);

while (!specialStack.isEmpty()) {
  console.log("MIN: " + specialStack.getMin());
  console.log("TOP: " + specialStack.pop());
  console.log("======================");
}

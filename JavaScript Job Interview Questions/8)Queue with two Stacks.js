// Queue with two Stacks
// Apple

class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop();
  }
}

class Queue {
  constructor(stack1, stack2) {
    this.mainStack = stack1;
    this.secondaryStack = stack2;
  }

  enqueue(x) {
    this.mainStack.push(x);
  }

  dequeue() {
    this.swapStacks(this.mainStack, this.secondaryStack);
    let result = this.secondaryStack.pop();
    this.swapStacks(this.secondaryStack, this.mainStack);

    return result;
  }

  swapStacks(source, target) {
    while (true) {
      let temp = source.pop();
      if (temp === undefined) break;
      target.push(temp);
    }
  }
}

let stack1 = new Stack();
let stack2 = new Stack();
let queue = new Queue(stack1, stack2);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
queue.enqueue(5);

while (true) {
  let temp = queue.dequeue();
  if (temp === undefined) break;
  console.log(temp);
}

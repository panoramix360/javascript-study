// Last In First Out
class Stack {
  list: Object[];

  constructor() {
    this.list = [];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  peek() {
    console.log(`Peeking ${this.list[0]}`);
    return this.list[0];
  }

  push(value: Object) {
    this.list.unshift(value)
  }

  pop() {
    return this.list.shift()
  }

  print() {
    for (let index in this.list) {
      const obj = this.list[index]
      console.log(`Stack #${index}: ${obj}`)
    }
  }
}

const stack = new Stack()

stack.push("Prato 1")
stack.push("Prato 2")
stack.push("Prato 3")
stack.push("Prato 4")

stack.peek()
stack.pop()
stack.peek()

stack.print()
// First In First Out
class Queue {
  list: Object[]

  constructor() {
    this.list = []
  }

  isEmpty() {
    return this.list.length === 0
  }

  peek() {
    console.log(`Peeking ${this.list[0]}`)
    return this.list[0]
  }

  add(value: Object) {
    this.list.push(value)
  }

  remove() {
    return this.list.shift()
  }

  print() {
    for (let index in this.list) {
      const obj = this.list[index]
      console.log(`Queue #${index}: ${obj}`)
    }
  }
}


const queue = new Queue()

queue.add("Lucas")
queue.add("Vitória")
queue.add("Pedro")
queue.add("Giulio")

queue.peek()
queue.remove()
queue.remove()
queue.peek()
queue.add("Gabriel")

queue.print()


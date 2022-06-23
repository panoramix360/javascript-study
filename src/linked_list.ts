class LinkedNode {
  next?: LinkedNode
  value: Object

  constructor(value: Object, next?: LinkedNode) {
    this.next = next
    this.value = value
  }
}

class LinkedList {
  head: LinkedNode

  constructor(arr: Object[]) {
    this.head = this.buildInitialList(arr)
  }

  private createNextNode(index: number, arr: Object[]): LinkedNode {
    if (index === arr.length - 1) return new LinkedNode(arr[index])
    return new LinkedNode(arr[index], this.createNextNode(index + 1, arr))
  }

  private buildInitialList(arr: Object[]): LinkedNode {
    return new LinkedNode(
      arr[0],
      this.createNextNode(1, arr)
    )
  }
  
  prepend(value: Object) {
    this.head = new LinkedNode(
      value,
      this.head
    )
  }

  delete(value: Object) {
    if (!this.head) return
    if (this.head.value == value) {
      this.head = this.head.next!!
      return
    }

    let current: LinkedNode | undefined = this.head
    while (current.next != undefined) {
      if (current.next?.value == value) {
        current.next = current.next?.next
        return
      }
      current = current.next
    }
  }

  append(value: Object) {
    if (!this.head) {
      this.head = new LinkedNode(value)
      return
    }
    
    let current: LinkedNode | undefined = this.head
    while (current.next != undefined) {
      current = current.next
    }
    current.next = new LinkedNode(value)
  }

  print() {
    let current: LinkedNode | undefined = this.head
    while (current != undefined) {
      console.log(current?.value)
      current = current?.next
    } 
  }
}

// use of linked list
const arr = [1, 2, 3, 4]

const linkedList = new LinkedList(arr)

linkedList.print()
console.log('-----')

linkedList.delete(5)
linkedList.delete(2)

linkedList.print()
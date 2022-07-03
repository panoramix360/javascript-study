class TreeNode {
  left?: TreeNode
  right?: TreeNode
  value: Object

  constructor(value: Object, left?: TreeNode, right?: TreeNode) {
    this.left = left
    this.right = right
    this.value = value
  }

  insert(data: Object) {
    if (data <= this.value) {
      if (!this.left) {
        this.left = new TreeNode(data)
      } else {
        this.left.insert(data)
      }
    } else {
      if (!this.right) {
        this.right = new TreeNode(data)
      } else {
        this.right.insert(data)
      }
    }
  }

  contains(data: Object): boolean {
    if (data == this.value) {
      return true
    } else if (data < this.value && this.left) {
      return this.left.contains(data)
    } else if(this.right) {
      return this.right.contains(data)
    }

    return false
  }

  printInOrder() {
    if (this.left) {
      this.left.printInOrder()
    }
    console.log(this.value)
    if(this.right) {
      this.right.printInOrder() 
    }
  }
}

function printRec(node: TreeNode | undefined, nodesInOrder: Object[]): Object[] {
  if (!node?.value) return nodesInOrder
  return [ node.value, ...printRec(node.left, nodesInOrder), ...printRec(node.right, nodesInOrder)]
}

function print(root: TreeNode) {
  const nodes = printRec(root, [])
  
  for (let i = 0; i < nodes.length;) {
    const value = nodes[i]
    if (i === 0) {
      console.log(`   ${value}   `)
      i++
    } else {
      console.log(" \/          \\ ")
      console.log(` ${nodes[i]}          ${nodes[i + 1]} `)
      i += 2
    }
  }
}

// usage of tree

const tree = new TreeNode(10)

tree.insert(5)
tree.insert(15)
tree.insert(8)
tree.printInOrder()

print(tree)

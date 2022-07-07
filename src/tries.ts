
class TrieNode {
  childrens: Map<string, TrieNode | undefined>;
  isCompleteWord: boolean;

  constructor() {
    this.childrens = new Map<string, TrieNode>()
    this.isCompleteWord = false
  }

  insert(word: string) {
    const firstLetter = word[0]
    if (word.length == 0) {
      this.isCompleteWord = true
    } else {
      if (!this.childrens.get(firstLetter)) { 
        this.childrens.set(firstLetter, new TrieNode())
      }

      this.childrens.get(firstLetter)?.insert(word.substring(1))
    }
  }

  search(word: string): boolean {
    const firstLetter = word[0]

    const childrenFound = this.childrens.get(firstLetter)
    if (childrenFound) {
      return childrenFound.search(word.substring(1))
    } else {
      return this.isCompleteWord
    }
  }
}

const words: string[] = [
  "the",
  "a",
  "there",
  "answer",
  "any",
  "by",
  "bye",
  "their"
]

const rootNode = new TrieNode()

for (let word of words) {
  rootNode.insert(word)
}

console.log(rootNode.search('byaa'))
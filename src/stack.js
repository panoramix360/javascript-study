const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

function push(stack, value) {
    return [
        value,
        ...stack
    ]
}

function pop(stack) {
    return stack.shift()
}

function peek(stack) {
    return stack[0]
}

function headAndTail(stack) {
    return [ pop(stack), stack ]
}

module.exports = function main() {
    let stack = []

    Array(10).fill(0).forEach(() => {
        stack = push(stack, uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }))
        console.log(stack)
    })

    console.log("====== Stack ======")
    console.log(stack)

    console.log('Poping two elements')
    pop(stack)
    pop(stack)
    console.log(stack)

    console.log('Peeking')
    console.log(peek(stack))

    console.log('Head and tail')
    const [head, tail] = headAndTail(stack)
    console.log(`Head: ${head}`)
    console.log(`Tail:`)
    console.log(tail)
}
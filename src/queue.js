const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

function enqueue(queue, value) {
    return [
        value,
        ...queue
    ]
}

function dequeue(queue) {
    return queue.pop()
}

function peek(queue) {
    return queue[queue.length - 1]
}

function headAndTail(queue) {
    return [ dequeue(queue), queue ]
}

module.exports = function main() {
    let queue = []

    Array(10).fill(0).forEach(() => {
        queue = enqueue(queue, uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }))
    })

    console.log("====== Queue ======")
    console.log(queue)

    console.log('Dequeuing three elements')
    dequeue(queue)
    dequeue(queue)
    dequeue(queue)
    console.log(queue)

    console.log('Peeking')
    console.log(peek(queue))

    console.log('Head and tail')
    const [head, tail] = headAndTail(queue)
    console.log(`Head: ${head}`)
    console.log(`Tail:`)
    console.log(tail)
}
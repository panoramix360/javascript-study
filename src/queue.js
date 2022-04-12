
function enqueue(queue, value) {
    return [
        ...queue,
        value
    ]
}

function dequeue(queue) {
    return queue.shift()
}

function peek(queue) {
    return queue[0]
}

function headAndTail(queue) {
    return [ dequeue(queue), queue ]
}

module.exports = function main() {
    let queue = []

    Array(10).fill(0).forEach((_, i) => {
        queue = enqueue(queue, i + 1)
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
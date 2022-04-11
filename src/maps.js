// Maps were inserted on ES6
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')
const { randomNumber } = require('./utils')

const categories = [
    'ACTION',
    'DRAMA',
    'SUSPENSE'
]

function getRandomCategory() {
    return categories[randomNumber(0, categories.length)]
}

function generateBook() {
    return new Map([
        ['title', uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })],
        ['publication_date', randomNumber(1990, 2050)]
    ])
}

function generateMainMap(booksLength = 10) {
    let bookMap = new Map()
    Array(booksLength).fill(0).forEach(() => {
        const key = getRandomCategory()
        if (bookMap.has(key)) {
            bookMap.get(key).push(generateBook())
        } else {
            bookMap.set(key, [generateBook()])
        }
    })
    return bookMap
}

function printCategories(map) {
    console.log(`Categories: ${map.size}`)
    for (const key of map.keys()) {
        console.log(`---${key}---`)
    }
}

module.exports = function main() {
    let library = generateMainMap()

    console.log("====== Book Hashmap ======")
    printCategories(library)

    let bookCount = 0
    for (const value of library.values()) {
        bookCount += value.length
    }
    console.log(`Book total: ${bookCount}`)

    const randomCategoryColumn = library.get(getRandomCategory())
    const book = randomCategoryColumn[randomNumber(0, randomCategoryColumn.length)]
    console.log(`Random book:`)
    console.log(book)

    console.log('Deleting a random category:')
    library.delete(getRandomCategory())
    printCategories(library)
}
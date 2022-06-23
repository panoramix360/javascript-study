/*
Given a two dimensional array of letters, find a given word written in any of the 8 directions.
I.e.

EXAMPLE
Input: UBER

Input:
A  U  I  K  F  W  N
W  Q  B  O  L  X  P
T  L  A  E  R  E  S
Y  Z  X  E  R  L  W

Output: true
*/

/*
[
    ['A',  'U',  'I',  'K',  'F',  'W', 'N'],
    ['W',  'Q',  'B',  'O',  'L',  'X', 'P'],
    ['T',  'L',  'A',  'E',  'R',  'E', 'S'],
    ['Y',  'Z',  'X',  'E',  'R',  'L', 'W'],
]
*/

class Position {
    constructor(row, column) {
        this.row = row
        this.column = column
    }

    add(position) {
        const row = this.row + position.row
        const column = this.column + position.column
        return new Position(row, column)
    }

    equals(position) {
        return this.row === position.row && this.column === position.column
    }
}

const directions = [
    // left
    new Position(0, -1),
    // right
    new Position(0, 1),
    // up
    new Position(-1, 0),
    // down
    new Position(1, 0),
    // diagonal top left
    new Position(-1, -1),
    // diagonal top right
    new Position(-1, 1),
    // diagonal bottom left
    new Position(1, -1),
    // diagonal bottom right
    new Position(1, 1)
]

function findCompleteWord(crossword, word, currentIndexLetter, currentLetterPosition, currentDirection = null) {
    let directionsToSearch = directions
    if (currentDirection != null) {
        directionsToSearch = [currentDirection]
    }

    for (let direction of directionsToSearch) {
        const newPositionToSearch = currentLetterPosition.add(direction)
        
        if (
            newPositionToSearch.row < 0 || newPositionToSearch.column < 0 ||
            newPositionToSearch.row >= crossword.length || newPositionToSearch.column >= crossword[0].length
        ) { continue }

        const currentLetter = crossword[newPositionToSearch.row][newPositionToSearch.column]

        if (currentLetter === word[currentIndexLetter]) {
            if (currentIndexLetter === word.length - 1) {
                return true
            } else {
                return findCompleteWord(crossword, word, currentIndexLetter + 1, newPositionToSearch, direction)
            }
        }
    }

    return false
}

function findWord(word, crossword) {
    let foundWord = false
    let currentLetterPosition = new Position(0, 0)

    const rowLength = crossword.length
    const columnLength = crossword[0].length - 1
    
    while (currentLetterPosition.row < rowLength) {
        let currentLetter = crossword[currentLetterPosition.row][currentLetterPosition.column]

        if (currentLetter === word[0]) {
            foundWord = findCompleteWord(crossword, word, 1, currentLetterPosition)
            if (foundWord) break;
        }
        
        // proxima iteração
        if (currentLetterPosition.column < columnLength) {
            currentLetterPosition.column++
        } else {
            currentLetterPosition = new Position(++currentLetterPosition.row, 0)
        }
    }
    
    return foundWord
}


const found = findWord('BOBAR', [
    ['A',  'U',  'I',  'K',  'F',  'W', 'N'],
    ['B',  'Q',  'B',  'O',  'L',  'X', 'P'],
    ['T',  'O',  'A',  'E',  'R',  'E', 'S'],
    ['Y',  'Z',  'B',  'E',  'R',  'L', 'W'],
    ['T',  'S',  'L',  'A',  'O',  'C', 'A'],
    ['L',  'H',  'Z',  'Q',  'R',  'L', 'W'],
    ['K',  'J',  'N',  'E',  'F',  'X', 'Z']
]);

console.log(found)
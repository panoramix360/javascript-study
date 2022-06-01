/*

Create a function that walks a robot

LEFT = -1
RIGHT = 1

*/


const LEFT = 'L'
const RIGHT = 'R'

function transformCommand(cmd) {
    switch(cmd) {
        case LEFT:
            return -1
        case RIGHT:
            return 1
    }
}


function parseCommand(commands, command, memo = {}) {
    const numberCommand = Number(command)
    if (isNaN(numberCommand)) {
        return transformCommand(command)
    } else {
        const currentCommand = commands[numberCommand - 1]
        memo[numberCommand] = parseCommand(commands, currentCommand, memo)
        return memo[numberCommand]
    }
}

function moveRobot(commands) {
    let finalPosition = 0

    for (let command of commands) {
        const resultCommand = parseCommand(commands, command)
        finalPosition += resultCommand
    }

    return finalPosition
}

module.exports.moveRobot = moveRobot


console.log(
    moveRobot(['L', 'R', '2', '3', 'L', '5', '6', '7', 'R', 'L', '3', '2', '4', '5', '3'])
)

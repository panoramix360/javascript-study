function minDeletions(s) {
    // count characters and put in a frequency array
    // sort the array by order
    // find duplicates and put in array
    // iterate through duplicates array
    const lettersCount = {}
    
    for(let i = 0; i < s.length; i++) {
        const letter = s.charAt(i)
        if (lettersCount[letter]) {
            lettersCount[letter]++
        } else {
            lettersCount[letter] = 1
        }
    }

    const countsArray = Object.values(lettersCount).sort((a, b) => b - a)

    const alreadyTested = []
    let finalMinFrequency = 0
    
    for (let index in countsArray) {
        const number = countsArray[index]
        if (alreadyTested.includes(number)) {
            let minFrequency = number
            while(countsArray.includes(minFrequency)) {
                minFrequency--
            }
            finalMinFrequency = number - minFrequency
        } else {
            alreadyTested.push(number)
        }
    }

    return finalMinFrequency
};

console.log(minDeletions("abcabc"))

module.exports.minDeletions = minDeletions

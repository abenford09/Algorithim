// Takes in a string - returns a boolean if the string is a palindrome

// Build in javascrpt methods approach
function pal(str) {
    // turn a string into an array - SPLIT
    // reverse and array - REVERSE
    // turn an array into a string - JOIN
    const reversedString = str.split('').reverse().join('')
    return str === reversedString
}


// programmatic approach
function pal2(str) {
    // Array
    const reversed = []

    // Reverse iterate through my string and push elements into array
    for(let i = str.length - 1; i >= 0; i--) {
        let current = str[i]
        reversed.push(current)
    }
    return str === reversed.join('')
}



// programmatic approach
function pal3(str) {
    let reversed = ''

    // loop through string in reverse
    for(let i = str.length - 1; i >= 0; i--) {
        let current = str[i]
        reversed = reversed + current
    }
    return str === reversed
}
// string

const str = 'racecar'
console.log(pal3(str))
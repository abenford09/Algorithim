// '012345' => 19

const str = '012345'

function largestValueOfAGivenStringOfThree(str) {
    let maxSum = 0

    for(let i = 0; i <= str.length - 3; i++) {    
        currentSum = parseInt(str[i]) + parseInt(str[i + 1]) + parseInt(str[i + 2])   
        if(currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    return maxSum
}

// sliding window algorithm

const num = 3
console.log(largestValueOfAGivenStringOfThree(str))
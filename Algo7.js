const arr = [1,2,3,4,5,6,7,7,8,9]
const num = 3

function splitter(arr,num) {
    const mainArr = []
    for(let i = 0; i < arr.length; i += num) {
        let myAri = mainArr.push(arr.slice(i, i + num))
    }
    return mainArr
}

console.log(splitter(arr,num))

// While loop splitter (O)n 

const arr = [1,2,3,4,5,6,7,7,8,9]
const num = 4


function splitter(arr, num) {

    var myArray = [],
        i = 0,
        n = arr.length;
  
    while (i < n) {
      myArray.push(arr.slice(i, i += num));
    }
    console.log(myArray)
    return myArray;
  }

console.log(splitter(arr, num))




// Splitter solution 1

function splitter(arr, num) {
    // Data validation
    if(num === 0) {
        return arr
    }

    // if it's a negative number
    if(num < 0) {
        return 'Invalid input. Pleae enter positive number'
    }
    // create a return array
    const returnArray = []
    
    // loop
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let last = returnArray[returnArray.length - 1]
        if(!last || last.length === num) {
            returnArray.push([current])
        } else {
            last.push(current)
        }
    }
    return returnArray
}
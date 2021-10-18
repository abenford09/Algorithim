function mergeOverlapping(arr) {

    if (arr.length <= 1) return arr

    const result = []

    // sort an array 
    arr = arr.sort((a, b) => a[0] - b[0])

    // push the 1st arr into result
    result.push(arr[0])

    // loop
    for (let i = 1; i < arr.length; i++) {
        let last = result[result.length - 1]

        if (last[1] < arr[i][0]) {
            result.push(arr[i])
        } else if (last[1] < arr[i][1]) {
            last[1] = arr[i][1]
        }
    }

    return result
}

const arr = [[1,2], [3,5], [4, 7], [2,3], [6,8], [9,10]]
console.log(mergeOverlapping(arr))

//     scratch      //

// // Merge overlapping arrays

// // [[1,2], [3,8], [9,10]]

// function mergeOverlapping(arr) {
//     //return arr
//     let someArr = []
//     //temp check array
//     let check = null


//     // sort given array so first smallest index goes first
//     arr = arr.sort()
//     // push first sub array in if i = 1
//     someArr.push(arr[0])

//     for(let i = 1; i < arr.length; i++) {
//     let current = arr[i]
//     someArr.push(current)
//     check = someArr[someArr.length - 1]
//     console.log(check + 'check') 
//     if(check[1] < arr[i[0]]) {
//         someArr.push(arr[i]);
//         console.log(someArr)
//     } else if (check < arr[i][1]) {
//         last[1] =arr[i][1]

//     }
//     console.log(someArr)
// }
//     return SomeArr
// }

// console.log(mergeOverlapping(arr))
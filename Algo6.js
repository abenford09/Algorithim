// Write a function that takes in an array of numbers and returns 
// an array, where each element in the output array is equal to 
// every other number in the array multiplied together.

var array = [1,3,5,6]
           
// [90, 30, 18, 15] // because 3 * 5 * 6 = 90

function arrayOfNumbers(array) {
 const myArray = []
 let count = 1
  for (let i = 0; i < array.length; i++) {
    myArray[i] = count
    count *= array[i]
    // myArray.push(array[i])
  };
  count = 1 
  for(let a = array.length-1; a >= 0; a--) {
      console.log(array)
    myArray[a] *= count
    count *= array[a]
  }
  return myArray
};

console.log(arrayOfNumbers(array))


console.log('works')


// function test(arr) {
//     // Cacheing
//     // O(n)
//     const totalProdcut = calculateProduct(arr)
//     const returnArray = []
//     // O(n)
//     for(let i = 0; i < arr.length; i++) {
//         let current = arr[i]
//         returnArray.push(totalProdcut / current)
//     }
//     return returnArray
// }
// function calculateProduct(arr) {
//     let product = 1
//     for(let i = 0; i < arr.length; i++) {
//         let current = arr[i]
//         product = product * current
//     }
//     return product
// }
// const arr = [4, 5, 6, 7]
// console.log(test(arr))
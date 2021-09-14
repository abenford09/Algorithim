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
  for (let a = array.length-1; a >= 0; a--) {
    myArray[a] *= count
    count *= array[a]
  }
  return myArray
};

console.log(arrayOfNumbers(array))





console.log('works')
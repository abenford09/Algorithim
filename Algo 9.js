// write a function that finds all pairs within an array that multiply together to a given product. Return an array of arrays showing all pairs. 


const product = 20
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function arrayPairs(product, numbers) {
  const arrayContainer = []
  const mainObj = {}
  for(let i = 0; i < numbers.length; i++) {
    let current = numbers[i]
    const div = product / current
    console.log(div, current)
    if(div in mainObj) {
      // console.log(mainObj)
      arrayContainer.push([div, current])
      }
      mainObj[current] = i
    }
    return arrayContainer
}

console.log(arrayPairs(product, numbers))

// => [[2,5], [10, 1]]


// works like twosum 
function findProducts(numbers, product) {
    const pairs = []
    const numArr = []

    for(let elem of numbers) {
    let diff = product / elem
    if(numArr.includes(diff)) {
        pairs.push([elem, diff])
    } else {
        numArr.push(elem)
        }
    }
    return pairs
}
const numbers = [1,2,3,4,5,6,7,8,9,10]
const product = 10
console.log(findProducts(numbers, product))
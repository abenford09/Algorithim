// Fizz buzz.
// from 1 to 100, return fizz for numbers that are divisible of 3,
// return buzz for numbers that are divisible of 5
// return fizzbuzz for numbers that are divisible by 3 & 5
// otherwise, just return the number
// Sample output from 1 to 10: 
// 1 
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}
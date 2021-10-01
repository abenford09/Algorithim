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


function fizzbuzz() {
    // loop through 100 starting at 1=i and at every if of fizz, buzz and fizzbuzz console.log not return
    for(let i = 1;i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz', i)
      } else if (i % 3 === 0) {
        console.log('fizz', i)
      } else if (i % 5 === 0) {
        console.log('buzz', i)
      } else {
        console.log(i)
      }
    }
  }
  
  console.log(fizzbuzz())

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


// FIzzBuzz(N)

// Calculate the nth fizzBuzz
// Fizzbuzz - conditions:
// If a number is divisible by 3 - Fizz
// If a number is divisible by 5 - Buzz
// If a number is divisible by 3 and 5 - FizzBuzz


function fizzbuzz(n) {
    // establish a counter so you can keep track of number of fizzbuzz in loop
    // count starts at 1 so u get the first fizzbuzz
    let counter = 1
    // current fizzbuzz starts at zero until you get the first one
    let currentFizzBuzz = 0
    // the while loop will continue count until it reachs nth
    while(currentFizzBuzz < n) {
      // using counter it will let me know when i meet the criteria for a fizzbuzz
      if(counter % 3 === 0 && counter % 5 === 0) {
        // if i reach a fizzbuzz i increment till its the nth fizzbuzz
        currentFizzBuzz++
        if(currentFizzBuzz === n) {
          // return the count which is the nth or 1st fizzbuzz
          return counter
        }
  
      }
      counter++
    }
    console.log('input number' ,n, 'not equal to a number that is fizzbuzz.', counter - n, 'and', n-1 , 'is that far away from being a number equal to fizzbuzz. Your output:',counter)
    return counter
  }
  
  var a = 30.5
//   console.log(fizzbuzz(a))

// Hack - 
function fizzBuzzFast(n) {
    return n * 3 * 5
}

// console.log(fizzBuzzFast(400000))












function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if(i % 5 === 0) {
            console.log('buzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i) 
        }
    }
}

fizzBuzz(100)
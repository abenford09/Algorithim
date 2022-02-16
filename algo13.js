function repeatNumber(str) {
    const arrayNum = []
    const array = str.split('')
  
    for(let i = 0; i < array.length; i++) {
      let current = array[i]
      console.log(current)
      if(arrayNum.includes[current]) {
        return current
      } else {
        arrayNum.push(current)
      }
    }
  }

  /////// 

  function firstNonRepeating() {
    // split the string into an array
   const arr = str.split('')
    // create an empty obj
  const obj = {}
    // loop (creating an object that tracks the amount of times each character appears)
    for(let elem of arr) {
      if (!obj[elem]) {
        obj[elem] = 1
      } else {
        // if current was a key in the obj, increment by 1
        obj[elem]++
      }
    }    
    // loop over object. If the value of the key is === 1, return that key.
    for(let key in obj){
      // if it's not a key in the obj, initialize the key to a value of 1
      if(obj[key] === 1) {
        return key
      }
    }
  }
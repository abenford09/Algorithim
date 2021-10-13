function impureRev(str) {
    for(let i = str - 1; i >= 0; i-- ) {
      let current = str[i]
      return current
    }
  }
  
  // const str = 'this is it'
  // console.log(impureRev(str))
  // console.log(str)
  
  // const arr = [1,2,3,4]
  // let temp = arr[0]
  // arr[0]= arr[arr.length-1]
  // arr[3]= temp 
  // console.log(arr)
  
  function flipLastAndFirst(arr) {
    for (let i = 0; i < arr.length/2; i++) {
      let a = arr[i]
      console.log(arr)
      arr[i] = arr[arr.length -i -1]
      arr[arr.length -i -1] = a
    }
    // let temp = arr[0]
    // arr[0] = arr[arr.length-1]
    // arr[arr.length - 1] = temp
    return arr
  }
  
  const arr = [5,6,7,8,9,10,11,12]
  flipLastAndFirst(arr)
  console.log(arr)
  
  
  function flipArray(arr) {
    for (let i = 0; i < arr.length/2; i++) {
      let a = arr[i]
      console.log(arr)
      arr[i] = arr[arr.length -i -1]
      arr[arr.length -i -1] = a
    }
  }
  return arr 
  
  const array = [1,2,3,4,5,6,7,8]
  flipArray(array)
  console.log(array)
  

  //// Strinnnnngggg

  
function flipStr(str) {
    const arr = str.split('')
    for (let i = 0; i < arr.length/2; i++) {
      let current = arr[i]
      arr[i] = arr[arr.length -1 -i]
      arr[arr.length -1 -i] = current
    }
    return arr.join('')
    // let temp = arr[0]
    // arr[0] = arr[arr.length-1]
    // arr[arr.length - 1] = temp
  }
  
  const str = 'this is a string'
  console.log(flipStr(str))
  console.log(str)
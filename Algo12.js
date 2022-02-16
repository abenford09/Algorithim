function longerstWord(str) {
    const arr = str.split(' ')
    
    //
    return arr
  }
  
  const str = "this is the test string... Awesome, man.."
  console.log(longerstWord(str))
  

  ////////////////////////////////////////////////////




  function longestWord(str) {
    let cleanedStr = str.replace(/[^a-zA-Z ]/g, "")
    let splitStr = cleanedStr.split(' ')
    let currentLongest = '';
    for(let i = 0; i < splitStr.length; i++) {
        let current = splitStr[i]
        if(current.length > currentLongest.length) {
            currentLongest = current
        }
    }
    return currentLongest
}

const str = "this is the test string... Awesome, man.."

console.log(longestWord(str))
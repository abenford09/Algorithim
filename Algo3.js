// // Anagram algorithm

const magazineText = "this is the text I am given."
const note = "this is the text text"

// algorithm should return a true / false (boolean) as to if you could make 
// ransom note out of magazine text.
// is there enough words in String1 to make string2 if there is return true or false


function canThisTextMakeThatText(str1,str2) {
// first make each string as simple and comparable as possible
    const setStr1= str1.replace(/[\W]/g, '').toLowerCase();
    const setStr2= str2.replace(/[\W]/g, '').toLowerCase();
// next check if lengths are comparable to see if its possible by just that
    if(str1.length !== str2.length) {
        return false
    } 
// loop Str1 and str2 so that i can compare elements by key value
const obj1 = {}
const obj2 = {}

// Loop 1
setStr1.split(' ').forEach(elem => {
    if(!obj1[elem]){
        obj1[elem] = 1
    } else {
        obj1[elem] +=1
    }
});
// Loop 2
setStr2.split(' ').forEach(elem => {
    if(!obj2[elem]){
        obj2[elem] = 1
    } else {
        obj2[elem] +=1
    }
});

// need something to hold the results
let results;

// Compare the loops for key values
for (let elem1 in obj1) {
    if(Object.keys(obj2).includes(elem1)) {
        obj1[elem1] === obj2[elem1] ? results = true : result = false
    } else {
        result = false
    }
    }
    return false
}

console.log(canThisTextMakeThatText(magazineText,note))

////////////////////////////

function anagram (text,note) {
    // create  obj
    const noteArray =  note.split(' ')
    const obj = makeObj(text,split(" "))

    for(let i = 0; i <noteArray.length; i++) {
        let current = noterray[i]
        if(obj[current] && obj[current] > 0) {
            obj[current]--
        } else {
            return false
        }
    }
}

function makeObj(arr) {
    const obj = {}

    for(let i= 0; i < arr.length; i ++) {
        let current = arr[i]
        if(!obj[current]) {
            obj[current]= 1
        } else {
            obj[current]++
        }
    }
    return obj
}

// text1 = 'apple tree'
// note1= 'apple tree'
// console.log(anigram(text1,note1))

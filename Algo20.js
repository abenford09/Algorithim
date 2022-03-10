const isPalindrome = function(x) {
    const string = x.toString()
    console.log(string)
    

    // for(let i = x; i >= 0; i--) {
    //     console.log(x)
    //     let current = x[i]
    //     string.push(current)
    // }
    // return x === string.join('')
    
};

// var isPalindrome = function(x) {
//     var str = x.toString(),
//     strLength = str.length;
//     for (let count=0; count<str.length; count++) {
//         if (str.charAt(count) != str.charAt(str.length - count -1)) {
//             return false;   
//         }
//     }
//     return true;
// };

// var isPalindrome = function(x) {
//     let string = x.toString()
//     for(let i = 0; i < string.length/2; i++){
//         if (string[i] !== string[string.length - 1 - i]) {
//             return false
//         }
//     }
//     return true   
// };

const nums = 121
console.log(isPalindrome(nums))
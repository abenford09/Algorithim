// var longestMountain = function(A) {
//     const UP = 1;
//     const FLAT = 0;
//     const DOWN = -1;
//     let state = FLAT;
    
//     let maxLength = 0;
//     let length = 0;
    
//     for(let i = 0; i < A.length - 1; i++){
// 	    if (A[i] < A[i + 1]){
// 	        if (state === DOWN)  length = 0;
// 	        state = UP;
// 	        length = length === 0 ? 2 : length + 1;
// 	    }
// 	    if (A[i] == A[i + 1]){
// 	        state = FLAT;
// 	        length = 0;
// 	    }
// 	    if (A[i] > A[i + 1] && state != FLAT){
// 	        state = DOWN;
// 	        length++;
// 	        maxLength = Math.max(maxLength, length);
//         	}
//     }

// return  maxLength;


// function longestPeak(arr) {
//     let longest = 0
//     let up = 0
//     let down = 0
//     let i = 0

//     while (i < arr.length) {
//         let current = arr[i]
//         let next = arr[i+1]
//         // compare current and next
//         if ( (down > 0 && current < next) || current === next) {
//             up = down = 0
//         } 
//         if (current < next) {
//             up++
//         } 
//         if (current > next) {
//             down++
//         }
//         if (up > 0 && down > 0 && longest < up + down + 1) {
//             longest = up + down + 1
//         }
//         i++
//     }
//     return longest
//     // RETURN LENGTH OF LONGEST PEAK
// }


// [3,1,2,8,6,7] => peak
// [8, 4, 9] => Not peak
// [1,2,3] => Not peak
        //  i i+1
const arr = [1,2,3,4,3,4,2,1] // 5
const arr2 = [1,2,3,4,5,5,4,3,2,1] // 0
const arr3 = [1,2,3,4,3,2,6] // 6
const arr4 = [1,2,3]
console.log(longestPeak(arr4))

// Write a function that takes in an array of integers and returns the length of the longest
// peak in the array

// [3,1,1,2,8,6,7] => peak
// [8, 4, 9] => Not peak
// [1,2,3] => Not peak


///////

function longestPeak(arr) {
    // SET VARS HERE FOR LONGESTPEAK
    let longestPeak = 0
    // SET VAR FOR I
    let i = 1

    // Loop through array and try to find peaks
    while(i < arr.length - 1) {
        // set current, and isPeak vars
        let current = arr[i]
        const isPeak = arr[i - 1] < current && current < arr[i + 1]
        // If it's not a peak, increment i and continue
        if(!isPeak) {
            i++
            continue
        }
        // Found a peak, now we need to see how long it is.
        // find left bound
        let leftIndex = i - 2
        while(leftIndex >= 0 && arr[leftIndex] < arr[leftIndex + 1]) {
            leftIndex--
        }

        // Now see how far to the right it goes
        let rightIndex = i + 2
        while(rightIndex < arr.length && arr[rightIndex] < arr[rightIndex - 1]) {
            rightIndex++
        }
        // current peak var is going to equal righIndex - leftindex - 1
        let currentPeak = rightIndex - leftIndex - 1
        // Find longest peak with math.max with longestPeak and currentPeak
        longestPeak = Math.max(longestPeak, currentPeak)
        // Increment i to rightIndex
        i = rightIndex
    }
    
    return longestPeak
}
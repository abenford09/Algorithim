const search = (nums, target) => {
    let arr = []
    //loop through the array for the nums
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i]
        //push nums in arr to get index 
        arr.push(current)
        if(target === current) {
            // console.log(arr)
            // console.log(arr[i-1]) 
            return arr[i-1]
        }
    }
    return -1
};


const target = 9
const nums = [-1,0,3,5,9,12,30,20,2]

//// with while loop

// var search = function(nums, target) {
//     let start = 0
//     let last = nums.length - 1
    
//     while(start <= last){
//         let mid = Math.floor(((start + last) / 2))
//         if(nums[mid] < target){
//             start = mid + 1
//         }else if(nums[mid] > target){
//             last = mid - 1
//         } else{
//             return mid
//         }
//     }
//     return - 1
//     };




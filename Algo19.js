// const addTwoNumbers = function(l1, l2) {
//     const ans = new ListNode(0); // sum will be stored in ans
// let carry = 0, curr = ans;   // answer will get updated in curr

// while(l1 || l2) {            // checks whether l1 or l2 is null, if not null then continues evaluation of loop
                             
//     // val1  & val2 will contain the current value of node
//     const val1 = l1 ? l1.val : 0;
//     const val2 = l2 ? l2.val : 0;

//     // if the next node is not empty then next node value will be stored in l1
//     l1 = l1 ? l1.next : null;
//     l2 = l2 ? l2.next : null;
    
//     const sum = carry + val1 + val2;
//     const value = sum % 10;
    
//     carry = sum >= 10 ? 1 : 0;   // since at most carry can be 1 and minimum carry will be 0
    
//     curr.next = new ListNode(value); // the current will contain the sum
//     curr = curr.next;
// }

//   // if there is no next & we still have a carry then we have to add it using
//   if (carry) {      
//      curr.next = new ListNode(1);
//   }
// return ans.next;  //here we are returning ans.next because we have added a 0 in   ans at start.
// };





// Solution 2




const addTwoNumbers = (l1, l2) => {
    const add = (node1, node2, sum = 0) => {
        if (!(node1 || node2 || sum)) return null
        
        let carry = 0
        
        if (node1?.val) sum += node1.val
        if (node2?.val) sum += node2.val
        if (sum >= 10) {
            sum -= 10
            carry = 1
        }
        
      return new ListNode(sum, add(node1?.next, node2?.next, carry))
    }
    
    return add(l1, l2)
};


const num1 = 10;
const num2 = 12;
console.log(addTwoNumbers(num1,num2))
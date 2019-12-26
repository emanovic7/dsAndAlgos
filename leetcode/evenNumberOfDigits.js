//QUESTION
// Given an array nums of integers, return
// how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */

//approach 1
const findNumbers = (nums) => {
  let count = 0;
   for(let i=0; i<nums.length; i++){
       let currNum = nums[i];
       if(currNum.toString().length % 2 === 0){
           count++
       }
   }
   return count;
}

//approach 2, using filter, longer
const findNumbers = (nums) => {
  return nums.filter(number => number.toString().length % 2 === 0).length;
}

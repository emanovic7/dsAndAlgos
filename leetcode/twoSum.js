//QUESTION:

// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


//ANSWER:

var twoSum = function(nums, target) {
  //Brute Force


 // let finalArray = [];
 // for(let i=0; i<nums.length; i++){
 //     for(let j=i+1; j<nums.length; j++){
 //         if(nums[i] + nums[j] === target){
 //             finalArray.push(i,j)
 //         }
 //     }
 //     return finalArray;
 // }
 //    return false

 //dynamicProgrammming using hashmaps. 

    let myHash = {};
    for(let i=0; i<nums.length; i++){
        let currNum = nums[i];
        let complement = target - currNum;
        if(myHash[complement] !== undefined){
          return [myHash[complement], i]
        }
        myHash[currNum] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i=0, l=nums.length; i<l; i++) {
    for (let j=i+1; j<l; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j]
      }
    }
  }
};


// sample 1
const inputA = [2,7,11,15]
const inputB = 9

console.log(twoSum(inputA, inputB)) // result: [0, 1]
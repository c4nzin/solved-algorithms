// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



//My solution 1 : weak performance
// const nums = [3, 2, 4];

// function twoSum(nums: number[], target: number) {
//   let result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] >= Math.pow(10, 9) || Math.pow(-10, 9) >= nums[i]) throw new Error("is too long or too short");

//       if (target >= Math.pow(10, 9) || target <= Math.pow(-10, 9)) throw new Error("is too long or too short");

//       if (nums[i] + nums[j] === target) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
// }

// console.log(twoSum(nums, 6));

//My solution 2 : little improved performance

function twoSum(nums: number[], target: number) {
  if (nums.length < 2) {
    throw new Error("Array must contain at least two numbers");
  }

  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < -Math.pow(10, 9) || num > Math.pow(10, 9)) {
      throw new Error("Number is too long or too short");
    }

    const complement = target - num;
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[num] = i;
  }

  throw new Error("No solution found");
}

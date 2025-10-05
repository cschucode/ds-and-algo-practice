/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
// O(n2) soluton
//     for (let i = 0; i < nums.length; i++) {
//         let num1 = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             let num2 = nums[j];

//             if (num1 + num2 === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }

function twoSum(nums, target) {
  // create hash table to store indices of numbers seen
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

module.exports = twoSum;

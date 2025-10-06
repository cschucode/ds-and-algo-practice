/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // Your code here
    let currentSum = nums[0];
    let highestSoFar = currentSum;

    for (let i = 1; i < nums.length; i++) {
      let num = nums[i];

      // set the current sum to the highest of either current num or current sum plus num
      currentSum = Math.max(num, currentSum + num);

      // update highest so far
      highestSoFar = Math.max(highestSoFar, currentSum);
    }

    // return highest subarray sum
    return highestSoFar;
}

module.exports = maxSubArray;

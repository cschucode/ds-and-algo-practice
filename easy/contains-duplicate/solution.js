/**
 * @param {number[]} nums
 * @return {boolean}
 */
// function containsDuplicate(nums) {
//   // Your code here using Map
//   let seen = new Map();

//   for (const num of nums) {
//     if (seen.has(num)) return true;

//     seen.set(num, true);
//   }
  
//   return false;
// }

function containsDuplicate(nums) {
  if (nums.length < 2) return false;
  // using set
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;

    seen.add(num);
  }

  return false;
}

module.exports = containsDuplicate;

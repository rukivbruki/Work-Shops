/*
Given an array of integers, nums, and an integer value, target,
determine if there are any three integers in nums whose sum is equal to the target,
that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

Note: A valid triplet consists of elements with distinct indexes.
This means, for the triplet nums[i], nums[j], and nums[k],
i ≠ j, i ≠ k, and j ≠ k.

Constraints:
3 ≤ nums.length ≤ 1000
-10^3 ≤ nums[i] ≤ 10^3
-10^3 ≤ target ≤ 10^3
*/

// Two pointer solution
function findSumOfThree(nums, target) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    let pointer1 = i + 1;
    let pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
      if (target === nums[pointer1] + nums[pointer2] + nums[i]) return true;
      target < nums[pointer1] + nums[pointer2] + nums[i]
        ? --pointer2
        : ++pointer1;
    }
  }

  return false;
}

// Two pointer solution with Set
// function findSumOfThree(nums, target) {
//     const seen = new Set();
//
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const complement = target - nums[i] - nums[j];
//
//             if (seen.has(complement)) {
//                 return true;
//             }
//
//             seen.add(nums[j]);
//         }
//
//         seen.clear();
//     }
//
//     return false;
// }

console.log(findSumOfThree([1, -1, 0], 0));

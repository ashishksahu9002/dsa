/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let min = nums[n - 1],
    max = nums[0],
    left = 0,
    right = -1;
  if (n < 2) return 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < max) {
      right = i;
    }
    max = Math.max(max, nums[i]);
  }
  if (right === -1) return 0;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > min) {
      left = i;
    }
    min = Math.min(min, nums[i]);
  }
  return right - left + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));

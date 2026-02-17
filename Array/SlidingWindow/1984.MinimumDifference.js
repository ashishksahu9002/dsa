// 1984. Minimum Difference Between Highest and Lowest of K Scores

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (k === 1) return 0;
  let minDiff = Infinity;
  for (let i = 0; i < n - k + 1; i++) {
    const temp = nums[i + k - 1] - nums[i];
    if (temp < minDiff) {
      minDiff = temp;
    }
  }
  return minDiff;
};

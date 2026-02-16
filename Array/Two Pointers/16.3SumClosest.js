var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  let diff1 = 0,
    diff2 = 0,
    sum = 0;
  const n = nums.length;
  let left = 0,
    right = 0;
  for (let i = 0; i < n - 2; i++) {
    left = i + 1;
    right = n - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      diff1 = Math.abs(target - sum);
      diff2 = Math.abs(target - result);
      if (diff1 < diff2) {
        result = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1));

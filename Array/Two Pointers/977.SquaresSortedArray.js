var sortedSquares = function (nums) {
  const n = nums.length;
  let arr = new Array(n);
  let l = 0,
    r = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      arr[i] = nums[r] * nums[r];
      r--;
    } else {
      arr[i] = nums[l] * nums[l];
      l++;
    }
  }
  return arr;
};

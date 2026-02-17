var largestPerimeter = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = n - 3; i >= 0; i--) {
    let a = nums[i],
      b = nums[i + 1],
      c = nums[i + 2];
    if (a + b > c) {
      return a + b + c;
    }
  }
  return 0;
};

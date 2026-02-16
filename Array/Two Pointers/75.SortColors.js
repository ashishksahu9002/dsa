var sortColors = function (nums) {
  const n = nums.length;
  let left = 0,
    mid = 0,
    right = n - 1,
    temp;
  while (mid <= right) {
    console.log(nums);
    if (nums[mid] === 0) {
      temp = nums[left];
      nums[left] = nums[mid];
      nums[mid] = temp;
      left++;
      mid++;
    } else if (nums[mid] === 2) {
      temp = nums[right];
      nums[right] = nums[mid];
      nums[mid] = temp;
      right--;
    } else {
      mid++;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

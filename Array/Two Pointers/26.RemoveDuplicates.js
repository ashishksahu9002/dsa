var removeDuplicates = function (nums) {
  let k = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[k] != nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  let sum = 0;
  // Sum every element at even index
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
}

// Example usage
console.log(arrayPairSum([1, 4, 3, 2])); // Output: 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // Output: 9

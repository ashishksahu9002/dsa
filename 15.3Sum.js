var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let root = 0,
    left = 0,
    right = 0,
    sum = 0;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    root = nums[i];
    left = i + 1;
    right = n - 1;
    sum = 0;
    while (left < right) {
      sum = root + nums[left] + nums[right];
      if (sum === 0) {
        result.push([root, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

/*
  - Approach
  - 1. Sort the array
    - Sorting the array helps in identifying duplicates easily and using the two-pointer technique effectively.
  - 2. Iterate through the array
    - For each element in the sorted array, treat it as the fixed element, say nums[i].
    - If the current element is the same as the one before, skip it to avoid duplicate triplets.
  - 3. Use two-pointer technique
    - Initialize two pointers: left at i+1 and right at the end of the array.
    - While left is less than right:
    - Calculate the current sum = nums[i] + nums[left] + nums[right].
    - If current sum is zero, add the triplet to the result list.
    - Then, skip duplicate elements by moving the left pointer forward and the right pointer backward until new values appear.
    - If current sum is less than zero, move the left pointer to the right to increase the sum.
    - If current sum is greater than zero, move the right pointer to the left to decrease the sum.
  - 4. Return the result
    - After processing all elements, return the list of unique triplets.

  - Time Complexity :- O(n^2)
    - Sorting takes O(n log n) time, and for each element, the two-pointer loop is O(n), so overall the dominant factor is O(n^2).

  - Space Complexity :- O(n)
    - Space complexity is mainly due to the space required for the output and sorting. In the worst case, if many triplets are present, O(n) auxiliary space is used. In place sorting reduces extra space usage.
*/

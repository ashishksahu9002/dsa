var twoSum = function (numbers, target) {
  const len = numbers.length;
  let left = 0,
    right = len - 1,
    sum = 0;
  for (let i = 0; i < len; i++) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

/*
  - Since array is sorted and solution must use only constant extra space so TWO POINTER approach is used
*/

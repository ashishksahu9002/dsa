var maximumProduct = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }

    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  let product1 = max1 * max2 * max3;
  let product2 = min1 * min2 * max1;

  return product1 > product2 ? product1 : product2;
};

var maximumProduct1 = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const candidate1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const candidate2 = nums[0] * nums[1] * nums[n - 1];
  return Math.max(candidate1, candidate2);
};

console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([0, 0, 0]));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
console.log(maximumProduct([-100, -2, -3, 1]));
console.log(maximumProduct1([1, 2, 3, 4]));
console.log(maximumProduct1([-1, -2, -3]));
console.log(maximumProduct1([0, 0, 0]));
console.log(maximumProduct1([-100, -98, -1, 2, 3, 4]));
console.log(maximumProduct1([-100, -2, -3, 1]));

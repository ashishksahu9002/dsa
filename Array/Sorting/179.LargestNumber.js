var largestNumber = function (nums) {
  let str = nums.map((num) => num.toString());
  str.sort((a, b) => b + a - (a + b));
  if (str[0] === "0") return "0";
  return str.join("");
};

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 31, 32, 33, 5, 9]));
console.log(largestNumber([3, 30, 34, 5, 500, 540, 9]));

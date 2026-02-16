var minimumAbsDifference = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let result = [];
  for (let i = 1; i < n; i++) {
    let diff = arr[i] - arr[i - 1];
    minDiff = Math.min(minDiff, diff);
  }
  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));

var merge = function (nums1, m, nums2, n) {
  let k = m - 1,
    l = n - 1,
    p = m + n - 1;
  while (l >= 0 && k >= 0) {
    if (nums1[k] > nums2[l]) {
      nums1[p] = nums1[k];
      k--;
    } else {
      nums1[p] = nums2[l];
      l--;
    }
    p--;
  }

  while (l >= 0) {
    nums1[p] = nums2[l];
    p--;
    l--;
  }
};
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);

console.log(nums1);
